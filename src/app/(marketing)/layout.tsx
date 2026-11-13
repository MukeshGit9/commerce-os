import Link from "next/link";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-5">
          <Link href="/" className="text-2xl font-bold">
            CommerceOS
          </Link>

          <div className="flex gap-6">
            <Link href="/pricing">Pricing</Link>
            <Link href="/login">Login</Link>
            <Link
              href="/register"
              className="rounded-lg bg-black px-4 py-2 text-white"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {children}

      <footer className="mt-20 border-t p-8 text-center text-sm text-gray-500">
        © 2026 CommerceOS. All rights reserved.
      </footer>
    </>
  );
}