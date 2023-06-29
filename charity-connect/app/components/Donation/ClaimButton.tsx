"use client";
import React from "react";
import axios from "axios";

type Props = {
  itemId: number
  style: string
};

function ClaimButton({ itemId, style }: Props) {

  const claimItem = async (item: number) => {
    await axios.put('/api/items', { item })
  }

  return (
    <button className={`${style}`} onClick={()=>{claimItem(itemId)}}>Claim</button>
  );
}

export default ClaimButton;
