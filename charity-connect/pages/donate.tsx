"use client";
import { useState } from "react";
import "../app/globals.css";
import Calendar from "../app/components/Donation/Calendar.jsx";
import NavBar from "../app/components/Navbar.tsx"

type Props = {};

function Donate({}: Props) {
  const [calendarValue, setCalendarValue] = useState("");

  const handleCalendarChange = (element: any, currentValue: string) => {
    setCalendarValue(currentValue);
  };

  return (
    // <div className="fixed w-full bg-[#01002e] z-10 shadow-sm text-white justify-items-center">
    <>
      <NavBar />
      <div className="flex justify-center w-full h-full">
        <div className="absolute top-24 flex flex-col justify-evenly w-1/2 h-3/5 border-[5px]">
          <label htmlFor="description" >Description</label>
          <input type="text" name="description" />
          <label htmlFor="tenure" >Time Owned</label>
          <input type="text" name="tenure" />
          <label htmlFor="location" >Location</label>
          <input type="text" name="location" />
          <label htmlFor="features" >Features</label>
          <input type="text" name="features" />
          <label htmlFor="cargory" >Category</label>
          <input type="text" name="category" />
          <label htmlFor="delivery" >Delivery</label>
          <input type="text" name="delivery" />
          <Calendar
          options={{
            value: calendarValue,
            onchange: handleCalendarChange,
            readonly: false,
            placeholder: "Choose a date"
          }}
          />
          <button>Donate</button>
        </div>
      </div>
      </>
  );
}

export default Donate;
