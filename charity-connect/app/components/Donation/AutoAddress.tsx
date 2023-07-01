"use client";
require('dotenv').config();
import Autocomplete from "react-google-autocomplete";
import { ChangeEvent } from "react";

const AutoAddress = ({ setAddress, style }: any) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  return (
    <Autocomplete
      id="auto"
      apiKey={process.env.NEXT_PUBLIC_AUTOCOMP}
      options={{
        types: ["address"]
      }}
      className={style}
      onPlaceSelected={(place) => {
        setAddress(place.formatted_address);
      }}
      onChange={handleChange}
    />
  );
};

export default AutoAddress;
