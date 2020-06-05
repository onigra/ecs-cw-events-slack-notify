export function taskId(taskArn: string): string {
  const matched = taskArn.match(/^arn:aws:ecs:.+\/(.+)$/i);
  if (matched === null) {
    return "";
  }
  return matched[1];
}
