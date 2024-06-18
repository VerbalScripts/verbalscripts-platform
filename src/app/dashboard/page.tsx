/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useEffect, useState } from 'react';
import SystemProgressUpload from '@/components/dashboard/SystemProgressUpload';
import SystemProgressPopup from '@/components/dashboard/SystemProgressPopup';
import AxiosProxy from '@/utils/AxiosProxy';
import EmptyUploadsPrompt from './components/EmptyUploadsPrompt';
import SummaryStatsBoard from './components/SummaryStatsBoard';
import LoadSpinner from '@/components/dashboard/LoadSpinner';
// import { useRouter } from 'next/navigation';

// import type { Metadata } from 'next';
// import { useAppSelector } from '@/store/hooks';

// export const metadata: Metadata = {
//   title: 'VerbalScripts | Dashboard',
//   description:
//     'VerbalScripts offers fast, affordable, and highly accurate human transcription, translation, data annotation, and AI dataset services customized for your needs.',
// };

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [isNew, setIsNew] = useState(true);

  const httpHasPrevOrders = async () => {
    try {
      const response = await AxiosProxy.get('/files?q=all');

      if (response.data.results && response.data.results.length > 0) {
        setIsNew(false);
      }
    } catch (err: any) {
      throw new Error(err.message || 'Could Not Process Request');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    httpHasPrevOrders();
  }, []);

  return (
    <div className='min-h-screen'>
      <title>VerbalScripts | Dashboard</title>
      <SystemProgressUpload />
      <SystemProgressPopup />
      {/* <div className='h-52 bg-indigo-400 flex flex-col justify-center px-24 py-20' style={{ background: '#1c2534'}}>
        <div className='mb-5 text-4xl md:text-6xl capitalize font-bold footer-title'>
          Hello, {'Isaac'}
        </div>
      </div> */}

      <div className='py-3 px-6 md:px-24 '>
      
        {isNew && !loading ? (
          <EmptyUploadsPrompt />
        ) : !isNew && !loading ? (
          // <SummaryStatsBoard />
          <EmptyUploadsPrompt />
        ) : (
          <LoadSpinner />
        )}
      </div>
    </div>
  );
}
