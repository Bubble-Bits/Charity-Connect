import { firebaseAuth } from "@/firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import React, { useCallback, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import useSignupModal from "../hooks/useSignupModal";
type Props = {};

function User({}: Props) {
  const [auth, setAuth] = useState(false);
  const signupModal = useSignupModal();

  const to = useCallback(() => {
    console.log(auth);
    if (!auth) {
      signupModal.onOpen();
      return;
    }
  }, [signupModal, auth]);

  const toggle: () => void = () => {
    console.log(auth);
    if (!auth) {
      signupModal.onOpen();
      return;
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      setAuth(true);
      return;
    }
    setAuth(false);
  });
  return (
    <div onClick={() => {}} className="flex flex-row items-center gap-1">
      <div className="p-2 bg-green-500 rounded-full text-black">
        <BiUserCircle />
      </div>
      <div className="hidden md:block text-sm font-semibold">User</div>
    </div>
  );
}

export default User;
