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

type Props = {
  user_address: any;
};

const defaultAddress = process.env.NEXT_PUBLIC_INPUT;
const pw = process.env.NEXT_PUBLIC_GEOLOCATION;
const googleApi = process.env.NEXT_PUBLIC_GOOGLEAPI || "1";

const Maps = ({ user_address }: Props) => {
  const [longitude, setLong] = useState(-74.0163584);
  const [latitude, setLat] = useState(40.63232);
  const [address, setAddress] = useState(defaultAddress);
  const [items, setItems] = useState<any>([]);
  const [search, setSearch] = useState<any>(defaultAddress);

  // 6823%20Vista%20Place%20Brooklyn%20NY%2011220

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

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setAddress(search);
    //fetches the searched address and sets it as the new center
    axios
      // grabs longitude & latitude based on given address
      .get(`https://api.opencagedata.com/geocode/v1/json?q=${search}&key=${pw}`)
      .then((response) => {
        //set those coordinates into my state
        setLong(response.data.results[0].geometry.lng);
        setLat(response.data.results[0].geometry.lat);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event: any) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <div className="bg-gradient-to-b from-indigo-900 to-indigo-600">
      <NavBar />
      <div className="absolute top-20 bg-gradient-to-b from-indigo-900 to-indigo-600 flex-1 flex-col justify-center w-full h-full">
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
          <div>Longitude: {longitude}</div>
          <div>Latitude: {latitude}</div>
          {/* {items.map((item: any) => (
            <div>
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
            className="border-2 p-2 m-2 items-center"
            style={{ height: "80vh", width: "80vw" }}
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
