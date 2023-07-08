import Navbar from '@/app/components/Navbar';
import ItemList from '@/app/components/ItemList';
import '../app/globals.css'
import Chats from "../app/components/chat/Chats";
import { useChats } from '../app/hooks/useChats';

export default function Homepage() {
  const { showChats, toggleChats } = useChats();
  return (
    <div className='relative'>
      <Navbar onChatClick={toggleChats} />
      <div className='absolute top-0 left-0 right-0 bottom-0 h-screen'>
        {showChats && <Chats userId="64a07a8e4425cf31f6b98111" />}
        <div className='mt-20 h-4/5 w-screen overflow-x-hidden bg-[#01002e]'>
          <ItemList />
        </div>
        <div className='mt-0.5 w-screen h-1/5 bg-[#01002e]'>
          <button className='text-xl mr-5 bg-green-500 border border-solid border-green-500 rounded p-10 text-white'>Donate</button>
          <div>About</div>
          <div>Terms & Policy</div>
        </div>
      </div>
    </div>
  )
}