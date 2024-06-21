/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import React, { useEffect, useState } from 'react';
import LoadSpinner from '@/components/dashboard/LoadSpinner';

// import Link from 'next/link';
// import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import TawkMessenger from '@/lib/TawkMessenger';
import SystemProgressUpload from '@/components/dashboard/SystemProgressUpload';
import AxiosProxy from '@/utils/AxiosProxy';
import { classNames } from '@/utils/classNames';
import SearchBar from '@/components/dashboard/SearchBar';
import moment from 'moment';
import { Table } from 'flowbite-react';
import BreadcrumbRender from '../components/BreadcrumbRender';

export default function Page() {
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
    <div className='bg-white dark:bg-zinc-800 min-h-screen'>
      <title>Dashboard | In Progress</title>
      <TawkMessenger />

      {/* systenm progress */}
      <SystemProgressUpload />
      {/* show summary */}

      {loading ? (
        <LoadSpinner />
      ) : (
        <div className=''>
          <div className='px-6 relative z-10  md:px-16 xl:px-24 py-10'>
            <div className='absolute -z-[1] right-0 left-0  top-0 h-52 bg-gray-50 dark:bg-orange-300 flex flex-col justify-center px-24 py-20'></div>
            <div className=''>
              <BreadcrumbRender
                links={[
                  { name: 'Projects', href: '#' },
                  { name: 'In-Progress', href: 'in-progress' },
                ]}
              />
            </div>
            <div className='mb-4 flex justify-between'>
              <p className='text-gray-600 dark:text-gray-600 text-xl font-semibold'>
                On-going Projects
              </p>
            </div>

            <div className='flex  justify-between items-center mb-2'>
              <div className='flex gap-x-2'>
                <SearchBar
                  cb={() => new Promise(() => {})}
                  clearSearch={() => new Promise(() => {})}
                />
              </div>
            </div>
          </div>
          <div className='px-6 md:px-16 xl:px-16 overflow-x-auto min-h-svh'>
            <Table hoverable>
              <Table.Head className='dark:border-gray-700 bg-gray-100 dark:bg-zinc-800'>
                <Table.HeadCell>
                  <span className='footer-title'>Order Id</span>
                </Table.HeadCell>
                <Table.HeadCell>
                  <span className='footer-title'>Progress</span>
                </Table.HeadCell>
                <Table.HeadCell>
                  <span className='footer-title'>Payment</span>
                </Table.HeadCell>
                <Table.HeadCell>
                  <span className='footer-title'>Created At</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className='divide-y'>
                {orders.map((order) => (
                  <Table.Row
                    is='a'
                    onClick={() => openDetails(order.id)}
                    key={order.id}
                    className={classNames(
                      'bg-white cursor-pointer dark:border-gray-700 dark:bg-gray-800',
                    )}
                  >
                    <Table.Cell className='flex items-center space-x-3'>
                      <span className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                        {order.orderId || order.id}
                      </span>
                      <span className='bg-indigo-500 flex items-center font-bold justify-center  rounded-full w-5 h-5 text-white'>
                        {order.files.length}
                      </span>
                    </Table.Cell>

                    <Table.Cell className='py-1'>
                      <span className='capitalize bg-indigo-50 text-sm font-semibold text-indigo-500 px-3 py-1.5 rounded-xl'>
                        {order.orderStatus}
                      </span>
                    </Table.Cell>

                    <Table.Cell className=''>
                      <span className='py-1.5 bg-orange-50 text-orange-500 px-2 font-semibold rounded-xl'>
                        {'Not Paid'}
                      </span>
                    </Table.Cell>
                    <Table.Cell className='py-1'>
                      <span className='whitespace-nowrap font-medium text-sm text-gray-900 dark:text-white'>
                        {moment(order.createdAt).format('L')}
                      </span>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
}
