import React, { useEffect, useState } from "react";

const LocationComponent = () => {
  const [long, setLong] = useState(0);
  const [lat, setLat] = useState(0);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const error = () => {
    console.log("Failed to receive location!");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Position====>", position);
        setLong(position.coords.longitude);
        setLat(position.coords.latitude);
      },
      error,
      options
    );
  }, []);

  return (
    <div>
      <h1>Location</h1>
      <div> Longitude:{long}</div>
      <div>Latitude: {lat}</div>
    </div>
  );
};

export default LocationComponent;
