"use client";
import "../app/globals.css";
import axios from "axios";
require("dotenv").config();
import React, { useEffect, useState } from "react";
import exampleDataAddress from "./exampleData-address.js";
import exampleDataLocations from "./exampleData-locations.js";
import GoogleMapReact from "google-map-react";
import NavBar from "../app/components/Navbar";
import LocationPin from "../app/components/LocationPin";
import { BiSearch } from "react-icons/bi";

type Props = {
  user_address: any;
};

type handleEventProps = {
  event: object;
};

const defaultAddress = process.env.NEXT_PUBLIC_INPUT;
const pw = process.env.NEXT_PUBLIC_GEOLOCATION;
const googleApi = process.env.NEXT_PUBLIC_GOOGLEAPI || "1";

const Maps = ({ user_address }: Props) => {
  const [longitude, setLong] = useState(0);
  const [latitude, setLat] = useState(0);
  const [address, setAddress] = useState("");
  const [items, setItems] = useState(exampleDataLocations);
  const [search, setSearch] = useState<any>(defaultAddress);

  useEffect(() => {
    axios
      // grabs longitude & latitude based on given address
      .get(`https://api.opencagedata.com/geocode/v1/json?q=${search}&key=${pw}`)
      .then((response) => {
        console.log(response);
        //set those coordinates into my state
        setLong(response.data.results[0].geometry.lng);
        setLat(response.data.results[0].geometry.lat);
      })
      .catch((error) => {
        console.log(error);
      });
    // EXAMPLE DATA //
    // console.log(exampleDataAddress.data.results[0].geometry);
    // setLong(exampleDataAddress.data.results[0].geometry.lng);
    // setLat(exampleDataAddress.data.results[0].geometry.lat);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // setAddress(input);
  }, [items, address]);

  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 14,
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setAddress(search);
  };

  const handleChange = (event: any) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <div>
      <NavBar />
      <div className="absolute top-20 bg-[#3f50b5] flex-1 flex-col justify-center w-full h-full">
        <div className="border-2 p-2 m-2 rounded-md text-white text-center text-lg">
          <form onSubmit={handleSubmit}>
            <input
              className="text-black p-1 border-2 border-rose-600 rounded-full"
              type="text"
              placeholder=" Find a place"
              onChange={(e) => {
                handleChange(e);
              }}
            ></input>

            <button type="submit">
              <div className="p-2 bg-green-500 rounded-full text-black m-2 border-2 border-rose-600">
                <BiSearch />
              </div>
            </button>
          </form>

          <div>Address: {search}</div>
          <div>Longitude: {longitude}</div>
          <div>Latitude: {latitude}</div>
          {items.map((item) => (
            <LocationPin
              key={item.id}
              lat={item.lat}
              lng={item.lng}
              colorChoice="CornflowerBlue"
              data={item}
            />
          ))}
          <div
            // className="border-2 p-2 m-2 items-center"
            style={{ height: "80vh", width: "80vw" }}
          >
            <GoogleMapReact
              bootstrapURLKeys={{ key: googleApi }}
              center={{ lat: latitude, lng: longitude }}
              defaultZoom={defaultProps.zoom}
            >
              {items.map((item) => (
                <LocationPin
                  key={item.id}
                  lat={item.lat}
                  lng={item.lng}
                  colorChoice="CornflowerBlue"
                  data={item}
                />
              ))}

              <LocationPin
                lat={latitude}
                lng={longitude}
                colorChoice="DarkOrange"
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
