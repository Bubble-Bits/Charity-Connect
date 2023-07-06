import Image from "next/image";
import { useState } from "react";
import Chats from "./components/chat/Chats";
import Link from "next/link";
import Maps from "./components/Maps";
import exampleData from "./components/exampleData-address";
import exampleLocations from "./components/exampleData-locations";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* To view donations Banner */}
      <div className="FillerDiv w-screen h-[3vh]"></div>
      <div className="DonatinBanner w-screen h-[50vh] bg-[#01002e] text-white">
        <div className="w-screen h-2/3 flex justify-between">
          <div className="w-1/3 flex flex-col items-center">
            <h3 className="text-white mb-5 md:text-8xl text-5xl">Discover donations near you.</h3>
            <div className="pt-20">
              <Link
                href="/homepage"
                className="text-3xl mr-5 bg-green-500 border border-solid border-white rounded-full p-3 inline-flex items-center justify-center min-w-[20rem]"
              >
                View Donations
              </Link>
            </div>
          </div>
          <div className="w-2/3 relative">
            <div className="absolute w-full h-full mt-[4vh] border border-white bg-green-500 top-0 left-0 z-10"></div>
            <div className="w-full h-full flex justify-around items-center relative z-20">
              <div className="w-[40vh] h-[40vh] mt-[10vh] shadow-sm shadow-white overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/16787594/pexels-photo-16787594/free-photo-of-home-appliance-in-a-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  height={500}
                  width={500}
                  className="w-full h-full object-cover"
                  alt="Photo of person giving another person a box of clothing"
                />
              </div>
              <div className="w-[40vh] h-[40vh] top-[20%] mt-[10vh] shadow-sm shadow-white overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/4210863/pexels-photo-4210863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  height={500}
                  width={500}
                  className="w-full h-full object-cover"
                  alt="Photo of person giving another person a box of clothing"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* To donate banner */}
      <div className="FillerDiv w-screen h-[5vh]"></div>
      <div className="DonatinBanner w-screen h-[50vh] bg-[#01002e] text-white">
        <div className="w-screen h-2/3 flex justify-between">
          <div className="w-1/3 flex flex-col items-center">
            <h3 className="text-white mb-5 md:text-8xl text-5xl">Discover donations near you.</h3>
            <div className="pt-20">
              <Link
                href="/homepage"
                className="text-3xl mr-5 bg-green-500 border border-solid border-white rounded-full p-3 inline-flex items-center justify-center min-w-[20rem]"
              >
                View Donations
              </Link>
            </div>
          </div>
          <div className="w-2/3 relative">
            <div className="absolute w-full h-full mt-[4vh] border border-white bg-green-500 rounded-full top-0 left-0 z-10"></div>
            <div className="w-full h-full flex justify-around items-center relative z-20">
              <div className="w-[40vh] h-[40vh] mt-[10vh] rounded-full shadow-sm shadow-white overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/16787594/pexels-photo-16787594/free-photo-of-home-appliance-in-a-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  height={500}
                  width={500}
                  className="w-full h-full object-cover"
                  alt="Photo of person giving another person a box of clothing"
                />
              </div>
              <div className="w-[40vh] h-[40vh] top-[20%] mt-[10vh] rounded-full shadow-sm shadow-white overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/4210863/pexels-photo-4210863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  height={500}
                  width={500}
                  className="w-full h-full object-cover"
                  alt="Photo of person giving another person a box of clothing"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      Charity-Connect
      <Link href="/map">Map</Link>
      <Link href="/itempage?item=6495ef45e896d8285cab2958">Item Page</Link>
    </main>
  );
}
