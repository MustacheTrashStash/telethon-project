import { Text } from "@medusajs/ui"
import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default function ProductPreview({
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
  // Only mark as sold out if every variant is managed, not backorderable, and has 0 or less inventory
  const isSoldOut = allVariants.length > 0 && allVariants.every(
    (v) =>
      v.manage_inventory !== false &&
      v.allow_backorder !== true &&
      (typeof v.inventory_quantity !== 'number' || v.inventory_quantity <= 0)
  );
  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div data-testid="product-wrapper" className="relative">
        <div className="relative w-full">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
            name={isSoldOut ? 'Sold Out' : product.title}
            inventory={isSoldOut ? 0 : 1}
          />
        </div>
      </div>
    </LocalizedClientLink>
  )
}
