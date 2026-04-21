import { describe, expect, it } from "vitest";
import { getPaymentQrPreview, getServicePoints, getVerificationResults } from "@/lib/api/client";

describe("vendor mock client", () => {
  it("returns service points for the approved vendor", async () => {
    const servicePoints = await getServicePoints();

    expect(servicePoints[0].status).toBe("Active");
  });

  it("returns decimal-string payment QR amounts", async () => {
    const qrPayload = await getPaymentQrPreview();

    expect(qrPayload.type).toBe("payment");
    expect(qrPayload.amount).toMatch(/^\d+\.\d{2}$/);
  });

  it("returns verification result history", async () => {
    const results = await getVerificationResults();

    expect(results.map((result) => result.status)).toContain("Approved");
  });
});
