import AxiosProxy from '@/utils/AxiosProxy';
import { bytesToMB } from '@/utils/bytesToMb';
import { classNames } from '@/utils/classNames';
import { DurationFromSeconds } from '@/utils/DurationFromSeconds';
import {
  CheckBadgeIcon,
  ClockIcon,
  CreditCardIcon,
  PlayIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import { Table } from 'flowbite-react';
import moment from 'moment';
// import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface FeedInfo {
  folderId?: string;
  flimit: number;
  fpage: number;
}

export default function SummaryStatsBoard() {
  const [ordersFiles, setOrders] = useState<OrderFile[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPendingOrders = async ({ flimit, fpage }: FeedInfo) => {
    try {
      console.log('called it, fines');
      const response = await AxiosProxy.get(
        `/files?page=${fpage}&limit=${flimit}`,
      );
      if (response.status == 200) {
        setOrders(response.data.results || []);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPendingOrders;
  }, []);
  return (
    <div className='py-24'>
      <div className='grid max-w-none   content-center grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-5 lg:max-w-none lg:grid-cols-4 lg:gap-y-5'>
        <div className='flex flex-col items-start bg-gray-100 dark:bg-white text-gray-900  px-4 py-3 border border-gray-300 dark:border-gray-500 transition-all hover:bg-zinc-600 rounded-2xl '>
          <div className='flex w-full justify-between'>
            <div className='text-gray-600 dark:text-gray-800 font-semibold'>
              Pending Invoices
            </div>
            <div>
              <CreditCardIcon className='text-gray-600 dark:text-gray-800 w-8 h-8' />
            </div>
          </div>
          <span className='text-gray-800 dark:text-gray-800 text-3xl md:text-4xl font-bold'>
            2
          </span>
          <div className='flex w-full items-start justify-between'>
            
            <button className='w-[6rem] font-semibold py-0.5 inline-flex justify-center bg-indigo-500 text-white rounded-full'>
              Pay Now
            </button>
          </div>
        </div>
        <div className='flex flex-col items-start bg-gray-100 dark:bg-gray-100 text-gray-900  px-4 py-3 border border-gray-300 dark:border-gray-500 transition-all hover:bg-zinc-600 rounded-2xl '>
          <div className='flex w-full justify-between'>
            <div className='text-gray-600 dark:text-gray-800 font-semibold'>
              Pending Jobs
            </div>
            <div>
              <ClockIcon className='text-gray-600 dark:text-gray-800 w-8 h-8' />
            </div>
          </div>
          <span className='text-gray-800 dark:text-gray-800 text-3xl md:text-4xl font-bold'>
            5
          </span>
          <div className='flex w-full items-start justify-between'>
            <div className='text-gray-600 dark:text-gray-100 text-xs'>
              Not Started
            </div>
          </div>
        </div>

        <div className='flex flex-col items-start bg-gray-100 dark:bg-zinc-700 text-gray-900  px-4 py-3 border border-gray-300 dark:border-gray-500 transition-all hover:bg-zinc-600 rounded-2xl '>
          <div className='flex w-full justify-between'>
            <div className='text-gray-600 dark:text-gray-100 font-semibold'>
              In Progress Jobs
            </div>
            <div>
              <RocketLaunchIcon  className='text-gray-600 dark:text-gray-100 w-8 h-8' />
            </div>
          </div>
          <span className='text-gray-800 dark:text-white text-3xl md:text-4xl font-bold'>
            3
          </span>
          <div className='flex w-full items-start justify-between'>
            <div className='text-gray-600 dark:text-gray-100 text-xs'>
              Underway
            </div>
          </div>
        </div>


        <div className='flex flex-col items-start bg-gray-100 dark:bg-zinc-700 text-gray-900  px-4 py-3 border border-gray-300 dark:border-gray-500 transition-all hover:bg-zinc-600 rounded-2xl '>
          <div className='flex w-full justify-between'>
            <div className='text-gray-600 dark:text-gray-100 font-semibold'>
              Completed Jobs
            </div>
            <div>
              <CheckBadgeIcon className='text-gray-600 dark:text-gray-100 w-8 h-8' />
            </div>
          </div>
          <span className='text-gray-800 dark:text-white text-3xl md:text-4xl font-bold'>
            50
          </span>
          <div className='flex w-full items-start justify-between'>
            <div className='text-gray-600 dark:text-gray-100 text-xs'>
              Already done
            </div>
          </div>
        </div>
      </div>

      <div className='my-2 text-gray-600 dark:text-gray-100 text-md'>
        Pending Transcriptions
      </div>
      <div className='space-y-2'>
        <Table hoverable>
          <Table.Head className='dark:border-gray-700 dark:bg-zinc-800'>
            <Table.HeadCell>Label</Table.HeadCell>
            <Table.HeadCell>Duration</Table.HeadCell>
            <Table.HeadCell>Duration</Table.HeadCell>
            <Table.HeadCell>Created At</Table.HeadCell>
          </Table.Head>
          <Table.Body className='divide-y'>
            {ordersFiles.map((orderFile) => (
              <Table.Row
                is='a'
                key={orderFile.id}
                className={classNames(
                  'bg-white  dark:border-gray-700 dark:bg-gray-800',
                )}
              >
                <Table.Cell className='flex gap-x-3 items-center py-2'>
                  {orderFile.mimetype &&
                  (orderFile.mimetype.split('/')[0] == 'video' ||
                    orderFile.mimetype.split('/')[0] == 'audio') ? (
                    <button
                      className='cursor-pointer transition-all duration-100 '
                      onClick={() => setVideoId(orderFile.id)}
                    >
                      <PlayIcon className='text-gray-800  dark:text-white w-5' />
                    </button>
                  ) : (
                    <span className=' w-5 text-white'>Not audio</span>
                  )}

                  <span className='overflow-hidden truncate md:w-[18rem] font-medium text-gray-900 dark:text-white'>
                    {orderFile.label}
                  </span>
                </Table.Cell>

                <Table.Cell className='py-2'>
                  {bytesToMB(orderFile.size)} {'MBs'}
                </Table.Cell>
                <Table.Cell className='py-2'>
                  <span className='uppercase'>
                    {orderFile.duration
                      ? DurationFromSeconds(orderFile.duration)
                      : '-'}
                  </span>
                </Table.Cell>
                <Table.Cell className='py-2'>
                  <span className='capitalize text-sm text-gray-900 dark:text-white'>
                    {moment(orderFile.createdAt).format('L')}
                  </span>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
