import Navbar from "../Navbar";
import { useState } from "react";
import ProfileMenu from "./ProfileMenu";
import Link from "next/link";
import Logo from "../Logo";
import Image from "next/image";
import useAuth from "@/firebase/AuthState";
import axios from "axios";

export default function UserProfile() {
  var imgLink =
    "https://www.interstatedevelopment.com/wp-content/uploads/2019/04/generic-avatar-1.jpg";
  var claimedDonation =
    "https://img.freepik.com/premium-vector/donation-box-quarantine-time_291916-2.jpg?w=2000";
  var postedDonation =
    "https://static.vecteezy.com/system/resources/thumbnails/001/234/040/small/cartoon-donation-box.jpg";


  const user = useAuth();
  console.log(user);

  // var user = {
  //   name: "Jane Doe",
  //   email: "test@testmail.com",
  //   bio: "Moving soon and looking to donate lotsa stuff!",
  //   address: `198 South Young Ave. Providence, RI 02904`,
  //   itemsClaimed: 0,
  //   itemsSuccessClaimed: 0,
  //   blocked: [],
  //   chats: { create: [] }, // Empty array for chats
  //   chatIds: [], // Empty array for chatIds
  // };

  const toggleImageShown = () => {
    setShowPostedDonations(!showPostedDonations);
  };

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
      <button onClick={
        () => axios.get('api/register', {
          params: {
            localId: user?.localId
          }
        }).then(function (res) {
          console.log("response: ", res);
        })}>
        Test GET request</button>
      <br></br>
      <button onClick={
        () => axios.post('api/register',
          {
            params: {
              newUser: {
                localId: user?.localId,
                chatIds: [],
                chats: [],
                postedItems: [],
                claimedItems: [],
                name: user?.displayName,
                email: user?.email,
                bio: "this is a test bio",
                profilePic: user?.photoUrl,
                address: "this is a test address",
                itemsClaimed: 0,
                itemsSuccessClaimed: 0,
                blocked: []
              },
            }
          }).then(function (res) {
            console.log("response: ", res);
          })}>
        Test POST request</button>
      <br></br>
      <button onClick={
        () => axios.put('api/register',
          {
            params: {
              updatedUser: {
                localId: user?.localId,
                chatIds: [],
                chats: [],
                postedItems: [],
                claimedItems: [],
                name: user?.displayName,
                email: user?.email,
                bio: "this is a test bio",
                profilePic: user?.photoUrl,
                address: "this is a test address",
                itemsClaimed: 0,
                itemsSuccessClaimed: 0,
                blocked: []
              },
            }
          }).then(function (res) {
            console.log("response: ", res);
          })}>
        Test PUT request</button>
      <div className="text-center h-full bg-[#01002e] overflow-y-auto text-white">
        <div className="flex items-center justify-center mt-4">
          <Image
            src={user?.photoUrl}
            alt="image"
            height={40}
            width={40}
            className="self-center w-40 h-40 rounded-full"
          />
        </div>
        <div className="m-4">
          <button className="text-white bg-green-500 w-1/3 rounded hover:bg-green-700">
            update picture
          </button>
        </div>

        <label>Name</label>
        <br></br>
        <input
          className="text-black bg-slate-200 p-1"
          defaultValue={user?.displayName}
        ></input>
        <div className="m-4">
          <button className="text-white bg-green-500 w-1/10 rounded hover:bg-green-700">
            update username
          </button>
        </div>

        <label>Bio</label>
        <br></br>
        <textarea
          className="text-black bg-slate-200 p-1"
          defaultValue={"user bio"}
          rows={3}
        />
        <div className="m-4">
          <button className="text-white bg-green-500 w-1/10 rounded hover:bg-green-700">
            update bio
          </button>
        </div>

        <ProfileMenu onShowDonationClick={toggleImageShown} />
        <div className="grid grid-cols-2 grid-rows-3 gap-4 place-content-center h-200 p-4">
          <div className="bg-gray-500">
            {showPostedDonations ? (
              <Link href="/donate">Create New Post</Link>
            ) : (
              <Image src={claimedDonation} alt="claimDonation" height={200} width={200} />
            )}
          </div>
          <div className="">
            {showPostedDonations ? (
              <Image src={postedDonation} alt="post Donation" height={200} width={200} />
            ) : (
              <Image src={claimedDonation} alt="claimed Donation" height={200} width={200} />
            )}
          </div>
          <div className="">
            {showPostedDonations ? (
              <Image src={postedDonation} alt="Post Dontation" height={200} width={200} />
            ) : (
              <Image src={claimedDonation} alt="Claimed Donation" height={200} width={200} />
            )}
          </div>
          <div className="">
            {showPostedDonations ? (
              <Image src={postedDonation} alt="Posted Donation" height={200} width={200} />
            ) : (
              <Image src={claimedDonation} alt="Claimed Donation" height={200} width={200} />
            )}
          </div>
          <div className="">
            {showPostedDonations ? (
              <Image src={postedDonation} alt="Posted Donation" height={200} width={200} />
            ) : (
              <Image src={claimedDonation} alt="Claimed Donation" height={200} width={200} />
            )}
          </div>
          <div className="">
            {showPostedDonations ? (
              <Image src={postedDonation} alt="Posted Donation" height={200} width={200} />
            ) : (
              <Image src={claimedDonation} alt="Claimed Donation" height={200} width={200} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
