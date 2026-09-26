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

# Sets up the substrate side of the box testapp on a local kind cluster that
# already runs substrate (hack/create-kind-cluster.sh +
# hack/install-ate-kind.sh --deploy-ate-system):
#
#   1. bundles src/boxed-substrate.ts (the whole agent) and src/gateway-main.ts
#      (the model gateway), and pushes both as images to the kind registry
#   2. deploys the model gateway (the only holder of GEMINI_API_KEY) with its
#      secrets: the key, and the HMAC secret it shares with the host
#   3. creates the atespace, a gVisor WorkerPool and the ActorTemplate
#   4. exports ate-api's CA and mints a client token into substrate/.creds/
#   5. starts port-forwards for ate-api (:8443) and atenet-router (:8000)
#   6. writes substrate/.env for index-substrate.ts
#
# Idempotent: re-run after changing the boxed code. That gets a new template
# name, so existing actors are never resumed onto new code.
#
# Needs: GEMINI_API_KEY, kubectl, kubectl-ate (substrate's `make build-atectl`),
# podman or docker, envsubst, jq.

set -o errexit -o nounset -o pipefail

if [[ -z "${GEMINI_API_KEY:-}" ]]; then
  echo "error: GEMINI_API_KEY is not set (the model gateway calls Gemini)" >&2
  exit 1
fi
missing=()
for tool in kubectl kubectl-ate envsubst jq curl openssl; do
  command -v "${tool}" >/dev/null || missing+=("${tool}")
done
if ((${#missing[@]})); then
  echo "error: not on PATH: ${missing[*]}" >&2
  echo "  kubectl-ate: run 'make build-atectl' in the substrate repo and add its bin/ to PATH" >&2
  exit 1
fi

HERE="$(cd "$(dirname "$0")" && pwd)"
APP="$(cd "${HERE}/.." && pwd)"
JS="$(cd "${APP}/../.." && pwd)"

CONTEXT="${KUBECTL_CONTEXT:-kind-kind}"
ATESPACE="${ATESPACE:-genkit-box}"
REGISTRY="${REGISTRY:-localhost:5001}"
BUCKET="${BUCKET:-ate-snapshots}"
ENGINE="${ENGINE:-$(command -v podman || command -v docker)}"
CREDS="${HERE}/.creds"
K=(kubectl --context "${CONTEXT}")

step() { printf '\n\033[1;36m==> %s\033[0m\n' "$*"; }

# esbuild ships with tsx; bundling avoids copying a pnpm workspace into images.
ESBUILD="$(cd "${JS}" && node -p "require.resolve('esbuild/bin/esbuild', { paths: [require.resolve('tsx')] })")"

# build_image <entry.ts> <repo name>: bundles, builds, pushes; prints the
# digest-pinned image reference.
build_image() {
  local entry="$1" name="$2" dir="${HERE}/.build/$2"
  mkdir -p "${dir}"
  "${ESBUILD}" "${APP}/src/${entry}" --bundle --platform=node \
    --target=node22 --log-level=error --outfile="${dir}/boxed.js"
  cp "${HERE}/Containerfile" "${dir}/Containerfile"
  "${ENGINE}" build -q -t "${REGISTRY}/${name}:latest" "${dir}" >/dev/null
  "${ENGINE}" push --tls-verify=false "${REGISTRY}/${name}:latest" >/dev/null 2>&1 ||
    "${ENGINE}" push "${REGISTRY}/${name}:latest" >/dev/null
  local digest
  digest="$(curl -fsS -I \
    -H 'Accept: application/vnd.oci.image.manifest.v1+json' \
    -H 'Accept: application/vnd.docker.distribution.manifest.v2+json' \
    "http://${REGISTRY}/v2/${name}/manifests/latest" |
    awk -F': ' 'tolower($1)=="docker-content-digest" {print $2}' | tr -d '\r')"
  echo "${REGISTRY}/${name}@${digest}"
}

step "Checking the cluster"
# Right after a restart (teardown.sh, then starting the machine) substrate's
# pods take a minute or two to come back.
for _ in $(seq 1 90); do
  "${K[@]}" get --raw /readyz --request-timeout=3s >/dev/null 2>&1 && break
  sleep 2
done
"${K[@]}" -n ate-system wait --for=condition=Available deployment --all --timeout=240s >/dev/null
"${K[@]}" wait --for=condition=Ready pod -A -l ate.dev/worker-pool --timeout=240s >/dev/null
# After the kind node restarts (e.g. teardown.sh, then podman machine start),
# pods come back with new IPs, but substrate keeps each Worker's registered IP
# (immutable today) and routes to the old one: actors never start. Workers are
# stateless (snapshots live in object storage), so replace any whose pod IP no
# longer matches; the new pods register fresh.
if command -v kubectl-ate >/dev/null; then
  stale="$(kubectl ate --context "${CONTEXT}" get workers -o json 2>/dev/null |
    jq -r '.workers[]? | "\(.workerNamespace) \(.workerPod) \(.ip)"' |
    while read -r ns pod ip; do
      [[ "$("${K[@]}" -n "${ns}" get pod "${pod}" -o jsonpath='{.status.podIP}' 2>/dev/null)" == "${ip}" ]] ||
        echo "${ns}/${pod}"
    done)"
  if [[ -n "${stale}" ]]; then
    echo "replacing workers with stale IPs (cluster restarted):"
    while read -r ref; do
      echo "  ${ref}"
      "${K[@]}" -n "${ref%%/*}" delete pod "${ref#*/}" --wait=false >/dev/null 2>&1 || true
    done <<<"${stale}"
    # Done once every live worker pod is registered with ate-api at its IP.
    for _ in $(seq 1 60); do
      sleep 2
      registered="$(kubectl ate --context "${CONTEXT}" get workers -o json 2>/dev/null |
        jq -r '.workers[]? | "\(.workerPod) \(.ip)"' | sort)"
      live="$("${K[@]}" get pods -A -l ate.dev/worker-pool -o json 2>/dev/null |
        jq -r '.items[] | select(.metadata.deletionTimestamp == null and .status.podIP != null)
          | "\(.metadata.name) \(.status.podIP)"' | sort)"
      [[ -n "${live}" && "$(comm -23 <(echo "${live}") <(echo "${registered}"))" == "" ]] && break
    done
  else
    echo "workers ok"
  fi
