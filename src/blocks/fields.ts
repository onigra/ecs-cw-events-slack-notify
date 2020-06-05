import { cluster } from "./parser/cluster";
import { service } from "./parser/service";
import { taskDef } from "./parser/taskDef";
import { taskId } from "./parser/taskId";
import { tasks } from "./parser/tasks";
import { fieldsBuilder, FieldMaterials, Field } from "./builder/fields";
import { urlBuilder, UrlMaterials } from "./builder/url";

function urlMaterials(event: any): UrlMaterials {
  return {
    region: event.region,
    cluster: cluster(event.detail.clusterArn),
    service: service(event.detail.group),
    taskDef: taskDef(event.detail.taskDefinitionArn),
    taskId: taskId(event.detail.taskArn),
  };
}

function fieldMaterials(event: any): FieldMaterials {
  const materials = urlMaterials(event);
  const url = urlBuilder(materials);

  return {
    cluster: `<${url.clusterUrl}|${materials.cluster}>`,
    service: `<${url.serviceUrl}|${materials.service}>`,
    taskDef: `<${url.taskDefUrl}|${materials.taskDef}>`,
    deploymentStatus: event.detail.lastStatus,
    taskId: `<${url.taskUrl}|${materials.taskId}>`,
    tasks: tasks(event.detail.containers),
  };
}

export function fields(event: any): Field[] {
  const materials = fieldMaterials(event);
  return fieldsBuilder(materials);
}
