"use client";
import Link from 'next/link';
import { useState } from 'react';
import ChatConversation from './Convo';
import Image from 'next/image'


type Props = {
}

function Chats(props: Props) {
  // const convoData = props.
  const username = 'bob';
  const chatData = [
    {id: 1, users: [{name: 'bob'}, {name: 'ned'}]},
    {id: 2, users: [{name: 'bob'}, {name: 'nancy'}]},
    {id: 3, users: [{name: 'bob'}, {name: 'fred'}]},
    {id: 4, users: [{name: 'bob'}, {name: 'arnold'}]},
    {id: 5, users: [{name: 'bob'}, {name: 'vincent'}]}]

  const [chatSelected, setSelected] = useState(-1);

  const handleChatSelect = (id: number) =>  {
    setSelected(id);
  }

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
      text-green-700">
      {chatSelected < 0 ? (
        <div className="flex-grow flex flex-col">
          <div className="text-3xl font-bold p-4 bg-green-600 text-blue-200">Chats</div>
          <hr className="border-black mb-6" />
          <div className="flex flex-col items-start overflow-y-auto">
            {chatData.map((chat, counter) => (
              <div
                key={chat.id}
                className="w-full px-4 py-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleChatSelect(counter)}
              >
                <div className="flex items-center">
                  <Image src='https://res.cloudinary.com/dzadys1ug/image/upload/v1680980608/fmxs3bgftywl7q3ctmek.jpg' alt='profpic' width='10' height='10' className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0 mr-3" />
                  <div className="flex flex-col">
                    <div className="text-base font-bold">{chat.users[1].name}</div>
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
          userName={username}
          sender={chatData[chatSelected].users[1].name}
          goBackFunc={() => setSelected(-1)}
        />
      )}
    </div>

  )

}

export default Chats;