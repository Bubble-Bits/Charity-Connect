"use client";
import { useState } from "react";
import "../app/globals.css";
import Calendar from 'react-calendar';
import NavBar from "../app/components/Navbar";
import axios from 'axios';

type Props = {};

function Donate({}: Props) {
  const categories: string[] = ['Apparel', 'Electronics', 'Entertainment', 'Family', 'Garden and Outdoors', 'Hobbies', 'Homegoods', 'Music',
  'Sports', 'Supplies', 'Toys and Games', 'Vehicles', 'Other']

  const [opened, openModal] = useState(false);

  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [owned, setOwned] = useState(`${new Date()}`);
  const [address, setAddress] = useState('');
  const [features, setFeatures] = useState('');
  const [category, setCategory] = useState('Apparel');
  const [delivery, setDelivery] = useState('Pickup');

  const textStyle: string="text-white";
  const textInput: string="w-4/5 rounded peer";

  const submitInformation = async (dataSet: object) => {
    if (images.length && name && description && address) {
      // !Address to be changed for deployment
      await axios.post('http://localhost:3000/api/items', dataSet);
    }
    console.log(dataSet);
  }

  return (
    <div className="bg-white">
      <NavBar />
      <div className="flex justify-center w-full h-full">
        <div className="absolute top-20 flex flex-col justify-evenly items-center w-screen h-screen border-[5px] bg-[#01002e]">

          <label htmlFor="images" className={textStyle}>Upload Images</label>
          <input type="file" className={textStyle} name="images"></input>

          <label htmlFor="name" className={textStyle}>Item Name</label>
          <input type="text" name="name" className={textInput} onChange={(e)=>{setName(e.target.value)}}/>

          <label htmlFor="description" className={textStyle}>Description</label>
          <textarea name="description" rows={3} className={textInput} placeholder="Insert Description Here" onChange={(e)=>{setDescription(e.target.value)}}></textarea>

          <button onClick={()=>{openModal(!opened)}} className="text-white bg-green-500 w-1/2 rounded hover:bg-green-700">Select Date Owned</button>
          <input type="text" name="tenure" disabled className={textInput} placeholder={owned}/>
          {opened ?
          <div className="absolute flex justify-center items-center w-full h-full bg-black/50">
            <Calendar className="bg-white w-1/2 h-1/4" onChange={(e: any)=> {setOwned(e); openModal(!opened);}}/>
          </div>
          : null}

          <label htmlFor="address" className={textStyle}>Address</label>
          <input type="text" name="address" className={textInput} onChange={(e)=>{setAddress(e.target.value)}}/>

          <label htmlFor="features" className={textStyle}>Features</label>
          <input type="text" name="features" className={textInput} placeholder="List Features Here Separate By Commas" onChange={(e)=>{setFeatures(e.target.value)}}/>

          <label htmlFor="category" className={textStyle}>Category</label>
          <select name="category" className={textInput} onChange={(e)=>{setCategory(e.target.value)}}>
            {categories.map(category => (
              <option value={category} key={category}>{category}</option>
            ))}
          </select>

          <label htmlFor="delivery" className={textStyle}>Preferred Delivery Method</label>
          <select name="delivery" className={textInput} onChange={(e)=>{setDelivery(e.target.value)}}>
            <option value="pickup">Pickup</option>
            <option value="shipping">Shipping</option>
          </select>

          <button className="text-white bg-green-500 w-4/5 rounded hover:bg-green-700" onClick={()=>{submitInformation({images, name, description, owned, address, features, category, delivery})}}>Donate</button>

        </div>
      </div>
    </div>
  );
}

export default Donate;
