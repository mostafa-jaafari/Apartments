'use client';
import { Heart } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'

type SelectedApartmentType = {
  SelectedApartment: {
    overviewimages : string[];
  }
  }

export default function ImageGallery({SelectedApartment}: SelectedApartmentType) {
  const [CurrentImage, setCurrentImage] = useState<number>(0);
    return (
    <section className='max-w-[600px] grow w-full md:min-w-1/2 min-w-[300px]'>
        <div className='relative bg-neutral-200 w-full h-[400px] rounded-lg overflow-hidden'>
          <Image src={SelectedApartment.overviewimages[CurrentImage]} fill alt='Apartment Image' className='object-cover'></Image>
          <Heart className="absolute top-2 right-2 bg-blue-700 text-neutral-200 p-1 rounded-full cursor-pointer" size={30}/>
        </div>
        {SelectedApartment?.overviewimages && 
        <section className='flex gap-2 pt-2'>
            {SelectedApartment.overviewimages.map((image, index) => {
            return (
                <div onClick={() => setCurrentImage(index)} key={index} className={`relative cursor-pointer hover:border-2 border-blue-700 w-1/3 h-30 overflow-hidden rounded-lg ${index === CurrentImage && "border-2"}`}>
                    <Image src={image} fill alt='image' className='object-cover'></Image>
                </div>
            )
            })}
        </section>
        }
    </section>
  )
}
