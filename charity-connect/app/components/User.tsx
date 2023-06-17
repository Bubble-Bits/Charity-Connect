import React from "react";
import { BiUserCircle } from "react-icons/bi";
type Props = {};

function User({}: Props) {
  return (
    <div className="flex flex-row items-center gap-1">
      <div className="p-2 bg-green-500 rounded-full text-black">
        <BiUserCircle />
      </div>
      <div className="hidden md:block text-sm font-semibold">User</div>
    </div>
  );
}

export default User;
