'use client';
import { ApartmentsData, ApartmentType } from '@/FakeData/ApartmentsData';
import { Flame, MapPinCheck, Sofa } from 'lucide-react'
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

type Search_BoxType = {
  IsFocused: boolean;
  Place: string;
}
const Search_Box = ({IsFocused, Place}: Search_BoxType) => {
  const [Apartments, setApartments] = useState<ApartmentType[]>([]);
  const Location_Suggested: string[] = ['Tangier, MOROCCO', 'Fes', 'Agadir, MOROCCO', 'Marakech, MOROCCO', 'Casablanca'];
  useEffect(() => {
    const fetchData = async () => {
      const Data = await ApartmentsData();
      setApartments(Data)
    }
    fetchData();
  }, [])
  const Filtred_Apartments = Apartments?.filter((apartment) => apartment?.location.toLowerCase().includes(Place.toLowerCase()));
  if(IsFocused && Place === ''){
    return (
      <section className='text-neutral-100 w-full flex flex-col gap-1 p-2 bg-blue-100 rounded-lg border border-neutral-300'>
        {Location_Suggested.map((location, index) => {
          return (
            <Link key={index} href={`/searchapartment?place=${location.toLowerCase().replace(/\s/g, '')}`}>
              <span className='w-full py-2 px-4 flex items-center justify-between shadow border border-dashed border-neutral-400 
                rounded-lg bg-neutral-100 text-neutral-600 hover:bg-neutral-200 cursor-pointer'>
                <b>{location}</b>
                <Flame className='text-blue-700' />
              </span>
            </Link>
          )
        })}
      </section>
    )
  }else if(Place !== '' && IsFocused){
    return (
      <section className='text-neutral-100 w-full flex flex-col gap-1 p-2 bg-blue-100 rounded-lg border border-neutral-300'>
          {Place !== '' && Filtred_Apartments.length > 0 && IsFocused ? Filtred_Apartments?.map((apartment, index) => {
            return (
              <Link key={index} href={`/searchapartment?place=${apartment.location}`}>
                <span className='w-full font-semibold py-2 px-4 flex items-center justify-between shadow border border-dashed border-neutral-400 
                  rounded-lg bg-neutral-100 text-neutral-600 hover:bg-neutral-200 cursor-pointer'>
                    {apartment?.location}
                  <MapPinCheck />
                </span>
              </Link>
            )
          }) : (
            <p className='w-full text-center text-neutral-500'>Not Founded !!</p>
          )}
      </section>
    )
  }
}
export default function SearchAppartementInputs(){
  const [Place, setPlace] = useState<string>('');
  const [IsFocused, setIsFocused] = useState<boolean>(false);
  const router = useRouter();
  const q = useSearchParams();
  const Search_Place = q.get('place');
  useEffect(() => {
    if(Search_Place){
      setPlace(Search_Place)
    }
  }, [Search_Place])
  const HandleSearchPlace = () => {
    const queryParams = new URLSearchParams();
    if (Place.trim() !== '') {
      queryParams.set('place', Place);
    }
  router.push(`/searchapartment${queryParams.toString() ? '?' + queryParams.toString() : ''}`);
}
const Input_Ref = useRef<HTMLInputElement>(null);
useEffect(() => {
  const HandleFocus = (e: MouseEvent) => {
    if(Input_Ref.current && !Input_Ref.current.contains(e.target as Node)){
      setIsFocused(false);
    }
  }
  document.addEventListener('mousedown', HandleFocus);
  return () => document.removeEventListener('mousedown', HandleFocus);
}, [])

  return (
    <main className='w-full lg:px-20 px-4'>
      <section className="flex shadow-lg shadow-neutral-400/50 gap-2 justify-center items-end p-1 rounded-lg bg-white text-blue-700">
        <div className="grow flex flex-col items-center">
          <label className="text-xl font-semibold" htmlFor="Place">Choose Place</label>
          <div className="w-full flex items-center gap-2 border-1 border-dashed pl-3 overflow-hidden rounded-lg">
              <Sofa />
              <input onFocus={() => setIsFocused(true)} value={Place} onChange={(e) => {
                setPlace(e.target.value)
                setIsFocused(true)
              }}
                className="outline-none placeholder:font-normal font-semibold w-full" id="Place" type="text" placeholder="Where are you going" />
                <button onClick={HandleSearchPlace} className='bg-blue-700 cursor-pointer text-neutral-100 lg:py-3 py-1.5 px-6 font-semibold text-xl'>Search</button>
          </div>
        </div>
      </section>
        {IsFocused && (
          <section className='absolute left-0 z-50 w-1/2 max-h-80 overflow-y-scroll pt-2 pl-20 overflow-hidden'>
            <div ref={Input_Ref} className='text-neutral-600'>
              <Search_Box IsFocused={IsFocused} Place={Place}/>
            </div>
          </section>
        )}
    </main>
  )
}
