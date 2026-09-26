#!/usr/bin/env bash

# Copyright 2024 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Shuts down what setup.sh (and the local kind cluster under it) keeps running.
# See usage() below, or run with --help.

set -o errexit -o nounset -o pipefail
# Run to completion even when the calling terminal (or tool) goes away midway:
# stopping the kind node alone can take ~30s.
trap '' HUP

usage() {
  cat <<'EOF'
Usage: substrate/teardown.sh [--demo | --purge]

  (no flag)  Stop, keep everything. Suspends running actors (so sessions
             resume later), stops the demo server, the port-forwards, the kind
             containers and the podman machine. Frees all CPU and RAM.
  --demo     Remove only this demo from the cluster: actors, templates,
             WorkerPool, model gateway, namespace, and local .env/.creds.
             Substrate itself keeps running.
  --purge    Delete the kind cluster and its registry, then stop the podman
             machine. Coming back means recreating the cluster and
             reinstalling substrate.

Env: KUBECTL_CONTEXT (kind-kind), ATESPACE (genkit-box), KIND_CLUSTER_NAME
(kind), PODMAN_MACHINE (substrate; set it empty to leave the machine alone),
SUBSTRATE_REPO (for --purge; default scratch/substrate-repo).
EOF
}

MODE=stop
case "${1:-}" in
  "") ;;
  --demo) MODE=demo ;;
  --purge) MODE=purge ;;
  -h | --help)
    usage
    exit 0
    ;;
  *)
    usage >&2
    exit 1
    ;;
esac

HERE="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "${HERE}/../../../.." && pwd)"

CONTEXT="${KUBECTL_CONTEXT:-kind-kind}"
ATESPACE="${ATESPACE:-genkit-box}"
KIND_CLUSTER_NAME="${KIND_CLUSTER_NAME:-kind}"
PODMAN_MACHINE="${PODMAN_MACHINE-substrate}"
K=(kubectl --context "${CONTEXT}")
ATE=(kubectl ate --context "${CONTEXT}")

step() { printf '\n\033[1;36m==> %s\033[0m\n' "$*"; }
warn() { printf '\033[33mwarning:\033[0m %s\n' "$*" >&2; }

# Container engine. For podman, target the machine's rootful connection
# explicitly: the default connection may point elsewhere (e.g. the default
# machine that podmanRunner uses).
ENGINE=()
if command -v podman >/dev/null; then
  ENGINE=(podman)
  if [[ -n "${PODMAN_MACHINE}" ]] &&
    podman system connection list --format '{{.Name}}' 2>/dev/null |
    grep -qx "${PODMAN_MACHINE}-root"; then
    ENGINE=(podman --connection "${PODMAN_MACHINE}-root")
  fi
elif command -v docker >/dev/null; then
  ENGINE=(docker)
fi

machine_running() {
  [[ -n "${PODMAN_MACHINE}" ]] && command -v podman >/dev/null &&
    [[ "$(podman machine inspect "${PODMAN_MACHINE}" --format '{{.State}}' 2>/dev/null)" == running ]]
}

cluster_reachable() {
  "${K[@]}" get --raw /readyz --request-timeout=5s >/dev/null 2>&1
}

have_ate() {
  if command -v kubectl-ate >/dev/null && command -v jq >/dev/null; then
    return 0
  fi
  warn "kubectl-ate or jq is not on PATH; skipping actor cleanup"
  return 1
}

# Names of the actors in an atespace whose state matches a jq regex.
actors_in() {
  local atespace="$1" states="${2:-.}"
  "${ATE[@]}" get actors -a "${atespace}" -o json 2>/dev/null |
    jq -r --arg s "${states}" \
      '.actors[]? | select(.status.state | test($s)) | .metadata.name'
}

stop_local_processes() {
  step "Stopping the demo server and port-forwards"
  # The host first: it resumes actors on demand and would undo the rest.
  if pkill -f 'src/index-substrate\.ts'; then echo "stopped the demo server"; fi
  local svc
  for svc in "api 8443:443" "atenet-router 8000:80"; do
    # The same pattern setup.sh uses to find its own port-forwards.
    if pkill -f "port-forward -n ate-system svc/${svc}"; then
      echo "stopped port-forward svc/${svc}"
    fi
  done
}

remove_local_state() {
  # .env names a template that no longer exists; a stale one is worse than none.
  rm -rf "${HERE}/.env" "${HERE}/.creds" "${HERE}/.build"
  echo "removed substrate/.env, .creds/ and .build/"
}

