'use client';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'


type InitialStyleType = {
  InitialStyle: string;
  ResultCount: number;
  SEARCHED_PLACE: string;
}
export default function SearchAppartementsHeader({InitialStyle, ResultCount, SEARCHED_PLACE}: InitialStyleType) {
    const [templateStyle, setTemplateStyle] = useState(InitialStyle);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const HandleSetMode = (mode: string) => {
      const params = new URLSearchParams(searchParams.toString());
      
      params.set('view', mode);
      
      router.push(`${pathname}?${params.toString()}`);
      setTemplateStyle(mode);
    };
  return (
    <main>
      <section className='flex justify-between items-center'>
        <b className="capitalize">{SEARCHED_PLACE ? SEARCHED_PLACE : 'All'} :<span> ({ResultCount}) results</span></b>
        <div className='flex items-center gap-1 bg-blue-100 rounded-full p-1 w-max'>
            {['grid', 'list'].map((mode,index) => {
                return (
                    <p key={index}
                    onClick={() => HandleSetMode(mode)}
                    className={`px-4 cursor-pointer transition-all ${mode === InitialStyle && 'bg-blue-700 rounded-full text-white font-semibold'}`}>{mode}</p>
                )
            })}
        </div>
      </section>
    </main>
  )
}
