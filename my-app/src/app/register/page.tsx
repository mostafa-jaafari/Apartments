import { Metadata } from 'next';
import Link from 'next/link'
import React from 'react'


export const metadata: Metadata = {
    title: "Rentify - Register Page",
    description: "Register to Rentify to find your dream apartment.",
  };

export default function page() {
  return (
    <main className='w-full flex justify-center py-6'>
        <section className='lg:w-1/4 w-full px-4'>
            <b className='text-xl'>
                Sign in or create an account
            </b>
            <p className='text-neutral-500 text-sm py-2'>
                You can sign in using your 
                BrandName account to access our services.
            </p>
            <div className='flex flex-col'>
                <label className='text-sm font-semibold' htmlFor="Email-Adress">Email adress</label>
                <input className='border focus:outline-blue-600 border-neutral-400 px-2 placeholder:text-sm rounded py-1 font-semibold' type="email" id="Email-Adress" placeholder='Enter your email address' />
            </div>
            <button className='w-full text-center py-3 rounded mt-4 bg-blue-600 text-neutral-100 font-semibold cursor-pointer'>Continue with email</button>
            <div className="flex my-6 text-sm text-nowrap items-center justify-center gap-2">
                <span className="w-full border-t border-[#46464631]"></span>
                or use one of these options
                <span className="w-full border-t border-[#46464631]"></span>
            </div>
                <div className='flex gap-6 items-center justify-center'>
                    {/* ---------------- Google --------------- */}
                    <svg className='border border-neutral-300 hover:border-blue-500 cursor-pointer rounded p-4' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                    {/* ---------------- Apple --------------- */}
                    <svg className='border border-neutral-300 hover:border-blue-500 cursor-pointer rounded p-4' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 30 30">
                        <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"></path>
                    </svg>
                    {/* ---------------- Facebook --------------- */}
                    <svg className='border border-neutral-300 hover:border-blue-500 cursor-pointer rounded p-4' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
                        <path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
                    </svg>
                </div>
                <hr className='border-[#46464631] my-6'/>
                <p className='text-xs text-center'>
                By signing in or creating an account, 
                you agree with our 
                <Link href='/' className='px-1 text-blue-700 font-semibold'>
                    Terms & Conditions
                </Link> 
                and 
                <Link href='/' className='px-1 text-blue-700 font-semibold'>
                    Privacy Statement
                </Link>
                </p>
                <p className='text-center text-xs mt-4'>
                    All rights reserved. <br />
                    Copyright (2006-2025) – BrandName™
                </p>
        </section>
    </main>
  )
}
