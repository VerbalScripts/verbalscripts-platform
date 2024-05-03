/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/display-name */
import React, { useState, useEffect, forwardRef } from 'react';
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

type UploadType = 'file' | 'folder';

interface FilesUploadHeadRef {
  launchPicker: () => void;
}
interface FilesUploadHeadProps {
  uploadType: UploadType;
}

const FilesUploadHead = forwardRef<FilesUploadHeadRef, FilesUploadHeadProps>(
  ({ uploadType }, paref) => {
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

    // Expose the method via ref
    // @ts-ignore
    React.useImperativeHandle(paref, () => ({
      showPicker,
    }));

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

    const filesUploadRef = React.useRef<HTMLInputElement>(null);

    const showPicker = () => {
      if (uploadType == 'file') {
        if (filesUploadRef.current != null) {
          filesUploadRef.current.click();
        }
      }

      if (uploadType == 'folder') {
        if (folderInputRef.current != null) {
          folderInputRef.current.click();
        }
      }
    };

    return (
      <div>
        {uploadType == 'file' ? (
          <label
            htmlFor='raw_file'
            className='cursor-pointer text-indigo-500 font-semibold'
          >
            <input
              type='file'
              id='raw_file'
              multiple
              name='raw_file'
              ref={filesUploadRef}
              onChangeCapture={handleFilesUploadForm}
              className='hidden'
            ></input>
          </label>
        ) : (
          <label
            htmlFor='folder_files'
            className='cursor-pointer text-indigo-500 font-semibold'
          >
            <input
              type='file'
              name='folder_files'
              id='folder_files'
              onChangeCapture={handleFolderUploadForm}
              className='hidden'
              ref={folderInputRef}
              multiple
            ></input>
          </label>
        )}
      </div>
    );
  },
);

export default FilesUploadHead;
