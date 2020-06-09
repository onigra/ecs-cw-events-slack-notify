export function cluster(clusterArn: string): string {
  const matched = clusterArn.match(/^arn:aws:ecs:.+\/(.+)$/i);
  if (matched === null) {
    return "";
  }
  return matched[1];
}
