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
  async function createNewUser() {
    const newUser = await axios.post("api/register", {
      params: {
        newUser: {
          localId: user.localId,
          chatIds: [],
          chats: [],
          postedItems: [],
          claimedItems: [],
          name: user.displayName,
          email: user.email,
          bio: "",
          profilePic: user.photoUrl,
          address: "198 South Young Ave. Providence, RI 02904",
          itemsClaimed: 0,
          itemsSuccessClaimed: 0,
          blocked: [],
        },
      },
    });
    console.log(newUser);
    return newUser.data.user;
  }

  //useModal();]=
  async function getUser() {
    const res = await axios.get("api/register", {
      params: {
        localId: user?.localId,
      },
    });
    console.log("current user:", res.data);
    if (res.data.user.name === undefined) {
      const newUser = await createNewUser();
      console.log(newUser);
      return newUser;
    }

    return res.data.user;
  }

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
