import Navbar from "@/app/components/Navbar";
import ItemList from "@/app/components/ItemList";
import Link from "next/link";
import "../app/globals.css";

export default function Homepage() {
  return (
    <div className="bg-gradient-to-b from-indigo-900 to-indigo-600">
      <Navbar />
      <div className="bg-gradient-to-b from-indigo-900 to-indigo-600 min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <ItemList />
        </div>
      </div>
    </div>
  );
}
