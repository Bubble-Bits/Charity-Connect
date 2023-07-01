"use client";
require('dotenv').config();
import Autocomplete from "react-google-autocomplete";

const AutoAddress = ({ setAddress }: any) => {
  return (
    <Autocomplete
      apiKey={process.env.NEXT_PUBLIC_AUTOCOMP}
      onPlaceSelected={(place) => {
        setAddress(place);
      }}
    />
  );
};

export default AutoAddress;
