export function taskDef(taskDefArn: string): string {
  const matched = taskDefArn.match(/^arn:aws:ecs:.+\/(.+)$/i);
  if (matched === null) {
    return "";
  }
  return matched[1];
}
