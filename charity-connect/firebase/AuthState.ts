// AuthStatus.js
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "@/firebase/Firebase";
import firebase from "firebase/app";
const AuthStatus = () => {
  const [authUser, setAuthUser] = useState<any>(null);
  console.log("YOO BsRO");
  useEffect(() => {
    const Auth = onAuthStateChanged(firebaseAuth, (user) => {
      console.log(user);
      setAuthUser(user);
    });

    return () => {
      Auth();
    };
  }, []);
  console.log(authUser?.reloadUserInfo);
  return authUser?.reloadUserInfo;
};

export default AuthStatus;
