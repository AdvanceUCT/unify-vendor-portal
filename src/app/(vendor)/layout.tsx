import { BadgeCheck, Gauge, ListChecks, QrCode, ReceiptText, SlidersHorizontal, Store } from "lucide-react";
import { PortalShell } from "@/components/layout/PortalShell";
import { getCurrentSession } from "@/lib/auth/session";

const navItems = [
  { href: "/", label: "Overview", icon: Gauge },
  { href: "/verification", label: "Verification", icon: BadgeCheck },
  { href: "/payments", label: "Payments", icon: QrCode },
  { href: "/service-points", label: "Service points", icon: ListChecks },
  { href: "/transactions", label: "Transactions", icon: ReceiptText },
  { href: "/rules", label: "Rules", icon: SlidersHorizontal },
];

export default function VendorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = getCurrentSession();

  return (
    <PortalShell
      context="Service-point operations"
      navItems={navItems}
      productName="UNIFY Vendor"
      sessionLabel={`${session.vendorName} · ${session.role}`}
      utilityIcon={Store}
    >
      {children}
    </PortalShell>
  );
}
