import { classNames } from '@/utils/classNames';
import React, { DragEvent, useState } from 'react';

import JSZip from 'jszip';
import FileUploadProgress from './FileUploadProgress';
import { hostUrl } from '../../../config';
import { v4 as uuid } from 'uuid';
import { GetOrStoreAuthToken } from '@/utils/GetOrStoreAuthToken';

export default function LocalFileUpload() {
  // const router = useRouter();

  const allowedExtensions = [
    'mp3',
    'wav',
    'wmv',
    'mpeg',
    'mp4',
    'mp3',
    'ogg',
    'mkv',
  ];

  async function updateImageDisplay(inputFiles: File[]) {
    const zip = new JSZip();

    // reset progress tracker
    setProgress((prevState) => ({
      ...prevState,
      error: '',
      percentage: '',
      failed: false,
    }));

    if (inputFiles.length == 0) {
      setProgress((prevState) => ({
        ...prevState,
        error: 'Please select a file',
      }));
    }

    // add files to zip
    inputFiles.forEach((file) => {
      zip.file(file.name, file);
    });

    const zipContent = await zip.generateAsync(
      { type: 'blob' },
      function updateCallback(metadata) {
        console.log('progression: ' + metadata.percent.toFixed(2) + ' %');
        if (metadata.currentFile) {
          console.log('current file = ' + metadata.currentFile);
        }
      },
    );


    const formData = new FormData();
    formData.append('folderzip', zipContent);

    // append files
    inputFiles.forEach((item) => {
      formData.append(
        'files[]',
        JSON.stringify({
          label: item.name,
          size: item.size,
          mimetype: item.type,
        }),
      );
    });

    const xhr = new XMLHttpRequest();

    // show modal
    setOpen(true);

    xhr.upload.addEventListener('progress', function (event) {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        console.log(percent);
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
        const resp = JSON.parse( this.response )
        if ( resp.token ) GetOrStoreAuthToken( resp.token );
        
      } 
    });

    xhr.addEventListener('load', function () {
      // route to a new page and update status
      // router.push('/dashboard/pending?new=true');
        setProgress((prevState) => ({
          ...prevState,
          failed: false,
          isComplete: true,
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

    xhr.open( 'POST', `${ hostUrl }/uploads/push`, true );
    const access_token = GetOrStoreAuthToken()
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

    // await prepareFilesForUpload(Array.from(target.files));
    console.log(target.files)
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


  function dropHandler(ev: DragEvent) {
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

    prepareFilesForUpload(_dataFiles);
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
                    accept={allowedExtensions.join(',')}
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
        {/* 
        {files.length > 0 ? (
          <div className='mt-5 mb-3 ml-3 flex items-center'>
            <span className='text-md text-gray-800 md:text-2xl'>
              Local Files
            </span>
            <span className='ml-5 text-gray-800 flex text-md items-center font-semibold justify-center rounded-full bg-gray-300 h-10 w-10'>
              {files.length}
            </span>
          </div>
        ) : null} */}

        {/* <div className='flex flex-col gap-y-2 mt-5'>
          {files.map((file: File, index: number) => (
            <div
              key={file.name}
              className='flex flex-col rounded-xl border border-gray-300 p-3'
            >
              <div className='flex items-center justify-between'>
                <div className='flex gap-4'>
                  <div className='p-2.5 text-gray-700 '>
                    {file.type.split('/')[0] == 'video' ? (
                      <img src='/icons/video.png' alt='' className='w-10' />
                    ) : (
                      <img src='/icons/mp3.png' alt='' className='w-10' />
                    )}
                  </div>
                  <div className='flex flex-col'>
                    <div className='text-gray-700 font-semibold text-md'>
                      {file.name}
                    </div>
                    <div className='text-gray-500 text-base'>
                      {bytesToMB(file.size)}
                    </div>
                  </div>
                </div>
                <div className='flex'>
                  {progress[index].failed ? (
                    <button
                      type='button'
                      className='-m-1.5 rounded-full bg-gray-300 p-2 text-gray-700'
                      onClick={() => retryUpload(index)}
                    >
                      <span className='sr-only'>Remove Selected File</span>
                      <FontAwesomeIcon
                        icon={faRedo}
                        className='h-6 w-6 text-gray-700'
                      />
                    </button>
                  ) : (
                    <button
                      type='button'
                      className='-m-1.5 rounded-full bg-gray-300 p-2 text-gray-700 cursor-pointer'
                      onClick={() => removeFile(index)}
                    >
                      <span className='sr-only'>Remove Selected File</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </button>
                  )}
                </div>
              </div>
              <div
                className={classNames(
                  'flex items-center gap-x-3 px-2 justify-between overflow-hidden',
                  parseInt(progress[index].percentage, 10) < 1 ? 'h-0' : '',
                )}
              >
                <div className='relative z-10 text-4xl w-full h-2 rounded-xl bg-gray-200'>
                  <span
                    style={{ width: `${progress[index].percentage}%` }}
                    className={classNames(
                      'absolute transition-all duration-150 top-0 bottom-0 rounded-xl left-0 w-0 bg-indigo-500 z-20',
                      progress[index].failed ? 'bg-red-500' : '',
                    )}
                  ></span>
                </div>
                <div className='min-w-[3rem] text-gray-700 text-md font-semibold'>
                  {progress[index].percentage}
                  {'%'}
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* <div className='my-5 md:my-10 text-center flex justify-center  md:justify-end'>
          <button
            type='submit'
            disabled={loading}
            className='py-2.5 px-8 md:px-4 text-lg text-white disabled:bg-indigo-500 bg-indigo-600 rounded-full font-semibold cursor-pointer '
          >
            {loading ? 'Processing' : 'Upload'}
          </button>
        </div> */}
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
