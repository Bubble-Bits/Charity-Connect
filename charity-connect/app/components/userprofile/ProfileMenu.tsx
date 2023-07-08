import { useState, useEffect } from "react";

type Props = {
  onShowDonationClick: () => any
}

const boldtext = 'font-extrabold';


export default function ProfileMenu({ onShowDonationClick }: Props) {

  const [style, setStyle] = useState('');

  return (
    <div className="m-2">
      <span className={style} onClick={onShowDonationClick}>Posted</span>
      <span> | </span>
      <span onClick={onShowDonationClick}>Claimed</span>
      {/* <span> | </span>
      <span>Chats</span> */}
    </div>
  )
}