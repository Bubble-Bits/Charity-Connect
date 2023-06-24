"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ChatConversation from './Convo';
import Image from 'next/image'
import axios from 'axios';

type Props = {
  userId: string
}

function Chats(props: Props) {
  // const convoData = props.

  const [chats, setChats] = useState([]);
  const userId = props.userId;

  useEffect(() => {

    axios.get(`../../api/getChats?userId=${userId}`).then((res) => {
      setChats(res.data.reduce((acc: any[], currChat: any) => {
        const output = acc;
        let username;
        if (currChat.users[0].id === userId) {
          username = currChat.users[1].name;
        } else {
          username = currChat.users[0].name;
        }
        const messages = currChat.messages;
        const chatId = currChat.id;
        output.push({username, chatId, messages});
        return output;
      }, []));
    })
  }, [userId])

  const [chatSelected, setSelected] = useState('');
  const [nameSelected, setName] = useState('');
  const [selectedMessages, setMessages] = useState([]);

  const handleChatSelect = (id: string) =>  {
    setSelected(id);
  }
  console.log(chatSelected.length);

  return (
    <div
      className="
      fixed
      bottom-0
      right-0
      bg-blue-200
      w-full
      md:w-1/3
      lg:w-1/4
      xl:w-1/5
      h-full
      pt-20
      md:h-3/5
      md:pt-0
      lg:h-3/5
      lg:pt-0
      xl:h-3/5
      xl:pt-0
      flex
      flex-col
      text-green-600">
      {!chatSelected.length ? (
        <div className="flex-grow flex flex-col">
          <div className="text-3xl font-bold p-4 bg-green-800 text-blue-200">Chats</div>
          <hr className="border-black mb-6" />
          <div className="flex flex-col items-start overflow-y-auto">
            {chats.map((chat: any, counter: number) => (
              <div
                key={chat.chatId}
                className="w-full px-4 py-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => {handleChatSelect(chat.chatId); setName(chat.username); setMessages(chat.messages)}}
              >
                <div className="flex items-center">
                  <Image src='https://res.cloudinary.com/dzadys1ug/image/upload/v1680980608/fmxs3bgftywl7q3ctmek.jpg' alt='profpic' width='10' height='10' className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0 mr-3" />
                  <div className="flex flex-col">
                    <div className="text-base font-bold">{chat.username}</div>
                    <div className="text-sm text-gray-500">Last message timestamp</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <ChatConversation
          id={chatSelected}
          userId={userId}
          chatWith={nameSelected}
          goBackFunc={() => setSelected('')}
          messages={selectedMessages}
        />
      )}
    </div>

  )

}

export default Chats;