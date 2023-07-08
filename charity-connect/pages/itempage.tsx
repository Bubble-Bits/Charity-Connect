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

import Chats from "../app/components/chat/Chats";
import { useChats } from '../app/hooks/useChats';

// type Props = {
//   userId: String;
// }



export default function ItemPage() {
  const router = useRouter();
  const { item } = router.query;


  //Hardcoded userId for now but will need to be sent down as a prop once
  //everything is fully integrated
  const userId = '64a07a8e4425cf31f6b98111';

  const [messageInput, setMessageInput] = useState('');

  const [itemData, setItemData] = useState({
    description: "",
    name: "",
    status: "",
    photos: [],
    postedAt: "",
    lng: 0,
    lat: 0,
  });

  const [donorData, setDonorData] = useState({
    name: "",
    profilePic: "",
    id: "",
  });
  //comment
  const [mainPhoto, setMainPhoto] = useState("");
  const [imageGallery, setImageGallery] = useState([]);
  const [isSending, setSending] = useState(false);

  var imageGalleryFunc = (imageGallery: []) => {
    if (imageGallery.length <= 4) {
      setImageGallery(imageGallery);
    }

    if (imageGallery.length > 4) {
      var firstFour = imageGallery.slice(0, 4);
      setImageGallery(firstFour);
    }
  };

  useEffect(() => {
    //If the first item in the image gallery, do xyz

    //If the last item in the image gallery, do xyz

    if (mainPhoto === imageGallery[0]) {
      if (mainPhoto === itemData.photos[0]) {
        var firstPart = itemData.photos.slice(0, 4);
        setImageGallery(firstPart);
      } else {
        var first = itemData.photos.indexOf(mainPhoto as never);
        var otherFirstPart = itemData.photos.slice(first - 1, first + 3);
        setImageGallery(otherFirstPart);
      }
    }

    if (mainPhoto === imageGallery[imageGallery.length - 1]) {
      if (mainPhoto === itemData.photos[itemData.photos.length - 1]) {
        var lastPart = itemData.photos.slice(
          itemData.photos.length - 4,
          itemData.photos.length
        );
        setImageGallery(lastPart);
      } else {
        var last = itemData.photos.indexOf(mainPhoto as never);
        var otherLastPart = itemData.photos.slice(last - 2, last + 2);
        setImageGallery(otherLastPart);
      }
    }
  }, [mainPhoto]);

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
        imageGalleryFunc(data.data.item.photos);
      })
      .catch((error) => {
        console.log("error", error);
      });
    console.log("itemData lng", itemData.lng);
    console.log("itemData lat", itemData.lat);
  }, [item]);

  function getDaysAgoFromDate(dateString = "") {
    const date = new Date(dateString);
    const today = new Date();

    // Calculate the difference in milliseconds between the two dates
    const differenceMs: number = today.getTime() - date.getTime();

    // Convert the difference to days
    const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

    return differenceDays;
  }

  const sendMessage = () => {
    setSending(true);
    Axios.post(`/api/itemPageChat?userIds=${donorData.id},${userId}&content=${messageInput}`)
      .then((res) => {
        console.log('message sent', res.data);
        setSending(false);
        setMessageInput('');
      })
      .catch(err => {
        console.log('error sending chat');
        console.error(err);
      });

  }

  const { showChats, toggleChats } = useChats();

  return item ? (
    // This keeps it fixed in the div. How do we keep everything inside of the div?
    // className="h-60 overflow-hidden ml-10"
    <div className="">
      <Navbar onChatClick={toggleChats} />

      <div className="pt-24 md:grid grid-cols-7">
        {showChats && <Chats userId={userId}/>}
        <div className="space-y-2 col-span-5 pb-4">
          <div className="flex justify-center ">
            <div className="flex items-center justify-center w-64 h-64">
              {mainPhoto.length === 0 ? (
                <></>
              ) : (
                <Image
                  src={mainPhoto}
                  alt="Description of the image"
                  className="max-w-full max-h-full"
                  width={300}
                  height={200}
                />
              )}
            </div>
          </div>

          <div className="justify-center flex ">
            {imageGallery.length === 0 ? (
              <></>
            ) : (
              imageGallery.map((picture) => {
                return (
                  <div
                    key={picture}
                    onClick={() => {
                      setMainPhoto(picture);
                    }}
                    className={
                      mainPhoto === picture
                        ? "opacity-100 rounded-full overflow-hidden mr-3"
                        : "opacity-50 rounded-full overflow-hidden mr-3"
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
          <div className="scrollbar-hide pb-5">
            <div className="pb-5">
              <h1 className="text-green-500 text-4xl">{itemData.name}</h1>
              <h1 className="text-white text-md">{itemData.status}</h1>

              <h1 className="text-white text-md">
                Posted {getDaysAgoFromDate(itemData.postedAt)} days ago
              </h1>
            </div>

            <>
              {itemData.status !== "Available" ? (
                <></>
              ) : (
                <div className="pb-5">
                  <button className="cursor-pointer w-24 text-md rounded-lg bg-gray-500 flex justify-center  text-white">
                    Claim
                  </button>
                </div>
              )}
            </>

            <div className="pb-5">
              <h1 className="text-green-500 text-xl">Item Description</h1>
              <div className="text-white">
                <ItemDescription description={itemData.description} />
              </div>
            </div>

            <div className="text-xl flex items-center pb-5">
              <div className="w-20 h-20 inline-block rounded-full overflow-hidden">
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

            <div className="pb-5">
              <h1 className="text-green-500 text-xl pb-2">Location</h1>

              <div className="relative w-full h-40 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg">
                  <Maps item_lng={itemData.lng} item_lat={itemData.lat} />
                </div>
              </div>
            </div>

            <div className="bg-[#01002e] z-10 shadow-sm text-xl ">
              <div className="text-white">Message</div>
              <textarea
                className="w-full rounded-lg h-min overflow-y-scroll text-black placeholder-gray-400 pl-2 pr-2"
                placeholder="Send a message to the donor!"
                value={messageInput}
                onChange={(event) => {setMessageInput(event.target.value)}}
              ></textarea>
              <button onClick={sendMessage} className="cursor-pointer text-md rounded-lg bg-gray-500 w-full flex justify-center  text-white">
                Send
              </button>
              {isSending && <span className="text-white">Sending ...</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>not found</div>
  );
}

/*

 {imageGallery.length === 0 ? (
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
                      mainPhoto === picture ? "opacity-100" : "opacity-50"
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

*/
