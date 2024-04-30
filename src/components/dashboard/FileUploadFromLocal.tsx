import { classNames } from '@/utils/classNames';
import { Menu, Transition } from '@headlessui/react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import React, { DragEvent, Fragment, useState } from 'react';
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

export default function FileUploadFromLocal() {
  const [dragEnter, setDragEnter] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [progressTr, setProgress] = useRecoilState(progressTracker);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filesArr, setFiles] = useRecoilState(storeFiles);
  const setShowProgressBar = useSetRecoilState(showProgressBar);
  const [_currentIndex, setCurrentIndex] = useRecoilState(
    currentUploadFileIndex,
  );

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

  const prepareFilesForUpload = (_prepFiles: File[]) => {
    setFiles((_prevFiles: File[]) => {
      const files: File[] = [];
      _prepFiles.forEach((file: File) => files.push(file));
      return [..._prevFiles, ...files];
    });

    // init trackers
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _prepFiles.forEach((_file: File) =>
      setProgress((prev: ProgressTracker[]) => {
        return [
          ...prev,
          {
            percentage: '0',
            isComplete: false,
            error: '',
            failed: false,
            statusText: 'In queue',
          },
        ];
      }),
    );
  };

  const uploadFile = (file: File) => {
    const formData = new FormData();
    formData.append('file-transcript', file);

    formData.append(
      'meta[]',
      JSON.stringify({
        label: file.name,
        size: file.size,
        mimetype: file.type,
        relativePath: file.webkitRelativePath,
      }),
    );
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', function (event) {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        // progressBar.style.width = percent + '%';
        // progressBar.innerHTML = percent + '%';
        console.log(progressTr);
        setProgress((prev: ProgressTracker[]) => {
          const _updated = Array.from(prev);
          const update: ProgressTracker = {
            isComplete: _updated[_currentIndex].isComplete,
            failed: _updated[_currentIndex].failed,
            error: _updated[_currentIndex].error,
            percentage: percent.toString(),
            statusText: 'pushing',
          };
          _updated[_currentIndex] = update;
          return _updated;
        });
      }
    });

    xhr.addEventListener('readystatechange', function () {
      // route to a new page and update status

      if (this.readyState == 4 && this.status == 201) {
        //  setOpen(false);
        const resp = JSON.parse(this.response);
        if (resp.token) GetOrStoreAuthToken(resp.token);
      }
    });

    xhr.addEventListener('load', function () {
      setProgress((prev: ProgressTracker[]) => {
        const _updated = Array.from(prev);
        const update: ProgressTracker = {
          isComplete: true,
          failed: true,
          error: '',
          percentage: _updated[_currentIndex].percentage,
          statusText: 'Uploaded',
        };
        _updated[_currentIndex] = update;
        return _updated;
      });
      setTimeout(() => {
        // upload next file
        console.log(filesArr);
        if (_currentIndex + 1 < filesArr.length) {
          console.log('next item in queue');

          setCurrentIndex(_currentIndex + 1);
          uploadFile(filesArr[_currentIndex]);
        } else if (_currentIndex == 0) {
          console.log('late item in queue');

          setCurrentIndex(_currentIndex + 1);
          uploadFile(filesArr[_currentIndex]);
        }
      }, 100);

      setTimeout(() => {
        // upload next file
      }, 100);
    });

    xhr.addEventListener('error', function () {
      setProgress((prev: ProgressTracker[]) => {
        const _updated = Array.from(prev);
        const update: ProgressTracker = {
          isComplete: false,
          failed: true,
          error: 'Upload Failed',
          percentage: '',
          statusText: 'failed',
        };
        _updated[_currentIndex] = update;
        return _updated;
      });
    });

    xhr.open('POST', `${hostUrl}/uploads/add-file`, true);

    const access_token = GetOrStoreAuthToken();
    if (access_token == null) {
      xhr.setRequestHeader('x-token', uuid());
    } else {
      xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
    }

    xhr.send(formData);
  };

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
    prepareFilesForUpload(_dataFiles);

    // show progress bar
    setShowProgressBar(true);
    // upload files
    setTimeout(() => {
      uploadFile(_dataFiles[_currentIndex]);
    }, 100);
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

  return (
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
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 ' : 'text-gray-700',
                    'flex items-center px-4 py-2.5 text-sm w-full',
                  )}
                >
                  <span className='text-gray-600 font-semibold'>File(s)</span>
                </button>
              )}
            </Menu.Item>
          </div>

          <div className='py-1 w-full'>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active
                      ? 'bg-gray-100 text-left text-gray-900'
                      : 'text-gray-700',
                    'flex items-center px-4 py-2.5 text-sm w-full',
                  )}
                >
                  <span className='text-gray-600 font-semibold'>Folder</span>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
