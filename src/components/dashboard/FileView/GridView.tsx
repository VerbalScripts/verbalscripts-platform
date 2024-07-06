import { Checkbox } from 'flowbite-react';
import React, { useState } from 'react';
import TableMenuDropDown from '../TableMenuDropDown';
import { bytesToMB } from '@/utils/bytesToMb';
import { classNames } from '@/utils/classNames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import AxiosProxy from '@/utils/AxiosProxy';
import moment from 'moment';
import { DurationFromSeconds } from '@/utils/DurationFromSeconds';
import { PlayIcon } from '@heroicons/react/24/outline';

interface GridViewProps {
  folders: OrderFolder[];
  orders: OrderFile[];
  showFolders: boolean;
  openFolder: (arg0: { id: string; label: string }) => void;
  callback: (arg0: number) => void;
  updatedSelectedFiles: (
    id: string,
    remove: boolean,
    clearAll: boolean,
  ) => void;
  selectedFiles: string[];
  renameFile: (id: string) => void;
  renameFolder: (id: string) => void;
  removeFile: (id: string) => void;
  shareFile: (id: string) => void;
  copyFile: (id: string) => void;
  isNavigating: boolean;
  setVideoId: (id: string) => void;
  selectedFolderId: string;
}

export default function GridView({
  folders,
  orders,
  openFolder,
  showFolders,
  updatedSelectedFiles,
  selectedFiles,
  renameFile,
  shareFile,
  copyFile,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  renameFolder,
  removeFile,
  setVideoId,
  callback,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isNavigating,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  selectedFolderId,
}: GridViewProps) {
  const [draggedRowIndex, setDraggedRowIndex] = useState<number | null>(null);

  // for setting dragged over folders
  const [draggedOverIndex, setDraggedOverIndex] = useState<number | null>(null);

  const handleDragStart = (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    event: DragEvent<Element>,
    rowIndex: number,
  ) => {
    setDraggedRowIndex(rowIndex);
  };

  const handleDragEnd = async () => {
    // Handle row reordering logic (provided by onRowReorder)

    setTimeout(() => {
      setDraggedOverIndex(null);
      setDraggedRowIndex(null);
    });
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handelDragOverHandler = (ev: DragEvent<Element>, rowIndex: number) => {
    ev.preventDefault();
    setDraggedOverIndex(rowIndex);
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const onDropHandler = async (ev: DragEvent<Element>) => {
    console.log('File(s) dropped');

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    // check for null
    if (draggedRowIndex == null || draggedOverIndex == null) return false;

    const folder = folders[draggedOverIndex];
    const file = orders[draggedRowIndex];

    if (typeof folder == 'undefined' || typeof file == 'undefined')
      return false;

    const status = await moveFileIntoFolder(folder.id, file.id);

    if (status) {
      // update parent array
      callback(draggedRowIndex);
    }

    setDraggedOverIndex(null);
    setDraggedRowIndex(null);
  };

  const moveFileIntoFolder = async (folderId: string, fileId: string) => {
    try {
      const response = await AxiosProxy.patch(`/files/${fileId}`, { folderId });

      if (response.status == 200) {
        if (response.data.responseCode == 0) {
          return true;
        }
      }
      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const handelDragEnterHandler = (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ev: DragEvent<Element>,
  ) => {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    // setDraggedOverIndex(rowIndex);
  };

  // const GoToDashboard = () => {
  //   router.push('/dashboard/pending?new=true');
  // }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handelDragLeaveHandler = (ev: DragEvent<Element>) => {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    setDraggedOverIndex(null);
  };

  const isSelected = (id: string) => {
    const result = selectedFiles.find((item: string) => item == id);
    return result == undefined ? false : true;
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const addSelected = (event: ChangeEvent<HTMLInputElement>, id: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if ((event.target as HTMLInputElement).checked) {
      updatedSelectedFiles(id, false, false);
    } else {
      updatedSelectedFiles(id, true, false);
    }
  };

  return (
    <div className=''>
      {/* {draggedOverIndex == index ? (
        <span className='flex gap-x-5 ml-10'>
          <span className=''>
            <FontAwesomeIcon
              icon={faCopy}
              className='text-indigo-500 w-6 h-6'
            />
          </span>
          <span className='text-gray-600 font-semibold text-md'>
            Release to Move Into {folder.label}
          </span>
        </span>
      ) : null} */}
      <div className='grid max-w-none  content-center grid-cols-1 md:grid-cols-3 gap-3 lg:max-w-none lg:grid-cols-3 '>
        {showFolders &&
          folders.map((folder, index) => (
            <div
              key={folder.id}
              onDragEnter={handelDragEnterHandler}
              onDragLeave={handelDragLeaveHandler}
              onDrop={onDropHandler}
              onDragOver={(event) => handelDragOverHandler(event, index)}
              onClick={() => openFolder({ id: folder.id, label: folder.label })}
              className={classNames(
                'bg-indigo-50 rounded-xl gap-x-5 flex  items-center px-3 md:px-5  py-5 cursor-pointer',
                draggedOverIndex == index ? 'bg-indigo-100 border-dashed' : '',
              )}
            >
              <FontAwesomeIcon
                icon={faFolderOpen}
                className='w-7 h-7 text-indigo-600'
              />

              <div className='flex flex-col items-start '>
                <div>
                  <span className='text-gray-600 text-base font-semibold'>
                    {folder.label}
                  </span>
                </div>
                <div className='mt-1 flex'>
                  <span className='text-gray-600 text-base'>2 files</span>
                </div>
              </div>
            </div>
          ))}

        {/* files */}

        {orders.map((order, index) => (
          <div
            draggable={true}
            onDragStart={(event) => handleDragStart(event, index)}
            onDragEnd={handleDragEnd}
            key={order.fileId}
            className={classNames(
              'rounded-xl gap-x-5  w-full  items-start gap-y-5 px-3 md:px-5 py-4 border border-gray-200 dark:border-gray-600 shadow-md',
              draggedRowIndex == index ? 'bg-gray-200' : '',
            )}
          >
            <div className='flex justify-between items-center mb-1.5  '>
              <span>
                <Checkbox
                  onChange={(event) => addSelected(event, order.id)}
                  checked={isSelected(order.id)}
                />
              </span>
              <TableMenuDropDown
                remove={() => removeFile(order.id)}
                rename={() => renameFile(order.id)}
                duplicate={() => copyFile(order.id)}
                share={() => shareFile(order.id)}
                isGrid={true}
              />
            </div>
            <div className='flex items-start gap-x-3 '>
              <div className='flex-shrink-0'>
                {order.mimetype.split('/')[0] == 'video' ? (
                  <img
                    src='/dashboard/icons/video.png'
                    className='w-7 h-7'
                    alt='video file'
                  />
                ) : order.mimetype.split('/')[0] == 'audio' ? (
                  <img
                    src='/dashboard/icons/audio.png'
                    className='w-7 h-7'
                    alt='video file'
                  />
                ) : order.mimetype.split('/')[0] == 'text' ? (
                  <img
                    src='/dashboard/icons/txt.png'
                    className='w-7 h-7'
                    alt='text file'
                  />
                ) : order.mimetype.split('/')[0] == 'application' &&
                  order.mimetype.split('/')[1] == 'pdf' ? (
                  <img
                    src='/dashboard/icons/pdf.png'
                    className='w-7 h-7'
                    alt='pdf file'
                  />
                ) : (
                  <img
                    src='/dashboard/icons/doc.png'
                    className='w-7 h-7'
                    alt='document file'
                  />
                )}
              </div>
              <div className='flex flex-col items-start flex-grow'>
                <div className=''>
                  <span className='text-gray-600 text-lg footer-title font-semibold  line-clamp-2'>
                    {order.label}
                  </span>
                </div>
                <div className='text-sm text-gray-400 dark:text-gray-200'>
                  <span>{moment(order.createdAt).format('llll')}</span> {' |'}{' '}
                  <span className='bg-indigo-500 px-1 py-0.5 rounded-md text-white font-semibold text-xs uppercase'>
                    {order.mimetype.split('/')[1]}
                  </span>
                </div>
              </div>
            </div>
            <div className='mt-1.5 flex justify-between'>
              <span className='text-gray-600 dark:text-gray-200 text-sm uppercase'>
                <b>size</b>: {bytesToMB(order.size)} {'MBs'}
              </span>

              {/* preview buttons */}
              <div>
                {order.mimetype.split('/')[0] == 'video' ||
                order.mimetype.split('/')[0] == 'audio' ? (
                  <button
                    onClick={() => setVideoId(order.id)}
                    className=' border border-gray-200 dark:border-gray-500 px-1.5 rounded-md bg-teal-100 inline-flex items-center gap-x-2 text-xs font-semibold text-gray-700 dark:text-white'
                  >
                    <span>Preview</span>
                    <PlayIcon className='text-gray-700 dark:text-white w-5 h-5' />
                  </button>
                ) : null}
              </div>
            </div>
            <div
              className={classNames(
                'mt-1.5 flex ',
                order.duration ? 'justify-between' : 'justify-end',
              )}
            >
              {order.duration ? (
                <span className='capitalize  text-indigo-600'>
                  <b>Duration</b> {DurationFromSeconds(order.duration)}
                </span>
              ) : (
                <span></span>
              )}
              <span className='capitalize  text-indigo-600'>
                <b>Status: </b>
                <span className='bg-indigo-100 rounded-xl text-xs font-semibold capitalize px-1.5 py-1 text-indigo-600'>
                  {order.status}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
