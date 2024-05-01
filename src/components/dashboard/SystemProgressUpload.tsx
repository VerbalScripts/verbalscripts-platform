import {
  filesArr,
  progressTracker,
  showProgressBar,
  uploadProgressStats,
  currentUploadFileIndex,
} from '@/store/features/fileUpload';
import { classNames } from '@/utils/classNames';
import { ArrowDownCircleIcon } from '@heroicons/react/20/solid';
import {
  ArrowUpCircleIcon,
  ArrowUpOnSquareIcon,
  ArrowUpTrayIcon,
  CheckBadgeIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { Toast } from 'flowbite-react';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';

export default function SystemProgressUpload() {
  const showToast = useRecoilValue(showProgressBar);
  const _progressTracker = useRecoilValue(progressTracker);
  const uploadStats = useRecoilValue(uploadProgressStats);
  const filesToUpload = useRecoilValue(filesArr);
  const _currentIndex = useRecoilValue(currentUploadFileIndex);

  const [open, setOpen] = useState(false);

  return (
    <div className='absolute  z-[100]  bottom-5 right-5 rounded-xl min-w-[70rem] border border-gray-200 dark:border-0 px-1'>
      {showToast ? (
        <Toast className='flex flex-col py-0 px-0'>
          {/* show pending files */}
          <div
            className={classNames(
              'flex flex-col gap-y-2',
              !open ? 'h-0 overflow-y-hidden' : '',
            )}
          >
            {filesToUpload.map((file, index) => (
              <div
                key={file.size}
                className={classNames(
                  'px-2 py-2',
                  index == filesToUpload.length - 1
                    ? ''
                    : 'border-b border-gray-200 dark:border-gray-900',
                )}
              >
                <div className={classNames('flex items-start')}>
                  <div className='inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg  bg-cyan-100 text-cyan-500 dark:bg-cyan-900 dark:text-cyan-300'>
                    {_progressTracker[index].isComplete ? (
                      <CheckBadgeIcon className='h-5 w-5 text-indigo-500' />
                    ) : _progressTracker[index].failed ? (
                      <ExclamationCircleIcon className='h-5 w-5 text-red-200' />
                    ) : (
                      <ArrowUpOnSquareIcon className='h-5 w-5 text-indigo-500' />
                    )}
                  </div>
                  <div className='ml-3  flex flex-col justify-between '>
                    <div className='mb-1 text-gray-700 dark:text-white text-sm font-semibold'>
                      {file.name}
                    </div>
                    <div className='flex gap-x-2'>
                      <div className='bg-gray-200 text-gray-600 dark:text-gray-700 px-2 text-sm py-0.5 rounded-xl uppercase font-semibold'>
                        {file.type.split('/')[1]}
                      </div>
                      <div className='text-gray-600 dark:text-gray-100 text-sm'>
                        {_progressTracker[index].statusText}
                        {'.....'}
                      </div>
                    </div>
                  </div>
                  {/* <Toast.Toggle /> */}
                </div>
                <div
                  className={classNames(
                    'flex items-center gap-x-3 px-2 justify-between overflow-hidden',
                    parseInt(_progressTracker[index].percentage, 10) < 1
                      ? 'h-0'
                      : '',
                  )}
                >
                  <div className='relative z-10 text-4xl w-full h-2 rounded-xl bg-gray-200'>
                    {_progressTracker[index].isComplete ? (
                      <span className='text-sm text-gray-600 dark:text-white'>
                        Uploaded
                      </span>
                    ) : (
                      <span
                        style={{
                          width: `${_progressTracker[index].percentage}%`,
                        }}
                        className={classNames(
                          'absolute transition-all duration-150 top-0 bottom-0 rounded-xl left-0 w-0 bg-indigo-500 z-20',
                          _progressTracker[index].failed ? 'bg-red-500' : '',
                        )}
                      ></span>
                    )}
                  </div>
                  <div className='min-w-[3rem] text-gray-700 text-sm font-semibold'>
                    {_progressTracker[index].percentage}
                    {'%'}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='relative flex  justify-between bg-indigo-200 w-full rounded-xl mt-2'>
            <div className='inline-flex h-12 w-[4rem] shrink-0 items-center justify-center rounded-l-xl   bg-indigo-100 text-indigo-500 dark:bg-indigo-900 dark:text-indigo-300'>
              <ArrowUpTrayIcon className='h-5 w-5' />
            </div>
            <div className='w-[100%] z-[20] relative'>
              <span
                style={{
                  width: `${_progressTracker[_currentIndex].percentage}%`,
                }}
                className={classNames(
                  'absolute transition-all z-[10]  duration-150 top-0 bottom-0 rounded-r-xl left-0 w-0 bg-indigo-500',
                )}
              ></span>
              <div className='relative z-[15] text-gray-900 font-semibold ml-2 mt-[0.8rem] dark:text-white'>
                Uploading {uploadStats.complete} out of {uploadStats.total}
              </div>
              <div className='absolute right-5 top-2 z-[15]'>
                <button
                  onClick={() => setOpen(!open)}
                  className='flex itens-center justify-center h-8 w-8 rounded-full'
                >
                  {!open ? (
                    <ArrowUpCircleIcon className='h-8 w-8 text-gray-700' />
                  ) : (
                    <ArrowDownCircleIcon className='h-8 w-8  text-gray-700' />
                  )}
                </button>
              </div>
            </div>
            {/* <Toast.Toggle /> */}
          </div>
        </Toast>
      ) : null}
    </div>
  );
}
