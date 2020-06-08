import { EcsTaskEvent } from "../event/ecsTask";
import { fieldsBuilder, FieldMaterials, Field } from "./builder/fields";
import { urlBuilder } from "./builder/url";

function fieldMaterials(event: EcsTaskEvent): FieldMaterials {
  const url = urlBuilder(event);

  return {
    cluster: `<${url.clusterUrl}|${event.cluster}>`,
    service: `<${url.serviceUrl}|${event.service}>`,
    taskDef: `<${url.taskDefUrl}|${event.taskDef}>`,
    deploymentStatus: event.status,
    taskId: `<${url.taskUrl}|${event.taskId}>`,
    tasks: event.tasks,
  };
}

export function fields(event: EcsTaskEvent): Field[] {
  const materials = fieldMaterials(event);
  return fieldsBuilder(materials);
}
