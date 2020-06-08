const normalStatus: string[] = ["PROVISIONING", "PENDING", "DEPROVISIONING"];
const warningStatus: string[] = ["STOPPED"];

export function color(status: string): string {
  if (normalStatus.includes(status)) {
    return "#3498DB";
  }

  if (warningStatus.includes(status)) {
    return "warning";
  }

  return "good";
}
