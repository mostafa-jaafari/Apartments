import { ApartmentsData, DESTINITIONS } from '@/FakeData/ApartmentsData';
import UICradGrid from '@/UI/UICardGrid';
import { CircleAlert } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react'
import { Error_Image } from '../../../../public/Err';

export const metadata: Metadata = {
  title: 'Rentify | Apartments in Rentify',
  description: "Explore a wide range of apartments available for rent on Rentify. Find your dream apartment today!",
};

export default async function page({params}: { params: {apartmentbycityid: string } }) {
  const ApartmentByCityID: string = params?.apartmentbycityid;
  const Apartments_Data = await ApartmentsData();
  const Filtred_Apartments = Apartments_Data?.filter((Apartment) => Apartment?.location?.toLocaleLowerCase().includes(ApartmentByCityID));
  const Destinations = DESTINITIONS;
  const Filtred_Destination = Destinations?.find((destination) => destination?.cityname?.toLowerCase() === ApartmentByCityID)
  return (
      <main className='relative w-full'>
        <section className='sticky top-0 -z-1 w-full h-[500px] bg-neutral-900'>
          <div className='relative z-10 overflow-hidden w-full h-full'>
            <Image src={Filtred_Destination?.image || Error_Image} alt='' fill className='object-cover blur-xs opacity-30'/>
          </div>
          <span className='absolute top-[30%] left-0 w-full px-8 flex justify-center z-10'>
            <h1 className='w-max
               bg-gradient-to-r from-blue-700 to-blue-200 text-transparent bg-clip-text text-[12vw] lg:text-9xl font-black'>
              {Filtred_Destination?.cityname}
              <p className='text-[4vw] text-white font-semibold w-full flex justify-end'>{Filtred_Destination?.countryname}</p>
            </h1>
          </span>
        </section>

        <section className='w-full min-h-screen bg-neutral-100 p-20 z-20 flex gap-2 flex-wrap justify-center items-start'>
          {Filtred_Apartments.length > 0 ? Filtred_Apartments?.map((apartment) => {
            const [City, Country] = apartment?.location?.split(',');
            return (
              <UICradGrid
              key={apartment?.id}
                APARTMENT_ID={apartment?.id}
                COUNTRY={Country}
                PREVIEW_IMAGES={apartment?.overviewimages}
                CITY={City}
                PRICE={apartment?.price}
                NAME={apartment?.name}
                REVIEWS_COUNT={apartment?.reviewscount}
              />
            )
          }) : (
            <section className='text-red-700 font-semibold flex flex-col min-h-screen justify-center items-center'>
              <CircleAlert size={60}/>
                Not Founded
            </section>
          )}
      </section>
    </main>
  )
}
