import Image from "next/image";
import Navbar from "../app/components/Navbar";
import "@/app/globals.css";

export default function itemPage() {
  /*

  Grid = create the grid
  Grid-cols-7 = create the columns

  col-span-5 = dividing the grid into 5/7
  col-span-2 = dividing the grid into 2/7


  MOBILIZATION

   // sm  md lg xl .....
          ---------------
      block


        md:grid  > display grid on medium screen and larger
  md:grid lg:block

  items-center = vertically center
  justify-content = horizontally center


  */

  return (
    // This keeps it fixed in the div. How do we keep everything inside of the div?
    <div className="fixed inset-0 border border-red-500">
      <Navbar />

      <div className="pt-24 md:grid grid-cols-7 h-full">
        <div className="space-y-2 col-span-5 pb-4 ">
          <div className="justify-center flex border border-red-500 ">
            Main Image
          </div>
          <div className="justify-center flex border border-red-500 ">
            Item gallery boxes
          </div>
        </div>

        <div className="space-y-2 col-span-2 bg-[#01002e] z-10 shadow-sm p-5 h-screen max-h-screen">
          <div className="h-5/6 overflow-y-scroll scrollbar-hide">
            <div className="text-xl text-green-500">
              {" "}
              2017 Lamborghini Diablo
            </div>

            <div className="text-md  text-white">Available</div>

            <div className="text-sm pb-5 text-white">
              Listed 2 days ago in San Francisco
            </div>

            <div className="text-xl  text-green-500">Item Description</div>

            <div className="text-md pb-5  text-white">
              This class sets a maximum height for the element, and any content
              that exceeds this height will be hidden due to the overflow-hidden
              utility class. This class sets a maximum height for the element,
              and any content that exceeds this height will be hidden due to the
              overflow-hidden utility class. This class sets a maximum height
              for the element, and any content that exceeds this height will be
              hidden due to the overflow-hidden utility class. This class sets a
              maximum height for the element, and any content that exceeds this
              height will be hidden due to the overflow-hidden utility class.
              This class sets a maximum height for the element, and any content
              that exceeds this height will be hidden due to the overflow-hidden
              utility class. This class sets a maximum height for the element,
              and any content that exceeds this height will be hidden due to the
              overflow-hidden utility class. This class sets a maximum height
              for the element, and any content that exceeds this height will be
              hidden due to the overflow-hidden utility class. This class sets a
              maximum height for the element, and any content that exceeds this
              height will be hidden due to the overflow-hidden utility class.
              This class sets a maximum height for the element, and any content
              that exceeds this height will be hidden due to the overflow-hidden
              utility class. This class sets a maximum height for the element,
              and any content that exceeds this height will be hidden due to the
              overflow-hidden utility class. This class sets a maximum height
              for the element, and any content that exceeds this height will be
              hidden due to the overflow-hidden utility class. This class sets a
              maximum height for the element, and any content that exceeds this
              height will be hidden due to the overflow-hidden utility class.
            </div>

            <div className="text-xl flex items-center pb-5">
              <div className="w-20 h-20 bg-gray-500 rounded-full inline-block"></div>
              <div className="inline-block pl-5  text-white">User Profile</div>
            </div>

            <div className="text-xl text-green-500">Location</div>
          </div>

          <div className="  w-full fixed bottom-0 bg-[#01002e] z-10 shadow-sm text-xl border-[red]">
            <div className="text-white pb-5">Message</div>
            <textarea
              className="w-10/12 rounded-lg  h-min overflow-y-scroll text-black placeholder-gray-400"
              placeholder="Send a message to the donor!"
            ></textarea>
            <button className=" text-md rounded-lg bg-gray-500 w-full flex justify-center  text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
