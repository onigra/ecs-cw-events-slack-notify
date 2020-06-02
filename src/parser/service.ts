export function service(group: string): string {
  const matched = group.match(/^service:(.+)$/i);
  if (matched === null) {
    return "";
  }
  return matched[1];
}
