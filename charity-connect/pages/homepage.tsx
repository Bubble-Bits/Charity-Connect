import Navbar from '@/app/components/Navbar';
import ItemList from '@/app/components/ItemList';
import '../app/globals.css'
import Chats from "../app/components/chat/Chats";
import { useChats } from '../app/hooks/useChats';

export default function Homepage() {
  const { showChats, toggleChats } = useChats();
  return (
    <div className="bg-gradient-to-b from-indigo-900 to-indigo-600">
      <Navbar />
      <div className="bg-gradient-to-b from-indigo-900 to-indigo-600 min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <ItemList />
        </div>
      </div>
    </div>
  );
}
