"use client";
import React, { useState } from "react";
import "../app/globals.css";
import Navbar from "@/app/components/Navbar";
import UserProfile from "@/app/components/userprofile/UserProfile";

type Props = {};

function userprofile({ }: Props) {

  return (
    <UserProfile />
  )
}


export default userprofile;