import { cluster } from "./parser/cluster";
import { service } from "./parser/service";
import { taskDef } from "./parser/taskDef";
import { taskId } from "./parser/taskId";
import { tasks } from "./parser/tasks";

export interface Field {
  title: string;
  value: string;
  short: boolean;
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
