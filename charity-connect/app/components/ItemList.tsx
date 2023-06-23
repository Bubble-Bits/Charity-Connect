'use client'
import Item from './Item';
import React, { useState, useEffect, ChangeEvent } from 'react';

interface ItemsType {
  id: number;
  name: string;
  category: string;
  postedAt: number;
}

const categories: string[] = ['Apparel', 'Electronics', 'Entertainment', 'Family', 'Garden and Outdoors', 'Hobbies', 'Homegoods', 'Music',
'Sports', 'Supplies', 'Toys and Games', 'Vehicles', 'Other']

const temp: ItemsType[] = [
  {
    "id": 1,
    "name": "Alvin",
    "category": "Apparel",
    "postedAt": 52
  },
  {
    "id": 2,
    "name": "Lovinson",
    "category": "Sports",
    "postedAt": 1
  },
  {
    "id": 3,
    "name": "Stanley",
    "category": "Homegoods",
    "postedAt": 10
  },
  {
    "id": 4,
    "name": "Christina",
    "category": "Supplies",
    "postedAt": 33
  },
  {
    "id": 5,
    "name": "Anthony",
    "category": "Electronics",
    "postedAt": 4
  },
  {
    "id": 6,
    "name": "Nick",
    "category": "Toys and Games",
    "postedAt": 14
  }
];

let filteredItems = temp;

export default function ItemList() {
  const [items, setItems] = useState<ItemsType[]>([]);
  const [filteredItems, setFilteredItems] = useState<ItemsType[]>([]);
  const [filter, setFilter] = useState('All');

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => {return setTimeout(resolve, 1000)});
      const data:any = temp;
      setItems(data);
      setFilteredItems(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = items.filter((item: any) => {
      if (filter === 'All') return true;
      return filter === item.category;
      }
    );
    setFilteredItems(filtered);
    console.log(items);
  }, [filter])


  return (
    <>
      <div className='Filters flex gap-4 ml-48'>
        <div className='FilterCategory m-5'>
          <span className='FilterName text-xl mr-5'>Category:</span>
          <select className='p-2.5 mr-5' onChange={handleSelect}>
            <option>All</option>
            {categories.map((category) => {
              return <option key={category}>{category}</option>
            })}
          </select>
        </div>
        <div className='FilterDistance m-5'>
        <span className='FilterName text-xl mr-5'>Distance:</span>
        <select className='p-2.5 mr-5'>
            <option>&lt; 5</option>
            <option>&lt; 10</option>
            <option>&lt; 15</option>
            <option>&lt; 20</option>
            <option>&lt; 30</option>
          </select>
        </div>
      </div>
      <div
      className='ItemList
      flex flex-wrap gap-4 justify-center ml-1
      h-screen w-screen'
      >
        {filteredItems.length !== 0 && filteredItems.map((item) => {
          return <Item key={item.id} category={item.category} />
        })}
      </div>
    </>
  )
}

