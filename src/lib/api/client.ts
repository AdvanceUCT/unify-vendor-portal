import {
  mockPaymentQrPayload,
  mockServicePoints,
  mockServiceRules,
  mockTransactions,
  mockVendorProfile,
  mockVerificationQrPayload,
  mockVerificationResults,
} from "@/lib/api/mockData";

const wait = (durationMs = 50) => new Promise((resolve) => setTimeout(resolve, durationMs));

export async function getVendorProfile() {
  await wait();
  return mockVendorProfile;
}

export async function getServicePoints() {
  await wait();
  return mockServicePoints;
}

export async function getPaymentQrPreview() {
  await wait();
  return mockPaymentQrPayload;
}

export async function getVerificationQrPreview() {
  await wait();
  return mockVerificationQrPayload;
}

export async function getVerificationResults() {
  await wait();
  return mockVerificationResults;
}

export async function getTransactions() {
  await wait();
  return mockTransactions;
}

export async function getServiceRules() {
  await wait();
  return mockServiceRules;
}
