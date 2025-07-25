import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-ui-border-base">
      <div className="content-container flex flex-col w-full py-12">
        <div className="flex flex-col md:flex-row gap-y-8 md:gap-x-16 justify-between items-start">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold tracking-wide mb-2">CCTV Center for Media & Democracy</div>
            <div className="text-sm mb-1">294 North Winooski Avenue, Burlington, VT</div>
            <div className="text-sm mb-1">P: <a href="tel:8028623966" className="underline hover:text-orange-400">(802) 862-3966</a></div>
            <div className="text-sm mb-1">E: <a href="mailto:outreach@cctv.org" className="underline hover:text-orange-400">outreach@cctv.org</a></div>
            <div className="text-sm mb-1">Open Mon-Fri 10am-6pm</div>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="font-semibold mb-1">Quick Links</div>
            <ul className="text-sm space-y-1">
              <li><LocalizedClientLink href="/" className="hover:text-orange-400">Home</LocalizedClientLink></li>
              <li><LocalizedClientLink href="/categories" className="hover:text-orange-400">Categories</LocalizedClientLink></li>
              <li><LocalizedClientLink href="/collections" className="hover:text-orange-400">Collections</LocalizedClientLink></li>
              <li><LocalizedClientLink href="/contact" className="hover:text-orange-400">Contact</LocalizedClientLink></li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="font-semibold mb-1">Connect</div>
            <div className="flex gap-x-4">
              {/* Social icons can be added here */}
              <a href="https://www.facebook.com/TOWNMEETINGTV/" target="_blank" rel="noopener" aria-label="Facebook" className="hover:text-orange-400">FB</a>
              <a href="https://twitter.com/cctvbtv" target="_blank" rel="noopener" aria-label="Twitter" className="hover:text-orange-400">TW</a>
              <a href="https://www.youtube.com/channel/UCJkWMLSqRNKLoyUZQiNoAcQ" target="_blank" rel="noopener" aria-label="YouTube" className="hover:text-orange-400">YT</a>
            </div>
            <div className="text-xs text-gray-400 mt-2">Accessibility | Privacy Policy</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full mt-10 border-t border-gray-700 pt-6 justify-between items-center text-xs text-gray-400">
          <div>© {new Date().getFullYear()} CCTV Center for Media & Democracy. All rights reserved.</div>
          <div>Site by CCTV | Powered by open source</div>
        </div>
      </div>
    </footer>
  )
}
