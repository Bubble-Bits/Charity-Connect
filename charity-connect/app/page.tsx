import Image from "next/image";
import Link from "next/link";
import Maps from "./components/Maps";
import exampleData from "./components/exampleData-address";
import exampleLocations from "./components/exampleData-locations";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      Charity-Connect
      <Maps />
      <Link href="/donate">Click</Link>
    </main>
  );
}
