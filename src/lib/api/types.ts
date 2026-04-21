export type Money = string;

export type StudentProfile = {
  id: string;
  name: string;
  institution: string;
};

export type CredentialLifecycleState =
  | "Pending"
  | "Issuing"
  | "Offered"
  | "Active"
  | "Suspended"
  | "Revoked"
  | "Expired"
  | "Renewed";

export type StudentCredential = {
  id: string;
  holderName: string;
  issuer: string;
  faculty?: string;
  programme: string;
  enrolmentStatus: "Registered" | "Suspended" | "Withdrawn" | "Graduated";
  lifecycleState: CredentialLifecycleState;
  studentNumber: string;
  validFrom: string;
  expiresAt: string;
};

export type PaymentRecord = {
  id: string;
  amount: Money;
  status: "Approved" | "Pending" | "Declined";
  vendor: string;
};

export type QrPayload =
  | {
      type: "payment";
      vendorId: string;
      servicePointId: string;
      amount: Money;
      nonce: string;
    }
  | {
      type: "verification";
      vendorId: string;
      servicePointId: string;
      nonce: string;
    };

export type PaymentQrPayload = Extract<QrPayload, { type: "payment" }>;

export type VerificationQrPayload = Extract<QrPayload, { type: "verification" }>;

export type AuditEvent = {
  id: string;
  eventType:
    | "CredentialIssued"
    | "CredentialRenewed"
    | "CredentialSuspended"
    | "CredentialReinstated"
    | "CredentialRevoked"
    | "CredentialVerified"
    | "PaymentApproved"
    | "PaymentDeclined";
  actorId: string;
  targetId: string;
  servicePointId?: string;
  vendorId?: string;
  result: "Success" | "Failure" | "Pending";
  occurredAt: string;
  reason?: string;
};

export type ApiError = {
  error: {
    code: string;
    message: string;
    requestId: string;
  };
};

export type VendorProfile = {
  id: string;
  name: string;
  status: "Approved" | "Pending" | "Declined";
};

export type ServicePoint = {
  id: string;
  name: string;
  location: string;
  status: "Active" | "Inactive";
};

export type VendorTransaction = {
  id: string;
  amount: Money;
  status: PaymentRecord["status"];
  vendorId: string;
  servicePointId: string;
  occurredAt: string;
};

export type VerificationResult = {
  id: string;
  status: "Approved" | "Pending" | "Declined";
  reason: string;
  transactionId: string;
  occurredAt: string;
};

export type ServiceRule = {
  id: string;
  name: string;
  appliesTo: string;
  description: string;
};
