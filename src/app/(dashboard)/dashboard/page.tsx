export default function DashboardPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold">
        Overview
      </h1>

      <p className="mt-2 text-gray-500">
        Welcome to your business dashboard.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {[
          { title: "Total Revenue", value: "₹1,25,000" },
          { title: "Total Orders", value: "248" },
          { title: "Total Products", value: "156" },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border p-6">
            <p className="text-sm text-gray-500">
              {item.title}
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              {item.value}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}