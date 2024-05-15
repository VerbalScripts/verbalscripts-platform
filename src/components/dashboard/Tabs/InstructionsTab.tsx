/* eslint-disable @typescript-eslint/ban-ts-comment */
import { classNames } from '@/utils/classNames';
import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

interface InstructionsTabProps {
  instructions: string;
  setInstructions: (arg0: string) => void;
  setFiles: (arg0: File[]) => void;
  samples: File[];
}

export default function InstructionsTab({
  instructions,
  setInstructions,
  setFiles,
  samples,
}: InstructionsTabProps) {
  const updateInstructions = (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const content = (event as unknown as HTMLFormElement).target.value;
    setInstructions(content ? content : '');
  };

  const [dragEnter, setDragEnter] = useState(false);

  const prepareFilesForUpload = async (_prepFiles: File[]) => {
    setFiles([...samples, ..._prepFiles]);
  };

  const removeSample = (index: number) => {
    const _prevCopy = [...samples];
    _prevCopy.splice(index, 1);
    setFiles(_prevCopy);
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

  const handleFilesUploadForm = async (
    event: React.FormEvent<HTMLInputElement>,
  ) => {
    const target = event.target as HTMLInputElement & {
      files: FileList;
    };

    if (target.files.length == 0) return;

    await prepareFilesForUpload(Array.from(target.files));
  };

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

  return (
    <section className='flex flex-col gap-10  divide-gray-400'>
      <div className=''>
        <label htmlFor='message' className='flex flex-col leading-6 '>
          <span className='font-semibold capitalize text-lg text-gray-700'>
            Add additional Instructions
          </span>
          <span className='text-md text-gray-600'>
            Please enter special instructions, terms, acronyms, keywords, names
            of places, speaker names, etc.
          </span>
        </label>
        <div className='mt-2.5'>
          <textarea
            name='message'
            id='message'
            rows={4}
            onKeyDown={(event) => updateInstructions(event)}
            defaultValue={instructions}
            className='block w-full rounded-md border-0 px-3.5 py-2 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
          />
        </div>

        <div className='mt-16'>
          <div className='flex flex-col leading-6 mb-10'>
            <span className='font-semibold text-lg text-gray-700'>
              Upload Samples
            </span>
            <span className='text-md text-gray-600'>
              Upload a file sample, if you need custom work to use as a
              guideline.
            </span>
          </div>

          <div className='my-8 space-y-2'>
            {samples.map((sample, index) => (
              <div
                key={sample.size}
                className='flex justify-between space-x-2 items-center border border-gray-300 px-3 py-2 rounded-lg'
              >
                <div className='text-gray-700 break-words'>{sample.name}</div>
                <button onClick={() => removeSample(index)}>
                  <XMarkIcon className='w-8 text-gray-600' />
                </button>
              </div>
            ))}
          </div>
          <label
            // @ts-ignore
            onDrop={dropHandler}
            // @ts-ignore
            onDragEnter={dragEnterHandler}
            // @ts-ignore
            onDragLeave={dragLeaveHandler}
            // @ts-ignore
            onDragOver={dragOverHandler}
            htmlFor='dropzone-file'
            className={classNames(
              'flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600',

              dragEnter ? 'border-indigo-300' : '',
            )}
          >
            <div className='flex flex-col items-center justify-center pt-5 pb-6'>
              <svg
                className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 16'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                />
              </svg>
              <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                <span className='font-semibold'>Click to upload</span> or drag
                and drop
              </p>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id='dropzone-file'
              onChange={handleFilesUploadForm}
              type='file'
              className='hidden'
              multiple
              max={5}
            />
          </label>
        </div>
      </div>
    </section>
  );
}
