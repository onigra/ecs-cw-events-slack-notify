interface Field {
  title: string;
  value: string;
  short: boolean;
}

export function fields(event: any): Field[] {
  const tasks = event.detail.containers
    .map(
      (x: any) =>
        `*Status:* ${x.lastStatus} *Task:* ${x.name} *ImageTag:* ${
          x.image.match(/^.+\/(.+)$/i)[1]
        }`
    )
    .join("\n");

  return [
    {
      title: "Cluster",
      value: event.detail.clusterArn.match(/^arn:aws:ecs:.+\/(.+)$/i)[1],
      short: true,
    },
    {
      title: "Service",
      value: event.detail.group.match(/^service:(.+)$/i)[1],
      short: true,
    },
    {
      title: "Task Definition",
      value: event.detail.taskDefinitionArn.match(/^arn:aws:ecs:.+\/(.+)$/i)[1],
      short: true,
    },
    {
      title: "Deployment Status",
      value: event.detail.lastStatus,
      short: true,
    },
    {
      title: "Task Id",
      value: event.detail.taskArn.match(/^arn:aws:ecs:.+\/(.+)$/i)[1],
      short: true,
    },
    {
      title: "Tasks",
      value: tasks,
      short: false,
    },
  ];
}
