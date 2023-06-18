"use client";
import React from "react";
import { IoEarthOutline } from "react-icons/io5";
type Props = {};

function Logo({}: Props) {
  return (
    <div className="flex gap-1">
      <IoEarthOutline size={26} />

      <div className="hidden md:block"> Charity Connect</div>
    </div>
  );
}

export default Logo;
