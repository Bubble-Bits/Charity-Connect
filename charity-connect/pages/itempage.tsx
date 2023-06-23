"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../app/components/Navbar";
import "@/app/globals.css";

export default function ItemPage() {
  /*

  Grid = create the grid
  Grid-cols-7 = create the columns

  col-span-5 = dividing the grid into 5/7
  col-span-2 = dividing the grid into 2/7


  MOBILIZATION

   // sm  md lg xl .....
          ---------------
      block


        md:grid  > display grid on medium screen and larger
  md:grid lg:block

  items-center = vertically center
  justify-content = horizontally center


  */

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    // This keeps it fixed in the div. How do we keep everything inside of the div?
    <div className="">
      <Navbar />

      <div className="pt-24 md:grid grid-cols-7">
        <div className="space-y-2 col-span-5 pb-4 ">
          <div className="justify-center flex ">
            <img src="https://www.tutorialspoint.com/assets/questions/media/426142-1668760872.png"></img>
          </div>
          <div className="justify-center flex ">Item gallery boxes</div>
        </div>

        <div className="space-y-2 col-span-2 bg-[#01002e] z-10 shadow-sm p-5">
          {/* temporary: when md gets hit, remove the height and overflow y scroll and just let it overextend in the mobile aspect */}
          <div className="scrollbar-hide">
            <h1 className="text-green-500 text-4xl">teddy bear</h1>
            <h1 className="text-white text-md">Available</h1>

            <h1 className="text-white text-md pb-5">
              listed 2 days ago in San Francisco
            </h1>
            <h1 className="text-green-500 text-xl">Item Description</h1>
            <div
              className={
                isExpanded
                  ? "text-white pb-1 max-h-full"
                  : "text-white pb-1 max-h-16 overflow-hidden"
              }
            >
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
              testing testing testing testing testing testing testing testing
            </div>

            {!isExpanded && (
              <button
                className="text-blue-500 pt-1 pb-5"
                onClick={toggleDescription}
              >
                See More
              </button>
            )}
            {isExpanded && (
              <button
                className="text-blue-500 pt-1 pb-5"
                onClick={toggleDescription}
              >
                See Less
              </button>
            )}

            <div className="text-xl flex items-center pb-5">
              <div className="w-20 h-20 bg-gray-500 rounded-full inline-block"></div>
              <div className="inline-block pl-5  text-white">User Profile</div>
            </div>

            <h1 className="text-green-500 text-xl">Location</h1>
          </div>

          <div className="bg-[#01002e] z-10 shadow-sm text-xl">
            <div className="text-white pb-1">Message</div>
            <textarea
              className="w-full rounded-lg h-min overflow-y-scroll text-black placeholder-gray-400"
              placeholder="Send a message to the donor!"
            ></textarea>
            <button className=" text-md rounded-lg bg-gray-500 w-full flex justify-center  text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
