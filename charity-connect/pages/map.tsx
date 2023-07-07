"use client";
import "../app/globals.css";
import axios from "axios";
require("dotenv").config();
import React, { useEffect, useState } from "react";
import exampleDataAddress from "../app/components/exampleData-address.js";
// import exampleDataLocations from "../app/components/exampleData-locations";
import GoogleMapReact from "google-map-react";
import NavBar from "../app/components/Navbar";
import LocationPin from "../app/components/LocationPin";
import { BiSearch } from "react-icons/bi";

const defaultAddress = process.env.NEXT_PUBLIC_INPUT;
const pw = process.env.NEXT_PUBLIC_GEOLOCATION;
const googleApi = process.env.NEXT_PUBLIC_GOOGLEAPI || "1";

const Maps = () => {
  const [longitude, setLong] = useState(-74.0163584);
  const [latitude, setLat] = useState(40.63232);
  const [address, setAddress] = useState(defaultAddress);
  const [items, setItems] = useState<any>([]);
  const [search, setSearch] = useState<any>(defaultAddress);

  useEffect(() => {
    //fetches current user's address
    navigator.geolocation.getCurrentPosition((position) => {
      setLong(position.coords.longitude);
      setLat(position.coords.latitude);
    });

    axios
      .get("/api/getMapItems")
      .then((data) => {
        console.log("ITEM", data.data.items);
        setItems(data.data.items);
      })
      .catch((error) => {
        console.log("error====>", error);
      });
  }, [address]);

  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 14,
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setAddress(search);
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${search}&key=${pw}`
      );
      setLong(response.data.results[0].geometry.lng);
      setLat(response.data.results[0].geometry.lat);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event: any) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <div>
      <NavBar />
      <div className="absolute  top-20 bg-gradient-to-b from-indigo-900 to-indigo-600 flex-1 flex-col justify-center w-full h-full">
        <div className=" text-white text-center text-lg">
          <form onSubmit={handleSubmit} className="p-3 m-3">
            <input
              className="text-black p-2 px-4 rounded-full w-5/6"
              type="text"
              placeholder=" Find a place"
              onChange={(e) => {
                handleChange(e);
              }}
            ></input>

            <button type="submit" className="">
              <div className=" flex p-3 m-2 bg-green-500 rounded-full text-white flex-1 flex-col justify-center">
                <BiSearch />
              </div>
            </button>
          </form>
          {/* {items.map((item: any) => (
            <div className="inline p-2 m-2">
              <LocationPin
                key={item.id}
                lat={item.lat}
                lng={item.lng}
                colorChoice="CornflowerBlue"
                data={item}
              />
            </div>
          ))} */}

          <div
            className=" items-center"
            style={{ height: "79vh", width: "100vw" }}
          >
            <GoogleMapReact
              bootstrapURLKeys={{ key: googleApi }}
              center={{ lat: latitude, lng: longitude }}
              defaultZoom={defaultProps.zoom}
            >
              {items.map((item: any) => (
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

// CODE FOR ANTHONY

// const [lng, setLng] = useState(null);
// const [lat, setLat] = useState(null);

// below comes before his await

// axios
//       // grabs longitude & latitude based on given address
//       .get(`https://api.opencagedata.com/geocode/v1/json?q=${search}&key=${pw}`)
//       .then((response) => {
//         console.log(response);
//         //set those coordinates into my state
//         setLong(response.data.results[0].geometry.lng);
//         setLat(response.data.results[0].geometry.lat);
//       })
//       .catch((error) => {
//         console.log(error);
//       });

///////////////////anthony's submit////////////////////////////////

//       const submitInformation = async (dataSet: object) => {
//         if (images.length && name && description && address) {
//           // !Address to be changed for deployment
//           await axios.post("http://localhost:3000/api/items", dataSet);
//         }
//         console.log(dataSet);
//       };
