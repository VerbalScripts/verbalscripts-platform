'use client'

import React from 'react';


import ProfileSettings from '@/components/dashboard/ProfileSettings';
import SecuritySettings from '@/components/dashboard/SecuritySettings';
import Head from 'next/head'


export default function Page() {
  return (
    <div>
      <Head>
        <title>Verbal Dashboard | Account</title>
        <meta
          property='og:title'
          content='Verbal Dashboard | Account'
          key='title'
        />
      </Head>
      <section className='relative px-6 py-14 sm:py-20 lg:px-24'>
        <div className='mx-auto max-w-3xl text-left'>
        
          {/* profile update */}

          <ProfileSettings />
          {/* divider */}
          {/* <div className='my-4 border-b border-gray-200'></div> */}

          {/* password update */}
          <SecuritySettings />
        </div>
      </section>
    </div>
  );
}
