'use client';

import React, { useEffect, useState } from 'react';
import LoadSpinner from '@/components/dashboard/LoadSpinner';

import { useRouter } from 'next/navigation';
import TawkMessenger from '@/lib/TawkMessenger';
import SystemProgressUpload from '@/components/dashboard/SystemProgressUpload';
import AxiosProxy from '@/utils/AxiosProxy';
import SearchBar from '@/components/dashboard/SearchBar';
import BreadcrumbRender from '../../components/BreadcrumbRender';
import TableView from './TableView';

export default function InProgressWrapper() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<InprogressOrder[]>([]);

  const openDetails = (id: string) => {
    router.push(`/dashboard/in-progress/${id}`);
  };

  const fetchOrders = async () => {
    try {
      setLoading(true);

      const response = await AxiosProxy.get(
        `/orders/client?status=in-progress`,
      );
      if (response.status == 200) {
        setOrders(response.data.results);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <>
      <TawkMessenger />

      {/* systenm progress */}
      <SystemProgressUpload />
      {/* show summary */}

      {loading ? (
        <LoadSpinner />
      ) : (
        <div className=''>
          <div className='px-6 relative z-10  md:px-16 xl:px-24 py-10'>
            <div className='absolute -z-[1] right-0 left-0  top-0 h-44 bg-gray-50 dark:bg-teal-950 flex flex-col justify-center px-24 py-20'></div>

            <div className=''>
              <BreadcrumbRender
                links={[
                  { name: 'Projects', href: '#' },
                  { name: 'In-Progress', href: 'in-progress' },
                ]}
              />
            </div>
            <div className='mb-5 flex justify-between'>
              <p className='text-gray-600 dark:text-gray-400 text-xl font-semibold'>
                On-going Projects
              </p>
            </div>

            <div className='flex  justify-between items-center'>
              <div className='flex gap-x-2'>
                <SearchBar
                  cb={() => new Promise(() => {})}
                  clearSearch={() => new Promise(() => {})}
                />
              </div>
            </div>
            <TableView orders={orders} openOrder={openDetails} />
          </div>
        </div>
      )}
    </>
  );
}
