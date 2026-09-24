/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// A trimmed copy of substrate's pkg/proto/ateapipb/ateapi.proto, holding only
// the messages the runner sends or reads. Field numbers and names must match
// upstream; everything else is omitted. Protobuf decoding skips unknown fields,
// so leaving out response fields we don't read is safe.
//
// Inlined as a string (not a .proto file) so it survives tsup's per-file
// transpile without asset copying.
//
// Source: github.com/agent-substrate/substrate @ 5334f16 (ateapi.proto).

export const ATEAPI_PROTO = `
syntax = "proto3";
package ateapi;

message Empty {}

message ObjectRef {
  string atespace = 1;
  string name = 2;
}

message ResourceMetadata {
  string atespace = 1;
  string name = 2;
  string uid = 3;
  int64 version = 4;
}

enum ActorState {
  ACTOR_STATE_UNSPECIFIED = 0;
  ACTOR_STATE_RESUMING = 1;
  ACTOR_STATE_RUNNING = 2;
  ACTOR_STATE_SUSPENDING = 3;
  ACTOR_STATE_SUSPENDED = 4;
  ACTOR_STATE_PAUSING = 5;
  ACTOR_STATE_PAUSED = 6;
  ACTOR_STATE_CRASHED = 7;
  ACTOR_STATE_DELETING = 8;
  ACTOR_STATE_REVERTING = 9;
}

message WorkerAssignment {
  string worker_pool = 2;
  string worker_pod = 3;
  string worker_pod_ip = 5;
  ObjectRef worker = 6;
}

message ActorStatus {
  ActorState state = 1;
  WorkerAssignment worker_assignment = 2;
}

message Actor {
  ResourceMetadata metadata = 1;
  ObjectRef actor_template = 4;
  ActorStatus status = 7;
}

message GetActorRequest { ObjectRef actor = 1; }
message CreateActorRequest { Actor actor = 1; }
message ResumeActorRequest { ObjectRef actor = 1; }
message ResumeActorResponse { Actor actor = 1; bool resumed = 2; }
message SuspendActorRequest { ObjectRef actor = 1; }
message SuspendActorResponse { Actor actor = 1; }
message PauseActorRequest { ObjectRef actor = 1; }
message PauseActorResponse { Actor actor = 1; }
message RevertActorRequest { ObjectRef actor = 1; }
message RevertActorResponse { Actor actor = 1; }
message DeleteActorRequest {
  ObjectRef actor = 1;
  bool any_state = 2;
}
message ListActorsRequest {
  string atespace = 1;
  int32 page_size = 2;
  string page_token = 3;
}
message ListActorsResponse {
  repeated Actor actors = 1;
  string next_page_token = 2;
}

enum WorkerState {
  WORKER_STATE_UNSPECIFIED = 0;
  WORKER_STATE_ACTIVE = 1;
  WORKER_STATE_DRAINING = 2;
}
message WorkerResources { int32 actors = 2; }
message WorkerStatus {
  WorkerState state = 1;
  WorkerResources capacity = 2;
  WorkerResources allocated = 3;
}
message Worker {
  ResourceMetadata metadata = 1;
  string worker_namespace = 2;
  string worker_pool = 3;
  string worker_pod = 4;
  string node_name = 6;
  WorkerStatus status = 11;
}
message ListWorkersRequest {
  int32 page_size = 1;
  string page_token = 2;
}
message ListWorkersResponse {
  repeated Worker workers = 1;
  string next_page_token = 2;
}

message HostnameRule { repeated string patterns = 1; }
message CIDRRule { repeated string cidrs = 1; }
message EgressRule {
  HostnameRule hostnames = 1;
  CIDRRule cidrs = 2;
  // google.protobuf.Empty upstream; an empty message is wire-identical.
  Empty all = 3;
}
message EgressPolicy {
  ResourceMetadata metadata = 1;
  repeated EgressRule rules = 2;
}
message CreateActorEgressPolicyRequest {
  ObjectRef actor = 1;
  EgressPolicy egress_policy = 2;
}
`;

/** Fully qualified gRPC service name. */
export const CONTROL_SERVICE = 'ateapi.Control';
