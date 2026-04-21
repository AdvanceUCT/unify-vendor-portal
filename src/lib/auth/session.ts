export type MockVendorSession = {
  id: string;
  role: "Vendor";
  vendorId: string;
  vendorName: string;
};

export function getCurrentSession(): MockVendorSession {
  return {
    id: "vendor-user-demo-001",
    role: "Vendor",
    vendorId: "vendor-001",
    vendorName: "Library Cafe",
  };
}
