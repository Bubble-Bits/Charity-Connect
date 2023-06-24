"use client";

import React from "react";
import Image from "next/image";

type Props = {
  user: any;
};

function UserProfile({ user }: Props) {
  console.log(user.photoUrl);
  return <Image className="rounded-full w-9" src={user.photoUrl} alt="" />;
}

export default UserProfile;
