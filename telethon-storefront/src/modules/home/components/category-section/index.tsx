"use client"

import React from "react"
import { HttpTypes } from "@medusajs/types"
import ProductPreview from "@modules/products/components/product-preview"

type CategorySectionProps = {
  category: HttpTypes.StoreProductCategory
  region: HttpTypes.StoreRegion
}

export default function CategorySection({ category, region }: CategorySectionProps) {
  const products = category.products || []



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

          {/* Horizontal Scrolling Container with default scrollbar */}
          <div className="relative">
            {/* Custom scrollbar styles for this row */}
            <style>{`
              .category-scrollbar::-webkit-scrollbar {
                height: 18px;
              }
              .category-scrollbar::-webkit-scrollbar-thumb {
                background: #642165;
                border-radius: 12px;
              }
              .category-scrollbar::-webkit-scrollbar-track {
                background: #f3e8ff;
                border-radius: 12px;
              }
              /* Firefox */
              .category-scrollbar {
                scrollbar-color: #642165 #f3e8ff;
                scrollbar-width: auto;
              }
            `}</style>
            <div
              className="category-scrollbar flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 scroll-smooth"
              style={{ minHeight: '1px' }}
            >
              {products.map((product) => (
                <div key={product.id} className="flex-none w-64 sm:w-72">
                  <ProductPreview
                    product={product}
                    region={region}
                    isFeatured
                  />
                </div>
              ))}
            </div>
          </div>

          {/* View All Link removed as per user request */}
        </>
      ) : (
        <div className="text-center py-8">
          <p className="text-ui-fg-subtle">No products in this category yet.</p>
        </div>
      )}
    </div>
  )
}
