import Navbar from '@/app/components/Navbar';
import ItemList from '@/app/components/ItemList';
import '../app/globals.css'

export default function Homepage() {
  return (
    <div className='relative'>
      <Navbar />
      <div className='h-full absolute top-0 mt-20'>
        <div className='mt-20'>
          <ItemList />
        </div>
        <div>About</div>
      </div>
    </div>
  )
}