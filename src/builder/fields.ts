import { MessageElements } from "../types/messageElements";
import { Field } from "../types/field";

export function fieldsBuilder(elements: MessageElements): Field[] {
  return [
    {
      title: "Cluster",
      value: elements.cluster,
      short: true,
    },
    {
      title: "Service",
      value: elements.service,
      short: true,
    },
    {
      title: "Task Definition",
      value: elements.taskDef,
      short: true,
    },
    {
      title: "Deployment Status",
      value: elements.deploymentStatus,
      short: true,
    },
    {
      title: "Task Id",
      value: elements.taskId,
      short: false,
    },
    {
      title: "Tasks",
      value: elements.tasks,
      short: false,
    },
  ];
}
