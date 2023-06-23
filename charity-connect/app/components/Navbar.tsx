"use client";
import React, { useEffect } from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import User from "./User";
import ChatIcon from "./ChatIcon";
import { getAuth } from "../store/store";
type Props = { onChatClick?: () => void };

function Navbar({ onChatClick }: Props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuth(""));
  }, []);

  const Auth = useSelector((state) => state.charity.Auth);
  console.log(Auth);
  return (
    <div className="fixed w-full bg-[#01002e] z-10 shadow-sm text-white">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <User />
            {onChatClick ? <ChatIcon onIconClick={onChatClick} /> : <></>}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;
