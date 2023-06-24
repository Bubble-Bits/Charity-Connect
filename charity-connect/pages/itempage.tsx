"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../app/components/Navbar";
import "@/app/globals.css";
import ItemDescription from "@/app/components/ItemPage/ItemDescription";
import Axios from "axios";

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

  // var testing = () => {
  //   Axios.post("/api/register", {})
  //     .then((data) => {
  //       if (!data) {
  //         throw data;
  //       }
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  var string =
    "TEST: This is the item description for the items page. When the words exceed pass 200 characters, the see more button will show up and on click, will drop the whole entire description. This way, our page will have a much cleaner look";
  return (
    // This keeps it fixed in the div. How do we keep everything inside of the div?
    <div className="">
      <Navbar />

      <div className="pt-24 md:grid grid-cols-7">
        <div className="space-y-2 col-span-5 pb-4 ">
          <div className="justify-center flex ">
            <Image
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png"
              alt="Description of the image"
              width={300}
              height={200}
            />
          </div>
          <div className="justify-center flex ">Item gallery boxes</div>
        </div>

        <div className="space-y-2 col-span-2 bg-[#01002e] z-10 shadow-sm p-5">
          {/* temporary: when md gets hit, remove the height and overflow y scroll and just let it overextend in the mobile aspect */}
          <div className="scrollbar-hide">
            <h1 className="text-green-500 text-4xl">Mr. Mudkip</h1>
            <h1 className="text-white text-md">Available</h1>

            <h1 className="text-white text-md pb-5">
              listed 2 days ago in San Francisco
            </h1>
            <h1 className="text-green-500 text-xl">Item Description</h1>

            <ItemDescription description={string} />

            <div className="text-xl flex items-center pb-5 pt-5">
              <div className="w-20 h-20 inline-block">
                <Image
                  src="data:image/png;base64,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"
                  alt="Description of the image"
                  width={200}
                  height={200}
                  rounded-full="true"
                />
              </div>
              <div className="inline-block pl-5  text-white">Ash Ketchup</div>
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
