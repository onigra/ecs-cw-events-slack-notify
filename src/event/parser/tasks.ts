export interface ContainerEvent {
  status: string;
  task: string;
  imageTag: string;
}

export function tasks(containers: any): ContainerEvent[] {
  return containers.map(
    (x: any): ContainerEvent => ({
      status: x.lastStatus,
      task: x.name,
      imageTag: x.image.match(/^.+\/(.+)$/i)[1],
    })
  );
}
