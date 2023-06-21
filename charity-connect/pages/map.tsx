import React, { useEffect, useState } from "react";
import exampleData from "./exampleData.js";
import axios from "axios";
require("dotenv").config();

type Props = {
  long: number;
  lat: number;
  user_address: string;
};

const input = "6823 Vista Place, Brooklyn NY 11220";
const pw = process.env.GeoLocation;

const LocationComponent = ({ long, lat, user_address }: Props) => {
  const [longitude, setLong] = useState(0);
  const [latitude, setLat] = useState(0);
  const [address, setAddress] = useState("");

  useEffect(() => {
    // axios
    //   .get(`https://api.opencagedata.com/geocode/v1/json?q=${input}&key=${pw}`)
    //   .then((response) => {
    //     console.log(response);
    //     setLong(response.data.results[0].geometry.lng);
    //     setLat(response.data.results[0].geometry.lat);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    console.log("pwpwpwpwpw", pw);
    // console.log(exampleData.data.results[0].geometry);
    // setLong(exampleData.data.results[0].geometry.lng);
    // setLat(exampleData.data.results[0].geometry.lat);
  }, []);

  return (
    <div>
      <h1>Location</h1>
      <div>Address: {address}</div>
      <div>Longitude: {longitude}</div>
      <div>Latitude: {latitude}</div>
    </div>
  );
};

export default LocationComponent;
