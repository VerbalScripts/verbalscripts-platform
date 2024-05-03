import { classNames } from '@/utils/classNames';
import { Menu, Transition } from '@headlessui/react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import React, { DragEvent, Fragment, useEffect, useRef, useState } from 'react';
import {
  filesArr as storeFiles,
  progressTracker,
  showProgressBar,
  currentUploadFileIndex,
} from '@/store/features/fileUpload';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';

import { hostUrl } from '../../../config';
import { GetOrStoreAuthToken } from '@/utils/GetOrStoreAuthToken';
import FilesUploadHead from './FilesUploadHead';

export default function FileUploadFromLocal() {
  const [dragEnter, setDragEnter] = useState<boolean>(false);
  // const [currentFile, setCurrent] = useState<number>(0);
  // const [localFileArr, setLocalFileArr] = useState<File[]>([]);

  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [progressTr, setProgress] = useRecoilState(progressTracker);
  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [filesArr, setFiles] = useRecoilState(storeFiles);
  // const setShowProgressBar = useSetRecoilState(showProgressBar);
  // const [_currentIndex, setCurrentIndex] = useRecoilState(
  //   currentUploadFileIndex,
  // );

  // const uploadFiles = (_filesArr: File[]) => {
  //   for (let i = 0; i < _filesArr.length; i++) {
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //     const fileExtension = _filesArr[i].name
  //       .substring(_filesArr[i].name.lastIndexOf('.'))
  //       .toLowerCase();

  //     uploadFile(_filesArr[i], i);
  //     // if (allowedExtensions.includes(fileExtension)) {
  //     // } else {
  //     //   alert('Invalid file type: ' + fileExtension);
  //     // }
  //   }
  // };

  // useEffect(() => {
  //   setCurrentIndex(currentFile + 1);
  // }, [currentFile]);
  // useEffect(() => {
  //   console.log('local files updated');
  //   setFiles(() => [...localFileArr]);
  // }, [localFileArr]);

  // const prepareFilesForUpload = (_prepFiles: File[]) => {
  //   setFiles((_prevFiles: File[]) => {
  //     const files: File[] = [];
  //     _prepFiles.forEach((file: File) => files.push(file));
  //     return [..._prevFiles, ...files];
  //   });

  //   setLocalFileArr((_prevFiles: File[]) => {
  //     const files: File[] = [];
  //     _prepFiles.forEach((file: File) => files.push(file));
  //     return [..._prevFiles, ...files];
  //   });

  //   // init trackers
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   _prepFiles.forEach((_file: File) =>
  //     setProgress((prev: ProgressTracker[]) => {
  //       return [
  //         ...prev,
  //         {
  //           percentage: '0',
  //           isComplete: false,
  //           error: '',
  //           failed: false,
  //           statusText: 'In queue',
  //         },
  //       ];
  //     }),
  //   );

  //   // call a function to start upload
  //   // upload files
  //   setTimeout(() => {
  //     uploadFile(_prepFiles[currentFile]);
  //   }, 100);
  // };

  // const uploadFile = (file: File) => {
  //   console.log('trying first upload');

  //   console.log(localFileArr);
  //   const formData = new FormData();
  //   formData.append('file-transcript', file);

  //   formData.append(
  //     'meta[]',
  //     JSON.stringify({
  //       label: file.name,
  //       size: file.size,
  //       mimetype: file.type,
  //       relativePath: file.webkitRelativePath,
  //     }),
  //   );
  //   const xhr = new XMLHttpRequest();

  //   xhr.upload.addEventListener('progress', function (event) {
  //     if (event.lengthComputable) {
  //       const percent = Math.round((event.loaded / event.total) * 100);
  //       // progressBar.style.width = percent + '%';
  //       // progressBar.innerHTML = percent + '%';
  //       setProgress((prev: ProgressTracker[]) => {
  //         const _updated = Array.from(prev);
  //         const update: ProgressTracker = {
  //           isComplete: _updated[currentFile].isComplete,
  //           failed: _updated[currentFile].failed,
  //           error: _updated[currentFile].error,
  //           percentage: percent.toString(),
  //           statusText: 'pushing',
  //         };
  //         _updated[currentFile] = update;
  //         return _updated;
  //       });
  //     }
  //   });

  //   xhr.addEventListener('readystatechange', function () {
  //     // route to a new page and update status

  //     if (this.readyState == 4 && this.status == 201) {
  //       //  setOpen(false);
  //       const resp = JSON.parse(this.response);
  //       if (resp.token) GetOrStoreAuthToken(resp.token);
  //     }
  //   });

  //   xhr.addEventListener('load', function () {
  //     setProgress((prev: ProgressTracker[]) => {
  //       const _updated = Array.from(prev);
  //       const update: ProgressTracker = {
  //         isComplete: true,
  //         failed: true,
  //         error: '',
  //         percentage: _updated[currentFile].percentage,
  //         statusText: 'Uploaded',
  //       };
  //       _updated[currentFile] = update;
  //       return _updated;
  //     });

  //     if (currentFile + 1 < localFileArr.length) {
  //       console.log('next item in queue');

  //       setCurrent(currentFile + 1);
  //     } else if (currentFile == 0) {
  //       console.log('late item in queue');

  //       setCurrent(currentFile + 1);
  //     }

  //     setTimeout(() => {
  //       uploadFile(localFileArr[currentFile]);
  //       // upload next file
  //     }, 100);
  //   });

  //   xhr.addEventListener('error', function () {
  //     setProgress((prev: ProgressTracker[]) => {
  //       const _updated = Array.from(prev);
  //       const update: ProgressTracker = {
  //         isComplete: false,
  //         failed: true,
  //         error: 'Upload Failed',
  //         percentage: '',
  //         statusText: 'failed',
  //       };
  //       _updated[currentFile] = update;
  //       return _updated;
  //     });
  //   });

  //   xhr.open('POST', `${hostUrl}/uploads/add-file`, true);

  //   const access_token = GetOrStoreAuthToken();
  //   if (access_token == null) {
  //     xhr.setRequestHeader('x-token', uuid());
  //   } else {
  //     xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
  //   }

  //   xhr.send(formData);
  // };

  async function dropHandler(ev: DragEvent) {
    // console.log('goeat');
    console.log('File(s) dropped');

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    const _dataFiles: File[] = [];

    if (ev.dataTransfer == null) return false;
    setDragEnter(false);

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...Array.from(ev.dataTransfer.items)].forEach((item) => {
        // If dropped items aren't files, reject them
        if (item.kind === 'file') {
          const file = item.getAsFile()!;
          _dataFiles.push(file);
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)

      [...Array.from(ev.dataTransfer.files)].forEach((file) => {
        _dataFiles.push(file);
      });
    }

    if (_dataFiles.length == 0) return false;
    // prepareFilesForUpload(_dataFiles);

    console.log(_dataFiles);
    // show progress bar
    // setShowProgressBar(true);
  }

  function dragOverHandler(ev: DragEvent) {
    setDragEnter(true);

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }

  function dragEnterHandler(ev: DragEvent) {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    setDragEnter(true);
  }

  // const GoToDashboard = () => {
  //   router.push('/dashboard/pending?new=true');
  // }

  function dragLeaveHandler(ev: DragEvent) {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    setDragEnter(false);
  }

  // pushing foyee
  const fileUploadRef = useRef<FilesUploadHeadRef>();
  const folderUploadRef = useRef<FilesUploadHeadRef>();

  const launchFilePicker = () => {
    if (fileUploadRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      fileUploadRef.current.showPicker();
    }
  };
  const launchFolderPicker = () => {
    if (folderUploadRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      folderUploadRef.current.showPicker();
    }
  };

  return (
    <>
      <FilesUploadHead ref={fileUploadRef} uploadType='file' />

      <FilesUploadHead ref={folderUploadRef} uploadType='folder' />

      <Menu as='div' className='relative inline-block text-left'>
        <div
          onDrop={dropHandler}
          onDragEnter={dragEnterHandler}
          onDragLeave={dragLeaveHandler}
          onDragOver={dragOverHandler}
        >
          <Menu.Button
            className={classNames(
              'flex flex-col mb-5 gap-x-2 rounded-xl border-2 border-dashed border-indigo-300 hover:border-indigo-500 hover:bg-indigo-100 bg-indigo-50 font-semibold px-4 py-2  focus-within:ring-indigo-400',
              dragEnter ? 'border-indigo-500 bg-gray-200' : '',
            )}
          >
            <ArrowUpTrayIcon
              className='-mr-1 h-5 w-5 text-indigo-500'
              aria-hidden='true'
            />
            <span className='text-indigo-500'>Upload or Drop</span>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute left-0 -mt-2 z-10  w-44 origin-top divide-y  rounded-md bg-indigo-50 shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='py-1 w-full'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => launchFilePicker()}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 ' : 'text-gray-700',
                      'flex items-center px-4 py-2.5 text-sm w-full',
                    )}
                  >
                    File
                  </button>
                )}
              </Menu.Item>
            </div>

            <div className='py-1 w-full'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => launchFolderPicker()}
                    className={classNames(
                      active
                        ? 'bg-gray-100 text-left text-gray-900'
                        : 'text-gray-700',
                      'flex items-center px-4 py-2.5 text-sm w-full',
                    )}
                  >
                    Folder
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
