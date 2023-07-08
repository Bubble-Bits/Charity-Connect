"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import userController from "../controller/userController";

type Props = {
  user: any;
};

function UserProfile({ user }: Props) {
  const [photo, setPhoto] = useState("");
  console.log(user);
  const checkPhoto = async () => {
    if (!user.photoUrl) {
      const photo = await userController(user);
      setPhoto(photo.profilePic);
    }
  };
  checkPhoto();
  return (
    <Link href={`/userprofile?localId=${user.localId}`}>
      <div className="flex flex-row items-center gap-1">
        <div className="p-1 w-15 h-15 rounded-full text-black">
          <Image
            className="rounded-full w-full h-full object-contain"
            width={30}
            height={30}
            src={user.photoUrl ? user.photoUrl : photo}
            alt=""
          />
        </div>
        <div className="hidden md:block text-sm font-semibold">
          {user.displayName}
        </div>
      </div>
    </Link>
  );
}

export default UserProfile;
