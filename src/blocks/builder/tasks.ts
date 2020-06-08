import { ContainerEvent } from "../../event/parser/tasks";

export function tasksBuilder(containerEvents: ContainerEvent[]) {
  return containerEvents.map((event: ContainerEvent) => {
    return `*Status:* ${event.status} *Task:* ${event.task} *ImageTag:* ${event.imageTag}`;
  });
}
