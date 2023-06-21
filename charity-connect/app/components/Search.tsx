"use client";
import React from "react";
import { BiSearch } from "react-icons/bi";
type Props = {};

function Search({}: Props) {
  return (
    <div
      className="border-[1px]
      w-full
      md:w-[56vw]
      py-2
      rounded-full
      shadow-sm
      hover:shadow-md
       transition
       cursor-pointer"
    >
      <div
        className="flex
      flex-row
      items-center
      justify-between"
      >
        <div
          className="w-full
        text-sm
        font-semibold
        px-6
        flex
        items-center
        float-right"
        >
          <div className="hidden md:block mx-auto float-left">
            Find your item!
          </div>
          <div className="p-2 bg-green-500 rounded-full text-black right-0">
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
