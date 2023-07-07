"use client";
import { useState, useEffect } from 'react';
import ChatConversation from './Convo';
import Image from 'next/image'
import axios from 'axios';


import { formatDistanceToNow } from 'date-fns';

import { AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';
import { BiArrowBack } from "react-icons/bi";
import { FaCircleNotch } from 'react-icons/fa';

type Props = {
  userId: string
}

type User = {
  id: string;
  name: string;
};

function Chats(props: Props) {
  // const convoData = props.

  const [chats, setChats] = useState([]);
  const [loadingChats, setLoadingChats] = useState(true);
  const userId = props.userId;
  const [reload, setReload] = useState(0);
  const [isDeleting, setDeleting] = useState('');

  // useEffect(() => {
  //   socket.on('receive-message', (data) => {
  //     console.log('m, receieved', data);
  //   });

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  useEffect(() => {
    setLoadingChats(true);
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
        setLoadingChats(false);
        return output;
      }, []));
    })
  }, [userId, reload])

  const [chatSelected, setSelected] = useState('');
  const [nameSelected, setName] = useState('');
  const [selectedMessages, setMessages] = useState([]);

  const [showNewChatModal, setShowNewChatModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [userQuery, setUserQuery] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [idSelected, setId] = useState('');

  const handleChatSelect = (id: string) =>  {
    setSelected(id);
  }

  const handleNewChatClick = async () => {
    setShowNewChatModal(true);
    try {
      const response = await axios.get<User[]>('../../api/getUsers');
      setUsers(response.data);
    } catch (error) {
      console.error('Error getting users:', error);
    }

  }

  const handleNewChatClose = () => {
    setShowNewChatModal(false);
  }

  const startNewChat = async (event: any) => {
    event.preventDefault();

    if (idSelected.length) {
      try {
        const newChat = await axios.post(`../../api/chat?userIds=${userId},${idSelected}`);
        handleNewChatClose();
        console.log(newChat);
        setSelected(newChat.data.chat.id);
        setMessages(newChat.data.chat.messages);
        if (newChat.data.chat.users[0].id === userId) {
          setName(newChat.data.chat.users[1].name);
        } else {
          setName(newChat.data.chat.users[0].name);
        }
        setId('');
        setUserQuery('');
      } catch (error) {
        console.error('error creating chat');
      }
    } else {
      alert('No current user selected');
    }
  }

  const handleUserSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setUserQuery(value);
    setShowDropdown(value.length > 0); // Update the showDropdown state based on the input value
  };

  const renderDropdown = showDropdown && users.length > 0 && (
    <div className='bg-white cursor-pointer'>
      {users.map((user) => {
        if (user.name.toLowerCase().includes(userQuery.toLowerCase())) {
          return (
            <div key={user.id} onClick={() => { setUserQuery(user.name); setId(user.id); setShowDropdown(false); }}>
              {user.name}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );

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
      text-green-600
      overflow-y-auto">
      {!chatSelected.length ? (
        <div className="flex-grow flex flex-col">
          <div className='fixed w-full'>
            {showNewChatModal ?
              <div className="text-3xl font-bold p-4 bg-green-800 text-blue-200" >
                <BiArrowBack onClick={handleNewChatClose}/>
                New Chat
              </div> :
              <div className="text-3xl font-bold p-4 bg-green-800 text-blue-200" >
                <AiOutlinePlus onClick={handleNewChatClick}/>
                Chats
              </div>
            }
            <hr className="border-black mb-6" />
          </div>
          {showNewChatModal ? <></> :
            <div className="flex flex-col pt-28 items-start">
              {chats.map((chat: any, counter: number) => {
                const lastMessage = chat.messages.length > 0 ? chat.messages[chat.messages.length - 1] : null;
                const lastMessageText = lastMessage ? lastMessage.content.substring(0, 20) : '';
                const lastMessageTimestamp = lastMessage ? formatDistanceToNow(new Date(lastMessage.sentAt), { addSuffix: true }) : '';
                return (
                  <div
                    key={chat.chatId}
                    className="group w-full flex px-4 py-3 hover:bg-gray-100 cursor-pointer"
                  >
                    <div
                      className="flex items-center grow"
                      onClick={() => {handleChatSelect(chat.chatId); setName(chat.username); setMessages(chat.messages)}}
                    >
                      <Image src='https://res.cloudinary.com/dzadys1ug/image/upload/v1680980608/fmxs3bgftywl7q3ctmek.jpg' alt='profpic' width='10' height='10' className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0 mr-3" />
                      <div className="flex flex-col">
                        <div className="text-base font-bold">{chat.username}</div>
                        <div className="text-sm text-gray-500">{lastMessageText}</div>
                        <div className="text-sm text-gray-500">{lastMessageTimestamp}</div>
                      </div>
                    </div>
                    {isDeleting === chat.chatId ? <FaCircleNotch /> : <></>}
                    <AiOutlineDelete
                      onClick={async () => {
                        setDeleting(chat.chatId);
                        await axios.post(`../../api/deleteChat?chatId=${chat.chatId}`);
                        setReload(reload+1);
                      }}
                      className='hidden group-hover:block h-full items-center hover:text-black'/>
                  </div>
                )
              })}
              {loadingChats ? <div className='top-32 px-3'>Loading chat data ...</div> : <></>}
            </div>
          }
          {showNewChatModal && (
            <div className="relative top-32 w-full h-full flex-1 ">
              <form className='flex-col'>
              <input
                  type="text"
                  className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Start typing a username"
                  value={userQuery}
                  onChange={handleUserSearch}
                />
                {renderDropdown}
                <div className="mt-4 flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none cursor:pointer"
                    onClick={startNewChat}
                  >
                    Start Chat
                  </button>
                </div>
              </form>
            </div>
            )}
        </div>
      ) : (
        <ChatConversation
          id={chatSelected}
          userId={userId}
          chatWith={nameSelected}
          goBackFunc={() => {setSelected(''); setReload(reload+1);}}
          messages={selectedMessages}
        />
      )}
    </div>

  )

}

export default Chats;