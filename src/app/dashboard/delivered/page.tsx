/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import BreadcrumbRender from '../components/BreadcrumbRender';
import SystemProgressPopup from '@/components/dashboard/SystemProgressPopup';
import LoadSpinner from '@/components/dashboard/LoadSpinner';
import { Table } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import SearchBar from '@/components/dashboard/SearchBar';
import { classNames } from '@/utils/classNames';

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [completedOrders, setCompletedOrders] = useState<CompletedOrder[]>([]);

  const openDetails = (id: string) => {
    router.push(`/dashboard/delivered/${id}`);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='bg-white dark:bg-zinc-800  min-h-screen '>
      <SystemProgressPopup />

      {loading ? (
        <LoadSpinner />
      ) : (
        <div>
          {completedOrders.length > 0 ? (
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
                    Completed Projects
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
                    {completedOrders.map((order) => (
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
          ) : (
            <div className='flex flex-col items-center justify-center'>
              <div className=''>
                <img
                  src='/invoice.svg'
                  className='object-cover w-[25rem]'
                  alt=''
                />
              </div>
              <div className='text-lg max-w-md text-gray-800 dark:text-white py-10 text-bold'>
                You have not placed any Orders
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
          )}
        </div>
      )}
    </div>
  );
}
