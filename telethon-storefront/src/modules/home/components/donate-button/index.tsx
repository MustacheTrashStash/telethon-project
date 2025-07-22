"use client"

import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] })

const DonateButton = () => {
  return (
    <a
      href="https://cctv.org/donate"
      target="_blank"
      className={`w-full sm:w-auto inline-block ${montserrat.className}`}
      style={{
        backgroundColor: '#20B2AA',
        boxShadow: 'inset 3px 3px 0px #48D1CC, inset -3px -3px 0px #178B83',
        color: '#fff',
        border: 'none',
        padding: '1rem 2rem',
        fontSize: '1.875rem',
        cursor: 'pointer',
        borderRadius: '4px',
        fontWeight: 400,
        textDecoration: 'none',
        transition: 'all 0.1s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#1C9B94';
        e.currentTarget.style.boxShadow = 'inset -2px -2px 0px #48D1CC, inset 2px 2px 0px #178B83';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#20B2AA';
        e.currentTarget.style.boxShadow = 'inset 3px 3px 0px #48D1CC, inset -3px -3px 0px #178B83';
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.backgroundColor = '#167772';
        e.currentTarget.style.boxShadow = 'inset -3px -3px 0px #48D1CC, inset 3px 3px 0px #178B83';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.backgroundColor = '#1C9B94';
        e.currentTarget.style.boxShadow = 'inset -2px -2px 0px #48D1CC, inset 2px 2px 0px #178B83';
      }}
    >
      <span className="block sm:hidden">Donate</span>
      <span className="hidden sm:block">Donate to CCTV Archives</span>
    </a>
  )
}

export default DonateButton
