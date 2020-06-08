import { cluster } from "./parser/cluster";
import { service } from "./parser/service";
import { taskDef } from "./parser/taskDef";
import { taskId } from "./parser/taskId";
import { tasks } from "./parser/tasks";

export interface EcsTaskEvent {
  region: string;
  cluster: string;
  service: string;
  status: string;
  taskDef: string;
  taskId: string;
  tasks: string;
}

export function ecsTaskEvent(event: any): EcsTaskEvent {
  return {
    region: event.region,
    cluster: cluster(event.detail.clusterArn),
    service: service(event.detail.group),
    status: event.detail.lastStatus,
    taskDef: taskDef(event.detail.taskDefinitionArn),
    taskId: taskId(event.detail.taskArn),
    tasks: tasks(event.detail.containers),
  };
}
