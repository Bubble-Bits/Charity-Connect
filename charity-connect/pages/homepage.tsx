import Navbar from '@/app/components/Navbar';
import ItemList from '@/app/components/ItemList';
import Link from "next/link";
import '../app/globals.css'

export default function Homepage() {
  return (
    <div className='bg-[#01002e] h-[100vh]'>
      <Navbar />
      <ItemList />
      text
    </div>
  )
}