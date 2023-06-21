import React, { useEffect, useState } from "react";

type Props = {
  long: number;
  lat: number;
};

const LocationComponent = ({ long, lat }: Props) => {
  const [longitude, setLong] = useState(0);
  const [latitude, setLat] = useState(0);
  const [address, setAddress] = useState("");

  useEffect(() => {
    setLong(40.6328942);
    setLat(-74.019474);
    setAddress("6823 Vista Place, Brooklyn NY 11220");
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
