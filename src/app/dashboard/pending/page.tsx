'use client';

import FileEmpty from '@/components/dashboard/FileEmpty';
import React, { useEffect, useState } from 'react';
import { Checkbox, Table } from 'flowbite-react';
import TableMenuDropDown from '@/components/dashboard/TableMenuDropDown';
import LoadSpinner from '@/components/dashboard/LoadSpinner';
import { bytesToMB } from '@/utils/bytesToMb';
import {
  DocumentIcon,
  FolderIcon,
  FolderPlusIcon,
} from '@heroicons/react/24/outline';
import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
} from '@heroicons/react/16/solid';
import { ListBulletIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
import { classNames } from '@/utils/classNames';
import FileUploadMenuOptions from '@/components/dashboard/FileUploadMenuOptions';
import AddFolder from '@/components/modals/AddFolder';
import AxiosProxy from '@/utils/AxiosProxy';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

interface PageSetupOptions {
  toggleView: 'grid' | 'list';
}

interface FolderTracker {
  id: string;
  label: string;
}
export default function Page() {
  const router = useRouter();

  const [orders, setOrders] = useState<OrderFile[]>([]);
  const [folders, setFolders] = useState<OrderFolder[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState(false);

  // track folders
  const [folderArr, setFolderArr] = useState<FolderTracker[]>([
    { id: '', label: '..' },
  ]);
  const [currentFolderIndex, setCurrentFolderIndex] = useState<number>(0);

  // watch for query changes
  const searchParams = useSearchParams();
  const folderId = searchParams.get('folderId');

  const [pageSetup, setPageSetup] = useState<PageSetupOptions>({
    toggleView: 'list',
  });

  const navForward = () => {
    if (currentFolderIndex + 1 > folderArr.length) {
      // update index
      setCurrentFolderIndex(currentFolderIndex + 1);
      router.push(`?folderId=${folderArr[currentFolderIndex + 1]['id']}`);
    }
  };
  const navBack = () => {
    console.log(currentFolderIndex);
    if (folderArr.length > 1 && currentFolderIndex > 0) {
      // update index
      setCurrentFolderIndex(currentFolderIndex - 1);
      setFolderArr((prevArr) => [...prevArr.slice(0, prevArr.length - 1)]);
      router.push(`?folderId=${folderArr[currentFolderIndex - 1]['id']}`);
    }
  };

  useEffect(() => {
    if (folderId != null) {
      fetchPendingOrders(folderId);
      fetchPendingFolderOrders(folderId);
    }
  }, [folderId]);

  const fetchPendingOrders = async (folderId?: string) => {
    try {
      setLoading(true);
      const response = await AxiosProxy.get(
        folderId ? `/files/folder/${folderId}` : '/files',
      );
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

  const openFolder = (route: { id: string; label: string }) => {
    // console.log(currentFolderIndex)
    setFolderArr((prevArr) => [
      ...prevArr,
      { id: route.id, label: route.label },
    ]);
    // update count
    setCurrentFolderIndex(currentFolderIndex + 1);
    router.push(`?folderId=${route.id}`);
  };

  const fetchPendingFolderOrders = async (folderId?: string) => {
    try {
      setLoading(true);
      const response = await AxiosProxy.get(
        folderId ? `/folders/${folderId}` : '/folders',
      );
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
      if (folderId == null) {
        fetchPendingOrders();
      }
    }
    if (folders.length == 0) {
      if (folderId == null) {
        fetchPendingFolderOrders();
      }
    }
  }, [orders, folders]);

  return (
    <div className='py-8'>
      {loading ? (
        <LoadSpinner />
      ) : orders.length == 0 && folderId == null ? (
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
                <button
                  disabled={folderArr.length == 1 || loading}
                  onClick={navBack}
                  className='rounded-xl bg-indigo-100 font-semibold px-4 py-2 text-indigo-600  focus-within:ring-4 focus-within:ring-indigo-400 disabled:cursor-not-allowed disabled:text-indigo-300'
                >
                  <ArrowUturnLeftIcon className=' h-5 w-5' />
                </button>
                <button
                  onClick={navForward}
                  disabled={
                    currentFolderIndex + 1 == folderArr.length || loading
                  }
                  className='rounded-xl bg-indigo-100 font-semibold px-4 py-2 text-indigo-600  focus-within:ring-4 focus-within:ring-indigo-400 disabled:cursor-not-allowed  disabled:text-indigo-300'
                >
                  <ArrowUturnRightIcon className=' h-5 w-5 ' />
                </button>
                <div className='flex items-center gap-x-2'>
                  {folderArr.map((track, index) => (
                    <div key={track.id} className='flex'>
                      <Link
                        href={
                          track.id == ''
                            ? '/dashboard/pending'
                            : `?folderId=${track.id}`
                        }
                        className='hover:underline text-gray-600 hover:text-indigo-500'
                      >
                        {' '}
                        {track.label}
                      </Link>
                      <span className='text-gray-500 font-semibold'>
                        {index + 1 == folderArr.length ? ' ' : '  /  '}{' '}
                      </span>
                    </div>
                  ))}
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
                      <div
                        className=' cursor-pointer flex gap-x-3 items-center'
                        onClick={() =>
                          openFolder({ id: folder.id, label: folder.label })
                        }
                      >
                        <FolderIcon className='text-gray-700 h-8 w-8 items-center' />
                        <span className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                          {folder.label}
                        </span>
                      </div>
                    </Table.Cell>
                    <Table.Cell>--</Table.Cell>
                    <Table.Cell>Folder</Table.Cell>
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
