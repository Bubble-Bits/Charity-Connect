"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ImageUploader = () => {
  const [files, setFiles] = useState([] as any);
  const [images, setImages] = useState([]);

  const MAX_LENGTH = 3;

  // useEffect(() => {
  //   if (!files.length) {
  //     return;
  //   }
  //   const newImages: any = [];
  //   files.forEach((file: any) => newImages.push(URL.createObjectURL(file)));
  //   setImages(newImages);
  // }, [files]);

  function onImageChange(e: any) {
    if (Array.from(e.target.files).length > MAX_LENGTH) {
      e.preventDefault();
      alert(`Cannot upload files more than ${MAX_LENGTH}`);
      return;
    }
    setFiles([...e.target.files]);
  }

  return (
      <input
        type="file"
        className="text-white"
        multiple
        accept="image/*"
        onChange={onImageChange}
      />
      );
    };
    /* <div className="flex flex-row justify-around w-full">
      {images.map((image) => (
        <div key={image} className="w-1/6 overflow-auto">
          <Image
            src={image}
            key={image}
            alt="Not Found"
          />
        </div>
      ))}
    </div> */

export default ImageUploader;
