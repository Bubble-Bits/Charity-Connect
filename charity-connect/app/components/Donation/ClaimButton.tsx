"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "@/firebase/AuthState";

type Props = {
  itemId: string
  style: string
};

function ClaimButton({ itemId, style }: Props) {
  const user = useAuth();

  useEffect(()=> {
    user ?
    setUserEmail(user.email) :
    null
  }, [user])

  const [userEmail, setUserEmail] = useState('');

  const claimItem = async (item: string) => {
    await axios.put('/api/items', { item, user: userEmail })
  }

  return (
    <button className={style} onClick={()=>{claimItem(itemId)}}>Claim</button>
  );
}

export default ClaimButton;
