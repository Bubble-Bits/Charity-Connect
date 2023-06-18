"use client";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import useLoginModal from "../hooks/useLoginModal";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";
import { BsApple, BsFacebook, BsGithub } from "react-icons/bs";
import { GrApple } from "react-icons/gr";
import Modal from "./Modal";
import { firebaseAuth } from "@/firebase/Firebase";
import useSignupModal from "../hooks/useSignupModal";
type Props = {};

function SignupModal({}: Props) {
  const router = useRouter();
  const loginModal = useLoginModal();
  const signupModal = useSignupModal();
  const [isLoading, setIsLoading] = useState(false);

  //? This function handles the google provider through firebase
  const handleGoogle = async () => {
    try {
      signInWithPopup(firebaseAuth, new GoogleAuthProvider());
    } catch (error) {
      console.log(error);
    }
  };
  //? This function handles the github provider through firebase
  const handleGithub = async () => {
    try {
      signInWithPopup(firebaseAuth, new GithubAuthProvider());
    } catch (error) {
      console.log(error);
    }
  };
  const toggle = useCallback(() => {
    signupModal.onClose();
    loginModal.onOpen();
  }, [loginModal, signupModal]);

  const bodyContent = (
    <div className="items-center">
      <Heading
        title="Welcome to Charity Connect ❤️"
        subtitle="Create an account! "
      />
      <hr />
      <Input id="email" label="Email" disabled={isLoading} required />
      <Input
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        required
      />
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
      <Button
        outline
        label="Continue with Github"
        icon={BsGithub}
        onClick={() => handleGithub()}
      />

      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="justify-center flex flex-row items-center gap-2">
          <div className="">Already have an account?</div>
          <div
            onClick={toggle}
            className="text-green-300 cursor-pointer hover:underline"
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      isOpen={signupModal.isOpen}
      title="Signup"
      actionLabel="Continue"
      onClose={signupModal.onClose}
      onSubmit={handleGoogle}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default SignupModal;
