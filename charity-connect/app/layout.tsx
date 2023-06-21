import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Modal from "./modals/Modal";
import LoginModal from "./modals/LoginModal";
import SignupModal from "./modals/SignupModal";
import ToasterProvider from "./providers/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <Navbar />
        <LoginModal />
        <SignupModal />
        {children}
      </body>
    </html>
  );
}
