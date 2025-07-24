import { sdk } from "@lib/config"
import { HttpTypes } from "@medusajs/types"
import { getCacheOptions } from "./cookies"

export const listCategories = async (query?: Record<string, any>) => {
  const next = {
    ...(await getCacheOptions("categories")),
  }

  const limit = query?.limit || 100

  return sdk.client
    .fetch<{ product_categories: HttpTypes.StoreProductCategory[] }>(
      "/store/product-categories",
      {
        query: {
          fields:
            "*category_children, *parent_category, *parent_category.parent_category, products.id,products.title,products.handle,products.thumbnail,products.images,products.variants.id,products.variants.title,products.variants.inventory_quantity,products.variants.manage_inventory,products.variants.allow_backorder,products.variants.calculated_price,products.metadata,products.tags",
          limit,
          ...query,
        },
        next,
        cache: "force-cache",
      }
    )
    .then(({ product_categories }) => product_categories)
}

export const getCategoryByHandle = async (categoryHandle: string[] | string | undefined | null) => {
  let handle = ""
  if (Array.isArray(categoryHandle)) {
    handle = categoryHandle.filter(Boolean).join("/")
  } else if (typeof categoryHandle === "string") {
    handle = categoryHandle
  }
  if (!handle) return null

  const next = {
    ...(await getCacheOptions("categories")),
  }

  return sdk.client
    .fetch<HttpTypes.StoreProductCategoryListResponse>(
      `/store/product-categories`,
      {
        query: {
          fields: "*category_children, *products",
          handle,
        },
        next,
        cache: "force-cache",
      }
    )
    .then(({ product_categories }) => product_categories[0] || null)
}
