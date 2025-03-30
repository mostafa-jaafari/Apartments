import Image from 'next/image'
import React from 'react'



type ClientReviewsType = {
    PROFIL_IMAGE: string;
    OWNER_NAME: string;
    DATE: string;
    COMMENT_REVIEW: string;
}

export default function ClientReviews({PROFIL_IMAGE, OWNER_NAME, DATE, COMMENT_REVIEW}: ClientReviewsType) {
  return (
    <main className='w-full p-4 rounded-lg border border-neutral-300'>
      <section className='w-full flex items-center gap-2'>
        <div className='relative w-14 h-14 rounded-full overflow-hidden bg-neutral-200'>
            <Image src={PROFIL_IMAGE} alt='' fill className='object-cover'/>
        </div>
        <span>
            <h1 className='font-semibold capitalize'>{OWNER_NAME}</h1>
            <p className='text-sm text-neutral-500'>{DATE}</p>
        </span>
      </section>
      <section className='w-full'>
        <p className='text-neutral-700 py-2'>
            {COMMENT_REVIEW}
        </p>
      </section>
    </main>
  )
}
