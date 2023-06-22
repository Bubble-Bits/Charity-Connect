'use client'
import React from 'react';

type ItemProps = {
  category: string
}

export default function Item({ category }: ItemProps) {
  return (
    <div
    className='Item
    w-1/4 h-1/3
    m-1 min-w-280
    shadow-md
    hover:opacity-50'
    >
      Card Category: {category}
    </div>
  )
}