"use client";
import React, { useState, useEffect } from "react";
import "@/app/globals.css";
import Axios from "axios";

type Props = { description: String };

const ItemDescription = ({ description }: Props) => {
  const [seeMore, seeMoreTrigger] = useState(false);
  const [seeLess, seeLessTrigger] = useState(false);

  useEffect(() => {
    if (description.length > 200) {
      seeMoreTrigger(true);
    }
  }, [description.length]);

  const toggleDescription = () => {
    // Axios.post("/api/register", {})
    //   .then((data) => {
    //     if (!data) {
    //       throw data;
    //     }
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    seeMoreTrigger(!seeMore);

    if (seeLess) {
      seeLessTrigger(false);
    } else {
      seeLessTrigger(true);
    }
  };

  return (
    <>
      <div
        className={
          seeMore
            ? "text-white pb-1 max-h-16 overflow-hidden"
            : "text-white pb-1 max-h-full"
        }
      >
        {" "}
        {description}
      </div>
      {seeMore && (
        <button className="text-blue-500 pt-1" onClick={toggleDescription}>
          See More
        </button>
      )}
      {seeLess && (
        <button className="text-blue-500 pt-1" onClick={toggleDescription}>
          See Less
        </button>
      )}
    </>
  );
};

export default ItemDescription;
