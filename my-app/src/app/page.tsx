import Footer from "@/components/Footer";
import GetInspiration from "@/components/GetInspiration";
import Offers from "@/components/Offers";
import SearchAppartementInputs from "@/components/SearchAppartementInputs";
import SuggestionsAppartements from "@/components/SuggestionsAppartements";
import TrendingDestinations from "@/components/TrendingDestinations";
import UniqueProperties from "@/components/UniqueProperties";
import Link from "next/link";


export default function Home() {
  return (
    <main className="w-full">
      <main style={{ backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHwwfDB8fHwy')" }}
    className="lg:px-20 px-4 relative flex flex-col justify-center items-start text-neutral-100 py-20 bg-cover bg-center">
      <section className="lg:w-1/2 space-y-8">
        <h1 className="text-5xl font-black">
        A place to call home
        on your next adventure
        </h1>
        <p className="lg:text-xl text-neutral-300">Discover dreamy villas, houses, cabins, & more</p>
        <Link href='/searchapartment' className="py-2 px-4 rounded bg-blue-700 font-semibold">Find yours</Link>
      </section>
      <section className="absolute w-full lg:-bottom-8 -bottom-10 left-0">
            <SearchAppartementInputs  />
      </section>
    </main>
    <main className="w-full lg:p-20 px-4">
        <SuggestionsAppartements />
        <TrendingDestinations />
        <Offers />
        <GetInspiration />
        <UniqueProperties />
    </main>
    <Footer />
    </main>
  );
}
