"use client";

import React from "react";
import Image from "next/image";
import AuthStatus from "@/firebase/AuthState";
type Props = {
  user: any;
};

function UserProfile({ user }: Props) {
  const users = AuthStatus();
  console.log(users.photoUrl);
  return <Image className="rounded-full w-9" src={users.photoUrl} alt="" />;
}

export default UserProfile;
