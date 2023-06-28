"use client";
import { useState, useEffect } from "react";
import "../app/globals.css";
import Calendar from "react-calendar";
import RootLayout from "../app/layout";
import axios from "axios";
import ImageUploader from "../app/components/Donation/ImageUploader";
import NavBar from "../app/components/Navbar";
import { AiOutlineCalendar } from 'react-icons/ai';
import useAuth from "@/firebase/AuthState";

type Props = {};

function Donate({}: Props) {
  const categories: string[] = [
    "Apparel",
    "Electronics",
    "Entertainment",
    "Family",
    "Garden and Outdoors",
    "Hobbies",
    "Homegoods",
    "Music",
    "Sports",
    "Supplies",
    "Toys and Games",
    "Vehicles",
    "Other",
  ];

  const user = useAuth();

  useEffect(()=> {
    user ?
    setUserEmail(user.email) :
    null
  }, [user])

  const [opened, openModal] = useState(false);

  const [userEmail, setUserEmail] = useState('');
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [owned, setOwned] = useState(`${new Date()}`);
  const [address, setAddress] = useState("");
  const [features, setFeatures] = useState("");
  const [category, setCategory] = useState("Apparel");
  const [delivery, setDelivery] = useState("Pickup");

  const textStyle: string = "text-white";
  const textInput: string = "w-4/5 rounded peer";

  const submitInformation = async (dataSet: object) => {
    try {
      // if (images.length && name && description && address) {
        await axios.post("/api/items", dataSet)
      // }
      }
    catch (err) {
      console.log(err);
    }
  };

  return (
    // <RootLayout>
    <div className="bg-white">
      <NavBar />
      <div className="flex justify-center w-full h-full">
        <div className="absolute top-20 flex flex-col justify-evenly items-center w-screen h-screen border-[5px] bg-[#01002e]">
          <label className={textStyle}>Upload Images</label>
          <ImageUploader />
          {/* <label className={textStyle}>Upload Images</label>
            <input type="file" className={textStyle} name="images"></input> */}

          <label className={textStyle}>Item Name</label>
          <input
            type="text"
            name="name"
            className={textInput}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <label className={textStyle}>Description</label>
          <textarea
            name="description"
            rows={3}
            className={textInput}
            placeholder="Insert Description Here"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>

          <label className={textStyle}>Select Date Obtained</label>
          <div className= {`${textInput} flex flex-row justify-between`}>
            <input
              type="text"
              name="tenure"
              disabled
              className="w-4/5 rounded peer"
              placeholder={owned}
            />
            <AiOutlineCalendar
            className="relative w-1/6 text-white bg-green-500 rounded hover:bg-green-700"
            onClick={() => {
              openModal(!opened);
            }}
            />
          </div>

          {opened ? (
            <div className="absolute flex justify-center items-center w-full h-full bg-black/50">
              <Calendar
                className="bg-white md:w-1/3 w-3/5 h-1/4 border-green-500 border-[2px]"
                onChange={(e: any) => {
                  setOwned(e);
                  openModal(!opened);
                }}
              />
            </div>
          ) : null}

          <label className={textStyle}>Address</label>
          <input
            type="text"
            name="address"
            className={textInput}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />

          <label className={textStyle}>Features</label>
          <input
            type="text"
            name="features"
            className={textInput}
            placeholder="List Features Here Separate By Commas"
            onChange={(e) => {
              setFeatures(e.target.value);
            }}
          />

          <label className={textStyle}>Category</label>
          <select
            name="category"
            className={textInput}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>

          <label className={textStyle}>Preferred Delivery Method</label>
          <select
            name="delivery"
            className={textInput}
            onChange={(e) => {
              setDelivery(e.target.value);
            }}
          >
            <option value="pickup">Pickup</option>
            <option value="shipping">Shipping</option>
          </select>

          <button
            className="text-white bg-green-500 w-4/5 rounded hover:bg-green-700"
            onClick={() => {
              submitInformation({
                user: userEmail,
                images,
                name,
                description,
                owned,
                address,
                features,
                category,
                delivery,
              });
            }}
          >
            Donate
          </button>
        </div>
      </div>
    </div>
    // </RootLayout>
  );
}

export default Donate;
