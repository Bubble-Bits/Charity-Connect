"use client";
import Item from "./Item";
import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import Link from "next/link";
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

  useEffect(() => {
    const fetchData = async () => {
      let options = {
        url: "/api/getItemList",
        method: "get",
      };

      try {
        // let { data } = await axios.request<ItemsListType[]>(options);
        let data = [
          {
            id: "64a07a1f4425cf31f6b98110",
            category: "Toys and Games",
            address: "506 23rd ave San Francisco California 94121",
            description:
              " Pokémon is a beloved franchise that has captivated the hearts of millions around the world. It all began in 1996 when Game Freak, in collaboration with Nintendo, introduced the world to a vibrant universe filled with extraordinary creatures known as Pokémon. In this imaginative world, humans called Pokémon Trainers embark on thrilling journeys, aiming to catch, train, and battle with these incredible creatures. Each Pokémon possesses unique abilities, characteristics, and elemental types, which add depth and strategy to the intense battles that unfold. From the fire-breathing Charizard to the electric powerhouse Pikachu, there are over 800 distinct species of Pokémon, each with its own strengths, weaknesses, and evolutionary paths. Trainers explore diverse regions, encounter fascinating characters, and forge deep bonds with their Pokémon partners as they strive to become Pokémon Champions. Pokémon has become more than just a game; it's a cultural phenomenon that has expanded into animated TV shows, movies, trading card games, and a vast array of merchandise. With its enduring charm, captivating stories, and the message of friendship and perseverance, Pokémon continues to inspire and bring joy to trainers of all ages worldwide.",
            photos: [
              "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
              "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
              "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
              "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
              "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
              "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
              "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
            ],
          },
          {
            id: "64a07fdb702637cd9ef00cae",
            category: "Homegoods",
            address: "1690 John F Kennedy Dr, San Francisco, CA 94121",
            description: "Ginger Bread Mans!!! For all who love them cookies!",
            photos: [
              "https://sugarspunrun.com/wp-content/uploads/2021/11/Gingerbread-Cookies-1-of-1.jpg",
              "https://sugarspunrun.com/wp-content/uploads/2021/11/Gingerbread-Cookies-1-of-7.jpg",
            ],
          },
          {
            id: "64a0815e702637cd9ef00cb5",
            category: "Homegoods",
            address: "941 Cole St, San Francisco, CA 94117",
            description:
              "For all you music lovers out there, I have a spare violin for free!!!",
            photos: [
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBz_Nhv7Ku1WfU8eteMFrxYhdaC3YW9soRTw&usqp=CAU",
            ],
          },
          {
            id: "64a0856e0ba6c7795ab65738",
            category: "Supplies",
            address: "Hawaii Kai Dr, Honolulu, HI 96825, USA",
            description: "Who lives in a pineapple under the sea?",
            photos: [
              "https://res.cloudinary.com/dtnugkazh/image/upload/v1688241437/wv5jouqiyfnpijnlse62.png",
            ],
          },
          {
            id: "64a09858cc19995ed7440c16",
            category: "Hobbies",
            address: "234 92nd St, Brooklyn, NY 11209",
            description: "Who lives under a rock under the sea?",
            photos: [
              "https://res.cloudinary.com/dtnugkazh/image/upload/v1688246315/akxmvbx5h0pjlp71n5gc.png",
            ],
          },
          {
            id: "64a829426b7557ed820a13ab",
            category: "Homegoods",
            address: "5604 7th Ave 1st Floor, Brooklyn, NY 11220",
            description:
              " In a heartwarming act of kindness, a cookie donation initiative seeks to spread joy and satisfy the craving for both compassion and sweetness. Every delectable bite holds the power to make a difference. These mouthwatering treats, baked with love and care, are offered to those in need—brightening their day and providing a momentary escape from life's challenges. From homeless shelters to community centers, these cookies serve as a symbol of empathy, reminding us of the power of small gestures. Join this benevolent effort and let the shared delight of cookies foster connections, warm souls, and create a ripple of kindness in the world.",
            photos: [
              "https://static.vecteezy.com/system/resources/previews/003/347/762/original/illustration-of-evil-chocolate-chip-cookie-mascot-character-free-vector.jpg",
              "https://cdn.shopify.com/s/files/1/0622/6870/2966/products/AD9097AC-1D06-40EB-9377-242CD44B23A8_580x.jpg?v=1643641470",
            ],
          },
          {
            id: "64a832726b7557ed820a13b9",
            category: "Homegoods",
            address: "1080 McDonald Ave, Brooklyn, NY 11230",
            description:
              "Embrace the spirit of compassion by participating in a heartwarming initiative to donate blankets. These cozy, soft blankets serve as a shield against the cold, offering a source of solace and comfort to those in need. With each donation, you provide a warm embrace to individuals facing adversity, offering them a tangible reminder that they are not alone. From homeless shelters to disaster relief efforts, these blankets become a beacon of hope, wrapping recipients in a blanket of love and care. Join this noble endeavor and help create a world where warmth and kindness prevail, one blanket at a time.",
            photos: [
              "https://www.realsimple.com/thmb/6Qa3O4RXoQU0jV51_RLKfUP1nlA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bedsure-fleece-blanket-throw-tout-df36d63f04ce4e3692b14e53fe3cf990.jpg",
              "https://cdn.thewirecutter.com/wp-content/media/2023/01/throw-blankets-2048px-09089-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024",
            ],
          },
          {
            id: "64a8342f6b7557ed820a13c3",
            category: "Toys and Games",
            address: "620 Atlantic Ave, Brooklyn, NY 11217",
            description:
              "Unlock the power of play by participating in an extraordinary initiative to donate Nintendo Switch consoles. These immersive gaming devices hold the key to endless adventures, captivating storytelling, and unforgettable moments of laughter and camaraderie. By contributing a Nintendo Switch, you open up a world of possibilities for those who may not have had access to such interactive entertainment before. From children's hospitals to community centers, these donations bridge gaps, foster inclusivity, and ignite smiles. Join this remarkable campaign and help empower individuals to explore new worlds, forge friendships, and experience the transformative power of gaming. Together, let's bring joy and connection to those who need it most.",
            photos: [
              "https://static.independent.co.uk/2022/10/18/10/Nintendo%20Switch%20deals%20copy.jpg",
              "https://cdn.mos.cms.futurecdn.net/P7fAM2JYVaUeMATqRKxbjL-480-80.jpg",
            ],
          },
          {
            id: "64a835b16b7557ed820a13ca",
            category: "Toys and Games",
            address: "1601 80th St, Brooklyn, NY 11214",
            description:
              "Embrace the power of compassion by joining a heartfelt initiative to donate Teddy bears. These cuddly companions bring immense comfort and solace, providing a source of warmth and security to those in need. Each Teddy bear donation becomes a cherished friend, offering a listening ear and a comforting presence during challenging times. From hospitals to orphanages, these soft and huggable gifts bring smiles to faces young and old, reminding recipients that they are cared for and loved. Join this touching endeavor and help create a world where every child and adult can find solace and reassurance in the embrace of a Teddy bear.",
            photos: ["https://m.media-amazon.com/images/I/71qtAiNUCpL.jpg"],
          },
        ];
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
      <div className="Filters flex mt-20px md:gap-4 md:ml-48">
        <div className="FilterCategory m-5">
          <span
            className="FilterName text-xl bg-green-500 border border-solid border-green-500 rounded p-2 text-white"
            onClick={() => toggleFilter("Category")}
          >
            Category
          </span>
          {activeFilter === "Category" && (
            <div className="FilterCategory absolute bg-white border border-solid border-black rounded py-2 px-4 z-10 mt-2">
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
        <div className="LINK m-5">
          <Link
            className="text-xl mr-5 bg-green-500 border border-solid border-green-500 rounded p-2 text-white"
            href="/map"
          >
            View on map
          </Link>
        </div>

        {/* <div className="FilterDistance m-5">
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
        </div> */}
      </div>
      <div>
        <div className="ItemList flex flex-wrap gap-5 ml-1 justify-center">
          {filteredItems.length !== 0 &&
            filteredItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-1/4"
                  onClick={() => handleRoute(item.id)}
                >
                  <Item key={item.id} {...item} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
