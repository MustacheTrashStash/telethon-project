import { Text } from "@medusajs/ui"
import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  // const pricedProduct = await listProducts({
  //   regionId: region.id,
  //   queryParams: { id: [product.id!] },
  // }).then(({ response }) => response.products[0])
  const { cheapestPrice } = getProductPrice({ product });
  // Determine if all variants are out of stock
  const allVariants = product.variants || [];
  const hasInventory = allVariants.some(
    (v) =>
      (!v.manage_inventory || v.allow_backorder) || (typeof v.inventory_quantity === 'number' && v.inventory_quantity > 0)
  );
  const isSoldOut = !hasInventory;
  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div data-testid="product-wrapper" className="relative">
        <div className="relative w-full">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
            name={product.title}
            inventory={isSoldOut ? 0 : 1}
          />
        </div>
        {/* Price badge styled like a button, outside the image, only if not sold out */}
        {cheapestPrice?.calculated_price && !isSoldOut && (
          <div className="mt-2 flex justify-end">
            <span className="border-2 border-[#1DA29A] bg-white text-[#1DA29A] text-xs font-bold px-3 py-1 rounded-lg shadow-md">
              {cheapestPrice.calculated_price}
            </span>
          </div>
        )}
      </div>
    </LocalizedClientLink>
  )
}
