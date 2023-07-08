"use client";
import Navbar from "./components/Navbar";
import Chats from "./components/chat/Chats";
import "./globals.css";
import { Inter } from "next/font/google";

import LoginModal from "./modals/LoginModal";
import SignupModal from "./modals/SignupModal";
import { useChats } from "./hooks/useChats";
import ToasterProvider from "./providers/ToasterProvider";
import Maps from "./components/Maps";

import useAuth from "@/firebase/AuthState";
import useSignupModal from "./hooks/useSignupModal";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { showChats, toggleChats } = useChats();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <Navbar onChatClick={toggleChats} />
        {showChats && <Chats userId="64a07a8e4425cf31f6b98111" />}
        <LoginModal />
        <SignupModal />
        {children}
      </body>
    </html>
  );
}
