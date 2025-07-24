"use client";

import { FolderOpen, Github } from "@medusajs/icons";
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
              // style={{
              //   padding: "10px 20px",
              //   width: "150px",
              //   border: "2px solid #FFE0B2",
              //   boxShadow: "3px 3px 0 #00000022",
              //   fontWeight: "750",
              //   background: "#1DA29A",
              //   transition: "all 0.3s ease",
              //   cursor: "pointer",
              // }}
              >
                Donate
              </button>
              <button
                className="button"
              // style={{
              //   padding: "10px 20px",
              //   width: "150px",
              //   // border: "3px solid #000000",
              //   boxShadow: "3px 3px 0 #00000022",
              //   fontWeight: "750",
              //   background: "#1DA29A",
              //   transition: "all 0.3s ease",
              //   cursor: "pointer",
              // }}
              >
                Store
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#642165] text-white text-center py-8">
        <h2 className="text-3xl font-bold mb-4">What to Expect</h2>
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
          <br />
          <h4 className="font-bold mb-4">View Full Schedule</h4>
        </div>
      </div>
      <div className="bg-white text-black flex flex-wrap justify-between p-8">
        <div className="flex-1 min-w-[150px] m-2">
          <div className="text-center">
            <div className="text-left mx-auto max-w-4xl">
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
          </div>
        </div>
      </div>
      <div className="bg-[#642165] text-white text-center">
        <br/>
        <h2 className="text-3xl font-bold mb-4">Full Schedule</h2>
        <div className="text-center flex flex-center">
          <table border={1} className="schedule">
            <tbody>
              <tr>
                <td>
                  <div><strong>Friday, July 25th</strong></div>
                </td>
              </tr>
              <tr>
                <td>6:00pm</td>
                <td>Introduction to the Telethon</td>
              </tr>
              <tr>
                <td>7:00pm</td>
                <td>Cino the Singer</td>
              </tr>
              <tr>
                <td>7:35 pm</td>
                <td>Death to Intelligent Dance Music</td>
              </tr>
              <tr>
                <td>8:15 pm</td>
                <td>A Love Archive - Spinning Vinyl</td>
              </tr>
              <tr>
                <td>8:50 pm</td>
                <td>Avery Lavoie - Personal Acoustic Folk</td>
              </tr>
              <tr>
                <td>9:30 pm</td>
                <td>Eli Staats - Inventive Moody Strings</td>
              </tr>
              <tr>
                <td>10:05 pm</td>
                <td>North Star Radio Presents: P. Alimony &amp; Friends</td>
              </tr>
              <tr>
                <td><strong>Saturday, July 26th</strong></td>
              </tr>
              <tr>
                <td>12:15 am</td>
                <td>About Time with Jadah Bearden</td>
              </tr>
              <tr>
                <td>1:30 am</td>
                <td>Luna Zeitlyn and Friends Experimental Tech</td>
              </tr>
              <tr>
                <td>2:45 am</td>
                <td>Team Yap - Graded Pokemon Cards Reveal &amp; Drawing Pokemon from Memory</td>
              </tr>
              <tr>
                <td>4:00 am</td>
                <td>The Long and Ever-Evolving History of Grass</td>
              </tr>
              <tr>
                <td>5:15 am</td>
                <td>Media Literacy with Travis Washington</td>
              </tr>
              <tr>
                <td>6:30 am</td>
                <td>Exploring the Archives with Meghan O'Rourke</td>
              </tr>
              <tr>
                <td>8:00 am</td>
                <td>Celebrate Life with Gary De Carolis with guest Barbara Benton</td>
              </tr>
              <tr>
                <td>9:15 am</td>
                <td>Meet the Author with Dr. Meyers&nbsp;with guest Anastasia Arvin-DiBlasio Medical Student</td>
              </tr>
              <tr>
                <td>10:20 am</td>
                <td>The Plural Nouns of February: A Reading and Performance by Selene Colburn followed by a panel discussion</td>
              </tr>
              <tr>
                <td>11:25 am</td>
                <td>Arts So Wonderful with Bruce Wilson and Candace Owens</td>
              </tr>
              <tr>
                <td>12:15 pm</td>
                <td>Sophia Parker, Miss Vermont 2025<br />Emma Danaher, Miss Vermont's Teen 2025</td>
              </tr>
              <tr>
                <td>12:50 pm</td>
                <td>Cooking with Miss Black Vermont</td>
              </tr>
              <tr>
                <td>1:35 pm</td>
                <td>CCTV Documentary Conversation with Myles Jewell</td>
              </tr>
              <tr>
                <td>2:10 pm</td>
                <td>Live from The Ramble - What's Going on Outside?!?!</td>
              </tr>
              <tr>
                <td>2:55 pm</td>
                <td>CCTV Rewind with Moorea Lambert and Molly Lambert</td>
              </tr>
              <tr>
                <td>3:30 pm</td>
                <td>The Juxtaposition with Rev. Mark Hughes</td>
              </tr>
              <tr>
                <td>4:15 pm</td>
                <td>Tea Talks with Lydia Diamond and Infinite Culcleasure</td>
              </tr>
              <tr>
                <td>4:50 pm</td>
                <td>Baby Beck &amp; April Showers</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br/>
      </div>
      
    </>
  );
};

export default Hero;
