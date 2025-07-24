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

      {/* Products Horizontal Scroll or No Products Message */}
      {products.length > 0 ? (
        <>
          {/* Horizontal Scrolling Container */}
          <div className="relative">
            <div className="flex overflow-x-auto no-scrollbar gap-4 pb-4 -mx-4 px-4 scroll-smooth">
              {products.map((product) => {
                return (
                  <div key={product.id} className="flex-none w-64 sm:w-72">
                    <ProductPreview
                      product={product}
                      region={region}
                      isFeatured
                    />
                  </div>
                )
              })}
            </div>
            
            {/* Scroll Indicator - only show if more than 4 items */}
            {products.length > 4 && (
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none flex items-center justify-end pr-2">
                <div className="text-ui-fg-subtle text-xs">→</div>
              </div>
            )}
          </div>

          {/* View All Link */}
          {products.length > 6 && (
            <div className="mt-4 text-center">
              <a
                href={`/categories/${category.handle}`}
                className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover text-sm"
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
