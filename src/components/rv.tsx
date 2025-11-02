'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const RV = () => {
  const friendPhotos: PhotoItem[] = [
    {
      src: '/rv.jpg',
      alt: 'htrv',
      caption: 'htrv',
    },
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          Another Level up w/ Riva!
        </h2>
      </div>
      <Photos photos={friendPhotos} />
    </div>
  );
};

export default RV;