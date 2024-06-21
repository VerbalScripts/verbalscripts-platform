/* eslint-disable @typescript-eslint/no-unused-vars */
import AxiosProxy from '@/utils/AxiosProxy';
import { bytesToMB } from '@/utils/bytesToMb';
import { classNames } from '@/utils/classNames';
import { DurationFromSeconds } from '@/utils/DurationFromSeconds';
import {
  CheckBadgeIcon,
  ClockIcon,
  CreditCardIcon,
  PlayIcon,
  PlusCircleIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import { Table } from 'flowbite-react';
import moment from 'moment';
import Link from 'next/link';
// import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '@/store/configureStore';
import CreateProject from '@/components/modals/CreateProject';

interface FeedInfo {
  folderId?: string;
  flimit: number;
  fpage: number;
}

export default function SummaryStatsBoard() {
  const [ordersFiles, setOrders] = useState<OrderFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [videoId, setVideoId] = useState('');
  const [pendingTasksCount, setPendingTasksCount] = useState(0);
  const [inprogressTasksCount, setInprogressTasksCount] = useState(0);
  const [pendingInvoicesCount, setPendingInvoicesCount] = useState(0);
  const [deliveredTasksCount, setDeliveredTasksCount] = useState(0);
  const [createProject, setCreateProject] = useState(false);
  const [user, setUser] = useRecoilState(userState);

  const [statsLoader, setStatsLoader] = useState(true);

  const fetchPendingOrders = async ({ flimit, fpage }: FeedInfo) => {
    try {
      const response = await AxiosProxy.get(
        `/files?page=${fpage}&limit=${flimit}`,
      );
      if (response.status == 200) {
        setOrders(response.data.results);
        setPendingTasksCount(response.data.paginate.total);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchInvoiceStats = async () => {};
  const fetchInprogressJobs = async () => {};
  const fetchCompleteJobs = async () => {};

  const initStatsFetch = async () => {
    try {
      await Promise.all([
        fetchPendingOrders({ flimit: 15, fpage: 1 }),
        fetchInvoiceStats,
        fetchInprogressJobs,
        fetchCompleteJobs,
      ]);
    } catch (err) {
      throw new Error(
        'Could not connect to the Network, check your connection and try again!',
      );
    } finally {
      setStatsLoader(false);
    }
  };

  useEffect(() => {
    initStatsFetch();
  }, []);

  return (
    <div className='px-6 md:px-24  py-20 z-[10] relative'>
      <CreateProject open={createProject} setOpen={setCreateProject} />

      <div className='absolute -z-[1] right-0 left-0  top-0 h-52 bg-gray-50 dark:bg-orange-200 flex flex-col justify-center px-24 py-20'></div>

      <div className='flex justify-between items-start'>
        <div>
          <div className='text-gray-800 text-xl md:text-5xl font-bold dark:text-gray-800'>
            Welcome {user.isAuth ? user.firstName : 'Guest'}
          </div>
          <div className='text-xl  font-bold footer-title'>
            Pick up where you left off.
          </div>
        </div>

        <div>
          <button
            type='button'
            onClick={() => setCreateProject(true)}
            className=' gap-x-2 text-gray-900  bg-white btn-vlg hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-semibold rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2'
          >

              <PlusCircleIcon className='w-7 h-7 text-gray-900' />
            <span>
            Create Project
            </span>
          </button>
        </div>
      </div>

      <div className='grid mt-5 max-w-none   content-center grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-5 lg:max-w-none lg:grid-cols-4 lg:gap-y-5'>
        <Link
          href='/dashboard/invoice'
          className='flex flex-col items-start bg-gray-100 dark:bg-white text-gray-900  px-4 py-3 border border-gray-300 dark:border-gray-100 transition-all hover:bg-zinc-200 rounded-2xl '
        >
          <div className='flex w-full justify-between'>
            <div className='text-gray-600 dark:text-gray-800 font-semibold'>
              Pending Invoices
            </div>
            <div>
              <CreditCardIcon className='text-gray-600 dark:text-gray-800 w-8 h-8' />
            </div>
          </div>
          <span className='text-gray-800 dark:text-gray-800 text-3xl md:text-4xl font-bold'>
            {pendingInvoicesCount}
          </span>
          <div className='flex w-full items-start justify-between'>
            <button className='w-[6rem] font-semibold py-0.5 inline-flex justify-center bg-indigo-500 text-white rounded-full'>
              Pay Now
            </button>
          </div>
        </Link>
        <Link
          href='/dashboard/pending'
          className='flex flex-col items-start bg-gray-100 dark:bg-gray-100 text-gray-900  px-4 py-3 border border-gray-300 dark:border-gray-500 transition-all hover:bg-zinc-200 rounded-2xl '
        >
          <div className='flex w-full justify-between'>
            <div className='text-gray-600 dark:text-gray-800 font-semibold'>
              Pending Jobs
            </div>
            <div>
              <ClockIcon className='text-gray-600 dark:text-gray-800 w-8 h-8' />
            </div>
          </div>
          <span className='text-gray-800 dark:text-gray-800 text-3xl md:text-4xl font-bold'>
            {pendingTasksCount}
          </span>
          <div className='flex w-full items-start justify-between'>
            <div className='text-gray-600 dark:text-gray-600 text-xs'>
              Not Started
            </div>
          </div>
        </Link>

        <Link
          href='/dashboard/in-progress'
          className='flex flex-col items-start bg-gray-100 dark:bg-gray-100 text-gray-900  px-4 py-3 border border-gray-300 dark:border-gray-500 transition-all hover:bg-zinc-200 rounded-2xl '
        >
          <div className='flex w-full justify-between'>
            <div className='text-gray-600 dark:text-gray-800 font-semibold'>
              In Progress Jobs
            </div>
            <div>
              <RocketLaunchIcon className='text-gray-600 dark:text-gray-800 w-8 h-8' />
            </div>
          </div>
          <span className='text-gray-800 dark:text-gray-800  text-3xl md:text-4xl font-bold'>
            {inprogressTasksCount}
          </span>
          <div className='flex w-full items-start justify-between'>
            <div className='text-gray-600 dark:text-gray-600 text-xs'>
              Underway
            </div>
          </div>
        </Link>

        <Link
          href='/dashboard/delivered'
          className='flex flex-col items-start bg-gray-100 dark:bg-gray-100 text-gray-900  px-4 py-3 border border-gray-300 dark:border-gray-500 transition-all hover:bg-zinc-200 rounded-2xl '
        >
          <div className='flex w-full justify-between'>
            <div className='text-gray-600 dark:text-gray-800 font-semibold'>
              Completed Jobs
            </div>
            <div>
              <CheckBadgeIcon className='text-gray-600 dark:text-gray-800 w-8 h-8' />
            </div>
          </div>
          <span className='text-gray-800 dark:text-gray-800 text-3xl md:text-4xl font-bold'>
            {deliveredTasksCount}
          </span>
          <div className='flex w-full items-start justify-between'>
            <div className='text-gray-600 dark:text-gray-600 text-xs'>
              Already done
            </div>
          </div>
        </Link>
      </div>

      <div className='my-5 text-gray-600 dark:text-gray-100 text-lg'>
        Pending Transcriptions
      </div>
      <div className='space-y-2'>
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>
              <span className=' footer-title text-sm lg:text-md'>Label</span>
            </Table.HeadCell>
            <Table.HeadCell>
              <span className=' footer-title text-sm lg:text-md'>Size</span>
            </Table.HeadCell>
            <Table.HeadCell>
              <span className=' footer-title text-sm lg:text-md'>Duration</span>
            </Table.HeadCell>
            <Table.HeadCell>
              <span className=' footer-title text-sm lg:text-md'>
                Created At
              </span>
            </Table.HeadCell>
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
                <Table.Cell className='flex gap-x-3 items-center py-2.5'>
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
                    <span className='text-white bg-indigo-500 rounded-sm px-1.5 py-0.5 uppercase'>
                      Doc
                    </span>
                  )}

                  <span className='overflow-hidden truncate md:w-[18rem] font-medium text-gray-900 dark:text-white'>
                    {orderFile.label}
                  </span>
                </Table.Cell>

                <Table.Cell className='py-2.5'>
                  {bytesToMB(orderFile.size)} {'MBs'}
                </Table.Cell>
                <Table.Cell className='py-2.5'>
                  <span className='uppercase'>
                    {orderFile.duration
                      ? DurationFromSeconds(orderFile.duration)
                      : '-'}
                  </span>
                </Table.Cell>
                <Table.Cell className='py-2.5'>
                  <span className='capitalize text-sm text-gray-900 dark:text-white'>
                    {moment(new Date(orderFile.createdAt)).fromNow()}
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
