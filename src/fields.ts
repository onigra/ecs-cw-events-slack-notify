import { cluster } from "./parser/cluster";
import { service } from "./parser/service";
import { taskDef } from "./parser/taskDef";
import { taskId } from "./parser/taskId";
import { tasks } from "./parser/tasks";
import { fieldsBuilder } from "./builder/fields";
import { MessageElements } from "./types/messageElements";
import { Field } from "./types/field";

export function fields(event: any): Field[] {
  const elements: MessageElements = {
    cluster: cluster(event.detail.clusterArn),
    service: service(event.detail.group),
    taskDef: taskDef(event.detail.taskDefinitionArn),
    deploymentStatus: event.detail.lastStatus,
    taskId: taskId(event.detail.taskArn),
    tasks: tasks(event.detail.containers),
  };

  return fieldsBuilder(elements);
}
