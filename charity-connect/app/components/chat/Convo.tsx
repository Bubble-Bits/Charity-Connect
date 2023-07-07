"use client";

import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import { IoMdSend } from "react-icons/io";
// import io from 'socket.io-client';
// const socket = io(`${process.env.VERCEL_URL}:3001`);
import { useState, useEffect } from "react";
import axios from "axios";

type Props = {
  id: string;
  userId: string;
  goBackFunc: () => void;
  chatWith: string;
  messages: any[];
};

const ChatConversation = ({
  id,
  userId,
  chatWith,
  goBackFunc,
  messages,
}: Props) => {
  // const messageData = [
  //   {id: 1, chatId: id, content: 'hi', photos: [], sentAt: '2023-06-20T10:30:00Z', sender: userId},
  //   {id: 2, chatId: id, content: 'hows it going?', photos: [], sentAt: '2023-06-20T10:32:00Z', sender}]
  const [messageData, setMessageData] = useState(messages);
  const [chatInput, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isDelivered, setIsDelivered] = useState(false);

  const sendMessage = () => {
    setIsSending(true);
    setIsDelivered(false);
    const data = { chatId: id, chatInput, userId };
    axios.post(`../../api/message?chatId=${id}&chatInput=${chatInput}&userId=${userId}`)
    .then((res) => {
      setInput("");
      // socket.emit('send-message', res.data);
      const newMessageData = [...messageData, res.data];
      setMessageData(newMessageData);
      setIsSending(false);
      setIsDelivered(true);
    })
    .catch((err) => {
      console.log(err);
      setIsSending(false);
    });
  };

  // useEffect(() => {
  //   socket.on('receive-message', (message) => {
  //     setIsDelivered(false);
  //     const newMessageData = [...messageData, message];
  //     setMessageData(newMessageData);
  //   });

  //   return () => {
  //     socket.off('receive-message');
  //   };
  // }, [messageData]);


  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 bg-blue-500 text-white">
        <div className="flex items-center">
          <BiArrowBack className="mr-2 cursor-pointer" onClick={goBackFunc} />
          <h1 className="text-xl">Chat with {chatWith}</h1>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 w-full">
        {messageData.map((message) => (
          <div key={message.id} className={`mb-4 w-full`}>
            <div className="text-xs">
              {format(parseISO(message.sentAt), "MM/dd/yyyy, hh:mm:ss a")}
            </div>
            <div className={message.sender === userId ? "text-right rtl" : ""}>
              {message.content}
            </div>
            <div className="flex mt-2">
              {message.photos ? (
                message.photos.map((photo: string) => (
                  <Image
                    key={Math.random()}
                    src={photo}
                    alt="imageThumbnail"
                    className="h-1/8 w-1/8 object-cover rounded-full mr-2"
                  />
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col ml-2">
          {isSending && <span>Sending...</span>}
      </div>
      <form className="p-4 flex flex-row">
        <textarea
          className="border rounded-lg p-2 flex-grow resize-none overflow-y-auto"
          rows={2}
          value={chatInput}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <IoMdSend
          className="object-center h-full w-1/5"
          onClick={sendMessage}
        />
      </form>
    </div>
  );
};

export default ChatConversation;
