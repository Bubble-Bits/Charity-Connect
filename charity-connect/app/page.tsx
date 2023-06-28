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
      Charity-Connect
      <Link href="/map">Map</Link>
      <Link href="/donate">Donate</Link>
      <Link href="/itempage">Item Page</Link>
      <Link href="/homepage">HomePage</Link>
    </main>
  );
}
