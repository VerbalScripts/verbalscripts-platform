'use client';

import FileEmpty from '@/components/dashboard/FileEmpty';
import React, { useEffect, useState } from 'react';
import { Checkbox, Table } from 'flowbite-react';
import TableMenuDropDown from '@/components/dashboard/TableMenuDropDown';
import LoadSpinner from '@/components/dashboard/LoadSpinner';
import { bytesToMB } from '@/utils/bytesToMb';
import { DocumentIcon, FolderIcon, FolderPlusIcon } from '@heroicons/react/24/outline';
import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
} from '@heroicons/react/16/solid';
import { ListBulletIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
import { classNames } from '@/utils/classNames';
import FileUploadMenuOptions from '@/components/dashboard/FileUploadMenuOptions';
import AddFolder from '@/components/modals/AddFolder';
import AxiosProxy from '@/utils/AxiosProxy';
import Link from 'next/link'

interface PageSetupOptions {
  toggleView: 'grid' | 'list';
}
export default function Page() {
  const [orders, setOrders] = useState<OrderFile[]>([]);
  const [folders, setFolders] = useState<OrderFolder[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState(false);

  const [pageSetup, setPageSetup] = useState<PageSetupOptions>({
    toggleView: 'list',
  });

  const fetchPendingOrders = async () => {
    try {
      setLoading(true);
      const response = await AxiosProxy.get('/files');
      if (response.status == 200) {
        setOrders(response.data);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPendingFolderOrders = async () => {
    try {
      setLoading(true);
      const response = await AxiosProxy.get('/folders');
      if (response.status == 200) {
        setFolders(response.data);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetchPendingOrders();
    if (orders.length == 0) {
      fetchPendingOrders();
    }
    if (folders.length == 0) {
      fetchPendingFolderOrders();
    }
  }, []);

  return (
    <div className='py-8'>
      {loading ? (
        <LoadSpinner />
      ) : orders.length == 0 ? (
        <FileEmpty />
      ) : (
        <div>
          <div className='px-6 md:px-16 xl:px-16 sticky top-1 z-50 bg-white py-3'>
            <div className='flex items-center justify-end gap-x-3'>
              <FileUploadMenuOptions />
              <button
                onClick={() => setOpen(true)}
                className='flex mb-5 gap-x-2 rounded-xl bg-indigo-900/10 font-semibold px-4 py-2  focus-within:ring-4 focus-within:ring-indigo-400'
              >
                <FolderPlusIcon className='h-5 w-5 text-indigo-500' />
                <span className='text-indigo-500'>New Folder</span>
              </button>
            </div>
            <div className='flex  justify-between mb-8 items-center'>
              <div className='flex gap-x-2'>
                <button className='rounded-xl bg-indigo-100 font-semibold px-4 py-2  focus-within:ring-4 focus-within:ring-indigo-400'>
                  <ArrowUturnLeftIcon className=' h-5 w-5 text-indigo-600' />
                </button>
                <button className='rounded-xl bg-indigo-100 font-semibold px-4 py-2  focus-within:ring-4 focus-within:ring-indigo-400'>
                  <ArrowUturnRightIcon className=' h-5 w-5 text-indigo-600' />
                </button>
                <div className='flex items-center gap-x-2'>
                  <span className='text-gray-500 font-semibold'>..{' / '}</span>
                  <span className='text-gray-500 font-semibold'>
                    Happy {' / '}
                  </span>
                  <span className='text-gray-500 font-semibold'>
                    Foxit-Jam{' / '}
                  </span>
                </div>
              </div>
              {/* toggles */}
              <div className='flex gap-x-2'>
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
              <Table.Head>
                <Table.HeadCell className='p-4'>
                  <Checkbox />
                </Table.HeadCell>
                <Table.HeadCell>File Name</Table.HeadCell>
                <Table.HeadCell>Size</Table.HeadCell>
                <Table.HeadCell>Type</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
                <Table.HeadCell>Action</Table.HeadCell>
                <Table.HeadCell>
                  <span className='sr-only'>Edit</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className='divide-y'>
                {folders.map((folder) => (
                  <Table.Row
                    key={folder.id}
                    className='bg-white dark:border-gray-700 dark:bg-gray-800'
                  >
                    <Table.Cell className='px-4 py-2'>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>
                      <Link
                        className='flex gap-x-3 items-center'
                        href={'?folderId=' + folder.id}
                      >
                        <FolderIcon className='text-gray-700 h-8 w-8 items-center' />
                        <span className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                          {folder.label}
                        </span>
                      </Link>
                    </Table.Cell>
                    <Table.Cell>--</Table.Cell>
                    <Table.Cell>---</Table.Cell>
                    <Table.Cell>---</Table.Cell>
                    <Table.Cell>
                      <div className='flex items-center gap-x-1'>
                        <TableMenuDropDown />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
                {orders.map((order) => (
                  <Table.Row
                    key={order.fileId}
                    className='bg-white dark:border-gray-700 dark:bg-gray-800'
                  >
                    <Table.Cell className='px-4 py-2'>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell className='flex gap-x-3 items-center'>
                      <DocumentIcon className='text-gray-700 h-7 w-7' />
                      <span className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                        {order.label}
                      </span>
                    </Table.Cell>
                    <Table.Cell>{bytesToMB(order.size)}</Table.Cell>
                    <Table.Cell>
                      <span className='uppercase'>
                        {order.mimetype.split('/')[1]}
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <span className='capitalize bg-indigo-100 font-semibold text-indigo-500 px-3 py-2 rounded-xl'>
                        {order.status}
                      </span>
                    </Table.Cell>
                    <Table.Cell>
                      <div className='flex items-center gap-x-1'>
                        <TableMenuDropDown />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>

          {/* add folder */}
          <AddFolder open={open} setOpen={setOpen} />
        </div>
      )}
    </div>
  );
}
