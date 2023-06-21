'use client';
import Image from "next/image";
<<<<<<< HEAD
import {useState} from 'react';
import Chats from "./components/chat/Chats"
=======
import Link from "next/link";
>>>>>>> 1e5d24277dfb337b91314ea4655b99087a69f6d8

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      Charity-Connect
      <Link href="/donate">Click</Link>
    </main>
  );
}
