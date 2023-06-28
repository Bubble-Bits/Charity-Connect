import useAuth from "@/firebase/AuthState";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { firebaseAuth } from "@/firebase/Firebase";
import { signOut } from "firebase/auth";
type Props = {};

function Signout({}: Props) {
  const user = useAuth();
  return (
    <div>
      {user ? (
        <div
          onClick={() => {
            signOut(firebaseAuth);
          }}
          className="text-green-500 p-2 flex-row "
        >
          <FaSignOutAlt size={26} />
        </div>
      ) : null}
    </div>
  );
}

export default Signout;
