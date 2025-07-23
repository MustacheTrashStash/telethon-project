"use client";

import { Github } from "@medusajs/icons";
import { Button, Heading } from "@medusajs/ui";
import LiveStreamCard from "../LiveStreamCard";

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
        <div>
          <h1 className="text-4xl text-[#642165] font-bold mb-4">
            Welcome to the CCTV Telethon
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            N Winooski Ave, Burlington VT from Friday, July 25 at 6 p.m. until
            Saturday, July 26 at 6 p.m.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 items-center justify-center">
          <div className="flex justify-center">
            <LiveStreamCard />
          </div>
          <div>
            <div className="flex gap-4 mt-2 justify-start">
              <button
                className="button"
                style={{
                  padding: "10px 20px",
                  width: "150px",
                  border: "3px solid #000000",
                  boxShadow: "3px 3px 0 #000000",
                  fontWeight: "750",
                  background: "#1DA29A",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
              >
                Donate
              </button>
              <button
                className="button"
                style={{
                  padding: "10px 20px",
                  width: "150px",
                  border: "3px solid #000000",
                  boxShadow: "3px 3px 0 #000000",
                  fontWeight: "750",
                  background: "#1DA29A",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
              >
                Store
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#642165] text-white text-center py-8">
        <h2 className="text-3xl font-bold mb-4">Support Independent Commerce</h2>
        <h3 className="text-xl font-semibold mb-6">
          Help us build the decentralized store of tomorrow. Your donations go
          directly toward development and open-source infrastructure.
        </h3>
        <div className="text-left mx-auto max-w-4xl">
          <h4 className="text-lg font-bold mb-2">Musical Performances</h4>
          <p className="mb-4">
            Death to Intelligent Dance Music, Avery Lavoie, Infinite Culcleasure,
            P. Alimony & Friends, and more.
          </p>
          <h4 className="text-lg font-bold mb-2">Talk Shows</h4>
          <p>
            Celebrate Life with Gary Decarolis, Meet the Author with Dr Louis
            Meyers, The Juxtaposition with Mark Hughes, Tea Talks with Lydia
            Diamond, Arts So Wonderful with Bruce Wilson, and more.
          </p>
        </div>
      </div>
      <footer className="bg-white text-black flex flex-wrap justify-between p-8">
        <div className="flex-1 min-w-[150px] m-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-lg font-bold mb-2">The Archives</h4>
              <p className="text-sm text-gray-700">
                This event will support the continued preservation of the CCTV
                Archives, a collection of over 40,000 programs showcasing local
                history dating back to 1984. Housed on over 11,000 VHS tapes and
                DVDs, these recordings document the meetings, protests,
                celebrations, and conversations that have shaped our communities
                for decades. In the wake of a terminated federal National
                Endowment for the Humanities grant, the preservation of these
                tapes is at risk due to lack of funds. All proceeds raised from
                the telethon fundraiser will directly benefit the CCTV Archives.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Our Mission</h4>
              <p className="text-sm text-gray-700">
                Our mission is to revolutionize the way you shop by offering
                innovative solutions and high-quality products. Join us in
                building a better future for commerce.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Hero;
