import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <>
      {/* Header removed as per user request */}
      <div
        className="text-center py-12"
        style={{
          backgroundImage:
            "radial-gradient(circle, #f3e5f5 10%, transparent 10%)",
          backgroundSize: "50px 50px",
          backgroundColor: "#fff",
        }}
      >
        <h1 className="text-4xl text-[#642165] font-bold mb-4">
          Welcome to the Retro Era
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          This is not your average ecommerce site. Powered by Medusa and styled
          like a synthwave dream, we're keeping the past alive, pixel by pixel.
        </p>
      </div>
      <div className="bg-[#642165] text-white text-center py-8">
        <h2 className="text-2xl font-bold mb-4">
          Support Independent Commerce
        </h2>
        <p className="mb-4">
          Help us build the decentralized store of tomorrow. Your donations go
          directly toward development and open-source infrastructure.
        </p>
        <button className="bg-[#EA8F1C] text-white py-2 px-6 rounded">
          Donate Now
        </button>
      </div>
      <footer className="bg-black text-white flex flex-wrap justify-between p-8">
        <div className="flex-1 min-w-[150px] m-2">
          <h4 className="text-[#EA8F1C] font-bold mb-2">MEDUSA STORE</h4>
          <p>Built with ❤️ by rebels and coders.</p>
        </div>
        <div className="flex-1 min-w-[150px] m-2">
          <h4 className="text-[#EA8F1C] font-bold mb-2">Categories</h4>
          <a href="#" className="block">
            Shirts
          </a>
          <a href="#" className="block">
            Sweatshirts
          </a>
          <a href="#" className="block">
            Stickers
          </a>
        </div>
        <div className="flex-1 min-w-[150px] m-2">
          <h4 className="text-[#EA8F1C] font-bold mb-2">Resources</h4>
          <a href="https://github.com/medusajs" className="block">
            GitHub
          </a>
          <a href="https://docs.medusajs.com" className="block">
            Documentation
          </a>
          <a href="#" className="block">
            Privacy Policy
          </a>
        </div>
      </footer>
    </>
  )
}

export default Hero
