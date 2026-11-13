import Link from "next/link";

const navigation = [
  { label: "Overview", href: "/dashboard" },
  { label: "Products", href: "/dashboard/products" },
  { label: "Orders", href: "/dashboard/orders" },
  { label: "Inventory", href: "/dashboard/inventory" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 shrink-0 border-r p-5">
        <Link href="/dashboard" className="text-2xl font-bold">
          CommerceOS
        </Link>

        <p className="mb-8 mt-2 text-sm text-gray-500">
          Business Workspace
        </p>

        <nav className="flex flex-col gap-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-3 hover:bg-gray-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="min-w-0 flex-1">
        <header className="flex h-16 items-center justify-between border-b px-8">
          <span className="font-medium">Dashboard</span>
          <span className="text-sm text-gray-500">
            Demo Workspace
          </span>
        </header>

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}