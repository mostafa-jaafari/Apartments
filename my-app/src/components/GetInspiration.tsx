'use client';
import { INSPIRATIONS } from '@/FakeData/ApartmentsData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'



export default function GetInspiration() {
        const Slider_Ref = useRef<HTMLDivElement | null>(null);
        const Handle_Scroll_Left = () => {
            if (Slider_Ref.current) {
                Slider_Ref.current.scrollTo({ left: Slider_Ref.current.scrollLeft - 350, behavior: "smooth" });
            }
        };
        const Handle_Srcoll_Right = () => {
            if(Slider_Ref.current){
                Slider_Ref.current.scrollTo({ left: Slider_Ref.current.scrollLeft + 350, behavior: 'smooth' });
            }
        }
        const [Is_Scrolled_To_Left, setIs_Scrolled_To_Left] = useState(false);
useEffect(() => {
    const HandleScroll = () => {
        if(Slider_Ref.current){
            setIs_Scrolled_To_Left(Slider_Ref.current.scrollLeft > 0);
        }
    }
    // --------- Add The user scroll tracking --------- //
    const slider = Slider_Ref.current;
    if(slider){
        slider.addEventListener('scroll', HandleScroll);
    }
    // --------- Remove the user Scroll tracking --------- //
    return () => {
        if(slider){
            slider.removeEventListener('scroll', HandleScroll);
        }
    }
},[])
const Inspirations_Data = INSPIRATIONS;
const Filtred_Exceptional_Post = Inspirations_Data.find((post) => post.firstpost === true);
const Clean_Posts = Inspirations_Data.filter((post) => post.id !== Filtred_Exceptional_Post?.id);
return (
    <main className='w-full'>
      <span className='w-full flex justify-between items-center'>
        <h1 className='lg:w-full w-[80%] font-semibold text-2xl py-8'>
            Get inspiration for your next trip
        </h1>
        <Link href='/' className='font-semibold text-blue-700'>More</Link>
      </span>
      {/* -------------------------- */}
<section className='relative w-full overflow-hidden'>
    <section ref={Slider_Ref} className='w-full flex gap-2 items-start overflow-x-scroll hide-bar'>
    {Is_Scrolled_To_Left && <ChevronLeft onClick={Handle_Scroll_Left} size={30} className='absolute top-40 left-10 z-50 rounded-full shadow-lg border shadow-blue-500 bg-blue-700 text-neutral-100 cursor-pointer'/>}
        <div className='relative flex-shrink-0 lg:w-2/6 w-[350px] h-[350px] overflow-hidden rounded-lg'>
            <Image loading='lazy' src={Filtred_Exceptional_Post?.image} fill alt='' className='object-cover hover:scale-120 transition-transform duration-500'/>
            <span className='absolute left-0 top-0 z-50 bg-blue-700 px-2 text-neutral-100 '>
                {Filtred_Exceptional_Post?.cityname} / {Filtred_Exceptional_Post?.countryname}
            </span>
        </div>
        {/* -------------------- */}
            {Clean_Posts?.map((apartment) => {
                return (
                    <section key={apartment?.id} className='lg:w-2/6 w-[250px] flex-shrink-0'>
                        <div className='relative h-[250px] overflow-hidden rounded-lg'>
                            <Image loading='lazy' src={apartment?.image} alt='' fill className='object-cover hover:scale-120 transition-transform duration-500'/>
                            <span className='absolute left-0 top-0 z-50 bg-blue-700 px-2 text-neutral-100 '>
                                {apartment.cityname} / {apartment.countryname}
                            </span>
                        </div>
                        <span className='flex flex-col items-start'>
                            <b className='px-2 text-xl'>{apartment?.title}</b>
                            <p className='px-2 text-neutral-600 pl-2 text-sm'>
                                {apartment?.description}
                            </p>
                        </span>
                    </section>
                )
            })}
            </section>
                <ChevronRight onClick={Handle_Srcoll_Right} size={30} className='absolute top-40 right-10 z-50 rounded-full bg-blue-700 shadow-lg shadow-blue-500 border text-neutral-100 cursor-pointer'/>
        </section>
    </main>
  )
}
