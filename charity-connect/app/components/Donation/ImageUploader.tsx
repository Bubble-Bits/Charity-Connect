"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ImageUploader = () => {
  const [files, setFiles] = useState([] as any);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!files.length) {
      return;
    }
    const newImages: any = [];
    files.forEach((file: any) => newImages.push(URL.createObjectURL(file)));
    setImages(newImages);
  }, [files]);

  function onImageChange(e: any) {
    setFiles([...e.target.files]);
  }

  return (
    <>
      <input
        type="file"
        className="text-white"
        multiple
        accept="image/*"
        onChange={onImageChange}
      />
      <div className="flex flex-row justify-around w-full">
        {images.map((image) => (
          <Image
            src={image}
            key={image}
            alt="Not Found"
            className="w-1/6 overflow-auto"
          />
        ))}
      </div>
    </>
  );
};

export default ImageUploader;
