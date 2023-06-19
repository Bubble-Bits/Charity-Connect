"use client";
import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import User from "./User";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="fixed w-full bg-[#01002e] z-10 shadow-sm text-white">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <User />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;