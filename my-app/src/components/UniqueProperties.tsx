import UICardGrid from "@/UI/UICardGrid";
import { ApartmentsData, ApartmentType } from "@/FakeData/ApartmentsData";


export default async function UniqueProperties(){
    const Apartments = await ApartmentsData();
    const Properties_Cards: ApartmentType[] = Apartments.slice(0,8);
    return (
        <main className="w-full">
            <h1 className='font-semibold text-2xl pt-8'>
                Stay at our top unique properties
            </h1>
            <p className="text-neutral-400 pb-8">
                From castles and villas to boats and igloos, 
                we have it all
            </p>
            <section className="flex flex-wrap items-center justify-center gap-2">
            {Properties_Cards.map((apartment) => {
                const [city, country] = apartment?.location.split(", ");
                    return (
                        <UICardGrid 
                            key={apartment?.id}
                            APARTMENT_ID={apartment?.id} 
                            COUNTRY={country}
                            CITY={city}
                            PRICE={apartment?.price}
                            PREVIEW_IMAGES={apartment?.overviewimages}
                            NAME={apartment?.name}
                            REVIEWS_COUNT={apartment?.reviewscount}
                            />
                    )
                })}
            </section>
        </main>
    )
}