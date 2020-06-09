export interface FieldMaterials {
  cluster: string;
  service: string;
  taskDef: string;
  deploymentStatus: string;
  taskId: string;
  tasks: string;
}

export interface Field {
  title: string;
  value: string;
  short: boolean;
}

export function fieldsBuilder(elements: FieldMaterials): Field[] {
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
