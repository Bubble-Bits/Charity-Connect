"use client";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const ImageUploader = () => {
  const [files, setFiles] = useState([] as any);

  const MAX_LENGTH = 3;

  function onImageChange(e: any) {
    // if (Array.from(e.target.files).length > MAX_LENGTH) {
    //   e.preventDefault();
    //   alert(`Cannot upload files more than ${MAX_LENGTH}`);
    //   return;
    // }
    setFiles([...e.target.files]);
    const data = new FormData();
    files.map((file: any) => {
      data.append('file', file);
      data.append('api_key', `${process.env.CLOUDINARY_API}`);
      data.append('upload_preset', 'charityconnect');
      axios.post(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD}/upload`, data)
    })
    // .then(result => {console.log(result, 'result')})
    // .catch(err => {console.log(err, 'error')});
  }
  //${process.env.CLOUDINARY}

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
