import { SectionHeader } from "@/components/layout/SectionHeader";
import { getPaymentQrPreview } from "@/lib/api/client";
import { formatMoney } from "@/lib/formatters";

export default async function PaymentsPage() {
  const paymentQr = await getPaymentQrPreview();

  return (
    <div className="space-y-6">
      <SectionHeader title="Payments" description="Simulated wallet payment QR payload generated for a service point." />
      <section className="rounded-lg border border-zinc-200 bg-white p-5">
        <dl className="grid gap-4 sm:grid-cols-3">
          <div>
            <dt className="text-sm text-zinc-500">Vendor</dt>
            <dd className="mt-1 font-medium text-zinc-950">{paymentQr.vendorId}</dd>
          </div>
          <div>
            <dt className="text-sm text-zinc-500">Service point</dt>
            <dd className="mt-1 font-medium text-zinc-950">{paymentQr.servicePointId}</dd>
          </div>
          <div>
            <dt className="text-sm text-zinc-500">Amount</dt>
            <dd className="mt-1 font-medium text-zinc-950">{formatMoney(paymentQr.amount)}</dd>
          </div>
        </dl>
        <pre className="mt-5 overflow-x-auto rounded-md bg-zinc-950 p-4 text-xs leading-6 text-zinc-100">
          {JSON.stringify(paymentQr, null, 2)}
        </pre>
      </section>
    </div>
  );
}
