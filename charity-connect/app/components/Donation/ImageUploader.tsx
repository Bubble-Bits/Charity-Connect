"use client";
import React, { useState, useEffect } from "react";
import axios from 'axios';
require('dotenv').config();

const ImageUploader = ({ setImages }: any) => {
  const [files, setFiles] = useState([] as any);

  function onImageChange(e: any) {
    setFiles([...e.target.files]);
  }

  //Uploads files to cloudinary
  useEffect(()=> {
    let cloudLinks: string [] = [];
    const data = new FormData();
    files.map((file: any) => {
      data.append('file', file);
      data.append('api_key', `${process.env.NEXT_PUBLIC_CLD_API}`);
      data.append('upload_preset', 'charityconnect');
      axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLD_CLOUD}/upload`, data)
      .then(result => {cloudLinks.push(result.data.secure_url)})
    })
    setImages(cloudLinks)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files])

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

export default ImageUploader;
