import { SectionHeader } from "@/components/layout/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { getTransactions } from "@/lib/api/client";
import { formatDateTime, formatMoney, formatPaymentStatus } from "@/lib/formatters";

export default async function TransactionsPage() {
  const transactions = await getTransactions();

  return (
    <div className="space-y-6">
      <SectionHeader title="Transactions" description="Simulated wallet payment history for vendor operations." />
      <section className="rounded-lg border border-zinc-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-zinc-200 text-xs uppercase tracking-wide text-zinc-500">
              <tr>
                <th className="px-5 py-3 font-medium">ID</th>
                <th className="px-5 py-3 font-medium">Amount</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Service point</th>
                <th className="px-5 py-3 font-medium">Occurred</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-5 py-4 font-mono text-zinc-700">{transaction.id}</td>
                  <td className="px-5 py-4 text-zinc-600">{formatMoney(transaction.amount)}</td>
                  <td className="px-5 py-4">
                    <Badge tone={transaction.status === "Approved" ? "success" : "warning"}>
                      {formatPaymentStatus(transaction.status)}
                    </Badge>
                  </td>
                  <td className="px-5 py-4 text-zinc-600">{transaction.servicePointId}</td>
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
