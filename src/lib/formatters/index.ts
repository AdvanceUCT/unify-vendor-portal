import type { CredentialLifecycleState, Money, PaymentRecord, VerificationResult } from "@/lib/api/types";

const currencyFormatter = new Intl.NumberFormat("en-ZA", {
  currency: "ZAR",
  style: "currency",
});

const dateTimeFormatter = new Intl.DateTimeFormat("en-ZA", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "UTC",
});

const credentialStatusLabels: Record<CredentialLifecycleState, string> = {
  Active: "Active",
  Expired: "Expired",
  Issuing: "Issuing",
  Offered: "Offered",
  Pending: "Pending",
  Renewed: "Renewed",
  Revoked: "Revoked",
  Suspended: "Suspended",
};

const paymentStatusLabels: Record<PaymentRecord["status"], string> = {
  Approved: "Approved",
  Declined: "Declined",
  Pending: "Pending",
};

const verificationStatusLabels: Record<VerificationResult["status"], string> = {
  Approved: "Approved",
  Declined: "Declined",
  Pending: "Pending",
};

export function formatMoney(value: Money) {
  return currencyFormatter.format(Number(value));
}

export function formatDateTime(value: string) {
  return dateTimeFormatter.format(new Date(value));
}

export function formatCredentialStatus(value: CredentialLifecycleState) {
  return credentialStatusLabels[value];
}

export function formatPaymentStatus(value: PaymentRecord["status"]) {
  return paymentStatusLabels[value];
}

export function formatVerificationStatus(value: VerificationResult["status"]) {
  return verificationStatusLabels[value];
}
