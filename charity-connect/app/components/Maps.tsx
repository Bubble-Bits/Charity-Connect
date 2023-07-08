"use client";
// import "../global.css";
import React, { useEffect, useState } from "react";
// import exampleDataAddress from "./exampleData-address.js";
// import exampleDataLocations from "./exampleData-locations.js";
import axios from "axios";
require("dotenv").config();
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";

type Props = {
  user_address?: string;
};

const defaultAddress = process.env.NEXT_PUBLIC_INPUT;
const pw = process.env.NEXT_PUBLIC_GEOLOCATION;
const googleApi = process.env.NEXT_PUBLIC_GOOGLEAPI || "1";

const Maps = ({ user_address }: Props) => {
  const [longitude, setLong] = useState(0);
  const [latitude, setLat] = useState(0);
  const [search, setSearch] = useState(defaultAddress);

  useEffect(() => {
    if (user_address !== null) {
      setSearch(user_address);
    }
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
  }, []);

  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 14,
  };

  return (
    <div className="z-1">
      <div
        className="border-2 p-2 m-2 items-center"
        style={{ height: "80vh", width: "80vw" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleApi }}
          center={{ lat: latitude, lng: longitude }}
          defaultZoom={defaultProps.zoom}
        >
          <LocationPin
            lat={latitude}
            lng={longitude}
            colorChoice="DarkOrange"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Maps;
