import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      <section className="max-w-3xl">
        <p className="font-semibold text-blue-600">
          BUSINESS MANAGEMENT PLATFORM
        </p>

        <h1 className="mt-5 text-5xl font-bold tracking-tight">
          Manage your entire business from one place.
        </h1>

        <p className="mt-6 text-lg text-gray-500">
          Manage products, inventory, orders and customers
          with one powerful business management platform.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/register"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white"
          >
            Get Started
          </Link>

          <Link
            href="/pricing"
            className="rounded-lg border px-6 py-3"
          >
            View Pricing
          </Link>
        </div>
      </section>
    </main>
  );
}