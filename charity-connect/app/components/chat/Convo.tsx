'use client';

import { BiArrowBack } from 'react-icons/bi';
import Image from 'next/image';
import { format, parseISO } from "date-fns";

type Props = {
  id: number
  userName: string
  goBackFunc: () => void
  sender: string
}

const ChatConversation = ({id, userName, sender, goBackFunc}: Props) => {
  console.log(userName, sender);
  const messageData = [
    {id: 1, chatId: id, content: 'hi', photos: [], sentAt: '2023-06-20T10:30:00Z', sender: userName},
    {id: 2, chatId: id, content: 'hows it going?', photos: [], sentAt: '2023-06-20T10:32:00Z', sender}]

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 bg-blue-500 text-white">
        <div className="flex items-center">
          <BiArrowBack className="mr-2 cursor-pointer" onClick={goBackFunc} />
          <h1 className="text-xl">Chat with {sender}</h1>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 w-full">
        {messageData.map((message) => (
         <div key={message.id} className={`mb-4 w-full`}>
            <div className="text-xs">{format(parseISO(message.sentAt), 'MM/dd/yyyy, hh:mm:ss a')}</div>
            <div dir={message.sender === userName ? 'rtl' : ''}>{message.content}</div>
            <div className="flex mt-2">
              {message.photos.map((photo) => (
                <Image
                  key={Math.random()}
                  src={photo}
                  alt="imageThumbnail"
                  className="h-1/8 w-1/8 object-cover rounded-full mr-2"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <form className="p-4">
        <input type="text" className="border rounded-lg p-2 w-full" />
      </form>
    </div>
  );
};

export default ChatConversation;