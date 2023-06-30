"use client";
import { firebaseAuth } from "@/firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import React, { useCallback, useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import useSignupModal from "../hooks/useSignupModal";

import UserProfile from "./UserProfile";
import Link from "next/link";

type Props = {};

function User({}: Props) {
  const signup = useSignupModal();
  return (
    <div
      onClick={() => signup.onOpen()}
      className="flex flex-row items-center gap-1"
    >
      <div className="p-2 bg-green-500 rounded-full text-black">
        <BiUserCircle />
      </div>
      <div className="hidden md:block text-sm font-semibold">User</div>
    </div>
  );
}

export default User;
