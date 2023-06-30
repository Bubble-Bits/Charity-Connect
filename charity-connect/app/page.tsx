"use client";
import Image from "next/image";
import { useState } from "react";
import Chats from "./components/chat/Chats";
import Link from "next/link";
import Maps from "./components/Maps";
import exampleData from "./components/exampleData-address";
import exampleLocations from "./components/exampleData-locations";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
     <div className="w-screen bg-green-500 ">Join Charity Connect!</div>
     <div className="DonatinBanner w-screen h-[50vh] bg-[#01002e] text-white">
      <div className="w-screen h-2/3 flex justify-between border border-white">
        <h3 className="text-white text-6xl">Discover donations near you</h3>
        <div className="relative">
          <Link
            href="/homepage"
            className="text-xl mr-5 bg-green-500 border border-solid border-white rounded p-2"
          >HomePage
          </Link>
        </div>
      </div>
      <div></div>
     </div>
     <div></div>
      Charity-Connect
      <Link href="/map">Map</Link>
      <Link href="/donate">Donate</Link>
      <Link href="/itempage">Item Page</Link>
    </main>
  );
}
