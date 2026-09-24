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
#   1. bundles src/boxed-substrate.ts (the whole agent) and pushes it as an
#      image to the kind registry (localhost:5001)
#   2. creates the atespace, a gVisor WorkerPool and the ActorTemplate, with
#      GEMINI_API_KEY in the template env (demo shortcut, see README)
#   3. exports ate-api's CA and mints a client token into substrate/.creds/
#   4. starts port-forwards for ate-api (:8443) and atenet-router (:8000)
#   5. writes substrate/.env for index-substrate.ts
#
# Idempotent: re-run after changing the boxed code or the key. Either one gets
# a new template name, so existing actors are never resumed onto new code.
#
# Needs: GEMINI_API_KEY, kubectl, kubectl-ate (substrate's `make build-atectl`),
# podman or docker, envsubst, jq.

set -o errexit -o nounset -o pipefail

if [[ -z "${GEMINI_API_KEY:-}" ]]; then
  echo "error: GEMINI_API_KEY is not set (the boxed agent calls Gemini)" >&2
  exit 1
fi
missing=()
for tool in kubectl kubectl-ate envsubst jq curl; do
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

step "Bundling the boxed entry"
mkdir -p "${HERE}/.build"
# esbuild ships with tsx; bundling avoids copying a pnpm workspace into the image.
ESBUILD="$(cd "${JS}" && node -p "require.resolve('esbuild/bin/esbuild', { paths: [require.resolve('tsx')] })")"
"${ESBUILD}" "${APP}/src/boxed-substrate.ts" --bundle --platform=node \
  --target=node22 --log-level=warning --outfile="${HERE}/.build/boxed.js"
cp "${HERE}/Containerfile" "${HERE}/.build/Containerfile"

step "Building and pushing the image"
IMAGE_REPO="${REGISTRY}/genkit-box-tools"
"${ENGINE}" build -q -t "${IMAGE_REPO}:latest" "${HERE}/.build" >/dev/null
"${ENGINE}" push --tls-verify=false "${IMAGE_REPO}:latest" >/dev/null 2>&1 ||
  "${ENGINE}" push "${IMAGE_REPO}:latest" >/dev/null
DIGEST="$(curl -fsS -I \
  -H 'Accept: application/vnd.oci.image.manifest.v1+json' \
  -H 'Accept: application/vnd.docker.distribution.manifest.v2+json' \
  "http://${REGISTRY}/v2/genkit-box-tools/manifests/latest" |
  awk -F': ' 'tolower($1)=="docker-content-digest" {print $2}' | tr -d '\r')"
IMAGE="${IMAGE_REPO}@${DIGEST}"
# Templates are immutable, and a template change must not resume old actors:
# name the template after the image and the key (hashed, never printed).
KEY_HASH="$(printf '%s' "${GEMINI_API_KEY}" | shasum -a 256 | cut -c1-6)"
TEMPLATE="agent-${DIGEST:7:10}-${KEY_HASH}"
echo "image: ${IMAGE}"

step "Creating atespace, WorkerPool and ActorTemplate"
# Reuse the worker image and node label of the existing substrate install.
POOL_JSON="$("${K[@]}" get workerpools -A -o json)"
WORKER_IMAGE="$(jq -r '[.items[] | select(.spec.sandboxClass=="gvisor")][0].spec.workerImage' <<<"${POOL_JSON}")"
SUBSTRATE_VERSION="$("${K[@]}" get nodes -o jsonpath='{.items[0].metadata.labels.ate\.dev/substrate-version}')"
if [[ -z "${WORKER_IMAGE}" || "${WORKER_IMAGE}" == "null" || -z "${SUBSTRATE_VERSION}" ]]; then
  echo "error: no gVisor WorkerPool / version label found; deploy substrate and its counter demo first" >&2
  exit 1
fi
export ATESPACE TEMPLATE IMAGE BUCKET WORKER_IMAGE SUBSTRATE_VERSION GEMINI_API_KEY
envsubst '${ATESPACE} ${WORKER_IMAGE} ${SUBSTRATE_VERSION}' \
  <"${HERE}/workerpool.yaml.tmpl" | "${K[@]}" apply -f -
kubectl ate --context "${CONTEXT}" create atespace "${ATESPACE}" >/dev/null 2>&1 || true
if ! kubectl ate --context "${CONTEXT}" get actor-template "${TEMPLATE}" -a "${ATESPACE}" >/dev/null 2>&1; then
  # Output suppressed: kubectl-ate echoes the created template, key included.
  envsubst '${ATESPACE} ${TEMPLATE} ${IMAGE} ${BUCKET} ${GEMINI_API_KEY}' \
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

step "Exporting ate-api credentials"
mkdir -p "${CREDS}"
"${K[@]}" get clustertrustbundles -l podcert.ate.dev/canarying=live \
  -o jsonpath='{range .items[?(@.spec.signerName=="servicedns.podcert.ate.dev/identity")]}{.spec.trustBundle}{end}' \
  >"${CREDS}/ca.pem"
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
EOF

step "Done"
echo "source ${HERE}/.env && pnpm genkit:dev:substrate"
