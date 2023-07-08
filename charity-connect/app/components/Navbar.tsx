"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import Link from "next/link";
import User from "./User";
import ChatIcon from "./ChatIcon";
import useAuth from "@/firebase/AuthState";
import UserProfile from "./UserProfile";
import Donate from "../../pages/donate";
import useSignupModal from "../hooks/useSignupModal";
import Signout from "./Signout";
import useLoginModal from "../hooks/useLoginModal";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import userController from "../controller/userController";

type Props = { onChatClick?: () => void };

function Navbar({ onChatClick }: Props) {
  const signup = useSignupModal();
  const login = useLoginModal();
  const user = useAuth();

  //useModal();]=

  const retrieveUser = async () => {
    console.log("retriveing");
    const result = await userController(user);
    console.log(result);
  };
  useEffect(() => {
    if (user) {
      console.log("Here");
      retrieveUser();
      signup.onClose();
      login.onClose();
    } else {
      signup.onOpen();
    }
  }, [user]);

  // if (!user) {
  //   signupModal.onOpen();
  // } else {
  //   signupModal.onClose();
  // }

  console.log(user);
  return (
    <div className="fixed w-full bg-[#01002e] z-50 shadow-sm text-white">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0 overflow-x-auto">
            <Logo />
            <Search />
            {user ? (
              <div className="p-2 bg-green-500 rounded-full text-black right-0">
                <Link href={`/donate?user=${user.localId}`}>
                  <AiOutlinePlus />
                </Link>
              </div>
            ) : null}
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
