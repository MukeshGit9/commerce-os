
type ProductPageProps = {
  params: Promise<{
    storeSlug: string;
    productSlug: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { storeSlug, productSlug } = await params;

  return (
    <main className="mx-auto max-w-4xl p-10">
      <p className="text-sm text-gray-500">
        Store: {storeSlug}
      </p>

      <h1 className="mt-4 text-3xl font-bold">
        Product: {productSlug}
      </h1>

      <p className="mt-4">
        Welcome to the {storeSlug} storefront.
      </p>
    </main>
  );
}
