"use client";
import { useState } from "react";
import "../app/globals.css";
import Calendar from 'react-calendar';
import NavBar from "../app/components/Navbar"

type Props = {};

function Donate({}: Props) {
  const [opened, openModal] = useState(false);
  const [owned, setOwned] = useState(`${new Date()}`)

  const textStyle: string="text-white";
  const textInput: string="w-4/5 rounded";

  return (
    // <div className="fixed w-full bg-[#01002e] z-10 shadow-sm text-white justify-items-center">
    <div className="bg-white">
      <NavBar />
      <div className="flex justify-center w-full h-full">
        <div className="absolute top-24 flex flex-col justify-evenly items-center w-1/2 h-4/5 border-[5px] bg-[#01002e]">
          <label htmlFor="images" className={textStyle}>Upload Images</label>
          <input type="file" className={textStyle} name="images"></input>
          <label htmlFor="description" className={textStyle}>Description</label>
          <input type="text" name="description" className={textInput}/>
          <button onClick={()=>{openModal(!opened)}} className={textStyle}>Select Date Owned</button>
          <input type="text" name="tenure" disabled className={textInput} placeholder={owned}/>
          <label htmlFor="address" className={textStyle}>Address</label>
          <input type="text" name="address" className={textInput}/>
          <label htmlFor="features" className={textStyle}>Features</label>
          <input type="text" name="features" className={textInput}/>
          <label htmlFor="cargory" className={textStyle}>Category</label>
          <input type="text" name="category" className={textInput}/>
          <label htmlFor="delivery" className={textStyle}>Delivery</label>
          <select name="delivery" className={textInput}>
            <option value="pickup">Pickup</option>
            <option value="shipping">Shipping</option>
          </select>
          {opened ?
          <div className="absolute flex justify-center items-center w-full h-full bg-white">
            <Calendar onChange={(e: any)=> {setOwned(e); openModal(!opened);}}/>
          </div>
          : null}
          <button className="text-white bg-green-500 w-4/5 rounded">Donate</button>
        </div>
      </div>
      </div>
  );
}

export default Donate;
