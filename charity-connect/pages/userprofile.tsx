"use client";
import React, { useState } from "react";
import { useRouter } from 'next/router';
import "../app/globals.css";
import UserProfile from "@/app/components/userprofile/UserProfile";

type Props = {};

export default function Profile({ }: Props) {
  const router = useRouter();
  const { localId } = router.query;
  console.log('localId on Profile Page: ', localId);
  return (
    <UserProfile localId={localId}/>
  )
}


