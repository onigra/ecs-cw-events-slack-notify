interface Field {
  title: string;
  value: string;
  short: boolean;
}

export function fieldsBuilder(
  cluster: string,
  service: string,
  taskDef: string,
  deploymentStatus: string,
  taskId: string,
  tasks: string
): Field[] {
  return [
    {
      title: "Cluster",
      value: cluster,
      short: true,
    },
    {
      title: "Service",
      value: service,
      short: true,
    },
    {
      title: "Task Definition",
      value: taskDef,
      short: true,
    },
    {
      title: "Deployment Status",
      value: deploymentStatus,
      short: true,
    },
    {
      title: "Task Id",
      value: taskId,
      short: false,
    },
    {
      title: "Tasks",
      value: tasks,
      short: false,
    },
  ];
}
