import { classNames } from '@/utils/classNames';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import React, { DragEvent, Fragment, useEffect, useRef, useState } from 'react';

import { v4 as uuid } from 'uuid';

import { hostUrl } from '../../../config';
import { GetOrStoreAuthToken } from '@/utils/GetOrStoreAuthToken';
import FilesUploadHead from './FilesUploadHead';
import {
  currentUploadFileIndex,
  filesArr,
  progressTracker,
  showProgressBar,
} from '@/store/features/fileUpload';
import { useRecoilState, useSetRecoilState } from 'recoil';

export default function FileUploadFromLocal() {
  const [dragEnter, setDragEnter] = useState<boolean>(false);
  async function uploadFile(fileToSend: File) {
    // reset progress tracker

    const formData = new FormData();

    formData.append('file-transcript', fileToSend);

    formData.append(
      'meta[]',
      JSON.stringify({
        label: fileToSend.name,
        size: fileToSend.size,
        mimetype: fileToSend.type,
        relativePath: fileToSend.webkitRelativePath,
      }),
    );

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      // show modal

      xhr.upload.addEventListener('progress', function (event) {
        if (event.lengthComputable) {
          const percent = Math.round((event.loaded / event.total) * 100);
          setProgress((prevState) => {
            const updated = [...prevState];

            updated[globalIndex] = {
              failed: updated[globalIndex].failed,
              percentage: `${percent}`,
              isComplete: updated[globalIndex].isComplete,
              statusText: updated[globalIndex].statusText,
              error: updated[globalIndex].statusText,
            };
            return [...updated];
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
        if (xhr.status === 200) {
          setProgress((prevState) => {
            const updated = [...prevState];

            updated[globalIndex] = {
              failed: false,
              percentage: updated[globalIndex].percentage,
              isComplete: true,
              statusText: 'Finished',
              error: '',
            };

            return [...updated];
          });
          resolve(xhr.responseText);
        } else {
          setProgress((prevState) => {
            const updated = [...prevState];

            updated[globalIndex] = {
              failed: true,
              percentage: updated[globalIndex].percentage,
              isComplete: true,
              statusText: xhr.statusText,
              error: '',
            };

            return [...updated];
          });
          reject(xhr.statusText);
        }
      });

      xhr.addEventListener('error', function () {
        // setOpen( false );
        setProgress((prevState) => {
          const updated = [...prevState];

          updated[globalIndex] = {
            failed: true,
            percentage: updated[globalIndex].percentage,
            isComplete: true,
            statusText: 'Network Error',
            error: 'Upload failed to complete. Retry Again!',
          };
          return [...updated];
        });
        reject('Network Error');
      });

      xhr.open('POST', `${hostUrl}/uploads/add-file`, true);
      setProgress((prevState) => {
        const updated = [...prevState];

        updated[globalIndex] = {
          failed: updated[globalIndex].failed,
          percentage: updated[globalIndex].percentage,
          isComplete: updated[globalIndex].isComplete,
          statusText: 'uploading',
          error: updated[globalIndex].statusText,
        };
        return [...updated];
      });
      const access_token = GetOrStoreAuthToken();
      if (access_token == null) {
        xhr.setRequestHeader('x-token', uuid());
      } else {
        xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
      }
      xhr.send(formData);
    });
  }
  const [files, setFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState<ProgressTracker[]>([]);

  const dispalyProgress = useSetRecoilState(showProgressBar);
  const [globalProgress, updateGlobalProgressTracker] =
    useRecoilState(progressTracker);
  const [globalArray, globalFilesArray] = useRecoilState(filesArr);
  const [globalIndex, globalUploadFileIndex] = useRecoilState(
    currentUploadFileIndex,
  );
  // show progress bar

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const retryUpload = async (index: number) => {
    await uploadFile(files[index]);
  };

  const updateFilesArray = (_prepFiles: File[]) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setFiles((_prevFiles: File[]) => {
      return [..._prevFiles, ..._prepFiles];
    });
    const tracker: ProgressTracker[] = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _track of _prepFiles) {
      tracker.push({
        percentage: '0',
        error: '',
        failed: false,
        isComplete: false,
        statusText: 'In Queue',
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setProgress((_prevTracker: ProgressTracker[]) => {
      return [..._prevTracker, ...tracker];
    });
  };

  const updateGlobalState = (_prepFiles: File[]) => {
    globalFilesArray((_prevFiles: File[]) => {
      return [..._prevFiles, ..._prepFiles];
    });
    const tracker: ProgressTracker[] = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _track of _prepFiles) {
      tracker.push({
        percentage: '0',
        error: '',
        failed: false,
        isComplete: false,
        statusText: 'In Queue',
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateGlobalProgressTracker((_prevTracker: ProgressTracker[]) => {
      return [..._prevTracker, ...tracker];
    });
  };

  const prepareFilesForUpload = async (_prepFiles: File[]) => {
    // check if an existing upload instance is running
    if (globalArray.length > 0) {
      updateGlobalState(_prepFiles);
    } else {
      updateFilesArray(_prepFiles);
    }

    // await updateImageDisplay(_prepFiles[0]);
  };

  // Function to handle uploading files one after another
  const uploadFilesSequentially = async () => {
    if (globalIndex <= files.length - 1) {
      try {
        await uploadFile(files[globalIndex]);
        if (globalIndex < files.length - 1) {
          // setActiveIndex(() => activeIndex + 1); // Move to the next file
          globalUploadFileIndex(() => globalIndex + 1); // Move to the next file
        }
      } catch (error) {
        console.error('Upload Error:', error);
        // Handle error
      }
    } else {
      // All files have been uploaded
      // globalUploadFileIndex(-1); // Move to the next file
      // setActiveIndex(-1); // Reset activeIndex
    }
  };

  // Effect to initiate file uploads when files change
  useEffect(() => {
    if (files.length > 0) {
      dispalyProgress(true);

      globalFilesArray(() => [...files]);
      // setActiveIndex(activeIndex + 1);
      globalUploadFileIndex(globalIndex + 1);
    }
  }, [files]);

  useEffect(() => {
    if (progress.length) {
      updateGlobalProgressTracker(() => [...progress]);
    }
  }, [progress]);

  // useEffect(() => {
  //   // SYNC STATS
  //   if (progress.length) {
  //     updateGlobalProgressTracker(() => [...progress]);
  //   }
  // }, []);

  // Effect to initiate file uploads when files change
  useEffect(() => {
    if (files.length > 0 && globalIndex != -1) {
      uploadFilesSequentially();
    }
  }, [globalIndex]);

  // sync if existing upload instance
  useEffect(() => {
    if (globalProgress.length == 0 && globalIndex == -1) {
      setFiles(() => []);
    }
    if (globalArray.length > files.length && files.length > 0) {
      setFiles((_existFiles) => [..._existFiles, ...globalArray]);
      // setActiveIndex(activeIndex + 1);
      // globalUploadFileIndex(globalIndex + 1);
    }
  }, [globalArray]);

  useEffect(() => {
    if (globalProgress.length == 0 && globalIndex == -1) {
      setProgress(() => []);
    }
    if (globalProgress.length > progress.length && progress.length > 0) {
      setProgress((_existProgress) => [..._existProgress, ...globalProgress]);
      // setActiveIndex(activeIndex + 1);
      // globalUploadFileIndex(globalIndex + 1);
    }
  }, [globalProgress]);

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
    await prepareFilesForUpload(_dataFiles);
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
  const fileUploadRef = useRef<FilesUploadHeadRef>(null);
  const folderUploadRef = useRef<FilesUploadHeadRef>(null);

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
              'flex flex-col  gap-x-2 rounded-sm md:rounded-md  border border-gray-300 hover:border-gray-200 hover:bg-gray-50 bg-white dark:bg-zinc-600 dark:hover:bg-zinc-500 dark:hover:border-zinc-500 font-semibold px-4 py-1.5  md:py-2  focus-within:ring-indigo-400',
              dragEnter ? 'border-indigo-500 bg-gray-200' : '',
            )}
          >
            <div className='md:inline-flex items-center gap-x-3 text-gray-700 dark:text-white font-semibold hidden  md:text-md'>
              <span>Upload File/Folder</span>
              <ChevronDownIcon className='w-5 h-5  text-gray-700 dark:text-white' />
            </div>
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
          <Menu.Items className='absolute left-0  mt-2 z-10  w-44 origin-top divide-y  rounded-md bg-indigo-50 shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none'>
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
