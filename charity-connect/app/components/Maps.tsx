"use client";

import React, { useEffect, useState } from "react";
import exampleDataAddress from "./exampleData-address.js";
import exampleDataLocations from "./exampleData-locations.js";
import axios from "axios";
require("dotenv").config();
import GoogleMapReact from "google-map-react";
import FmdGoodTwoToneIcon from "@mui/icons-material/FmdGoodTwoTone";

type Props = {
  user_address: string;
};

const input = process.env.NEXT_PUBLIC_INPUT;
const pw = process.env.NEXT_PUBLIC_GEOLOCATION;
const googleApi = process.env.NEXT_PUBLIC_GOOGLEAPI;

const LocationComponent = ({ user_address }: Props) => {
  const [longitude, setLong] = useState(0);
  const [latitude, setLat] = useState(0);
  const [address, setAddress] = useState("");
  const [pin, setPin] = useState(false);
  const [items, setItems] = useState(exampleDataLocations);
  useEffect(() => {
    // axios
    //   // grabs longitude & latitude based on given address
    //   .get(`https://api.opencagedata.com/geocode/v1/json?q=${input}&key=${pw}`)
    //   .then((response) => {
    //     console.log(response);
    //     //set those coordinates into my state
    //     setLong(response.data.results[0].geometry.lng);
    //     setLat(response.data.results[0].geometry.lat);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // EXAMPLE DATA //
    // console.log(exampleDataAddress.data.results[0].geometry);
    // setLong(exampleDataAddress.data.results[0].geometry.lng);
    // setLat(exampleDataAddress.data.results[0].geometry.lat);
    setPin(true);
    setAddress(input);
    console.log("Items", items);
    console.log("Input", input);
  }, []);

  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 14,
  };

  return (
    <div>
      <h1>Location</h1>
      <div>Address: {address}</div>
      <div>Longitude: {longitude}</div>
      <div>
        Latitude:
        {latitude}
      </div>

      {/* <div style={{ height: "80vh", width: "80vw" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleApi }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          center={{ lat: latitude, lng: longitude }}
        >
          {items.map((item) => {
            return (
              <FmdGoodTwoToneIcon
                size={50}
                style={{ color: "red" }}
                lat={item.lat}
                lng={item.lng}
              />
            );
          })}

          {pin ? (
            <FmdGoodTwoToneIcon
              size={50}
              style={{ color: "0072ea" }}
              lat={latitude}
              lng={longitude}
            />
          ) : null}
        </GoogleMapReact>
      </div> */}
    </div>
  );
};

export default LocationComponent;
