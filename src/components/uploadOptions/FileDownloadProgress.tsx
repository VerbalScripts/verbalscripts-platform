import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  CheckBadgeIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import { classNames } from '@/utils/classNames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight, faRedo } from '@fortawesome/free-solid-svg-icons';
import { CloudArrowUpIcon } from '@heroicons/react/16/solid';
import { useRouter } from 'next/navigation';

interface FileDownloadProgressProps {
  source;
  loading;
  open: boolean;
  setOpen?: (arg0: boolean) => void;
  retryUpload: () => void;
}

export default function FileDownloadProgress({
  source,
  loading,
  open,
  setOpen,
  retryUpload,
}: FileDownloadProgressProps) {
  const router = useRouter();

  const cancelButtonRef = useRef(null);

  //   const GoToDashboard = () => {
  //     router.push('/dashboard/pending?new=true');
  //   };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-50'
        initialFocus={cancelButtonRef}
        onClose={() => null}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg py-3 md:py-5  bg-white text-left shadow-xl transition-all sm:my-8 w-[30rem] sm:max-w-lg'>
                <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                  <div className='sm:flex sm:items-center'>
                    <div className='mx-auto flex h-20 w-20 md:h-14 md:w-14 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-12 sm:w-12'>
                      <ExclamationTriangleIcon
                        className='h-16 w-16 md:h-10 md:w-10 text-red-600'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                      <Dialog.Title
                        as='h3'
                        className='text-base font-semibold leading-6 text-gray-900'
                      >
                        Files upload progress
                      </Dialog.Title>
                    </div>
                  </div>
                  <div className='w-full px-3 py-4'>
                    <div className='mb-3 text-gray-400'>
                      Loading file(s) from {source}
                    </div>
                    <div className='h-1.5 w-full bg-pink-100 overflow-hidden'>
                      <div className='download-progress w-full h-full bg-pink-500 download-left-right'></div>
                    </div>
                  </div>
                </div>
                {/* <div className='bg-white px-4 py-5 flex justify-center sm:px-6'>
                  {progress.failed ? (
                    <button
                      type='button'
                      className='-m-1.5 rounded-full bg-gray-300 p-2 text-gray-700'
                      onClick={() => retryUpload()}
                    >
                      <span className='sr-only'>Remove Selected File</span>
                      <FontAwesomeIcon
                        icon={faRedo}
                        className='h-6 w-6 text-gray-700'
                      />
                    </button>
                  ) : progress.isComplete ? (
                    <button
                      type='button'
                      className='-m-1.5 rounded-full bg-indigo-500 text-white font-semibold py-2 px-8 cursor-pointer'
                      onClick={() => GoToDashboard()}
                    >
                      <span className='flex items-center gap-x-2'>
                        Success
                        <FontAwesomeIcon
                          icon={faLongArrowAltRight}
                          className='text-white'
                        />
                        Order File(s)
                      </span>
                    </button>
                  ) : (
                    <span className='text-gray-600 text-md'>
                      {progress.statusText}
                    </span>
                  )}
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
