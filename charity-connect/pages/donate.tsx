"use client";
import { useState } from "react";
import "../app/globals.css";
import Calendar from 'react-calendar';
import NavBar from "../app/components/Navbar"

type Props = {};

function Donate({}: Props) {
  const [value, setValue] = useState(new Date());
  const [opened, openModal] = useState(false);

  return (
    // <div className="fixed w-full bg-[#01002e] z-10 shadow-sm text-white justify-items-center">
    <div className="bg-white">
      <NavBar />
      <div className="flex justify-center w-full h-full">
        <div className="absolute top-24 flex flex-col justify-evenly w-1/2 h-4/5 border-[5px] bg-[#01002e]">
          <input type="file" className="text-white"></input>
          <label htmlFor="description" className="text-white">Description</label>
          <input type="text" name="description" />
          <label htmlFor="tenure" className="text-white">Time Owned</label>
          <input type="text" name="tenure" disabled/>
          <label htmlFor="location" className="text-white">Location</label>
          <input type="text" name="location" />
          <label htmlFor="features" className="text-white">Features</label>
          <input type="text" name="features" />
          <label htmlFor="cargory" className="text-white">Category</label>
          <input type="text" name="category" />
          <label htmlFor="delivery" className="text-white">Delivery</label>
          <input type="text" name="delivery" />
          <button onClick={()=>{openModal(!opened)}} className="text-white">Select Date Owned</button>
        {opened ? <div className="absolute flex justify-center items-center w-full h-full">
          <Calendar onChange={(e: any)=> {console.log(e); setValue(e); openModal(!opened);}}/>
        </div> : null}
          <button className="text-white bg-green-500">Donate</button>
        </div>
      </div>
      </div>
  );
}

export default Donate;
