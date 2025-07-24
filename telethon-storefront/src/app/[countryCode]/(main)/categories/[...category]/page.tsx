import { Metadata } from "next"
import { notFound } from "next/navigation"

import { getCategoryByHandle, listCategories } from "@lib/data/categories"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import CategoryTemplate from "@modules/categories/templates"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

type Props = {
  params: Promise<{ category: string[]; countryCode: string }>
  searchParams: Promise<{
    sortBy?: SortOptions
    page?: string
  }>
}

export async function generateStaticParams() {
  try {
    const product_categories = await listCategories()
    if (!product_categories) {
      return []
    }
    // Only use categories with a valid, non-empty handle
    const validCategories = product_categories.filter((c: any) => typeof c.handle === 'string' && c.handle.trim().length > 0)
    const countryCodes = await listRegions().then((regions: StoreRegion[]) =>
      regions?.map((r) => r.countries?.map((c) => c.iso_2)).flat()
    )
    const categoryHandles = validCategories.map((category: any) => category.handle)
    const staticParams = countryCodes
      ?.map((countryCode: string | undefined) =>
        categoryHandles.map((handle: any) => ({
          countryCode,
          category: [handle],
        }))
      )
      .flat()
    return staticParams
  } catch (error) {
    console.warn("Failed to generate static params for categories, falling back to empty array:", error)
    return []
  }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  if (!params || !params.category) {
    console.error("[category page] params or params.category is undefined", { params })
    notFound()
  }
  // Skip if category param is empty or invalid
  if (Array.isArray(params.category) && params.category.length === 0) {
    console.error("[category page] params.category is empty array", { category: params.category })
    notFound()
  }
  if (typeof params.category === 'string' && (params.category as string).length === 0) {
    console.error("[category page] params.category is empty string", { category: params.category })
    notFound()
  }
  try {
    if (typeof params.category !== "string" && !Array.isArray(params.category)) {
      console.error("[category page] params.category is not string or array", { category: params.category })
      notFound()
    }
    const productCategory = await getCategoryByHandle(params.category || [])
    if (!productCategory) {
      console.error("[category page] getCategoryByHandle returned null", { category: params.category })
      notFound()
    }
    const title = productCategory?.name ? productCategory.name + " | Medusa Store" : "Category | Medusa Store"
    const description = productCategory?.description ?? `${title} category.`
    let canonical = ""
    if (Array.isArray(params.category)) {
      canonical = params.category.filter(Boolean).join("/")
    } else if (typeof params.category === "string") {
      canonical = params.category
    }
    return {
      title: `${title} | Medusa Store`,
      description,
      alternates: {
        canonical,
      },
    }
  } catch (error) {
    console.error("[category page] generateMetadata error", error)
    notFound()
  }
}

export default async function CategoryPage(props: Props) {
  const searchParams = await props.searchParams
  const params = await props.params
  const { sortBy, page } = searchParams

  if (!params || !params.category) {
    console.error("[category page] params or params.category is undefined", { params })
    notFound()
  }
  // Skip if category param is empty or invalid
  if (Array.isArray(params.category) && params.category.length === 0) {
    console.error("[category page] params.category is empty array", { category: params.category })
    notFound()
  }
  if (typeof params.category === 'string' && (params.category as string).length === 0) {
    console.error("[category page] params.category is empty string", { category: params.category })
    notFound()
  }
  if (typeof params.category !== "string" && !Array.isArray(params.category)) {
    console.error("[category page] params.category is not string or array", { category: params.category })
    notFound()
  }
  const productCategory = await getCategoryByHandle(params.category || [])
  if (!productCategory) {
    console.error("[category page] getCategoryByHandle returned null", { category: params.category })
    notFound()
  }
  return (
    <CategoryTemplate
      category={productCategory}
      sortBy={sortBy}
      page={page}
      countryCode={params.countryCode}
    />
  )
}
