import Navbar from '@/app/components/Navbar';
import ItemList from '@/app/components/ItemList';
import '../app/globals.css'

export default function Homepage() {
  return (
    <div className='relative'>
      <Navbar />
      <div className='absolute top-0 left-0 right-0 bottom-0 h-screen'>
        <div className='mt-20 h-4/5 w-screen overflow-x-hidden '>
          <ItemList />
        </div>
        <div className='mt-0.5 w-screen h-1/5 bg-[#01002e]'>
          <div>About</div>
          <div>Terms & Policy</div>
        </div>
      </div>
    </div>
  )
}