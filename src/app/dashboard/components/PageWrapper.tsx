'use client';

import React, { useEffect, useState } from 'react';
import SystemProgressUpload from '@/components/dashboard/SystemProgressUpload';
import SystemProgressPopup from '@/components/dashboard/SystemProgressPopup';
import AxiosProxy from '@/utils/AxiosProxy';
import EmptyUploadsPrompt from './EmptyUploadsPrompt';
import SummaryStatsBoard from './SummaryStatsBoard';
import LoadSpinner from '@/components/dashboard/LoadSpinner';

export default function PageWrapper() {
  const [loading, setLoading] = useState(true);
  const [isNew, setIsNew] = useState(true);

  const httpHasPrevOrders = async () => {
    try {
      const response = await AxiosProxy.get('/files?q=all');

      if (response.data.results && response.data.results.length > 0) {
        setIsNew(false);
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    <>
      <SystemProgressUpload />
      <SystemProgressPopup />

      <div className=''>
        {isNew && !loading ? (
          <EmptyUploadsPrompt />
        ) : !isNew && !loading ? (
          <SummaryStatsBoard />
        ) : (
          <LoadSpinner />
        )}
      </div>
    </>
  );
}
