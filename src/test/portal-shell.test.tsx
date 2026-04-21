import { render, screen } from "@testing-library/react";
import { Gauge, Store } from "lucide-react";
import { describe, expect, it } from "vitest";
import { PortalShell } from "@/components/layout/PortalShell";

describe("PortalShell", () => {
  it("renders navigation and session context", () => {
    render(
      <PortalShell
        context="Service-point operations"
        navItems={[{ href: "/", label: "Overview", icon: Gauge }]}
        productName="UNIFY Vendor"
        sessionLabel="Library Cafe · Vendor"
        utilityIcon={Store}
      >
        <p>Shell content</p>
      </PortalShell>,
    );

    expect(screen.getAllByText("UNIFY Vendor").length).toBeGreaterThan(0);
    expect(screen.getByText("Overview")).toBeInTheDocument();
    expect(screen.getByText("Shell content")).toBeInTheDocument();
  });
});
