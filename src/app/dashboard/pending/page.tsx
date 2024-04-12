'use client';

import FileEmpty from '@/components/dashboard/FileEmpty';
import React, { useEffect, useState } from 'react';
import LoadSpinner from '@/components/dashboard/LoadSpinner';

import { FolderPlusIcon } from '@heroicons/react/24/outline';
import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
} from '@heroicons/react/16/solid';
import { ListBulletIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
import { classNames } from '@/utils/classNames';
import { Breadcrumb } from 'flowbite-react';

import FileUploadMenuOptions from '@/components/dashboard/FileUploadMenuOptions';
import AddFolder from '@/components/modals/AddFolder';
import AxiosProxy from '@/utils/AxiosProxy';
// import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import TableView from '@/components/dashboard/FileView/TableView';
import GridView from '@/components/dashboard/FileView/GridView';
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

  // selected files
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  const [showFolders, setShowFolders] = useState<boolean>(false);
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

  // toggle folder visibility
  const toggleFolderShow = (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setShowFolders(!showFolders);
  };

  // updated selected files
  const updateSelectedFiles = (
    id: string,
    remove: boolean,
    clearAll: boolean,
  ) => {
    if (clearAll && remove) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setSelectedFiles((prevFiles) => []);
    }

    if (clearAll && !remove) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setSelectedFiles((_prevFiles) => [...orders.map((order) => order.id)]);
    }

    if (remove) {
      setSelectedFiles((prevFiles) => [
        ...prevFiles.filter((_id) => _id != id),
      ]);
    }

    if (!remove) {
      setSelectedFiles((prevFiles) => [...prevFiles, id]);
    }
  };

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
      const response = await AxiosProxy.get(
        folderId ? `/files/folder/${folderId}` : '/files',
      );
      if (response.status == 200) {
        setOrders(response.data);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const reload = async () => {
    if (folderId != null) {
      await Promise.all([
        fetchPendingFolderOrders(folderId),
        fetchPendingOrders(folderId),
      ]);
    } else {
      await Promise.all([fetchPendingFolderOrders(), fetchPendingOrders()]);
    }
  };

  const updateOrders = (index: number) => {
    setOrders((prevArr) => {
      const update = prevArr;
      update.splice(index, 1);
      return [...update];
    });
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
      const response = await AxiosProxy.get(
        folderId ? `/folders/${folderId}` : '/folders',
      );
      if (response.status == 200) {
        setFolders(response.data);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const initialFeedsFetch = async () => {
    setLoading(true);
    await Promise.all([fetchPendingOrders(), fetchPendingFolderOrders()]);

    setLoading(false);
  };

  useEffect(() => {
    // fetchPendingOrders();
    initialFeedsFetch();
  }, []);

  // drag and drop files and folders

  return (
    <div className='py-4'>
      <Head>
        <title>Verbal Dashboard | Pending Orders</title>
        <meta
          property='og:title'
          content='Verbal Dashboard | Pending Orders'
          key='title'
        />
      </Head>
      {loading ? (
        <LoadSpinner />
      ) : orders.length == 0 && folderId == null ? (
        <FileEmpty />
      ) : (
        <div>
          <div className='px-6 md:px-16 xl:px-16 sticky top-1 z-50 bg-white py-1'>
            <div className='flex items-center justify-end gap-x-3'>
              <FileUploadMenuOptions />
              <button
                onClick={() => setOpen(true)}
                className='flex mb-5 gap-x-2 rounded-xl bg-indigo-100 font-semibold px-4 py-1.5  focus-within:ring-4 focus-within:ring-indigo-400'
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
                  className='rounded-xl bg-indigo-100 font-semibold px-4 py-1.5 text-indigo-600  focus-within:ring-4 focus-within:ring-indigo-400 disabled:cursor-not-allowed disabled:text-indigo-300'
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
                  <Breadcrumb
                    aria-label='Solid background breadcrumb example'
                    className='bg-gray-50 px-5 py-3 dark:bg-gray-800'
                  >
                    {folderArr.map((track) => (
                      <Breadcrumb.Item
                        key={track.id}
                        className='hover:underline text-gray-600 hover:text-indigo-500'
                        href={`?folderId=${track.id}`}
                      >
                        {track.label}
                      </Breadcrumb.Item>
                    ))}
                  </Breadcrumb>
                </div>
              </div>
              {/* toggles */}
              <div className='flex gap-x-2 items-center'>
                <div className='flex gap-x-3 pr-3 border-r border-gray-400'>
                  <div className=''>
                    <label
                      htmlFor='showFolders'
                      className=' h-6 relative inline-block'
                    >
                      <input
                        id='showFolders'
                        type='checkbox'
                        onChange={toggleFolderShow}
                        className='w-11 h-0 cursor-pointer inline-block focus:outline-0 dark:focus:outline-0 border-0 dark:border-0 focus:ring-offset-transparent dark:focus:ring-offset-transparent focus:ring-transparent dark:focus:ring-transparent focus-within:ring-0 dark:focus-within:ring-0 focus:shadow-none dark:focus:shadow-none after:absolute before:absolute after:top-0 before:top-0  after:block before:inline-block before:rounded-full after:rounded-full after:content-[""] after:w-5 after:h-5 after:mt-0.5 after:ml-0.5 after:shadow-md after:duration-100
                          before:content-[""] before:w-10 before:h-full before:shadow-[inset_0_0_#000] after:bg-white dark:after:bg-indigo-50
                          before:bg-indigo-300 dark:before:bg-indigo-500   before:checked:bg-indigo-500 dark:before:checked:bg-indigo-500 checked:after:duration-300 checked:after:translate-x-4 disabled:after:bg-opacity-75 disabled:cursor-not-allowed disabled:checked:before:bg-opacity-40
                              '
                        checked={showFolders}
                      />
                    </label>
                  </div>
                  <span className='text-gray-500 font-semibold'>
                    {showFolders ? 'Hide Folders' : 'Show Folders'}
                  </span>
                </div>
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

          {pageSetup.toggleView == 'grid' ? (
            <GridView
              openFolder={openFolder}
              selectedFiles={selectedFiles}
              updatedSelectedFiles={updateSelectedFiles}
              folders={folders}
              callback={updateOrders}
              showFolders={showFolders}
              orders={orders}
            />
          ) : (
            <TableView
              openFolder={openFolder}
              selectedFiles={selectedFiles}
              updatedSelectedFiles={updateSelectedFiles}
              folders={folders}
              callback={updateOrders}
              showFolders={showFolders}
              orders={orders}
            />
          )}

          {/* add folder */}
          <AddFolder reload={reload} open={open} setOpen={setOpen} />
        </div>
      )}
    </div>
  );
}
