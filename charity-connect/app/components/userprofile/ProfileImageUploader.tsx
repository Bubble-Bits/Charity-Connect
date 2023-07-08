"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";
require("dotenv").config();

type Props = {
  closeImageUploader: () => any;
  updatePhotoUrl: (imageUrl: String) => any;
  updateUser: (user: {}) => void;
};

const ProfileImageUploader = ({
  closeImageUploader,
  updatePhotoUrl,
  updateUser,
}: Props) => {
  const [files, setFiles] = useState([] as any);
  const [images, setImages] = useState<any>([]);

  // useEffect(() => {
  //   if (!files.length) {
  //     return;
  //   }
  //   const newImages: any = [];
  //   files.forEach((file: any) => newImages.push(URL.createObjectURL(file)));
  //   setImages(newImages);
  // }, [files]);

  //Uploads files to cloudinary
  useEffect(() => {
    let cloudLinks: any[] = [];
    const data = new FormData();
    files.map((file: any) => {
      data.append("file", file);
      data.append("api_key", `${process.env.NEXT_PUBLIC_CLD_API}`);
      data.append("upload_preset", "charityconnect");
      axios
        .post(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLD_CLOUD}/upload`,
          data,
        )
        .then((result) => {
          cloudLinks.push(result.data.secure_url);
        });
    });
    setImages(cloudLinks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  function onImageChange(e: any) {
    setFiles([...e.target.files]);
  }

  return (
    <>
      <input
        type="file"
        className="text-white"
        accept="image/*"
        onChange={onImageChange}
      />
      <div className="flex flex-row justify-around w-full">
        {images.map((image: any) => (
          <Image
            src={image}
            key={image}
            alt="Not Found"
            className="w-1/6 overflow-auto"
            width={20}
            height={20}
          />
        ))}
      </div>
      <button
        className="text-white bg-green-500 w-1/10 rounded hover:bg-green-700"
        onClick={() => {
          updatePhotoUrl(images[0]);
          closeImageUploader();
          updateUser({});
        }}
      >
        Save Changes
      </button>
      <button
        className="text-white bg-green-500 w-1/10 rounded hover:bg-green-700"
        onClick={() => {
          closeImageUploader();
        }}
      >
        Cancel
      </button>
    </>
  );
};

export default ProfileImageUploader;
