"use client"
import { BsFillChatFill } from "react-icons/bs";

type Props = {
  onIconClick: () => void
}

function ChatIcon({onIconClick}: Props) {

  return (
    <>
      <div className="flex flex-row items-center gap-1 cursor-pointer" onClick={onIconClick}>
        <div className="p-2 bg-green-500 rounded-full text-black">
          <BsFillChatFill />
        </div>
        <div className="hidden md:block text-sm font-semibold">Chats</div>
      </div>
    </>
  );
}

export default ChatIcon;
