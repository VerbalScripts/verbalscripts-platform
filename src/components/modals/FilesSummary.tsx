/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
// import AxiosProxy from '@/utils/AxiosProxy';
import {
  CalendarDaysIcon,
  ClockIcon,
  DocumentIcon,
  HashtagIcon,
  TagIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import moment from 'moment';

interface FilesSummaryProps {
  open: boolean;
  file: InprogressOrder;
  setOpen: (arg0: boolean) => void;
}

export default function FilesSummary({
  open,
  setOpen,
  file,
}: FilesSummaryProps) {
  // const cancelButtonRef = useRef(null);

  useEffect(() => {
    console.log(file);
    console.log(' open ', open);
  }, [file]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full '>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-50 sm:duration-50'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-50 sm:duration-50'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto relative w-screen  max-w-md'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4'>
                      <button
                        type='button'
                        className='relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                        onClick={() => setOpen(false)}
                      >
                        <span className='absolute -inset-2.5' />
                        <span className='sr-only'>Close panel</span>
                        <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className='flex h-full flex-col overflow-y-scroll rounded-xl bg-white py-14 shadow-xl'>
                    <div className='px-4 sm:px-6'>
                      <Dialog.Title className='text-xl font-semibold leading-6 text-gray-700'>
                        Order Summary
                      </Dialog.Title>
                    </div>
                    <div className='mt-4 relative flex-1 px-4 sm:px-6'>
                      {file ? (
                        <div className='flex flex-col gap-y-3'>
                          <div className='flex items-center gap-x-5 justify-between'>
                            <div className='flex gap-x-3 items-center'>
                              <ClockIcon className='text-gray-600 h-5 w-5' />
                              <span className='text-gray-600'>Status</span>
                            </div>

                            <div className='text-gray-600'>
                              {file.orderStatus}
                            </div>
                          </div>

                          <div className='flex items-center gap-x-5 justify-between'>
                            <div className='flex gap-x-3 '>
                              <HashtagIcon className='text-gray-600 h-5 w-5' />
                              <span className='text-gray-600'>Order Date</span>
                            </div>

                            <div className='text-gray-600'>
                              {moment(file.createdAt).fromNow()}
                            </div>
                          </div>

                          <div className='flex items-center gap-x-5 justify-between'>
                            <div className='flex gap-x-3'>
                              <CalendarDaysIcon className='text-gray-600 h-5 w-5' />
                              <span className='text-gray-600'>Due date</span>
                            </div>

                            <div className='text-gray-600'>{'----'}</div>
                          </div>

                          <div className='flex items-center gap-x-5 justify-between'>
                            <div className='flex gap-x-3'>
                              <UsersIcon className='text-gray-600 h-5 w-5' />
                              <span className='text-gray-600'>Assignee</span>
                            </div>

                            <div className='text-gray-600'>
                              {file.orderStatus}
                            </div>
                          </div>

                          <div className='flex items-center gap-x-5 justify-between'>
                            <div className='flex gap-x-3'>
                              <TagIcon className='text-gray-600 h-5 w-5' />
                              <span className='text-gray-600'>Tags</span>
                            </div>

                            <div className='text-gray-600'>
                              {file.orderStatus}
                            </div>
                          </div>

                          <div className=''>
                            <div className='flex gap-x-3'>
                              <TagIcon className='text-gray-600 h-5 w-5' />
                              <span className='text-gray-600'>
                                Instructions
                              </span>
                            </div>

                            <div className='mt-2 text-gray-600 border border-gray-300 px-3 py-2 rounded-xl'>
                              {file.configuration.instructions}
                            </div>
                          </div>

                          <div className=''>
                            <div className='flex gap-x-3'>
                              <TagIcon className='text-gray-600 h-5 w-5' />
                              <span className='text-gray-600'>Samples</span>
                            </div>

                            <div className='mt-2 text-gray-600  px-3 py-2 rounded-xl'>
                              {file.configuration.samples.length > 0 ? (
                                'samples'
                              ) : (
                                <span className=''>No samples</span>
                              )}
                            </div>
                          </div>

                          <div className=''>
                            <div className='flex gap-x-3 border-b border-gray-300'>
                              <DocumentIcon className='text-gray-600 h-5 w-5' />
                              <span className='text-gray-600'>Files</span>
                            </div>

                            <div className='mt-2 text-gray-600  px-3 py-2 rounded-xl'>
                              <div className='grid justify-evenly grid-cols-2 gap-4'>
                                {file.files.map((file_order: any) => (
                                  <div key={file_order.id}>
                                    <div className='border rounded-xl border-gray-300 px-2 py-2 h-20 flex items-center justify-center'>
                                      {file_order.duration ? (
                                        file_order.mimetype.split('/')[0] ==
                                        'video' ? (
                                          <img
                                            src='/icons/video.png'
                                            className='h-7 w-7'
                                            alt=''
                                          />
                                        ) : (
                                          <img
                                            src='/icons/mp3.png'
                                            className='h-7 w-7'
                                            alt=''
                                          />
                                        )
                                      ) : (
                                        <DocumentIcon className='text-gray-400 h-8 w-8' />
                                      )}
                                    </div>
                                    <div className='text-gray-600 text-sm'>
                                      {file_order.label}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <p className='mt-10 text-center text-sm text-gray-500'>
                            Not a member?{' '}
                            <a
                              href='#'
                              className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
                            >
                              Start a 14 day free trial
                            </a>
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
