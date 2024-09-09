import { ApprovalStatus } from "./consts";

export function getApprovalStatus(status: number) {
  for (const approval in ApprovalStatus) {
    const num = ApprovalStatus[approval as keyof typeof ApprovalStatus];
    if (status === num)
      return approval.charAt(0).toUpperCase() + approval.slice(1);
  }
  return "Unknown";
}
