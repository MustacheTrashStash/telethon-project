import { Metadata } from "next"
import Hero from "@modules/home/components/hero"

export const metadata: Metadata = {
  title: "CCTV Archive Store",
  description:
    "Browse and support the digitization of CCTV's extensive video archive.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  return (
    <>
      <Hero />
    </>
  )
}
