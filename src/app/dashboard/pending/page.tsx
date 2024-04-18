'use client';

import React, { useEffect, useState } from 'react';
import LoadSpinner from '@/components/dashboard/LoadSpinner';

import { FolderPlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
} from '@heroicons/react/16/solid';
import {
  CheckCircleIcon,
  ListBulletIcon,
  Squares2X2Icon,
} from '@heroicons/react/20/solid';
import { classNames } from '@/utils/classNames';
import { Breadcrumb } from 'flowbite-react';

import FileUploadMenuOptions from '@/components/dashboard/FileUploadMenuOptions';
import AddFolder from '@/components/modals/AddFolder';
import AxiosProxy from '@/utils/AxiosProxy';
// import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import TableView from '@/components/dashboard/FileView/TableView';
import GridView from '@/components/dashboard/FileView/GridView';
import RemoveFile from '@/components/modals/RemoveFile';
import OrderNowModal from '@/components/modals/OrderNowModal';
import RenameFile from '@/components/modals/RenameFile';
import RenameFolder from '@/components/modals/RenameFolder';
import TawkMessenger from '@/lib/TawkMessenger';
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

  // modal toggles
  const [open, setOpen] = useState(false);
  const [deleteFile, setDeleteFile] = useState(false);
  const [orderNow, setOrderNow] = useState(false);
  const [openFileRename, setOpenFileRename] = useState(false);
  const [openFolderRename, setOpenFolderRename] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [openRemoveFile, setOpenRemoveFile] = useState(false);

  // setters
  const [currentFile, setCurrentFile] = useState<string>('');
  const [currentFolder, setCurrentFolder] = useState<string>('');

  // selected files
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  const [showFolders, setShowFolders] = useState<boolean>(false);
  // track folders
  const [folderArr, setFolderArr] = useState<FolderTracker[]>([
    { id: '', label: '..' },
  ]);
  const [currentFolderIndex, setCurrentFolderIndex] = useState<number>(0);
  // track api call within folder navigation
  const [navigating, setNavigating] = useState<boolean>(false);
  const [selectedFolderId, setSelectedFolderId] = useState<string>('');

  // watch for query changes
  const searchParams = useSearchParams();
  const folderId = searchParams.get('folderId');

  const [pageSetup, setPageSetup] = useState<PageSetupOptions>({
    toggleView: 'list',
  });

  const _renameFile = (id: string) => {
    setOpenFileRename(true);
    setCurrentFile(id);
  };

  const _renameFolder = (id: string) => {
    setOpenFolderRename(true);
    setCurrentFolder(id);
  };

  const _removeFile = (id: string) => {
    setOpenRemoveFile(true);
    setCurrentFolder(id);
  };

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
    } else if (clearAll && !remove) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setSelectedFiles((_prevFiles) => orders.map((order) => order.id));
    } else if (remove) {
      setSelectedFiles((prevFiles) => [
        ...prevFiles.filter((_id) => _id != id),
      ]);
    } else if (!remove) {
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
      setNavigating(true);

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
      setNavigating(false);
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
    // set clicked folder
    setSelectedFolderId(route.id);
    // update count
    setCurrentFolderIndex(currentFolderIndex + 1);
    router.push(`?folderId=${route.id}`);
  };

  const fetchPendingFolderOrders = async (folderId?: string) => {
    try {
      setNavigating(true);
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
      setNavigating(false);
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
      <TawkMessenger />

      {loading ? (
        <LoadSpinner />
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
            <div className='flex  justify-between items-center mb-4'>
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
                  className='rounded-xl bg-indigo-100 font-semibold px-4 py-1.5 text-indigo-600  focus-within:ring-4 focus-within:ring-indigo-400 disabled:cursor-not-allowed  disabled:text-indigo-300'
                >
                  <ArrowUturnRightIcon className=' h-5 w-5 ' />
                </button>
                <div className='flex items-center gap-x-2'>
                  <Breadcrumb
                    aria-label='Solid background breadcrumb example'
                    className='bg-gray-50 px-5 py-1.5 dark:bg-gray-800'
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

              {/* manage selected files */}

              {selectedFiles.length != 0 ? (
                <div className='flex items-center gap-x-2 p-2 rounded-xl bg-indigo-100'>
                  <button
                    onClick={() => setOrderNow(true)}
                    className='flex  gap-x-2 rounded-xl bg-indigo-500 font-semibold px-4 py-1.5  focus-within:ring-4 focus-within:ring-indigo-400'
                  >
                    <CheckCircleIcon className='h-5 w-5 text-white' />
                    <span className='text-white'>
                      Order File({selectedFiles.length})
                    </span>
                  </button>
                  <button
                    onClick={() => setDeleteFile(true)}
                    className='flex  gap-x-2 rounded-xl  font-semibold px-4 py-1.5  focus-within:ring-4 focus-within:ring-indigo-400'
                  >
                    <TrashIcon className='h-5 w-5 text-red-400' />
                    <span className='text-red-400'>Delete</span>
                  </button>
                </div>
              ) : null}

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
              renameFile={_renameFile}
              renameFolder={_renameFolder}
              removeFile={_removeFile}
              callback={updateOrders}
              isNavigating={navigating}
              selectedFolderId={selectedFolderId}
              showFolders={showFolders}
              orders={orders}
            />
          ) : (
            <TableView
              openFolder={openFolder}
              selectedFiles={selectedFiles}
              updatedSelectedFiles={updateSelectedFiles}
              folders={folders}
              renameFile={_renameFile}
              renameFolder={_renameFolder}
              removeFile={_removeFile}
              callback={updateOrders}
              showFolders={showFolders}
              isNavigating={navigating}
              selectedFolderId={selectedFolderId}
              orders={orders}
            />
          )}

          {/* add folder */}
          <AddFolder reload={reload} open={open} setOpen={setOpen} />
          <RemoveFile
            reload={reload}
            files={selectedFiles}
            open={deleteFile}
            setOpen={setDeleteFile}
          />
          <RenameFile
            fileId={currentFile}
            reload={reload}
            open={openFileRename}
            setOpen={setOpenFileRename}
          />
          <RenameFolder
            folderId={currentFolder}
            reload={reload}
            open={openFolderRename}
            setOpen={setOpenFolderRename}
          />
          <OrderNowModal
            reload={reload}
            files={selectedFiles}
            open={orderNow}
            setOpen={setOrderNow}
          />
        </div>
      )}
    </div>
  );
}
