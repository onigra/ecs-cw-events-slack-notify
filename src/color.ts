const normalStatus: string[] = ["PROVISIONING", "PENDING", "DEPROVISIONING"];
const warningStatus: string[] = ["STOPPED"];

export function color(event: any): string {
  if (normalStatus.includes(event.detail.lastStatus)) {
    return "#3498DB";
  }

  if (warningStatus.includes(event.detail.lastStatus)) {
    return "warning";
  }

  return "good";
}
