import { SectionHeader } from "@/components/layout/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { getServicePoints } from "@/lib/api/client";

export default async function ServicePointsPage() {
  const servicePoints = await getServicePoints();

  return (
    <div className="space-y-6">
      <SectionHeader title="Service points" description="Physical or logical points approved for verification and payments." />
      <section className="rounded-lg border border-zinc-200 bg-white">
        <div className="divide-y divide-zinc-100">
          {servicePoints.map((servicePoint) => (
            <div className="grid gap-3 px-5 py-4 md:grid-cols-[1fr_auto]" key={servicePoint.id}>
              <div>
                <h2 className="font-medium text-zinc-950">{servicePoint.name}</h2>
                <p className="text-sm text-zinc-500">{servicePoint.location}</p>
              </div>
              <Badge tone={servicePoint.status === "Active" ? "success" : "neutral"}>{servicePoint.status}</Badge>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
