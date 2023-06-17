"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import useLoginModal from "../hooks/useLoginModal";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";
type Props = {};

function LoginModal({}: Props) {
  const router = useRouter();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  //? This function handles the google provider through firebase
  const handleGoogle = () => {};

  const bodyContent = (
    <div className="">
      <Heading />
      <Input />
      <Input />
    </div>
  );
  const footerContent = (
    <div className="flex flex-col gap-3 mt-3">
      <hr />

      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => handleGoogle()}
      />
    </div>
  );
  return <div>LoginModal</div>;
}

export default LoginModal;
