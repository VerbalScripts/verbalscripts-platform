import { classNames } from '@/utils/classNames';
import React, { DragEvent, useState } from 'react';

import FileUploadProgress from './FileUploadProgress';
import { hostUrl } from '../../../config';
import { v4 as uuid } from 'uuid';
import { GetOrStoreAuthToken } from '@/utils/GetOrStoreAuthToken';
// import { getFilesAsZip } from '@/utils/FolderZip';

export default function LocalFileUpload() {
  async function updateImageDisplay(inputFiles: File[]) {
    // reset progress tracker
    setProgress((prevState) => ({
      ...prevState,
      error: '',
      percentage: '',
      failed: false,
    }));

    if (inputFiles.length == 0) {
      return;
    }
    setOpen(true);
    // const zipContent = await getFilesAsZip(inputFiles);

    const formData = new FormData();

    inputFiles.forEach((_file) => {
      formData.append('transcription-files', _file);
    });

    // append files
    inputFiles.forEach((item) => {
      formData.append(
        'files[]',
        JSON.stringify({
          label: item.name,
          size: item.size,
          mimetype: item.type,
          relativePath: item.webkitRelativePath,
        }),
      );
    });

    const xhr = new XMLHttpRequest();

    // show modal

    xhr.upload.addEventListener('progress', function (event) {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);

        setProgress((prevState) => ({
          ...prevState,
          percentage: `${percent}`,
        }));
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
      // route to a new page and update status
      // router.push('/dashboard/pending?new=true');
      setProgress((prevState) => ({
        ...prevState,
        failed: false,
        isComplete: true,
        statusText: 'Finished',
        error: '',
      }));
      console.log('Finished ....');
    });

    xhr.addEventListener('error', function () {
      // setOpen( false );
      setProgress((prevState) => ({
        ...prevState,
        failed: true,
        error: 'Upload failed to complete. Retry Again!',
      }));
    });

    xhr.open('POST', `${hostUrl}/uploads/push`, true);
    setProgress((prevState) => ({
      ...prevState,
      statusText: 'Uploading ...',
    }));
    const access_token = GetOrStoreAuthToken();
    if (access_token == null) {
      xhr.setRequestHeader('x-token', uuid());
    } else {
      xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
    }
    xhr.send(formData);
  }
  const [files, setFiles] = useState<Array<File>>([]);
  const [progress, setProgress] = useState<ProgressTracker>({
    percentage: '0',
    error: '',
    failed: false,
    statusText: '',
    isComplete: false,
  });
  const [dragEnter, setDragEnter] = useState<boolean>(false);

  const [open, setOpen] = useState(false);

  const FilesUploadForm = async (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement & {
      files: FileList;
    };

    if (target.files.length == 0) return;

    await prepareFilesForUpload(Array.from(target.files));
  };

  const retryUpload = async () => {
    await updateImageDisplay(files);
  };

  const FolderUploadForm = async (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement & {
      files: FileList;
    };

    if (target.files.length == 0) return;

    await prepareFilesForUpload(Array.from(target.files));
  };

  const updateFilesArray = (_prepFiles: File[]) => {
    setFiles((_prevFiles: File[]) => {
      const files: File[] = [];
      _prepFiles.forEach((file: File) => files.push(file));
      return [..._prevFiles, ...files];
    });
  };

  const prepareFilesForUpload = async (_prepFiles: File[]) => {
    updateFilesArray(_prepFiles);

    await updateImageDisplay(_prepFiles);
  };

  async function dropHandler(ev: DragEvent) {
    // console.log('goeat');
    console.log('File(s) dropped');

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    setDragEnter(false);

    const _dataFiles: File[] = [];

    if (ev.dataTransfer == null) return false;

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

    await prepareFilesForUpload(_dataFiles);
  }

  function dragOverHandler(ev: DragEvent) {
    console.log('File(s) in drop zone');

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

  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (ref.current !== null) {
      ref.current.setAttribute('directory', '');
      ref.current.setAttribute('webkitdirectory', '');
    }
  }, [ref]);

  return (
    <div className='my-10'>
      <FileUploadProgress
        retryUpload={retryUpload}
        progress={progress}
        open={open}
        setOpen={setOpen}
      />
      <form>
        <div
          onDrop={dropHandler}
          onDragEnter={dragEnterHandler}
          onDragLeave={dragLeaveHandler}
          onDragOver={dragOverHandler}
          className={classNames(
            'relative w-full rounded-xl border-2 transition-all duration-200 border-dashed bg-white   h-[13rem]',
            dragEnter ? 'border-indigo-500 bg-gray-300' : '',
          )}
        >
          <div className='flex flex-col h-full  items-center justify-center'>
            {/* <img src='upload.png' alt='' className='absolute top-6  w-32' /> */}

            <div className='text-gray-800 text-center leading-8'>
              <span className='text-2xl md:text-3xl'>
                Drag and Drop files here or <br></br>
              </span>
              <span>
                {' '}
                <label
                  htmlFor='raw_file'
                  className='cursor-pointer text-indigo-500 font-semibold'
                >
                  <input
                    type='file'
                    id='raw_file'
                    multiple
                    name='raw_file'
                    onChange={FilesUploadForm}
                    className='hidden'
                  ></input>
                  Browse files
                </label>
              </span>
              {' or '}
              <span>
                <label
                  htmlFor='folder_files'
                  className='cursor-pointer text-indigo-500 font-semibold'
                >
                  <input
                    type='file'
                    name='folder_files'
                    id='folder_files'
                    onChange={FolderUploadForm}
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

      <div className='my-10 text-center'>
        <span className='text-gray-800 font-semibold'>Tip: </span>
        <span className='text-base text-gray-700'>
          Hold the {"'"}Shift{"'"} or {"'"}Command{"'"} key in the file select
          dialog to upload multiple files.
        </span>
      </div>
    </div>
  );
}
