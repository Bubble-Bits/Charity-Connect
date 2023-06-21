"use client";
import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { IoEarthOutline } from "react-icons/io5";
import { firebaseAuth } from "@/firebase/Firebase";
import useSignupModal from "../hooks/useSignupModal";
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
