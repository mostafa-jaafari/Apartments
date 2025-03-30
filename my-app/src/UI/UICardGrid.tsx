'use client';
import { ChevronDown, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

type UICardProps = {
    NAME: string;
    COUNTRY: string;
    CITY: string;
    PRICE: string;
    REVIEWS_COUNT: number;
    APARTMENT_ID: number;
    PREVIEW_IMAGES: string[];
}
export default function UICradGrid({NAME, PREVIEW_IMAGES, APARTMENT_ID, COUNTRY, CITY, PRICE, REVIEWS_COUNT}: UICardProps) {
  const [CurrentImage, setCurrentImage] = useState(0);
  const [ShowMore, setShowMore] = useState(false);
  const Sliced_Length = PREVIEW_IMAGES?.slice(0,4); 
  const Check_Status =  ShowMore ? PREVIEW_IMAGES : Sliced_Length;
  return (
    <main className="w-[270px] max-w-[300px] grow flex-shrink-0 border border-neutral-300 rounded-lg shadow overflow-hidden pb-4">
            <div className="relative cursor-pointer w-full flex-shrink-0 h-[220px]">
            <Link href={`/searchapartment/apartment=${APARTMENT_ID}`}>
                <Image loading="lazy" src={PREVIEW_IMAGES[CurrentImage]} fill className="object-cover" alt=""/>
            </Link>
            <Heart className="absolute top-2 right-2 bg-blue-700 text-neutral-200 p-1 rounded-full cursor-pointer" size={30}/>
            </div>
            <div className="p-2">
            <section className='w-full flex items-center justify-center flex-wrap gap-1'>
                {Check_Status.map((image, index) => {
                    return (
                        <div onClick={() => setCurrentImage(index)} key={index} className={`relative flex-shrink-0 cursor-pointer w-15 h-15 overflow-hidden rounded-lg ${index === CurrentImage && 'border-2 border-blue-700'}`}>
                            <Image src={image} alt='' fill className='object-cover'/>
                        </div>
                    )
                })}
            </section>
            <div onClick={() => setShowMore(!ShowMore)} className={`w-full flex justify-center items-end pt-2 font-semibold text-sm cursor-pointer ${ShowMore ? 'text-neutral-500' : 'text-blue-700'}`}>
                {PREVIEW_IMAGES.length > 4 && (
                    <>
                        {ShowMore ? "Show Less" : "Show More"} <ChevronDown className={`${ShowMore && 'rotate-180'}`} size={18}/>
                    </>
                )}
            </div>
            <Link href={`/searchapartment/apartment=${APARTMENT_ID}`}>
                <b>{NAME}</b>
            </Link>
                <span className='flex flex-col items-start gap-2 justify-between'>
                    <p className='font-semibold text-blue-700 uppercase'>{COUNTRY} • <span className='font-normal text-neutral-600 capitalize'>{CITY}</span></p>
                    <ins className='text-green-600 font-semibold border px-2 rounded-full no-underline'>{PRICE}</ins>
                </span>
                <div className="flex items-center mt-2">
                    <span className="p-1 text-neutral-100 font-semibold rounded bg-blue-900">9.8</span>
                    <p className="pl-2 text-neutral-700 font-semibold">Exceptional <span className="font-normal text-neutral-500">{REVIEWS_COUNT ? REVIEWS_COUNT : 0} reviews</span></p>
                </div>
            </div>
    </main>
  )
}
