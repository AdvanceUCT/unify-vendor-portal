import { ArrowRightLeft } from "lucide-react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Metric } from "@/components/ui/Metric";
import { getServicePoints, getTransactions, getVendorProfile } from "@/lib/api/client";
import { formatDateTime, formatMoney, formatPaymentStatus } from "@/lib/formatters";

export default async function VendorOverviewPage() {
  const [profile, servicePoints, transactions] = await Promise.all([
    getVendorProfile(),
    getServicePoints(),
    getTransactions(),
  ]);

  const approvedTransactions = transactions.filter((transaction) => transaction.status === "Approved");

  return (
    <div className="space-y-8">
      <SectionHeader title="Service-point overview" description={`${profile.name} verification and simulated payment activity.`} />

      <section className="grid gap-4 md:grid-cols-3">
        <Metric label="Active service points" value={servicePoints.length} detail="ready for QR workflows" />
        <Metric label="Approved transactions" value={approvedTransactions.length} detail="in mock history" />
        <Metric label="Latest amount" value={formatMoney(transactions[0].amount)} detail="last simulated payment" />
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white">
        <div className="flex items-center gap-3 border-b border-zinc-200 px-5 py-4">
          <ArrowRightLeft size={18} aria-hidden="true" />
          <h2 className="text-base font-semibold text-zinc-950">Recent transactions</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-zinc-200 text-xs uppercase tracking-wide text-zinc-500">
              <tr>
                <th className="px-5 py-3 font-medium">Transaction</th>
                <th className="px-5 py-3 font-medium">Amount</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-5 py-4 font-medium text-zinc-950">{transaction.id}</td>
                  <td className="px-5 py-4 text-zinc-600">{formatMoney(transaction.amount)}</td>
                  <td className="px-5 py-4">
                    <Badge tone={transaction.status === "Approved" ? "success" : "warning"}>
                      {formatPaymentStatus(transaction.status)}
                    </Badge>
                  </td>
                  <td className="px-5 py-4 text-zinc-600">{formatDateTime(transaction.occurredAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
