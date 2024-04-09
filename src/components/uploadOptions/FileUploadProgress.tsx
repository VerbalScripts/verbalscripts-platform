import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { classNames } from '@/utils/classNames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

interface FileUploadProgressProps {
  open: boolean;
  setOpen?: (arg0: boolean) => void;
  retryUpload: () => void;
  progress: ProgressTracker;
}

export default function FileUploadProgress({
  open,
  retryUpload,
  progress,
}: FileUploadProgressProps) {
  const cancelButtonRef = useRef(null);

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
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                  <div className='sm:flex sm:items-center'>
                    <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
                      <ExclamationTriangleIcon
                        className='h-6 w-6 text-red-600'
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
                  <div
                    className={classNames(
                      'mt-3 w-full flex items-center gap-x-3 px-2 justify-between',
                    )}
                  >
                    <div className='relative z-10 text-4xl w-full h-2 rounded-xl bg-gray-200'>
                      <span
                        style={{
                          width: `${progress.percentage}%`,
                        }}
                        className={classNames(
                          'absolute transition-all duration-150 top-0 bottom-0 rounded-xl left-0 w-0 bg-indigo-500 z-20',
                          progress.failed ? 'bg-red-500' : '',
                        )}
                      ></span>
                    </div>
                    <div className='min-w-[3rem] text-gray-700 text-md font-semibold'>
                      {progress.percentage}
                      {'%'}
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 flex justify-center sm:px-6'>
                  {
                    progress.failed ? (
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
                    ) : null
                    // <button
                    //   type='button'
                    //   className='-m-1.5 rounded-full bg-gray-300 p-2 text-gray-700 cursor-pointer'
                    //   onClick={() => removeFile(index)}
                    // >
                    //   <span className='sr-only'>Remove Selected File</span>
                    //   <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    // </button>
                  }
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
