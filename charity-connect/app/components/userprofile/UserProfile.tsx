import { useState, useEffect } from "react";
import ProfileMenu from "./ProfileMenu";
import Link from "next/link";
import Logo from "../Logo";
import Image from "next/image";
import useAuth from "@/firebase/AuthState";
import axios from "axios";
import ProfileImageUploader from "./ProfileImageUploader";
import { da } from "date-fns/locale";
import UserProfilePostsGrid from "./UserProfilePostsGrid";

type Props = {
  localId: any
};

export default function UserProfile({ localId }: Props) {
  var imgLink =
    "https://www.interstatedevelopment.com/wp-content/uploads/2019/04/generic-avatar-1.jpg";
  var claimedDonation =
    "https://img.freepik.com/premium-vector/donation-box-quarantine-time_291916-2.jpg?w=2000";
  var postedDonation =
    "https://static.vecteezy.com/system/resources/thumbnails/001/234/040/small/cartoon-donation-box.jpg";


  const user = useAuth();
  // console.log(user);


  async function getUser() {
    const res = await axios.get('api/register', {
      params: {
        localId: user?.localId
      }
    });
    console.log("current user: ", res.data);
    setCurrUser(res.data.user);
    return res.data.user;
  };

  function createNewUser(newUser: {}) {
    axios.post('api/register',
      {
        params: {
          newUser: {
            localId: user?.localId,
            chatIds: [],
            chats: [],
            postedItems: [],
            claimedItems: [],
            name: name,
            email: user?.email,
            bio: bio,
            profilePic: profilePicUrl,
            address: "198 South Young Ave. Providence, RI 02904",
            itemsClaimed: 0,
            itemsSuccessClaimed: 0,
            blocked: []
          },
        }
      }).then(function (res) {
        console.log("response: ", res);
      });
  };

  function updateUser(updatedUser: {}) {
    axios.put('api/register',
      {
        params: {
          updatedUser: {
            localId: user?.localId,
            chatIds: [],
            chats: [],
            postedItems: [],
            claimedItems: [],
            name: name,
            email: user?.email,
            bio: bio,
            profilePic: profilePicUrl,
            address: "198 South Young Ave. Providence, RI 02904",
            itemsClaimed: 0,
            itemsSuccessClaimed: 0,
            blocked: []
          },
        }
      }).then(function (res) {
        console.log("response: ", res.data);
      }).catch((error) => {
        console.log('update user error: ', error);
      });
  };

  function getItems() {
    axios.get('api/getMapItems').then((res) => {
      console.log('items: ', res.data);
      //setItems(res.data);
    })
  }

  const toggleImageShown = () => {
    setShowPostedDonations(!showPostedDonations);
  };

  const [showPostedDonations, setShowPostedDonations] = useState(true);
  const [showUpdatePicMenu, setShowUpdatePicMenu] = useState(false);
  const [profilePicUrl, setProfilePicUrl] = useState<any>();
  const [name, setName] = useState("");
  const [bio, setBio] = useState<any>();
  const [address, setAddress] = useState("");
  const [id, setId] = useState("");
  const [claimedItemIds, setClaimedItemIds] = useState([]);
  const [postedItemIds, setPostedItemIds] = useState([]);
  const [currUser, setCurrUser] = useState({
    localId: "",
    chatIds: [],
    chats: [],
    postedItems: [],
    claimedItems: [],
    name: "",
    email: "",
    bio: "",
    profilePic: imgLink,
    address: "",
    itemsClaimed: 0,
    itemsSuccessClaimed: 0,
    blocked: []
  });

  useEffect(
    () => {
      axios.get('api/register', {
        params: {
          localId: localId
        }
      }).then((data) => {
        console.log('data: ', data.data.user);
        setCurrUser(data.data.user);
        setProfilePicUrl(data.data.user.profilePic);
        setName(data.data.user.name);
        setBio(data.data.user.bio);
        setAddress(data.data.user.address);
        setId(data.data.user.id);
        setPostedItemIds(data.data.user.postedItemIds);
        setClaimedItemIds(data.data.user.claimedItemIds);
        getItems();
      })
    }, [localId]);

  return (
    user ? //don't render screen until valid user obj is retrieved
      <div>
        <div className="bg-[#01002e] text-white pt-4 pl-4">
          <Logo />
          {/* <div className="text-xs">user score: n/a</div>
          <div className="text-xs">block user</div> */}
        </div>
        {/* <button onClick={getUser}>
          Test GET request</button>
        <br></br>
        <button onClick={createNewUser}>
          Save new user</button>
        <br></br>
        <button onClick={updateUser}>
          Update user info</button> */}
        <div className="text-center h-full bg-[#01002e] overflow-y-auto text-white">
          <div className="flex items-center justify-center mt-4">
            <Image
              src={profilePicUrl}
              alt="image"
              height={40}
              width={40}
              className="self-center w-40 h-40 rounded-full"
            />
          </div>
          <div className="m-4">
            {showUpdatePicMenu ?
              <ProfileImageUploader
                closeImageUploader={
                  () => {
                    setShowUpdatePicMenu(!showUpdatePicMenu);
                  }}
                updatePhotoUrl={setProfilePicUrl}
                updateUser={updateUser} /> :
              <button className="text-white bg-green-500 w-1/3 rounded hover:bg-green-700"
                onClick={
                  () => {
                    setShowUpdatePicMenu(!showUpdatePicMenu);
                    console.log(profilePicUrl);
                  }}>
                update picture
              </button>}
          </div>


          <br></br>
          <input
            className="text-black bg-slate-200 p-1"
            value={name} onChange={(e) => { //state will no longer update dynamically
              setName(e.target.value);
              updateUser({});
            }}
          ></input>
          {/* <p>{id}</p> */}
          <div className="m-4">
            <button className="text-white bg-green-500 w-1/10 rounded hover:bg-green-700" onClick={() => {
              console.log('username updated to: ', name);
            }}>
              update username
            </button>
          </div>

          <br></br>
          <textarea
            className="text-black bg-slate-200 p-1 w-9/12"
            rows={2} value={address} onChange={(e) => { //state will no longer update dynamically
              setName(e.target.value);
              updateUser({});
            }}
          ></textarea>
          <div className="m-4">
            <button className="text-white bg-green-500 w-1/10 rounded hover:bg-green-700" onClick={() => {
              console.log('username updated to: ', name);
            }}>
              update address
            </button>
          </div>

          <label>Bio</label>
          <br></br>
          <textarea
            className="text-black bg-slate-200 p-1"
            value={bio}
            rows={3}
            onChange={(e) => {
              setBio(e.target.value);
              updateUser({});
            }}
          />
          <div className="m-4">
            <button className="text-white bg-green-500 w-1/10 rounded hover:bg-green-700" onClick={() => {
              console.log("user bio updated to: ", bio);
            }}>
              update bio
            </button>
          </div>



          <ProfileMenu onShowDonationClick={toggleImageShown} />
          <UserProfilePostsGrid postedItemIds={postedItemIds} claimedItemIds={claimedItemIds} id={id} showPostedDonations={showPostedDonations} />
          {/* <div className="grid grid-cols-2 grid-rows-3 gap-4 place-content-center h-200 p-4">
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
          </div> */}
        </div>
      </div>
      : <div>Loading...</div>
  );
}
