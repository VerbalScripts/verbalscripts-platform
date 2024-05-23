'use client';

import Link from 'next/link';
import React from 'react';

export default function Page() {
  // const router = useRouter();

  return (
    <div className='bg-white dark:bg-zinc-800  min-h-screen flex flex-col items-center justify-center'>
      <div className=''>
        <img src='/invoice.svg' className='object-cover w-[20rem]' alt='' />
      </div>
      <div className='text-lg max-w-md text-gray-800 dark:text-white py-10 text-bold'>
        You have no active Invoices
      </div>
      <div>
        <Link
          href={'/dashboard/pending'}
          className='text-white bg-indigo-500 hover:bg-indigo-400  focus:ring-4 focus:outline-none focus:ring-ingigo-100 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2'
        >
          Add Files
        </Link>
      </div>
    </div>
  );
}
