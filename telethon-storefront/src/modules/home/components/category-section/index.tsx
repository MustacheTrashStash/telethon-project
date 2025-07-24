import { HttpTypes } from "@medusajs/types"
import ProductPreview from "@modules/products/components/product-preview"

type CategorySectionProps = {
  category: HttpTypes.StoreProductCategory
  region: HttpTypes.StoreRegion
}

export default function CategorySection({ category, region }: CategorySectionProps) {
  const products = category.products || []

  // Always show the category header, even if no products
  return (
    <div className="mb-16" data-testid="category-section">
      {/* Category Header */}
      <div className="mb-8">
        <h3 className="text-2xl-semi text-ui-fg-base mb-2">
          {category.name} ({products.length} products)
        </h3>
        <div className="w-full h-px bg-ui-border-base"></div>
      </div>

      {/* Products Grid or No Products Message */}
      {products.length > 0 ? (
        <>
          <div className="grid grid-cols-1 small:grid-cols-2 medium:grid-cols-3 large:grid-cols-4 gap-6">
            {products.map((product) => {
              return (
                <ProductPreview
                  key={product.id}
                  product={product}
                  region={region}
                  isFeatured
                />
              )
            })}
          </div>

          {/* View All Link */}
          {products.length > 8 && (
            <div className="mt-8 text-center">
              <a
                href={`/categories/${category.handle}`}
                className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
              >
                View all {category.name} products ({products.length})
              </a>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-8">
          <p className="text-ui-fg-subtle">No products in this category yet.</p>
        </div>
      )}
    </div>
  )
}
