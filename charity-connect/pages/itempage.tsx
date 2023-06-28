"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../app/components/Navbar";
import "@/app/globals.css";
import ItemDescription from "@/app/components/ItemPage/ItemDescription";
import Axios from "axios";
import Maps from "../app/components/Maps";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ItemPage() {
  const router = useRouter();
  const { item } = router.query;

  const [itemData, setItemData] = useState({
    description: "",
    name: "",
    status: "",
    photos: [],
  });

  const [donorData, setDonorData] = useState({
    name: "",
    profilePic: "",
  });

  const [mainPhoto, setMainPhoto] = useState("");

  useEffect(() => {
    Axios.get("/api/getItem", { params: { itemId: item } })
      .then((data) => {
        if (!data) {
          throw data;
        }
        console.log("data", data.data);
        setItemData(data.data.item);
        setDonorData(data.data.donor);
        setMainPhoto(data.data.item.photos[0]);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [item]);

  return item ? (
    // This keeps it fixed in the div. How do we keep everything inside of the div?
    <div className="">
      <Navbar />

      <div className="pt-24 md:grid grid-cols-7">
        <div className="space-y-2 col-span-5 pb-4 ">
          <div className="justify-center flex ">
            {mainPhoto.length === 0 ? (
              <></>
            ) : (
              <Image
                src={mainPhoto}
                alt="Description of the image"
                width={300}
                height={200}
              />
            )}
          </div>
          <div className="justify-center flex ">
            {itemData.photos.length === 0 ? (
              <></>
            ) : (
              itemData.photos.map((picture) => {
                return (
                  <div
                    key={picture}
                    onClick={() => {
                      setMainPhoto(picture);
                    }}
                    className={
                      mainPhoto === picture ? "opacity-50" : "opacity-100"
                    }
                  >
                    <Image
                      src={picture}
                      alt="Description of the image"
                      width={50}
                      height={50}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className="space-y-2 col-span-2 bg-[#01002e] z-10 shadow-sm p-5">
          {/* temporary: when md gets hit, remove the height and overflow y scroll and just let it overextend in the mobile aspect */}
          <div className="scrollbar-hide">
            <h1 className="text-green-500 text-4xl">{itemData.name}</h1>
            <h1 className="text-white text-md">{itemData.status}</h1>

            <h1 className="text-white text-md pb-5">
              listed 2 days ago in San Francisco
            </h1>

            <Link href={`/itempage?item=6495ef45e896d8285cab2958`}>
              item page
            </Link>

            <h1 className="text-green-500 text-xl">Item Description</h1>
            <div className="text-white">
              <ItemDescription description={itemData.description} />
            </div>
            <div className="text-xl flex items-center pb-5 pt-5">
              <div className="w-20 h-20 inline-block">
                {donorData.profilePic ? (
                  <Image
                    src={donorData.profilePic}
                    alt="Description of the image"
                    width={200}
                    height={200}
                    rounded-full="true"
                  />
                ) : (
                  <Image
                    src="https://www.booksie.com/files/profiles/22/mr-anonymous.png"
                    alt="Description of the image"
                    width={200}
                    height={200}
                    rounded-full="true"
                  />
                )}
              </div>
              <div className="inline-block pl-5  text-white">
                {donorData.name}
              </div>
            </div>

            <h1 className="text-green-500 text-xl">Location</h1>

            <div className="relative w-full h-40 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Maps />
              </div>
            </div>
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
  ) : (
    <div>not found</div>
  );
}