fi

step "Building and pushing images"
IMAGE="$(build_image boxed-substrate.ts genkit-box-tools)"
GATEWAY_IMAGE="$(build_image gateway-main.ts genkit-box-model-gateway)"
DIGEST="${IMAGE#*@}"
# The model the boxed agent uses (through the gateway). fake/agent is a
# deterministic stand-in for benchmarks (src/model-gateway/fake-model.ts).
AGENT_MODEL="${AGENT_MODEL:-googleai/gemini-3.6-flash}"
# Templates are immutable, and a template change must not resume old actors:
# name the template after the image and the model.
MODEL_HASH="$(printf '%s' "${AGENT_MODEL}" | shasum -a 256 | cut -c1-4)"
TEMPLATE="agent-${DIGEST:7:12}-${MODEL_HASH}"
echo "box image:     ${IMAGE}"
echo "gateway image: ${GATEWAY_IMAGE}"
echo "agent model:   ${AGENT_MODEL}"

step "Deploying the model gateway"
"${K[@]}" create namespace "${ATESPACE}" --dry-run=client -o yaml | "${K[@]}" apply -f - >/dev/null
mkdir -p "${CREDS}"
# HMAC secret for caller tokens: minted by the host, verified by the gateway.
[[ -s "${CREDS}/gateway-secret" ]] || openssl rand -hex 32 >"${CREDS}/gateway-secret"
chmod 600 "${CREDS}/gateway-secret"
"${K[@]}" -n "${ATESPACE}" create secret generic model-gateway-keys \
  --from-literal=GEMINI_API_KEY="${GEMINI_API_KEY}" \
  --from-file=gateway-secret="${CREDS}/gateway-secret" \
  --dry-run=client -o yaml | "${K[@]}" apply -f - >/dev/null
"${K[@]}" get clustertrustbundles -l podcert.ate.dev/canarying=live \
  -o jsonpath='{range .items[?(@.spec.signerName=="servicedns.podcert.ate.dev/identity")]}{.spec.trustBundle}{end}' \
  >"${CREDS}/ca.pem"
"${K[@]}" -n "${ATESPACE}" create secret generic model-gateway-ate-ca \
  --from-file=ca.pem="${CREDS}/ca.pem" \
  --dry-run=client -o yaml | "${K[@]}" apply -f - >/dev/null
