/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import React, { useEffect, useState } from 'react';
import LoadSpinner from '@/components/dashboard/LoadSpinner';

// import Link from 'next/link';
// import { useSearchParams } from 'next/navigation';
// import { useRouter } from 'next/navigation';
import TawkMessenger from '@/lib/TawkMessenger';
import SystemProgressUpload from '@/components/dashboard/SystemProgressUpload';
import AxiosProxy from '@/utils/AxiosProxy';
import { ListBulletIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import { classNames } from '@/utils/classNames';
import SearchBar from '@/components/dashboard/SearchBar';
import moment from 'moment';
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';
import { Table } from 'flowbite-react';

interface PageSetupOptions {
  toggleView: 'grid' | 'list';
}

export default function Page() {
  // const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<InprogressOrder[]>([]);
  // const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  const [pageSetup, setPageSetup] = useState<PageSetupOptions>({
    toggleView: 'list',
  });

  // const showDetails = () => {
  //   console.log('show details');
  //   const fileId = selectedFiles[0];
  //   // @ts-ignore
  //   setFile(() => orders.find((order) => order.id == fileId));
  //   setShowFileSummary(true);
  // };

  const fetchOrders = async () => {
    try {
      setLoading(true);

      const response = await AxiosProxy.get(`orders/client?status=in-progress`);
      if (response.status == 200) {
        console.log(response.data);
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

  // updated selected files
  // const updateSelectedFiles = (
  //   id: string,
  //   remove: boolean,
  //   clearAll: boolean,
  // ) => {
  //   if (clearAll && remove) {
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //     setSelectedFiles((prevFiles) => []);
  //   } else if (clearAll && !remove) {
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //     setSelectedFiles((_prevFiles) => orders.map((order) => order.id));
  //   } else if (remove) {
  //     setSelectedFiles((prevFiles) => [
  //       ...prevFiles.filter((_id) => _id != id),
  //     ]);
  //   } else if (!remove) {
  //     setSelectedFiles((prevFiles) => [...prevFiles, id]);
  //   }
  // };

  // const selectAllOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   if (((event as any).target as HTMLInputElement).checked) {
  //     updateSelectedFiles('', false, true);
  //   } else {
  //     updateSelectedFiles('', true, true);
  //   }
  // };

  // const isSelected = (id: string) => {
  //   const result = selectedFiles.find((item: string) => item == id);
  //   return result == undefined ? false : true;
  // };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // const addSelected = (event: ChangeEvent<HTMLInputElement>, id: string) => {
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-ignore
  //   if ((event.target as HTMLInputElement).checked) {
  //     updateSelectedFiles(id, false, false);
  //   } else {
  //     updateSelectedFiles(id, true, false);
  //   }
  // };

  return (
    <div className=''>
      <title>Dashboard | In Progress</title>
      <TawkMessenger />

      {/* systenm progress */}
      <SystemProgressUpload />
      {/* show summary */}

      {/* <FilesSummary
        open={showFileSummary}
        setOpen={setShowFileSummary}
        // @ts-ignore
        file={file}
      /> */}
      {loading ? (
        <LoadSpinner />
      ) : (
        <div className=''>
          <div className='px-6  md:px-16 xl:px-16 sticky top-0 z-10  bg-white dark:bg-zinc-800 py-3'>
            <div className='flex  justify-between items-center mb-4'>
              <div className='flex gap-x-2'>
                <SearchBar
                  cb={() => new Promise(() => {})}
                  clearSearch={() => new Promise(() => {})}
                />
              </div>
              {/* toggles */}

              {/* manage selected files */}

              {/* {selectedFiles.length != 0 ? (
                <div className='flex items-center gap-x-2 p-2 rounded-xl bg-indigo-100'>
                  <button
                    onClick={() => showDetails()}
                    className='flex  gap-x-2 rounded-xl bg-indigo-500  font-semibold px-4 py-1.5  focus-within:ring-4 focus-within:ring-indigo-400'
                  >
                    <InformationCircleIcon className='h-5 w-5 text-white' />

                    <span className='text-gray-100 text-md'>Details</span>
                  </button>
                  <button
                    onClick={() => {}}
                    className='flex  gap-x-2 rounded-xl bg-red-200  font-semibold px-4 py-1.5  focus-within:ring-4 focus-within:ring-indigo-400'
                  >
                    <XCircleIcon className='h-5 w-5 text-gray-700' />
                    <span className='text-gray-700 text-md'>Cancel Order</span>
                  </button>
                </div>
              ) : null} */}

              <div className='flex gap-x-2 items-center'>
                <button
                  onClick={() =>
                    setPageSetup({ ...pageSetup, toggleView: 'grid' })
                  }
                  className={classNames(
                    'rounded-xl  font-semibold px-4 py-2  focus-within:ring-4 focus-within:ring-indigo-400',
                    pageSetup.toggleView == 'grid' ? 'bg-indigo-100' : '',
                  )}
                >
                  <Squares2X2Icon className=' h-5 w-5 text-indigo-600' />
                </button>
                <button
                  onClick={() =>
                    setPageSetup({ ...pageSetup, toggleView: 'list' })
                  }
                  className={classNames(
                    'rounded-xl  font-semibold px-4 py-2  focus-within:ring-4 focus-within:ring-indigo-400',
                    pageSetup.toggleView == 'list' ? 'bg-indigo-100' : '',
                  )}
                >
                  <ListBulletIcon className=' h-5 w-5 text-indigo-600' />
                </button>
              </div>
            </div>
          </div>
          <div className='px-6 md:px-16 xl:px-16 overflow-x-auto min-h-svh'>
            <Table hoverable>
              <Table.Head className='dark:border-gray-700 dark:bg-zinc-800'>
                <Table.HeadCell>Order Id</Table.HeadCell>
                <Table.HeadCell>Progress</Table.HeadCell>
                <Table.HeadCell>File(s)</Table.HeadCell>
                <Table.HeadCell>Created At</Table.HeadCell>
                <Table.HeadCell>Actions</Table.HeadCell>
                <Table.HeadCell>
                  <span className='sr-only'>Edit</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className='divide-y'>
                {orders.map((order) => (
                  <Table.Row
                    onClick={() => {}}
                    key={order.id}
                    className={classNames(
                      'bg-white cursor-pointer dark:border-gray-700 dark:bg-zinc-500',
                    )}
                  >
                    <Table.Cell className='py-1'>
                      <span className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                        {order.id}
                      </span>
                    </Table.Cell>

                    <Table.Cell className='py-1'>
                      <span className='capitalize bg-indigo-100 text-sm text-indigo-500 px-3 py-0.5 rounded-xl'>
                        {order.orderStatus}
                      </span>
                    </Table.Cell>

                    <Table.Cell className=''>
                      <button className='py-1 '>{order.files.length}</button>
                    </Table.Cell>
                    <Table.Cell className='py-1'>
                      <span className='whitespace-nowrap font-medium text-sm text-gray-900 dark:text-white'>
                        {moment(order.createdAt).format('L')}
                      </span>
                    </Table.Cell>

                    <Table.Cell className='py-1'>
                      <button onClick={() => {}}>
                        <ArrowDownTrayIcon className='h-8 w-8 text-indigo-500' />
                      </button>
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
