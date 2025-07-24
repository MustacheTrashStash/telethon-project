import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { listCategories } from "@lib/data/categories"
import { getRegion } from "@lib/data/regions"
import CategorySection from "@modules/home/components/category-section"

export const metadata: Metadata = {
  title: "CCTV Archive Store",
  description:
    "Browse and support the digitization of CCTV's extensive video archive.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  const categories = await listCategories({
    fields: "id, handle, name, products.*",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <div className="py-12">
        {/* Category Sections */}
        {categories && categories.length > 0 && (
          <div className="content-container">
            <div className="mb-16">
              <h2 className="text-3xl-regular mb-8">Browse by Category</h2>
              {categories.map((category) => (
                <CategorySection
                  key={category.id}
                  category={category}
                  region={region}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Featured Products */}
        <div className="content-container">
          <ul className="flex flex-col gap-x-6">
            <FeaturedProducts collections={collections} region={region} />
          </ul>
        </div>
      </div>
    </>
  )
}
