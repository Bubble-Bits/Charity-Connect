'use client';

import { BiArrowBack } from 'react-icons/bi';
import Image from 'next/image';
import { format, parseISO } from "date-fns";
import { IoMdSend } from 'react-icons/io';
//import io from 'socket.io-client';
import { useState, useEffect } from 'react';
import axios from 'axios';

type Props = {
  id: number
  userId: String
  goBackFunc: () => void
  sender: string
}

// let socket;

const ChatConversation = ({id, userId, sender, goBackFunc}: Props) => {
  const messageData = [
    {id: 1, chatId: id, content: 'hi', photos: [], sentAt: '2023-06-20T10:30:00Z', sender: userId},
    {id: 2, chatId: id, content: 'hows it going?', photos: [], sentAt: '2023-06-20T10:32:00Z', sender}]

  const [chatInput, setInput] = useState('');

  // useEffect(() => {
  //   socketInitializer();
  // }, [])

  // async function socketInitializer() {
  //   // await axios.get('api/socket');
  //   //socket = io();
  // }

  const sendMessage = () => {
    console.log(chatInput);
    const data = {chatId: '60c945d72fbb363a38e2f48a', chatInput, userId};
    axios.post('../../api/register', data).then((res) => {
      console.log(res);
    }
    ).catch((err) => {
      console.log(err);
    })
  }

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
            <div dir={message.sender === userId ? 'rtl' : ''}>{message.content}</div>
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
      <form className="p-4 flex flex-row">
      <textarea
        className="border rounded-lg p-2 flex-grow resize-none overflow-y-auto"
        rows={2}
        onChange={(event) => {setInput(event.target.value)}}
      />
      <IoMdSend className="object-center h-full w-1/5" onClick={sendMessage}/>
</form>

    </div>
  );
};

export default ChatConversation;