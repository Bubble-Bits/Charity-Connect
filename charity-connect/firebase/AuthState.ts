// AuthStatus.js
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "@/firebase/Firebase";
import firebase from "firebase/app";
const AuthStatus = () => {
  const [authUser, setAuthUser] = useState<any>(null);
  useEffect(() => {
    const Auth = onAuthStateChanged(firebaseAuth, (user) => {
      console.log(user);
      setAuthUser(user);
    });

    return () => {
      Auth();
    };
  }, []);
  return authUser?.reloadUserInfo;
};

export default AuthStatus;
