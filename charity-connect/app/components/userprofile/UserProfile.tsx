



export default function UserProfile() {

  var imgLink = "https://www.interstatedevelopment.com/wp-content/uploads/2019/04/generic-avatar-1.jpg";

  return (
    <div className="text-center border-solid border-2 border-red-600">
      <div className="border-solid border-2 border-purple-500">Nav Bar that displays home button, and Profile title</div>
      {/* <div className="place-items-center border-solid border-2 border-purple-500 m-4 w-1/5">Profile Pic
    </div> */}
      <div className="border-solid border-2 border-purple-500 m-4">Profile Pic</div>
      <div className="flex items-center justify-center ">
        <img src={imgLink} alt="image" className="self-center w-10 h-10 rounded-full border-solid border-2 border-blue-900"></img>
      </div>
      <div className="border-solid border-2 border-purple-500 m-4">User Name</div>
      <input className="bg-slate-200"></input>
      <div className="border-solid border-2 border-purple-500 m-4">User Bio</div>
      <input className="bg-slate-200"></input>
      <div className="border-solid border-2 border-purple-500 m-4">Posted | Claimed </div>
      <div className="grid grid-cols-2 gap-4 place-content-center h-200 p-4">
        <div className="border-solid border-2 border-purple-500">1</div>
        <div className="border-solid border-2 border-purple-500">2</div>
        <div className="border-solid border-2 border-purple-500">3</div>
        <div className="border-solid border-2 border-purple-500">4</div>
      </div>
    </div>
  );

}