"use client";
import React, { useState, useEffect } from "react";
import "@/app/globals.css";

type Props = {};

const ItemDescription = ({ description }) => {
  const [seeMore, seeMoreTrigger] = useState(false);
  const [seeLess, seeLessTrigger] = useState(false);

  useEffect(() => {
    if (description.length > 200) {
      seeMoreTrigger(true);
    }
  }, [description.length]);

  const toggleDescription = () => {
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
