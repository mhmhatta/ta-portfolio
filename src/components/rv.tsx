'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const RV = () => {
  const friendPhotos: PhotoItem[] = [
    {
      src: '/flower.jpeg',
      alt: 'htrv',
      caption: 'htrv',
    },
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          a message on Valentine’s Day
        </h2>
      </div>
      <Photos photos={friendPhotos} />
    </div>
  );
};

export default RV;