"use client";
import Item from "./Item";
import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { useRouter } from "next/router";

interface ItemsType {
  id: number;
  name: string;
  category: string;
  postedAt: number;
  distance: number;
}

interface ItemsListType {
  id: string;
  category: string;
  address: string;
  description: string;
  photos: string[];
}

interface Filters {
  categories: string[];
  distance: number;
}

const categories: string[] = [
  "Apparel",
  "Electronics",
  "Entertainment",
  "Family",
  "Garden and Outdoors",
  "Hobbies",
  "Homegoods",
  "Music",
  "Sports",
  "Supplies",
  "Toys and Games",
  "Vehicles",
  "Other",
];
const distance: (string | number)[] = ["Any", 5, 10, 15, 20, 25, 30];

const temp: ItemsType[] = [
  {
    id: 1,
    name: "Alvin",
    category: "Apparel",
    postedAt: 52,
    distance: 52,
  },
  {
    id: 2,
    name: "Lovinson",
    category: "Sports",
    postedAt: 1,
    distance: 1,
  },
  {
    id: 3,
    name: "Stanley",
    category: "Homegoods",
    postedAt: 10,
    distance: 10,
  },
  {
    id: 4,
    name: "Christina",
    category: "Supplies",
    postedAt: 33,
    distance: 33,
  },
  {
    id: 5,
    name: "Anthony",
    category: "Electronics",
    postedAt: 4,
    distance: 4,
  },
  {
    id: 6,
    name: "Nick",
    category: "Toys and Games",
    postedAt: 14,
    distance: 14,
  },
];

export default function ItemList() {
  const [items, setItems] = useState<ItemsListType[]>([]);
  const [filteredItems, setFilteredItems] = useState<ItemsListType[]>([]);
  const [filters, setFilters] = useState<Filters>({
    categories: [],
    distance: 100,
  });
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleFilterChange = (
    e: ChangeEvent<HTMLInputElement>,
    filterType: "category" | "distance",
  ) => {
    const selectedOption = e.target.value;
    const updatedFilters = { ...filters };

    if (filterType === "category") {
      const categoryFilters = updatedFilters.categories;

      if (categoryFilters.includes(selectedOption)) {
        const index = categoryFilters.indexOf(selectedOption);
        categoryFilters.splice(index, 1);
      } else {
        categoryFilters.push(selectedOption);
      }
    } else if (filterType === "distance") {
      if (
        selectedOption === "Any" ||
        Number(selectedOption) === updatedFilters.distance
      ) {
        updatedFilters.distance = 100;
      } else {
        updatedFilters.distance = Number(selectedOption);
      }
    }

    setFilters(updatedFilters);
  };

  const router = useRouter();
  const handleRoute = (id: string) => {
    router.push(`/itempage?item=${id}`);
  };

  const toggleFilter = (filter: string) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  //to set state with data without using db
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await new Promise((resolve) => {
  //       return setTimeout(resolve, 1000);
  //     });
  //     const data: any = temp;
  //     setItems(data);
  //     setFilteredItems(data);
  //   };
  //   fetchData();
  // }, []);

  //to set state with data from db
  useEffect(() => {
    const fetchData = async () => {
      let options = {
        "url": "/api/getItemList",
        "method": "get"
      }

      try {
        let { data } = await axios.request<ItemsListType[]>(options);
        console.log(data);
        setItems(data);
      } catch (error) {
        console.log(error);
        return;
      }
    };
    fetchData();
  }, []);

  //to filter list
  useEffect(() => {
    console.log(filters);
    console.log("items", items);
    let filtered = items.filter((item: any) => {
      //if filters are default, then allow all items to pass
      //check category in db, to see the spelling and caps or not
      //refactor how to implement filters for distance, depending on the db
      const categoryMatch =
        filters.categories.includes(item.category) ||
        filters.categories.length === 0;
      const distanceMatch =
        item.distance <= filters.distance || filters.distance == 100;

      console.log(
        item.distance,
        filters.distance,
        distanceMatch,
        categoryMatch,
      );
      return categoryMatch && distanceMatch;
    });
    setFilteredItems(filtered);
    console.log("filtered", filtered);
  }, [filters, items]);

  return (
    <>
      <div className="Filters flex md:gap-4 md:ml-48">
        <div className="FilterCategory m-5">
          <span
            className="FilterName text-xl mr-5 bg-green-500 border border-solid border-green-500 rounded p-2 text-white"
            onClick={() => toggleFilter("Category")}
          >
            Category
          </span>
          {activeFilter === "Category" && (
            <div className="FilterCategory absolute bg-white border border-solid border-black rounded py-2 px-4 transition-opacity duration-50">
              {categories.map((category) => (
                <label key={category} className="flex items-center mr-5">
                  <input
                    type="checkbox"
                    value={category}
                    onChange={(e) => handleFilterChange(e, "category")}
                    className="mr-1"
                  />
                  {category}
                </label>
              ))}
            </div>
          )}
        </div>
        <div className="FilterDistance m-5">
          <span
            className="FilterName text-xl mr-5 bg-green-500 border border-solid border-green-500 rounded p-2 text-white"
            onClick={() => toggleFilter("Distance")}
          >
            Distance
          </span>
          {activeFilter === "Distance" && (
            <div className="FilterDistance absolute bg-white border border-solid border-black rounded py-2 px-4 transition-opacity duration-50">
              {distance.map((miles) => (
                <label key={miles} className="flex items-center mr-5">
                  <input
                    type="checkbox"
                    value={miles}
                    onChange={(e) => {
                      handleFilterChange(e, "distance");
                    }}
                    className="mr-1"
                  />
                  {miles}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="w-screen overflow-x-hidden">
      <div className="ItemList flex flex-wrap gap-5 justify-center ml-1">
        {filteredItems.length !== 0 &&
          filteredItems.map((item) => {
            return (
              <div key={item.id} className="w-1/4" onClick={()=>handleRoute(item.id)} >
                <Item key={item.id} {...item} />
              </div>
            );
          })}
      </div>
      </div>
    </>
  );
}