stop_cluster_containers() {
  ((${#ENGINE[@]})) || return 0
  local nodes
  nodes="$("${ENGINE[@]}" ps -q --filter "label=io.x-k8s.kind.cluster=${KIND_CLUSTER_NAME}" 2>/dev/null || true)"
  if [[ -n "${nodes}" ]]; then
    # shellcheck disable=SC2086 # one container id per word
    "${ENGINE[@]}" stop -t 30 ${nodes} >/dev/null
    echo "stopped kind cluster '${KIND_CLUSTER_NAME}'"
  fi
  if [[ -n "$("${ENGINE[@]}" ps -q --filter name='^kind-registry$' 2>/dev/null || true)" ]]; then
    "${ENGINE[@]}" stop kind-registry >/dev/null
    echo "stopped kind-registry"
  fi
}

stop_machine() {
  if machine_running; then
    step "Stopping podman machine '${PODMAN_MACHINE}'"
    podman machine stop "${PODMAN_MACHINE}"
  fi
}

# Suspends every RUNNING or PAUSED actor in every atespace, so memory state is
# uploaded and sessions continue where they left off. PAUSED snapshots live on
# the node only, so they are suspended too. ate-golden only builds templates.
suspend_all_actors() {
  step "Suspending running actors"
  local atespace actor suspended=0
  for atespace in $("${ATE[@]}" get atespaces -o json 2>/dev/null |
    jq -r '.atespaces[]?.metadata.name'); do
    [[ "${atespace}" == ate-golden ]] && continue
    for actor in $(actors_in "${atespace}" 'RUNNING|PAUSED'); do
      if "${ATE[@]}" suspend actor "${actor}" -a "${atespace}" >/dev/null 2>&1; then
        echo "suspended ${atespace}/${actor}"
        suspended=$((suspended + 1))
      else
        warn "could not suspend ${atespace}/${actor}; it restarts from its last snapshot"
      fi
    done
  done
  ((suspended)) || echo "no running actors"
}

remove_demo() {
  step "Removing the demo from atespace '${ATESPACE}'"
  local actor template
  if have_ate; then
    # Actors first: they hold workers from the pool deleted below.
    for actor in $(actors_in "${ATESPACE}"); do
      if "${ATE[@]}" delete actor "${actor}" -a "${ATESPACE}" --any-state >/dev/null 2>&1; then
        echo "deleted actor ${actor}"
      else
        warn "could not delete actor ${actor}"
      fi
    done
    for template in $("${ATE[@]}" get actor-templates -a "${ATESPACE}" -o json 2>/dev/null |
      jq -r '.actorTemplates[]?.metadata.name'); do
      if "${ATE[@]}" delete actor-template "${template}" -a "${ATESPACE}" >/dev/null 2>&1; then
        echo "deleted template ${template}"
      else
        warn "could not delete template ${template}"
      fi
    done
    if "${ATE[@]}" delete atespace "${ATESPACE}" >/dev/null 2>&1; then
      echo "deleted atespace ${ATESPACE}"
    else
      warn "could not delete atespace ${ATESPACE} (actors still deleting?)"
    fi
  fi
  # The namespace holds the WorkerPool, the model gateway and its secrets.
  if "${K[@]}" get namespace "${ATESPACE}" >/dev/null 2>&1; then
    "${K[@]}" delete namespace "${ATESPACE}" --timeout=180s >/dev/null
    echo "deleted namespace ${ATESPACE} (WorkerPool, model gateway, secrets)"
  fi
}

# Deletes the kind cluster and the registry substrate created, via substrate's
# vendored kind (no kind install needed).
purge_cluster() {
  step "Deleting kind cluster '${KIND_CLUSTER_NAME}' and its registry"
  local substrate_repo="${SUBSTRATE_REPO:-${REPO_ROOT}/scratch/substrate-repo}"
  if [[ "${ENGINE[0]:-}" == podman ]]; then
    export KIND_EXPERIMENTAL_PROVIDER="${KIND_EXPERIMENTAL_PROVIDER:-podman}"
    if [[ -n "${PODMAN_MACHINE}" ]]; then
      # The cluster lives in the machine; it has to run to be deleted.
      machine_running || podman machine start "${PODMAN_MACHINE}" >/dev/null
      export CONTAINER_CONNECTION="${PODMAN_MACHINE}-root"
    fi
  fi
  if [[ -x "${substrate_repo}/hack/kind.sh" ]]; then
    "${substrate_repo}/hack/kind.sh" delete cluster --name "${KIND_CLUSTER_NAME}"
  elif ((${#ENGINE[@]})); then
    warn "no substrate checkout at ${substrate_repo} (set SUBSTRATE_REPO); removing node containers directly"
    local nodes
    nodes="$("${ENGINE[@]}" ps -aq --filter "label=io.x-k8s.kind.cluster=${KIND_CLUSTER_NAME}" 2>/dev/null || true)"
    # shellcheck disable=SC2086 # one container id per word
    [[ -z "${nodes}" ]] || "${ENGINE[@]}" rm -f ${nodes} >/dev/null
  fi
  # Only a registry that substrate's create-kind-cluster.sh made.
  if ((${#ENGINE[@]})) &&
    [[ "$("${ENGINE[@]}" inspect --format '{{index .Config.Labels "created-by"}}' kind-registry 2>/dev/null)" == agent-substrate ]]; then
    "${ENGINE[@]}" rm -f kind-registry >/dev/null
    echo "deleted kind-registry"
  fi
}

# ---------------------------------------------------------------------------

stop_local_processes

case "${MODE}" in
  stop)
    if ! cluster_reachable; then
      echo "cluster '${CONTEXT}' is not reachable; nothing to suspend"
    elif have_ate; then
      suspend_all_actors
    fi
    step "Stopping the kind cluster"
    stop_cluster_containers
    stop_machine
    step "Stopped"
    machine="${PODMAN_MACHINE:-<machine>}"
    cat <<MSG
Everything is kept. To bring it back:

  podman machine start ${machine}
  podman --connection ${machine}-root start kind-registry kind-control-plane
  ./substrate/setup.sh      # new token and port-forwards; reuses the template
  pnpm start:substrate
MSG
    ;;

  demo)
    if ! cluster_reachable; then
      echo "error: cluster '${CONTEXT}' is not reachable (start it first)" >&2
      exit 1
    fi
    remove_demo
    remove_local_state
    step "Removed"
    echo "Substrate keeps running. Recreate the demo with ./substrate/setup.sh,"
    echo "or stop everything with ./substrate/teardown.sh."
    ;;

  purge)
    purge_cluster
    remove_local_state
    stop_machine
    step "Purged"
    echo "Recreate with substrate's hack/create-kind-cluster.sh and"
    echo "hack/install-ate-kind.sh --deploy-ate-system, then ./substrate/setup.sh."
    if [[ -n "${PODMAN_MACHINE}" ]]; then
      echo "To also free the VM's disk: podman machine rm ${PODMAN_MACHINE}"
    fi
    ;;
esac
