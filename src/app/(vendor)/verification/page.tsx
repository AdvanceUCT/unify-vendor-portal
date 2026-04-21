import { SectionHeader } from "@/components/layout/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { getVerificationQrPreview, getVerificationResults } from "@/lib/api/client";
import { formatDateTime, formatVerificationStatus } from "@/lib/formatters";

export default async function VerificationPage() {
  const [qrPreview, results] = await Promise.all([getVerificationQrPreview(), getVerificationResults()]);

  return (
    <div className="space-y-6">
      <SectionHeader title="Verification" description="QR payload preview and recent credential verification results." />
      <section className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-lg border border-zinc-200 bg-white p-5">
          <h2 className="text-base font-semibold text-zinc-950">QR payload</h2>
          <pre className="mt-4 overflow-x-auto rounded-md bg-zinc-950 p-4 text-xs leading-6 text-zinc-100">
            {JSON.stringify(qrPreview, null, 2)}
          </pre>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white">
          <div className="divide-y divide-zinc-100">
            {results.map((result) => (
              <div className="grid gap-3 px-5 py-4 md:grid-cols-[1fr_auto_auto]" key={result.id}>
                <div>
                  <p className="font-medium text-zinc-950">{result.reason}</p>
                  <p className="text-sm text-zinc-500">{formatDateTime(result.occurredAt)}</p>
                </div>
                <Badge tone={result.status === "Approved" ? "success" : "warning"}>
                  {formatVerificationStatus(result.status)}
                </Badge>
                <span className="font-mono text-sm text-zinc-500">{result.transactionId}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
