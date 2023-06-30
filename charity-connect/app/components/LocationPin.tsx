import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";
import styles from "@/app/Map-Item.module.css";

type datatype = {
  name: string;
  image?: string;
};

type LocationProps = {
  lat: number;
  lng: number;
  colorChoice: string;
  data?: datatype;
};

const LocationPin = ({ lat, lng, colorChoice, data }: LocationProps) => {
  const router = useRouter();

  // const pinIcon = useRef<HTMLDivElement>(null);
  // const popupInfo = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [height, setHeight] = useState(0);
  const [topPosition, setTopPosition] = useState(0);

  // useEffect(() => {
  //   if (pinIcon.current && popupInfo.current) {
  //     const popupHeight = popupInfo.current.offsetHeight;
  //     const pinBottomPosition = pinIcon.current.getBoundingClientRect().bottom;

  //     setTopPosition(pinBottomPosition - popupHeight - 10);
  //   }
  // }, []);

  type handleClickProps = {
    data: object;
  };

  const handleClick = (data: any) => {
    console.log("DATA ID =====>", data);
    // console.log(data.id);
    router.push("/itempage");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (lat === null || lng === null) {
    return null;
  } else {
    return (
      <div
        className={`inline-block map-item ${styles["map-item"]} ${
          isHovered ? styles.hovered : ""
        }`}
        style={{ fontSize: "155%" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 384 512"
        >
          <path
            d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
            fill={colorChoice}
          />
        </svg>
        {isHovered && data?.image && (
          <div
            className={styles.popupinfo}
            onClick={() => {
              handleClick(data);
            }}
          >
            <div>{data.name}</div>
            <img
              src={data.image}
              alt="Hovered Image"
              className={styles.image}
            />
          </div>
        )}
      </div>
    );
  }
};

export default LocationPin;
