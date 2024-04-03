import { bytesToMB } from '@/utils/bytesToMb';
import { classNames } from '@/utils/classNames';
import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { DragEvent, useState } from 'react';
import { ArrowRedoCircle } from 'react-ionicons';

export default function LocalFileUpload() {
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

  // function updateImageDisplay() {
  //   const zip = new JSZip();
  //   const files = Array.from(input.files);

  //   files.forEach((file) => {
  //     zip.file(file.webkitRelativePath, file);
  //     console.log(file.webkitRelativePath);
  //   });
  //   zip
  //     .generateAsync({ type: 'blob' }, function updateCallback(metadata) {
  //       console.log('progression: ' + metadata.percent.toFixed(2) + ' %');
  //       if (metadata.currentFile) {
  //         console.log('current file = ' + metadata.currentFile);
  //       }
  //     })
  //     .then(function (content) {
  //       console.log(content);
  //       const formData = new FormData();
  //       formData.append('folderzip', content);
  //       fetch('https://codesandbox.io/s/still-morning-udjvz', {
  //         method: 'POST',
  //         body: formData,
  //       })
  //         .then((response) => {
  //           console.log(response);
  //         })
  //         .catch((e) => console.log(e));
  //     });
  // }

  function uploadFiles(files: File[]) {
    for (let i = 0; i < files.length; i++) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const fileExtension = files[i].name
        .substring(files[i].name.lastIndexOf('.'))
        .toLowerCase();

      uploadFile(files[i], i);
      // if (allowedExtensions.includes(fileExtension)) {
      // } else {
      //   alert('Invalid file type: ' + fileExtension);
      // }
    }
  }

  const uploadFile = (file: File, index: number) => {
    const formData = new FormData();
    formData.append('folderzip', file);
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', function (event) {
      console.log(event.lengthComputable);

      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        console.log(percent);
        // progressBar.style.width = percent + '%';
        // progressBar.innerHTML = percent + '%';
        setProgress((prev: ProgressTracker[]) => {
          const _updated = [...prev];
          _updated[index].percentage = percent.toString();
          return _updated;
        });
      }
    });

    xhr.addEventListener('load', function () {
      setProgress((prev: ProgressTracker[]) => {
        const _updated = [...prev];
        _updated[index].isComplete = true;
        return _updated;
      });
    });

    xhr.addEventListener('error', function () {
      setProgress((prev: ProgressTracker[]) => {
        const _updated = [...prev];
        _updated[index].isComplete = true;
        _updated[index].failed = true;
        _updated[index].error = 'Upload Failed';
        return _updated;
      });
    });

    console.log('uploading');
    xhr.open(
      'POST',
      'https://cb4bad80859144cda1497e4e545cf492.api.mockbin.io/',
      true,
    );
    xhr.send(formData);
  };

  interface ProgressTracker {
    percentage: string;
    isComplete: boolean;
    failed: boolean;
    error: string;
  }

  const [files, setFiles] = useState<Array<File>>([]);
  const [progress, setProgress] = useState<ProgressTracker[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [dragEnter, setDragEnter] = useState<boolean>(false);

  const FilesUploadForm = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement & {
      files: FileList;
    };

    if (target.files.length == 0) return;

    prepareFilesForUpload(Array.from(target.files));
  };

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
          { percentage: '0', isComplete: false, error: '', failed: false },
        ];
      }),
    );
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log('senfing ...');
    if (files.length == 0) return false;

    console.log(files);

    setLoading(true);
    uploadFiles(files);
  };

  const removeFile = (index: number) => {
    setProgress((prev: ProgressTracker[]) => {
      const _updated = [...prev];
      _updated.splice(index, 1);
      return _updated;
    });
    setFiles((prev: File[]) => {
      const _updated = [...prev];
      _updated.splice(index, 1);
      return _updated;
    });
  };

  const retryUpload = (index: number) => {
    const file: File = files[index];
    uploadFile(file, index);
    // reset progress
    setProgress((prev: ProgressTracker[]) => {
      const _updated = [...prev];
      _updated[index] = {
        percentage: '0',
        isComplete: false,
        error: '',
        failed: false,
      };
      return _updated;
    });
  };

  function dropHandler(ev: DragEvent) {
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

    console.log(_dataFiles);
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
    console.log('File(s) in drop zone');
    setDragEnter(true);
  }

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
      <form onSubmit={handleSubmit}>
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
                    onChange={FilesUploadForm}
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

        <div className='flex flex-col gap-y-2 mt-5'>
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
                      className='-m-1.5 rounded-md p-2.5 text-gray-700'
                      onClick={() => retryUpload(index)}
                    >
                      <span className='sr-only'>Remove Selected File</span>
                      <ArrowRedoCircle color={'#000'} height={10} width={10} />
                    </button>
                  ) : (
                    <button
                      type='button'
                      className='-m-1.5 rounded-md p-2.5 text-gray-700 cursor-pointer'
                      onClick={() => removeFile(index)}
                    >
                      <span className='sr-only'>Remove Selected File</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </button>
                  )}
                </div>
              </div>
              {/* progress  bar */}
              {/* progress label */}
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
        </div>

        <div className='my-5 md:my-10 text-center flex justify-center  md:justify-end'>
          <button
            type='submit'
            disabled={loading}
            className='py-2.5 px-8 md:px-4 text-lg text-white disabled:bg-indigo-500 bg-indigo-600 rounded-full font-semibold cursor-pointer '
          >
            {loading ? 'Processing' : 'Upload'}
          </button>
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
