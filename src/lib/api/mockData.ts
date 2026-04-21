import type {
  PaymentQrPayload,
  ServicePoint,
  ServiceRule,
  VendorProfile,
  VendorTransaction,
  VerificationQrPayload,
  VerificationResult,
} from "@/lib/api/types";

export const mockVendorProfile: VendorProfile = {
  id: "vendor-001",
  name: "Library Cafe",
  status: "Approved",
};

export const mockServicePoints: ServicePoint[] = [
  {
    id: "library-cafe",
    name: "Library Cafe Counter",
    location: "Main library",
    status: "Active",
  },
  {
    id: "main-library",
    name: "Main Library Access",
    location: "North entrance",
    status: "Active",
  },
];

export const mockPaymentQrPayload: PaymentQrPayload = {
  type: "payment",
  vendorId: "vendor-001",
  servicePointId: "library-cafe",
  amount: "42.50",
  nonce: "single-use-nonce-payment",
};

export const mockVerificationQrPayload: VerificationQrPayload = {
  type: "verification",
  vendorId: "vendor-001",
  servicePointId: "main-library",
  nonce: "single-use-nonce-verification",
};

export const mockVerificationResults: VerificationResult[] = [
  {
    id: "verification-001",
    status: "Approved",
    reason: "Credential active",
    transactionId: "verification-001",
    occurredAt: "2026-04-21T08:15:00Z",
  },
  {
    id: "verification-002",
    status: "Pending",
    reason: "Verifier response pending",
    transactionId: "verification-002",
    occurredAt: "2026-04-21T08:18:00Z",
  },
];

export const mockTransactions: VendorTransaction[] = [
  {
    id: "payment-001",
    amount: "42.50",
    status: "Approved",
    vendorId: "vendor-001",
    servicePointId: "library-cafe",
    occurredAt: "2026-04-21T08:20:00Z",
  },
  {
    id: "payment-002",
    amount: "18.00",
    status: "Pending",
    vendorId: "vendor-001",
    servicePointId: "library-cafe",
    occurredAt: "2026-04-21T08:25:00Z",
  },
];

export const mockServiceRules: ServiceRule[] = [
  {
    id: "rule-001",
    name: "Credential verification required",
    appliesTo: "All access service points",
    description: "A backend verifier response must approve active enrolment before access is granted.",
  },
  {
    id: "rule-002",
    name: "Simulated wallet balance required",
    appliesTo: "Payment QR codes",
    description: "Payment authorization depends on backend balance checks during the proof of concept.",
  },
];
