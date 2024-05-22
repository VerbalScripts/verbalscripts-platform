/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import React, { useEffect, useRef, useState } from 'react';
import LoadSpinner from '@/components/dashboard/LoadSpinner';

import {
  ArrowDownCircleIcon,
  FolderPlusIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
} from '@heroicons/react/16/solid';
import {
  CheckCircleIcon,
  ListBulletIcon,
  Squares2X2Icon,
} from '@heroicons/react/20/solid';
import { Breadcrumb } from 'flowbite-react';

import { classNames } from '@/utils/classNames';
import FileUploadFromLocal from '@/components/dashboard/FileUploadFromLocal';
import FileUploadFromOtherOptions from '@/components/dashboard/FileUploadFromOtherOptions';
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
import DropboxUpload from '@/components/uploadOptions/DropboxUpload';
import GoogleUpload from '@/components/uploadOptions/GoogleUpload';
import OneDrivePicker from '@/components/uploadOptions/OneDrivePicker';
import SystemProgressUpload from '@/components/dashboard/SystemProgressUpload';
import { useRecoilValue } from 'recoil';
import { uploadProgressStats } from '@/store/features/fileUpload';
import SearchBar from '@/components/dashboard/SearchBar';
import CopyFile from '@/components/modals/CopyFile';
import ShareFile from '@/components/modals/ShareFile';
import DirectFileLinkUpload from '@/components/modals/DirectFileLinkUpload';
import YoutubeLinkUpload from '@/components/modals/YoutubeLinkUpload';
import LocalFilePLoad from '@/components/dashboard/LocalFilePLoad';
import FileDownloader from '@/components/FileDownloader';
import RemoveFiles from '@/components/modals/RemoveFiles';
import VideoPlayer from '@/components/modals/VideoPlayer';
import Tablepaginate from '@/components/dashboard/Tablepaginate';

interface PageSetupOptions {
  toggleView: 'grid' | 'list';
}

