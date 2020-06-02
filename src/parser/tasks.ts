export function tasks(containers: any): string {
  return containers
    .map(
      (x: any) =>
        `*Status:* ${x.lastStatus} *Task:* ${x.name} *ImageTag:* ${
          x.image.match(/^.+\/(.+)$/i)[1]
        }`
    )
    .join("\n");
}
