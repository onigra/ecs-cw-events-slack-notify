import { cluster } from "./parser/cluster";
import { service } from "./parser/service";
import { taskDef } from "./parser/taskDef";
import { taskId } from "./parser/taskId";
import { tasks } from "./parser/tasks";
import { fieldsBuilder } from "./builder/fields";
import { urlBuilder, UrlBuildElements } from "./builder/url";
import { MessageElements } from "./types/messageElements";
import { Field } from "./types/field";

function urlBuildElements(event: any): UrlBuildElements {
  return {
    region: event.region,
    cluster: cluster(event.detail.clusterArn),
    service: service(event.detail.group),
    taskDef: taskDef(event.detail.taskDefinitionArn),
    taskId: taskId(event.detail.taskArn),
  };
}

function messageElements(event: any): MessageElements {
  const elements = urlBuildElements(event);
  const url = urlBuilder(elements);

  return {
    cluster: `[${elements.cluster}](${url.clusterUrl})`,
    service: `[${elements.service}](${url.serviceUrl})`,
    taskDef: `[${elements.taskDef}](${url.taskDefUrl})`,
    deploymentStatus: event.detail.lastStatus,
    taskId: `[${elements.taskId}](${url.taskUrl})`,
    tasks: tasks(event.detail.containers),
  };
}

export function fields(event: any): Field[] {
  const elements = messageElements(event);
  return fieldsBuilder(elements);
}
