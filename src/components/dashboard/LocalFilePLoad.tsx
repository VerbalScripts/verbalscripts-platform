/* eslint-disable @typescript-eslint/ban-ts-comment */
import { classNames } from '@/utils/classNames';
import React, { DragEvent, useEffect, useState } from 'react';

import { hostUrl } from '../../../config';
import { v4 as uuid } from 'uuid';
import { GetOrStoreAuthToken } from '@/utils/GetOrStoreAuthToken';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  currentUploadFileIndex,
  filesArr,
  progressTracker,
  showProgressBar,
} from '@/store/features/fileUpload';
// import { getFilesAsZip } from '@/utils/FolderZip';

export default function LocalFilePLoad() {
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
        console.log('completed ...', fileToSend.name);
        if (xhr.status === 201) {
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
  const [dragEnter, setDragEnter] = useState(false);
  const dispalyProgress = useSetRecoilState(showProgressBar);
  const [globalProgress, updateGlobalProgressTracker] =
    useRecoilState(progressTracker);
  const [globalArray, globalFilesArray] = useRecoilState(filesArr);
  const [globalIndex, globalUploadFileIndex] = useRecoilState(
    currentUploadFileIndex,
  );
  // show progress bar

  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (ref.current !== null) {
      ref.current.setAttribute('directory', '');
      ref.current.setAttribute('webkitdirectory', '');
    }
  }, [ref]);

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

  const folderInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (folderInputRef.current !== null) {
      folderInputRef.current.setAttribute('directory', '');
      folderInputRef.current.setAttribute('webkitdirectory', '');
    }
  }, [folderInputRef]);

  const handleFolderUploadForm = async (
    event: React.FormEvent<HTMLInputElement>,
  ) => {
    const target = event.target as HTMLInputElement & {
      files: FileList;
    };

    if (target.files.length == 0) return;

    await prepareFilesForUpload(Array.from(target.files));
    // setFiles(Array.from(target.files));
  };

  const handleFilesUploadForm = async (
    event: React.FormEvent<HTMLInputElement>,
  ) => {
    const target = event.target as HTMLInputElement & {
      files: FileList;
    };

    if (target.files.length == 0) return;

    await prepareFilesForUpload(Array.from(target.files));
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

  return (
    <div className='my-10'>
      <form>
        <div
          onDrop={dropHandler}
          onDragEnter={dragEnterHandler}
          onDragLeave={dragLeaveHandler}
          onDragOver={dragOverHandler}
          className={classNames(
            'relative w-full rounded-xl border-2 transition-all duration-200 border-dashed bg-white dark:bg-gray-600  h-[13rem]',
            dragEnter ? 'border-indigo-500 bg-gray-300' : '',
          )}
        >
          <div className='flex flex-col h-full  items-center justify-center'>
            {/* <img src='upload.png' alt='' className='absolute top-6  w-32' /> */}

            <div className=' text-center leading-8'>
              <span className='text-2xl text-gray-800 dark:text-white md:text-3xl'>
                Drag and Drop files here or <br></br>
              </span>
              <span>
                {' '}
                <label
                  htmlFor='raw_file'
                  className='cursor-pointer text-indigo-500 dark:text-indigo-300 font-semibold'
                >
                  <input
                    type='file'
                    id='raw_file'
                    multiple
                    name='raw_file'
                    onChange={handleFilesUploadForm}
                    className='hidden'
                  ></input>
                  Browse files
                </label>
              </span>
              {' or '}
              <span>
                <label
                  htmlFor='folder_files'
                  className='cursor-pointer text-indigo-500 dark:text-indigo-300 font-semibold'
                >
                  <input
                    type='file'
                    name='folder_files'
                    id='folder_files'
                    onChange={handleFolderUploadForm}
                    className='hidden'
                    ref={ref}
                    multiple
                  ></input>
                  Select Folder
                </label>
              </span>
              <span> on your computer.</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
