import SearchAppartementInputs from '@/components/SearchAppartementInputs'
import React from 'react'
import SearchapArtmentsHeader from './SearchapArtmentsHeader'
import UICardList from '@/UI/UICardList'
import UICardGrid from '@/UI/UICardGrid'
import { ApartmentsData } from '@/FakeData/ApartmentsData'
import { CircleAlert } from 'lucide-react'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Rentify - Search Apartments",
  description: "Browse available apartments for rent in various locations.",
};

type searchParamsType = {
  searchParams: {
    view: string;
    place: string;
  }
}

export default async function page({searchParams}: searchParamsType) {
  const params = Object.fromEntries(
    Object.entries(searchParams || {})
  );
  
  const templateStyleView = params.view || 'grid';
  const templateStylePlace = params.place || '';
  
  
  const Apartments = await ApartmentsData();
  const Filtred_Search = Apartments?.filter((apartment) => apartment?.location.replace(/\s+/g, '').toLowerCase().includes(templateStylePlace.toLowerCase().replace(/\s+/g, '')));
  const Filtred_Results = templateStylePlace === '' ? Apartments : Filtred_Search;
  
  return (
    <main className='w-full'>
        <div className='py-2 bg-gradient-to-b from-blue-900 from-50% to-transparent/50 to-50%'>
            <SearchAppartementInputs />
        </div>
        <section className='w-full lg:px-20 px-4 py-4'>
          <SearchapArtmentsHeader SEARCHED_PLACE={templateStylePlace} ResultCount={Filtred_Results.length} InitialStyle={templateStyleView} />
        
          {templateStyleView === 'grid' ? 
          (
            <section className='w-full my-4 flex flex-wrap justify-center items-center gap-2'>
              {Filtred_Results.length > 0 ? Filtred_Results.map((apartment) => {
                const [city, country] = apartment?.location.split(", ");
                return (
                    <UICardGrid
                      key={apartment?.id}
                      APARTMENT_ID={apartment?.id}
                      COUNTRY={country}
                      PREVIEW_IMAGES={apartment?.overviewimages}
                      CITY={city}
                      PRICE={apartment?.price}
                      NAME={apartment?.name}
                      REVIEWS_COUNT={apartment?.reviewscount}
                      />
                    )
                  }) : (
                  <section className='text-red-700 font-semibold flex flex-col h-140 justify-center items-center'>
                    <CircleAlert size={60}/>
                      Not Founded
                  </section>
                  )}
              </section>
          )
            : (
            <section className='w-full my-4 flex flex-wrap justify-center items-center gap-2'>
                {Filtred_Results.length > 0 ? Filtred_Results.map((apartment) => {
                const [city, country] = apartment?.location.split(", ");
                return (
                  <UICardList 
                  key={apartment?.id}
                  APARTMENT_ID={apartment?.id}
                  COUNTRY={country}
                  CITY={city}
                  PRICE={apartment?.price}
                  NAME={apartment?.name}
                  PREVIEW_IMAGES={apartment?.overviewimages}
                  REVIEWS_COUNT={apartment?.reviewscount}
                  />
                )
              }) : (
                <section className='text-red-700 font-semibold flex flex-col h-140 justify-center items-center'>
                  <CircleAlert size={60}/>
                    Not Founded
                </section>
                )}
            </section>
          
          )}
        </section>
    </main>
  )
}
