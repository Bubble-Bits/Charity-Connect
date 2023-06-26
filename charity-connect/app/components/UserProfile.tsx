"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  user: any;
};

function UserProfile({ user }: Props) {
  console.log(user);
  return (
    <Link href="/userprofile">
      <div className="flex flex-row items-center gap-1">
        <div className="p-2  rounded-full text-black">
          <Image
            className="rounded-full w-9"
            width={10}
            height={10}
            src={user.photoUrl}
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
