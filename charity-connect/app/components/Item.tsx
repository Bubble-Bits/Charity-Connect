'use client'
import React from 'react';
import Image from 'next/image';

type ItemProps = {
  category: string
}

export default function Item({ category }: ItemProps) {
  return (
    <div className="w-1/4 md:h-[290px] h-2/3 m-1 min-w-280 hover:opacity-50 bg-[#ffffff] shadow-lg shadow-green-500/70 rounded">
      <div className="w-full h-2/3 overflow-hidden">
       <Image src='' alt="Image of the donated item" />
      </div>
      <div className="w-full h-1/3 overflow-auto whitespace-normal">
        <p className="text-sm md:text-base lg:text-lg xl:text-xl Text">Description of the donated item</p>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl">{category}</p>
      </div>
    </div>
  );
}