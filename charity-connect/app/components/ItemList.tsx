'use client'
import Item from './Item';
import React from 'react';

const temp = [
  {
    "id": 1,
    "name": "Alvin",
    "category": "Clothes",
    "postedAt": 52
  },
  {
    "id": 2,
    "name": "Lovinson",
    "category": "Video Games",
    "postedAt": 1
  },
  {
    "id": 3,
    "name": "Stanley",
    "category": "Exercise Equipment",
    "postedAt": 10
  },
  {
    "id": 4,
    "name": "Christina",
    "category": "Furniture",
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
    "category": "Toys",
    "postedAt": 14
  }
]

export default function ItemList() {

  return (
    <>
      <div className='Filters flex gap-4 ml-48'>
        <div className='FilterCategory m-5'>
          <span className='FilterName text-xl mr-5'>Category:</span>
          <select className='p-2.5 mr-5'>
            <option>Clothes</option>
            <option>Video Games</option>
            <option>Exercise Equipment</option>
            <option>Electronics</option>
            <option>Toys</option>
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
        {temp.map((item) => {
          return <Item key={item.id} category={item.category}/>
        })}
      </div>
    </>
  )
}

