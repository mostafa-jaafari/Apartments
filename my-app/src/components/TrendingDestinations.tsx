import { DESTINITIONS } from '@/FakeData/ApartmentsData';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


export default function TrendingDestinations() {
    const Trending_Destinations_Data = DESTINITIONS?.slice(0,5);
  return (
    <main className='w-full'>
    <span className='w-full flex justify-between items-center'>
        <h1 className='font-semibold text-2xl py-8'>
            Trending destinations
        </h1>
        <Link href='/apartmentbycity' className='font-semibold text-blue-700'>More</Link>
    </span>
    <div className='w-full flex justify-center gap-2 flex-wrap'>
        {Trending_Destinations_Data?.map((apartment) => {
            return (
                <div key={apartment.id} className='relative grow w-[300px] h-[200px] rounded-lg overflow-hidden'>
                    <Link href={`/apartmentbycity/${apartment.cityname.toLowerCase()}`}>
                        <Image loading='lazy' src={apartment.image} alt='Trending Destinations' fill className='object-cover'/>
                    </Link>
                    <span className='absolute left-0 top-0 font-semibold text-neutral-100 bg-blue-900 px-2'>{apartment.cityname} / {apartment.countryname}</span>
                </div>
            )
        })}
    </div>
    </main>
  )
}
