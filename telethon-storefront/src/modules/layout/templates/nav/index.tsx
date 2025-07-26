
import "./montserrat.css"
import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 border-ui-border-base header">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-start">
              {/* <SideMenu regions={regions} /> */}
              <LocalizedClientLink
                href="/store"
                className="montserrat-semibold hover:text-ui-fg-base flex gap-2 text-l"
                data-testid="nav-store-link"
              >Store</LocalizedClientLink>
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              <img
                src="/CCTV telethon Logo.png"
                alt="CCTV Telethon Logo"
                className="h-10 logo"
              />
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end montserrat-semibold">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {/* Account functionality removed */}
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="montserrat-semibold hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
