import Image from 'next/image'
import React from 'react'
import GiftBoxImage from '../../public/Gift-Box.png';
import Link from 'next/link';
export default function Offers() {
  return (
    <main>
        <h1 className='font-semibold text-2xl py-8'>
            Travel more, spend less
        </h1>
        <section className='w-full border border-neutral-300 rounded-lg p-4 flex justify-between items-center'>
            <div className='space-y-4'>
                <b className='text-xl'>
                    Sign in, save money
                </b>
                <p className='text-sm'>
                Save 10% or more at participating properties 
                – just look for the blue Genius label
                </p>
                <div className='flex items-center gap-2'>
                    <Link href='/login' className='p-2 text-sm text-neutral-100 font-semibold cursor-pointer hover:bg-blue-900 bg-blue-700 rounded-lg'>Sign in</Link>
                    <Link href='/register' className='font-semibold text-sm cursor-pointer hover:text-blue-900 text-blue-700'>Register</Link>
                </div>
            </div>
            <div className='relative overflow-hidden flex-shrink-0 w-24 h-24'>
                <Image loading='lazy' src={GiftBoxImage} fill className='object-cover' alt='Offers'/>
            </div>
        </section>
    </main>
  )
}
