'use client';
import Image from "next/image";
import { useState } from 'react';
import Chats from "./components/chat/Chats"
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      Charity-Connect
      <Link href="/donate">Donate</Link>
    </main>
  );
}
