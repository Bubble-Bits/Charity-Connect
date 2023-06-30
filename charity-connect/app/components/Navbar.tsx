"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";

import User from "./User";
import ChatIcon from "./ChatIcon";
import useAuth from "@/firebase/AuthState";
import UserProfile from "./UserProfile";
import useSignupModal from "../hooks/useSignupModal";
import Signout from "./Signout";
import useLoginModal from "../hooks/useLoginModal";

type Props = { onChatClick?: () => void };

function Navbar({ onChatClick }: Props) {
  const signup = useSignupModal();
  const login = useLoginModal();
  //useModal();

  const user = useAuth();

  useEffect(() => {
    if (user) {
      signup.onClose();
      login.onOpen();
    } else {
      signup.onOpen();
    }
  }, [user, signup, login]);

  // if (!user) {
  //   signupModal.onOpen();
  // } else {
  //   signupModal.onClose();
  // }

  console.log(user);
  return (
    <div className="fixed w-full bg-[#01002e] z-10 shadow-sm text-white">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0 overflow-x-auto">
            <Logo />
            <Search />
            {user ? <UserProfile user={user} /> : <User />}
            <Signout />
            {onChatClick ? <ChatIcon onIconClick={onChatClick} /> : <></>}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;
