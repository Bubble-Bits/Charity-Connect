// AuthStatus.js
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "@/firebase/Firebase";
import firebase from "firebase/app";
function useAuth() {
  const [user, setUser] = useState<any>("");

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, function handleAuth(auth: any) {
      if (auth) {
        setUser(auth);
      } else {
        setUser(null);
      }
    });
  }, [user]);

  return user?.reloadUserInfo;
}

export default useAuth;

// const useAuthState = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setUser(user);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []); // Add an empty dependency array here

//   return { user, loading };
// };