export ATESPACE GATEWAY_IMAGE
envsubst '${ATESPACE} ${GATEWAY_IMAGE}' <"${HERE}/gateway.yaml.tmpl" | "${K[@]}" apply -f - >/dev/null
# Roll pods when the secrets change (e.g. a new key); the image digest covers code.
"${K[@]}" -n "${ATESPACE}" rollout restart deploy/model-gateway >/dev/null
"${K[@]}" -n "${ATESPACE}" rollout status deploy/model-gateway --timeout=120s
MODEL_GATEWAY_URL="http://model-gateway.${ATESPACE}.svc"

step "Creating atespace, WorkerPool and ActorTemplate"
# Reuse the worker image and node label of the existing substrate install.
POOL_JSON="$("${K[@]}" get workerpools -A -o json)"
WORKER_IMAGE="$(jq -r '[.items[] | select(.spec.sandboxClass=="gvisor")][0].spec.workerImage' <<<"${POOL_JSON}")"
SUBSTRATE_VERSION="$("${K[@]}" get nodes -o jsonpath='{.items[0].metadata.labels.ate\.dev/substrate-version}')"
if [[ -z "${WORKER_IMAGE}" || "${WORKER_IMAGE}" == "null" || -z "${SUBSTRATE_VERSION}" ]]; then
  echo "error: no gVisor WorkerPool / version label found; deploy substrate and its counter demo first" >&2
  exit 1
fi
export TEMPLATE IMAGE BUCKET WORKER_IMAGE SUBSTRATE_VERSION MODEL_GATEWAY_URL AGENT_MODEL
envsubst '${ATESPACE} ${WORKER_IMAGE} ${SUBSTRATE_VERSION}' \
  <"${HERE}/workerpool.yaml.tmpl" | "${K[@]}" apply -f -
kubectl ate --context "${CONTEXT}" create atespace "${ATESPACE}" >/dev/null 2>&1 || true
if ! kubectl ate --context "${CONTEXT}" get actor-template "${TEMPLATE}" -a "${ATESPACE}" >/dev/null 2>&1; then
  envsubst '${ATESPACE} ${TEMPLATE} ${IMAGE} ${BUCKET} ${MODEL_GATEWAY_URL} ${AGENT_MODEL}' \
    <"${HERE}/template.yaml.tmpl" |
    kubectl ate --context "${CONTEXT}" create actor-template -f - >/dev/null
  echo "created template ${ATESPACE}/${TEMPLATE}"
fi

step "Waiting for the golden snapshot"
for _ in $(seq 1 60); do
  row="$(kubectl ate --context "${CONTEXT}" get actor-templates -a "${ATESPACE}" | awk -v t="${TEMPLATE}" '$2==t')"
  if [[ "$(awk '{print $4}' <<<"${row}")" =~ ^[0-9a-f-]{36}$ ]]; then
    echo "ready: ${ATESPACE}/${TEMPLATE}"
    break
  fi
  sleep 2
done

step "Minting an ate-api client token"
"${K[@]}" create token ate-client -n ate-system \
  --audience api.ate-system.svc --duration 24h >"${CREDS}/token"
chmod 600 "${CREDS}/token"

step "Starting port-forwards"
start_pf() {
  local svc="$1" ports="$2" log="${CREDS}/pf-${1}.log"
  if pgrep -f "port-forward -n ate-system svc/${svc} ${ports}" >/dev/null; then
    echo "svc/${svc}: already forwarded (${ports})"
    return
  fi
  # Detached, so it outlives this script (and the shell that ran it).
  nohup "${K[@]}" port-forward -n ate-system "svc/${svc}" "${ports}" \
    </dev/null >"${log}" 2>&1 &
  disown
  echo "svc/${svc}: forwarding ${ports} (log: ${log})"
}
start_pf api 8443:443
start_pf atenet-router 8000:80

cat >"${HERE}/.env" <<EOF
export SUBSTRATE_API=localhost:8443
export SUBSTRATE_ROUTER=http://localhost:8000
export SUBSTRATE_CA=${CREDS}/ca.pem
export SUBSTRATE_TOKEN=${CREDS}/token
export SUBSTRATE_TEMPLATE=${ATESPACE}/${TEMPLATE}
export MODEL_GATEWAY_URL=${MODEL_GATEWAY_URL}
export MODEL_GATEWAY_SECRET=${CREDS}/gateway-secret
EOF

step "Done"
echo "pnpm start:substrate   (reads ${HERE}/.env)"
