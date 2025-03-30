'use client';
import { Star } from "lucide-react";


export default function CallToAction(){
  return (
    <main className='lg:sticky top-2 w-full lg:order-2 lg:grow 
        md:max-w-[400px] border border-dashed text-blue-700 
        border-blue-700 rounded-lg p-8 bg-blue-100 shadow-lg'>
      {/* ----------------------- */}
      <div className='w-full flex justify-between items-center'>
        <span className='flex items-end'>
          <b className='text-2xl font-bold'>$1200</b>
          <p className='text-neutral-400'>/month</p>
        </span>
        <span className='flex items-center gap-1'>
          <Star className='text-yellow-500 fill-yellow-500'/>
          <b>4.8</b>
          •
          <p className='text-neutral-500'>128 Reviews</p>
        </span>
      </div>
      {/* ----------------------- */}
      <section className="w-full mt-4 py-4 px-2 border rounded-lg text-blue-700 bg-neutral-100">
        <div className="w-full flex gap-1 items-center">
            <div className="relative border grow border-dashed rounded-lg py-3 px-2">
                <label className="absolute -top-3 left-1 bg-neutral-100 px-1 font-semibold text-sm" htmlFor="Check-In">Check In</label>
                <input className="outline-none" type="date" id="Check-In"/>
            </div>
            <div className="relative border grow border-dashed rounded-lg py-3 px-2">
                <label className="absolute -top-3 left-1 bg-neutral-100 px-1 font-semibold text-sm" htmlFor="Check-Out">Check Out</label>
                <input className="outline-none" type="date" id="Check-Out"/>
            </div>
        </div>
        <div className="w-full mt-2">
            <span className="flex items-center justify-between">
                <p>Person :</p>
                <span><b>5</b>/6</span>
            </span>
            <input 
                className="accent-blue-700 w-full h-2 rounded-lg cursor-pointer"
                type="range" 
                min={1} 
                max={6} 
                />
        </div>
      </section>
      <button className="w-full text-white font-semibold bg-blue-700 py-2 text-xl cursor-pointer hover:bg-blue-800 rounded-lg mt-2">Reservation</button>
        <section className="w-full space-y-4 mt-4">
            <span className="w-full flex justify-between">
                <p className="font-semibold">$1200 x 5 Night</p>
                <ins>$6000</ins>
            </span>
            <span className="w-full flex justify-between">
                <p className="font-semibold">Services</p>
                <ins>$45</ins>
            </span>
            <span className="w-full flex justify-between">
                <p className="font-semibold">Food</p>
                <ins>$60</ins>
            </span>
            <hr className="border-neutral-300"/>
            <div className="w-full flex justify-between">
                <b>Total</b>
                <p className="font-bold">$6105</p>
            </div>
        </section>
    </main>
  )
}