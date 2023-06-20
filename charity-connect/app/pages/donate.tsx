"use client";
import React from "react";

type Props = {};

function Donate({}: Props) {
  return (
    <div className="fixed w-full bg-[#01002e] z-10 shadow-sm text-white">
      <div className="py-4 border-b-[1px]">
      </div>
      <form>
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
        <input type="button"></input>
      </form>
    </div>
  );
}

export default Donate;
