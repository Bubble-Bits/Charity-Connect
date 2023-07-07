"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
require("dotenv").config();
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";

type Props = {
  item_lat: number;
  item_lng: number;
};
//
const defaultAddress = process.env.NEXT_PUBLIC_INPUT;
const pw = process.env.NEXT_PUBLIC_GEOLOCATION;
const googleApi = process.env.NEXT_PUBLIC_GOOGLEAPI || "1";

const Maps = ({ item_lng, item_lat }: Props) => {
  const [longitude, setLong] = useState(item_lng);
  const [latitude, setLat] = useState(item_lat);

  useEffect(() => {
    setLong(item_lng);
    setLat(item_lat);
    console.log("is this infinite loop?");
  }, [item_lng, item_lat]);

  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 14,
  };

  return (
    <div>
      <div className="items-center" style={{ height: "80vh", width: "80vw" }}>
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
