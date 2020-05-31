interface Field {
  title: string;
  value: string;
  short: boolean;
}

export function fields(event: any): Field[] {
  return [
    {
      title: "Cluster",
      value: event.detail.clusterArn.match(/^arn:aws:ecs:.+\/(.+)$/i)[1],
      short: true,
    },
    {
      title: "Task Definition",
      value: event.detail.taskDefinitionArn.match(/^arn:aws:ecs:.+\/(.+)$/i)[1],
      short: true,
    },
    {
      title: "Status",
      value: event.detail.lastStatus,
      short: true,
    },
  ];
}
