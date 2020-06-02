interface Field {
  title: string;
  value: string;
  short: boolean;
}

function cluster(clusterArn: string): string {
  const matched = clusterArn.match(/^arn:aws:ecs:.+\/(.+)$/i);
  if (matched === null) {
    return "";
  }
  return matched[1];
}

function service(group: string): string {
  const matched = group.match(/^service:(.+)$/i);
  if (matched === null) {
    return "";
  }
  return matched[1];
}

function taskDef(taskDefArn: string): string {
  const matched = taskDefArn.match(/^arn:aws:ecs:.+\/(.+)$/i);
  if (matched === null) {
    return "";
  }
  return matched[1];
}

function taskId(taskArn: string): string {
  const matched = taskArn.match(/^arn:aws:ecs:.+\/(.+)$/i);
  if (matched === null) {
    return "";
  }
  return matched[1];
}

function tasks(containers: any): string {
  return containers
    .map(
      (x: any) =>
        `*Status:* ${x.lastStatus} *Task:* ${x.name} *ImageTag:* ${
          x.image.match(/^.+\/(.+)$/i)[1]
        }`
    )
    .join("\n");
}

export function fields(event: any): Field[] {
  return [
    {
      title: "Cluster",
      value: cluster(event.detail.clusterArn),
      short: true,
    },
    {
      title: "Service",
      value: service(event.detail.group),
      short: true,
    },
    {
      title: "Task Definition",
      value: taskDef(event.detail.taskDefinitionArn),
      short: true,
    },
    {
      title: "Deployment Status",
      value: event.detail.lastStatus,
      short: true,
    },
    {
      title: "Task Id",
      value: taskId(event.detail.taskArn),
      short: false,
    },
    {
      title: "Tasks",
      value: tasks(event.detail.containers),
      short: false,
    },
  ];
}