interface FolderTracker {
  id: string;
  label: string;
}
export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [orders, setOrders] = useState<OrderFile[]>([]);
  const [folders, setFolders] = useState<OrderFolder[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // files o order
  const [fileToOrder, setFilesToOrder] = useState<OrderFile[]>([]);
  const [downloadUrl, setDownloadUrl] = useState('blank');

  // modal toggles
  const [open, setOpen] = useState(false);
  const [deleteFile, setDeleteFile] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [downloadFile, setDownloadFile] = useState(false);
  const [orderNow, setOrderNow] = useState(false);
  const [openFileRename, setOpenFileRename] = useState(false);
  const [copyFile, setCopyFile] = useState(false);
  const [shareFile, setShareFile] = useState(false);
  const [openFolderRename, setOpenFolderRename] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [openRemoveFile, setOpenRemoveFile] = useState(false);
  // upload options
  const [openYoutube, setOpenYoutube] = useState(false);
  const [openDirectLink, setOpenDirectLink] = useState(false);

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

  const { complete } = useRecoilValue(uploadProgressStats);
  // watch for query changes
  const folderId = searchParams.get('folderId');

  const [pageSetup, setPageSetup] = useState<PageSetupOptions>({
    toggleView: 'list',
  });

  const _renameFile = (id: string) => {
    setOpenFileRename(true);
    setCurrentFile(id);
  };

  const _shareFile = (id: string) => {
    setShareFile(true);
    setCurrentFile(id);
  };

  const _copyFile = (id: string) => {
    setCopyFile(true);
    setCurrentFile(id);
  };

  // const downloadFile = async () => {}

  const _renameFolder = (id: string) => {
    setOpenFolderRename(true);
    setCurrentFolder(id);
  };

  const _removeFile = (id: string) => {
    console.log('called this');
    setOpenRemoveFile(true);
    setCurrentFile(id);
  };

  // toggle folder visibility
  const toggleFolderShow = (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setShowFolders(!showFolders);
  };

  const createOrder = () => {
    setFilesToOrder(() => {
      const files: OrderFile[] = [];
      selectedFiles.forEach((id) => {
        const orderFile = orders.find((od) => od.id == id);
        if (orderFile != undefined) {
          files.push(orderFile);
        }
      });
      return [...files];
    });
    // show modal
    setOrderNow(true);
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

  const clearSelection = () => {
    setSelectedFiles(() => []);
  };

  // paginate counters
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [perPageCount, setPerPageCount] = useState<number>(10);

  // update showfolders toggle
  useEffect(() => {
    if (folders.length > orders.length) {
      setShowFolders(true);
    }
  }, [orders, folders]);

  // check for uplaod completion

  useEffect(() => {
    // reload for every update
    if (complete > 0) {
      reload();
    }
  }, [complete]);

  useEffect(() => {
    if (folderId != null) {
      fetchPendingOrders({ folderId, flimit: perPageCount, fpage: page });
      fetchPendingFolderOrders(folderId);
    }
  }, [folderId]);

  interface FeedInfo {
    folderId?: string;
    flimit: number;
    fpage: number;
  }

  const fetchPendingOrders = async ({ folderId, flimit, fpage }: FeedInfo) => {
    try {
      setNavigating(true);

      const response = await AxiosProxy.get(
        folderId
          ? `/files/folder/${folderId}?page=${fpage}&limit=${flimit}`
          : `/files?page=${fpage}&limit=${flimit}`,
      );
      if (response.status == 200) {
        setOrders(response.data.results || []);
        setPerPageCount(response.data.paginate.limit);
        setPage(response.data.paginate.page);
        setTotal(response.data.paginate.total);
      }
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
        fetchPendingOrders({ folderId, flimit: perPageCount, fpage: page }),
      ]);
    } else {
      await Promise.all([
        fetchPendingFolderOrders(),
        fetchPendingOrders({ flimit: perPageCount, fpage: page }),
      ]);
    }
  };

  const updateOrders = (index: number) => {
    setOrders((prevArr) => {
      const update = prevArr;
      update.splice(index, 1);
      return [...update];
    });
  };

  const requestFileDownload = async () => {
    // setDownloadFile(true);
    const url = `/files/download?files=${selectedFiles.join(',')}`;
    setDownloadUrl(url);
    //   setDownloadFile(false);

    // try {
    //   const response = await AxiosProxy.post('/files/download', {
    //     files: [...selectedFiles],
    //   });

    //   FileDownload(response.data, 'folder-archive.zip');
    // } catch (err) {
    //   console.log(err);
    // } finally {
    //   setDownloadFile(false);
    // }
  };

  const openFolder = (route: { id: string; label: string }) => {
    // console.log(currentFolderIndex)
    if (folderArr[currentFolderIndex].id == route.id) return;
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
    } catch (error) {
      console.log(error);
    } finally {
      setNavigating(false);
    }
  };

  useEffect(() => {
    if (showFolders) {
      fetchPendingFolderOrders();
    }
  }, [showFolders]);

  const initialFeedsFetch = async () => {
    setLoading(true);
    await Promise.all([
      fetchPendingOrders({ flimit: perPageCount, fpage: page }),
    ]);

    setLoading(false);
  };

  useEffect(() => {
    // fetchPendingOrders();
    initialFeedsFetch();
  }, []);

  const searchForFile = async (filename: string) => {
    try {
      const response = await AxiosProxy.get(
        `/files/search?status=pending&q=${filename}`,
      );
      if (response.status == 200) {
        const orders = response.data || [];
        setOrders(() => [...orders]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // drag and drop files and folders

  const triggerDropBoxPicker = useRef(null);
  const triggerGooglePicker = useRef(null);
  const triggerOneDrivePicker = useRef(null);

  const launchDropBoxPicker = () => {
    if (triggerDropBoxPicker.current) {
      // @ts-ignore
      triggerDropBoxPicker.current.initFilePicker();
    }
  };

  const launchGoogleDrivePicker = () => {
    if (triggerGooglePicker.current) {
      // @ts-ignore
      triggerGooglePicker.current.handleAuthClick();
    }
  };
  const launchOneDrivePicker = () => {
    if (triggerGooglePicker.current) {
      // @ts-ignore
      triggerGooglePicker.current.initPicker();
    }
  };

  // video player controls
  const [openPlayer, setOpenPlayer] = useState(false);
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    if (videoId != '') {
      setOpenPlayer(true);
    }
  }, [videoId]);

  // watch query changes
  const queryLimit = searchParams.get('limit');
  const queryPage = searchParams.get('page');

  useEffect(() => {
    if (queryLimit && queryPage) {
      fetchPendingOrders({
        flimit: parseInt(queryLimit, 10),
        fpage: parseInt(queryPage, 10),
      });
    }
  }, [queryLimit, queryPage]);
  return (
    <div className='bg-white dark:bg-zinc-800 min-h-screen'>
      <title>Dashboard | Pending</title>
      {/* <TawkMessenger /> */}

      <VideoPlayer
        open={openPlayer}
        setOpen={setOpenPlayer}
        fileId={videoId}
        resetPlayer={setVideoId}
      />

      {/* systenm progress */}
      <SystemProgressUpload />

      <DropboxUpload ref={triggerDropBoxPicker} visible={false} />
      <GoogleUpload ref={triggerGooglePicker} visible={false} />
      <OneDrivePicker ref={triggerOneDrivePicker} visible={false} />
      <YoutubeLinkUpload open={openYoutube} setOpen={setOpenYoutube} />
      <DirectFileLinkUpload open={openDirectLink} setOpen={setOpenDirectLink} />

      {loading ? (
        <LoadSpinner />
      ) : (
        <div className='px-6  md:px-16 xl:px-16 '>
          <div className=' sticky top-0 z-10 bg-white dark:bg-zinc-800  py-3'>
            <div className='flex items-center justify-start gap-x-3'>
              <FileUploadFromOtherOptions
                openDropBoxPicker={launchDropBoxPicker}
                openGoogleDrivePicker={launchGoogleDrivePicker}
                openOneDrivePicker={launchOneDrivePicker}
                openDirectLink={() => setOpenDirectLink(!openDirectLink)}
                openYoutube={() => setOpenYoutube(!openYoutube)}
              />
              <FileUploadFromLocal />
              <button
                onClick={() => setOpen(true)}
                className='flex flex-col mb-5 gap-x-2 rounded-sm md:rounded-xl bg-indigo-100 font-semibold px-4 py-1.5  focus-within:ring-4 focus-within:ring-indigo-400'
              >
                <FolderPlusIcon className='h-5 w-5 text-indigo-500' />
                <span className='text-indigo-500 hidden md:block text-sm md:text-md'>
                  Create Folder
                </span>
              </button>
            </div>

            {orders.length > 0 ? (
              <>
                <div className='flex  justify-between space-y-2 flex-wrap items-center mb-4'>
                  <div className='flex space-x-2'>
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
                        className='bg-gray-50 px-5 py-1.5 dark:bg-zinc-500'
                      >
                        {folderArr.map((track) => (
                          <Breadcrumb.Item
                            key={track.id}
                            className='hover:underline text-gray-600 dark:text-gray-300 hover:text-indigo-500'
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
                  <div className='flex space-x-2 items-center'>
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
                <div className='flex items-center justify-between'>
                  <div>
                    <SearchBar cb={searchForFile} clearSearch={reload} />
                  </div>
                  {selectedFiles.length != 0 ? (
                    <div className='flex items-center gap-x-2 p-2 rounded-xl bg-indigo-100'>
                      <button
                        onClick={() => createOrder()}
                        className='flex  gap-x-2 rounded-xl bg-indigo-600 font-semibold px-4 py-1.5  focus-within:ring-4 focus-within:ring-indigo-400'
                      >
                        <CheckCircleIcon className='h-5 w-5 text-white' />
                        <span className='text-white'>
                          Order File({selectedFiles.length})
                        </span>
                      </button>

                      <button
                        disabled={downloadFile}
                        onClick={() => requestFileDownload()}
                        className='flex  gap-x-2 rounded-xl bg-indigo-500  font-semibold px-4 py-1.5  focus-within:ring-4 focus-within:ring-indigo-400'
                      >
                        <ArrowDownCircleIcon className='h-5 w-5 text-white' />
                        {downloadFile ? (
                          <span className='text-gray-100'>downloading ...</span>
                        ) : (
                          <span className='text-gray-100'>Dowload</span>
                        )}
                      </button>
                      <button
                        onClick={() => setDeleteFile(true)}
                        className='flex  gap-x-2 rounded-xl bg-red-100  font-semibold px-4 py-1.5  focus-within:ring-4 focus-within:ring-indigo-400'
                      >
                        <TrashIcon className='h-5 w-5 text-red-400' />
                        <span className='text-red-400'>Delete</span>
                      </button>
                    </div>
                  ) : null}
                </div>
              </>
            ) : null}
          </div>

          <FileDownloader url={downloadUrl} reset={setDownloadUrl} />

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
              shareFile={_shareFile}
              copyFile={_copyFile}
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
              setVideoId={setVideoId}
              renameFile={_renameFile}
              shareFile={_shareFile}
              copyFile={_copyFile}
              renameFolder={_renameFolder}
              removeFile={_removeFile}
              callback={updateOrders}
              showFolders={showFolders}
              isNavigating={navigating}
              selectedFolderId={selectedFolderId}
              orders={orders}
            />
          )}

          {/* show file and folder upload frame */}

          {orders.length == 0 ? <LocalFilePLoad /> : <div></div>}

          {/* paginate */}
          <Tablepaginate
            page={page}
            perPageCount={perPageCount}
            totalCount={total}
          />
          {/* add folder */}
          <AddFolder reload={reload} open={open} setOpen={setOpen} />
          <RemoveFiles
            reload={reload}
            files={selectedFiles}
            open={deleteFile}
            setOpen={setDeleteFile}
          />
          <RemoveFile
            reload={reload}
            fileId={currentFile}
            open={openRemoveFile}
            setOpen={setOpenRemoveFile}
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
          <CopyFile
            fileId={currentFile}
            reload={reload}
            open={copyFile}
            setOpen={setCopyFile}
          />
          <ShareFile
            files={selectedFiles}
            reload={reload}
            open={shareFile}
            setOpen={setShareFile}
          />
          <OrderNowModal
            reload={reload}
            clearSelection={clearSelection}
            files={fileToOrder}
            open={orderNow}
            setOpen={setOrderNow}
          />
        </div>
      )}
    </div>
  );
}
