import React from 'react';
import Image from 'next/image';

interface ItemProps {
  id: string;
  category: string;
  address: string;
  description: string;
  photos: string[];
}

export default function Item(props: ItemProps) {
  const { id, category, address, description, photos } = props;

  return (
    <div className="w-full md:w-full lg:w-full xl:w-full m-1 h-[300px] hover:opacity-50 bg-[#ffffff] shadow-lg shadow-green-500/70 rounded">
      <div className="w-full h-2/3 overflow-hidden">
        <Image src={photos[0]} alt="Image of the donated item" width={500} height={500} />
      </div>
      <div className="w-full h-1/3 overflow-auto whitespace-normal">
        <p className="text-sm md:text-base lg:text-lg xl:text-xl">{description}</p>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl">{category}</p>
      </div>
    </div>
  );
}