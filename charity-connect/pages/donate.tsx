"use client";
import React from "react";
import "../app/globals.css";

type Props = {};

function donate({}: Props) {
  return (
    // <div className="fixed w-full bg-[#01002e] z-10 shadow-sm text-white justify-items-center">
      <div className="flex flex-col justify-evenly align-middle w-full h-full border-[5px]">
        <label htmlFor="description" >Description</label>
        <input type="text" name="description" />
        <label htmlFor="tenure" >Time Owned</label>
        <input type="text" name="tenure" />
        <label htmlFor="location" >Location</label>
        <input type="text" name="location" />
        <label htmlFor="features" >Features</label>
        <input type="text" name="features" />
        <label htmlFor="cargory" >Category</label>
        <input type="text" name="category" />
        <label htmlFor="delivery" >Delivery</label>
        <input type="text" name="delivery" />
        <button>Donate</button>
      </div>
  );
}

export default donate;
