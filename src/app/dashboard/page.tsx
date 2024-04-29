'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// import type { Metadata } from 'next';
// import { useAppSelector } from '@/store/hooks';

// export const metadata: Metadata = {
//   title: 'VerbalScripts | Dashboard',
//   description:
//     'VerbalScripts offers fast, affordable, and highly accurate human transcription, translation, data annotation, and AI dataset services customized for your needs.',
// };

export default function Page() {
  // const authState = useAppSelector((state) => state.auth.isAuth);
  const router = useRouter();
  useEffect(() => {
    router.push('/dashboard/pending');
  });

  return (
    <>
      <title>VerbalScripts | Dashboard</title>
      <div className='py-3 px-10'>
        <div className='py-5'>
          <div className='my-2 text-gray-600 text-md'>
            Pending Transcriptions
          </div>
          <div className='grid  grid-cols-4 items-center gap-4 sm:max-w-xl sm:grid-cols-4  lg:mx-0 lg:max-w-none lg:grid-cols-4 '>
            {Array.from(Array(5).keys()).map((item, index) => (
              <Link
                key={index}
                href=''
                className='shadow-md rounded-xl overflow-hidden'
              >
                <div className='bg-gray-50 h-28 flex justify-center items-center'>
                  <img
                    src='icons/video.png'
                    className='h-12 w-12 text-gray-600'
                  />
                </div>
                <div className='py-1.5 px-3'>
                  <div className='text-gray-700 font-semibold text-lg'>
                    One thing you should never do in life
                  </div>
                  <div className='flex justify-between items-center my-1'>
                    <div className='text-gray-600 text-sm'>
                      Caption, Subtitle
                    </div>
                    <div className='py-0.5 px-2 bg-gray-50 text-sm rounded-xl text-indigo-600 font-semibold'>
                      MP4
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
