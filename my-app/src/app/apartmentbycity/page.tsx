import { DESTINITIONS } from '@/FakeData/ApartmentsData';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


export const metadata: Metadata = {
  title: 'Rentify | Apartments in Rentify',
  description: "Explore a wide range of apartments available for rent on Rentify. Find your dream apartment today!",
};

export default async function page() {
    const Trending_Destinations_Data = DESTINITIONS;
  return (
    <main className='w-full p-20'>
      <div className='w-full flex justify-center gap-2 flex-wrap'>
        {Trending_Destinations_Data.map((apartment) => {
            return (
                <div key={apartment.id} className='relative grow w-[300px] h-[200px] rounded-lg overflow-hidden'>
                    <Link href={`/apartmentbycity/${apartment.cityname.toLowerCase()}`}>
                        <Image loading='lazy' src={apartment.image} alt='Trending Destinations' fill className='object-cover'/>
                    </Link>
                    <span className='absolute right-4 top-2 text-xl font-semibold text-neutral-100 bg-blue-900 px-2 rounded'>{apartment.cityname}</span>
                </div>
            )
        })}
            </div>
    </main>
  )
}
