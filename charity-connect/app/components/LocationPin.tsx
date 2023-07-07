import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import styles from "@/app/Map-Item.module.css";
import Image from "next/image";

type datatype = {
  name: string;
  photos: string;
};

type LocationProps = {
  lat: number;
  lng: number;
  colorChoice: string;
  data?: datatype;
};

const LocationPin = ({ lat, lng, colorChoice, data }: LocationProps) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (data: any) => {
    console.log("DATA ID =====>", data);
    router.push(`/itempage?item=${data.id}`);
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
        className={`inline-block rounded-full map-item ${styles["map-item"]} ${
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
        {isHovered && data?.photos[0] && (
          <div
            className={styles.popupinfo}
            onClick={() => {
              handleClick(data);
            }}
          >
            <div>
              <Image
                src={data.photos[0]}
                alt="Hovered Image"
                width={150}
                height={150}
                className={styles.image}
              ></Image>
            </div>

            <div className={styles.pin}>{data.name}</div>
          </div>
        )}
      </div>
    );
  }
};

export default LocationPin;
