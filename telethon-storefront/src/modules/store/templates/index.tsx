import { Suspense } from "react"
import { listCategories } from "@lib/data/categories"
import { getRegion } from "@lib/data/regions"
import CategorySection from "@modules/home/components/category-section"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"

const StoreTemplate = async ({
  countryCode,
}: {
  sortBy?: string
  page?: string
  countryCode: string
}) => {
  const region = await getRegion(countryCode)
  const categories = await listCategories({
    fields: "id, handle, name, products.*",
  })

  if (!region) {
    return null
  }

  return (
    <div className="py-6 content-container" data-testid="store-container">
      <div className="mb-8">
        <h1 className="text-3xl-regular" data-testid="store-page-title">
          All Products
        </h1>
        <p className="text-ui-fg-subtle mt-2">
          Browse our collection organized by category
        </p>
      </div>

      <Suspense fallback={<SkeletonProductGrid />}>
        {categories && categories.length > 0 ? (
          <div>
            {categories.map((category) => (
              <CategorySection
                key={category.id}
                category={category}
                region={region}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-ui-fg-subtle">No products available yet.</p>
          </div>
        )}
      </Suspense>
    </div>
  )
}

export default StoreTemplate
