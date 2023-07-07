import Navbar from '@/app/components/Navbar';
import ItemList from '@/app/components/ItemList';
import Link from "next/link";
import '../app/globals.css'

export default function Homepage() {
  return (
    <div className='relative'>
      <Navbar />
      <div className='absolute top-0 left-0 right-0 bottom-0 h-screen'>
        <div className='mt-20 h-4/5 w-screen overflow-x-hidden bg-[#01002e]'>
          <ItemList />
        </div>
        <div className='mt-0.5 w-screen h-1/5 bg-[#01002e] flex justify-around items-center'>
        <div className="pt-20 ml-[15vh]">
              <Link
                href="/homepage"
                className="md:text-3xl md:mr-5 md:p-3
                bg-green-500 border border-solid border-white rounded-full inline-flex items-center justify-center min-w-[20rem]"
              >
                Want to Donate?
              </Link>
            </div>
            <div className="pt-20 ml-[15vh]">
              <Link
                href="/map"
                className="md:text-3xl md:mr-5 md:p-3
                bg-green-500 border border-solid border-white rounded-full inline-flex items-center justify-center min-w-[20rem]"
              >
                Search on a map
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}