"use client";
import React from "react";
import "../app/globals.css";
import UserProfile from "@/app/components/UserProfile";

type Props = {};

function userprofile({ }: Props) {
  return (
    <div>
      <div>Nav Bar that displays home button, and Profile title</div>
      <div>Profile Pic</div>
      <div>User Name</div>
      <div>User Bio</div>
      <div>Posted | Claimed </div>
    </div>
  )
}


export default userprofile;