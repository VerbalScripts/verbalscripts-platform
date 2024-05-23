'use client';

import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '@/store/configureStore';
import LocalFilePLoad from '@/components/dashboard/LocalFilePLoad';
import SystemProgressUpload from '@/components/dashboard/SystemProgressUpload';
import SystemProgressPopup from '@/components/dashboard/SystemProgressPopup';
// import { useRouter } from 'next/navigation';

// import type { Metadata } from 'next';
// import { useAppSelector } from '@/store/hooks';

// export const metadata: Metadata = {
//   title: 'VerbalScripts | Dashboard',
//   description:
//     'VerbalScripts offers fast, affordable, and highly accurate human transcription, translation, data annotation, and AI dataset services customized for your needs.',
// };

export default function Page() {
  const user = useRecoilValue(userState);

  return (
    <div className='min-h-screen'>
      <title>VerbalScripts | Dashboard</title>
      <SystemProgressUpload />
      <SystemProgressPopup />
      <div className='py-3 px-6 md:px-24'>
        <div className='py-5 '>
          {/* fancy welcome if orders are empty */}
          <div className='pt-10 md:pt-16'>
            <div className='mb-5 text-5xl md:text-7xl capitalize font-bold footer-title'>
              Hello, {user.isAuth ? user.firstName : 'Guest'}
            </div>

            <div className='text-4xl md:text-5xl font-semibold text-gray-600 dark:text-gray-500'>
              Are you ready to transcript?
            </div>
          </div>

          <div className='py-8'>
            <LocalFilePLoad />
          </div>

          {/* <div className='my-2 text-gray-600 text-md'>
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
