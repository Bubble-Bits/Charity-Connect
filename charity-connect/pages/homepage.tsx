import Navbar from "@/app/components/Navbar";
import ItemList from "@/app/components/ItemList";
import Link from "next/link";
import "../app/globals.css";
export default function Homepage() {
  return (
    <div className="bg-gradient-to-b from-indigo-900 to-indigo-600">
      <Navbar />
      <div className="bg-gradient-to-b from-indigo-900 to-indigo-600 h-[100vh]">
        <div className="absolute top-20 bg-gradient-to-b from-indigo-900 to-indigo-600">
          <ItemList />
        </div>
      </div>
    </div>
  );
}
