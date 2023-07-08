import Image from "next/image";
import { useState } from "react";
import Chats from "./components/chat/Chats";
import Link from "next/link";
import Maps from "./components/Maps";
import exampleData from "./components/exampleData-address";
import exampleLocations from "./components/exampleData-locations";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-indigo-900 to-indigo-600 absolute top-20 flex min-h-screen flex-col items-center justify-between ">
      <h1 className="text-white text-4xl p-2 m-4">Charity Connect</h1>
      {/* To view donations Banner */}
      <div className="text-black border border-solid border-white bg-white">
        <div className=" flex items-center ">
          <div className="text-white p-2 w-2/5">
            <Image
              src="https://images.pexels.com/photos/4210863/pexels-photo-4210863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={200}
              width={200}
              className="border rounded-lg object-cover"
              alt="Photo of person giving another person a box of clothing"
            />
          </div>
          <div className="flex flex-col p-4 w-3/5">
            <h3 className="text-black text-s">
              Find local donation opportunities in your area! Locate donation centers and organizations that are
              close to you, making it easier to contribute and help those in
              need.
            </h3>
          </div>
        </div>
      </div>
      <div className="text-white m-4 flex-1 flex-col justify-center items-center content-center">
        <Link
          href="/homepage"
          className="p-2 text-2xl bg-green-500 border border-solid border-white rounded-full inline-flex items-center justify-center min-w-[20rem]"
        >
          View Donations
        </Link>
      </div>
      {/* To donate banner */}
      <div className="text-black border border-solid border-white bg-white">
        <div className=" flex items-center ">
          <div className="text-white p-2">
            <Image
              src="https://images.pexels.com/photos/6591155/pexels-photo-6591155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={200}
              width={200}
              className="border rounded-lg object-cover"
              alt="Photo of person giving another person a box of clothing"
            />
          </div>
          <div className="flex flex-col p-4 w-3/5">
            <h3 className="text-black text-s">
              Discover nearby places to contribute and support charitable causes. Explore
              options for giving back and making a positive impact in your
              community.
              </h3>
          </div>
        </div>
      </div>
      <div className="text-white m-4 flex-1 flex-col justify-center align-center items-center content-center">
        <Link
          href="/donate"
          className="p-2 text-2xl bg-green-500 border border-solid border-white rounded-full inline-flex items-center justify-center min-w-[20rem]"
        >
          Donate Today!
        </Link>
      </div>
    </main>
  );
}