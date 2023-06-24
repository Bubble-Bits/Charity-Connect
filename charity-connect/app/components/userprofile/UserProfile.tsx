import Navbar from "../Navbar";
import { useState } from "react";
import ProfileMenu from "./ProfileMenu";
import Link from "next/link";
import Logo from "../Logo";



export default function UserProfile() {

  var imgLink = "https://www.interstatedevelopment.com/wp-content/uploads/2019/04/generic-avatar-1.jpg";
  var claimedDonation = "https://img.freepik.com/premium-vector/donation-box-quarantine-time_291916-2.jpg?w=2000";
  var postedDonation = "https://static.vecteezy.com/system/resources/thumbnails/001/234/040/small/cartoon-donation-box.jpg"

  var user = {
    name: "Jane Doe",
    email: "test@testmail.com",
    bio: "Moving soon and looking to donate lotsa stuff!",
    address: `198 South Young Ave. Providence, RI 02904`,
    itemsClaimed: 0,
    itemsSuccessClaimed: 0,
    blocked: [],
    chats: { create: [] }, // Empty array for chats
    chatIds: [], // Empty array for chatIds
  };

  const toggleImageShown = () => {
    setShowPostedDonations(!showPostedDonations);
  }

  const [showPostedDonations, setShowPostedDonations] = useState(true);
  //bg-[#01002e]
  return (
    <div>
      {/* <div>
        <Navbar />
      </div> */}
      <div className="bg-[#01002e] text-white pt-4 pl-4">
        <Logo />
      </div>
      <div className="text-center h-full bg-[#01002e] overflow-y-auto text-white">
        <div className="flex items-center justify-center mt-4">
          <img src={imgLink} alt="image" className="self-center w-40 h-40 rounded-full"></img>
        </div>
        <div className="m-4">
          <button className="text-white bg-green-500 w-1/3 rounded hover:bg-green-700">update picture</button>
        </div>


        <label>Name</label>
        <br></br>
        <input className="text-black bg-slate-200 p-1" defaultValue={user.name}></input>
        <div className="m-4">
          <button className="text-white bg-green-500 w-1/10 rounded hover:bg-green-700">update username</button>
        </div>



        <label>Bio</label>
        <br></br>
        <textarea className="text-black bg-slate-200 p-1" defaultValue={user.bio} rows={3} />
        <div className="m-4">
          <button className="text-white bg-green-500 w-1/10 rounded hover:bg-green-700">update bio</button>
        </div>


        <ProfileMenu onShowDonationClick={toggleImageShown} />
        <div className="grid grid-cols-2 grid-rows-3 gap-4 place-content-center h-200 p-4">
          <div className="bg-gray-500">
            {showPostedDonations ?
              <Link href="/donate">
                Create New Post
              </Link> :
              <img src={claimedDonation}></img>}
          </div>
          <div className="">
            {showPostedDonations ? <img src={postedDonation}></img> : <img src={claimedDonation}></img>}
          </div>
          <div className="">
            {showPostedDonations ? <img src={postedDonation}></img> : <img src={claimedDonation}></img>}
          </div>
          <div className="">
            {showPostedDonations ? <img src={postedDonation}></img> : <img src={claimedDonation}></img>}
          </div>
          <div className="">
            {showPostedDonations ? <img src={postedDonation}></img> : <img src={claimedDonation}></img>}
          </div>
          <div className="">
            {showPostedDonations ? <img src={postedDonation}></img> : <img src={claimedDonation}></img>}
          </div>
        </div>
      </div>
    </div>
  );

}