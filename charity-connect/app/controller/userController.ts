"use client";
import useAuth from "@/firebase/AuthState";
import axios from "axios";
import React from "react";

type Props = {
  localId: String;
  displayName: String;
  photoUrl: String;
  email: String;
};

export default async function userController(user: Props) {
  console.log(user);
  async function createNewUser() {
    console.log("Pleaseee");
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
    console.log("Boo");
    console.log(newUser);
    return newUser.data.user;
  }

  async function getUser() {
    const res = await axios.get("api/register", {
      params: {
        localId: user?.localId,
      },
    });

    console.log("current user:", res.data);
    if (res.data.user.name === undefined) {
      console.log("its undefied");
      const newUser = await createNewUser();
      console.log(newUser);
      return newUser;
    }

    return res.data.user;
  }
  const retrieveUser = async () => {
    console.log("Hereeee");
    const now = await getUser();
    console.log(now);
    return now;
  };
  const currUser = await retrieveUser();
  console.log(currUser);

  return currUser;
}
