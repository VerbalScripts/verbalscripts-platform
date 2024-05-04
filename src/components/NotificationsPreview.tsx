/* eslint-disable @typescript-eslint/no-unused-vars */
import { classNames } from '@/utils/classNames';
import React from 'react';

interface NotificationPreviewProps {
  open: boolean;
  setOpen: (arg0: boolean) => void;
  notifications: string[];
}

export default function NotificationsPreview({
  open,
  setOpen,
  notifications,
}: NotificationPreviewProps) {
  return (
    <div
      className={classNames(
        'fixed z-[99]  top-0 right-0 bottom-0 left-0',
        open ? '' : 'hidden ',
      )}
      onClick={() => setOpen(false)}
    >
      <div
        className={classNames(
          'fixed  z-[100] top-14 h-auto bg-red-100  right-5 ',
          open ? 'block toast-render' : 'hidden toast-hide',
        )}
      >
        <div className='flex  items-stretch justify-center text-center md:items-center rounded-xl  border border-gray-200 dark:border-0'>
          <div
            className='max-w-sm text-base list-none bg-white  divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 '
            id='notification-dropdown'
          >
            <div className='block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300'>
              Notifications
            </div>
            <div>
              <a
                href='#'
                className='flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600'
              >
                <div className='flex-shrink-0'>
                  <img
                    className='w-11 h-11 rounded-full'
                    src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png'
                    alt='Bonnie Green avatar'
                  />
                  <div className='flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark:border-gray-700'>
                    <svg
                      aria-hidden='true'
                      className='w-3 h-3 text-white'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z'></path>
                      <path d='M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z'></path>
                    </svg>
                  </div>
                </div>
                <div className='pl-3 w-full'>
                  <div className='text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400'>
                    New message from
                    <span className='font-semibold text-gray-900 dark:text-white'>
                      Bonnie Green
                    </span>
                    {' "Hey, what\'s up? All set for the presentation?"'}
                  </div>
                  <div className='text-xs font-medium text-primary-600 dark:text-primary-500'>
                    a few moments ago
                  </div>
                </div>
              </a>
              <a
                href='#'
                className='flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600'
              >
                <div className='flex-shrink-0'>
                  <img
                    className='w-11 h-11 rounded-full'
                    src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png'
                    alt='Jese Leos avatar'
                  />
                  <div className='flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-900 rounded-full border border-white dark:border-gray-700'>
                    <svg
                      aria-hidden='true'
                      className='w-3 h-3 text-white'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z'></path>
                    </svg>
                  </div>
                </div>
                <div className='pl-3 w-full'>
                  <div className='text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400'>
                    <span className='font-semibold text-gray-900 dark:text-white'>
                      Jese leos
                    </span>
                    and
                    <span className='font-medium text-gray-900 dark:text-white'>
                      5 others
                    </span>
                    started following you.
                  </div>
                  <div className='text-xs font-medium text-primary-600 dark:text-primary-500'>
                    10 minutes ago
                  </div>
                </div>
              </a>

              <a
                href='#'
                className='flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600'
              >
                <div className='flex-shrink-0'>
                  <img
                    className='w-11 h-11 rounded-full'
                    src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png'
                    alt='Roberta Casas image'
                  />
                  <div className='flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-green-400 rounded-full border border-white dark:border-gray-700'>
                    <svg
                      aria-hidden='true'
                      className='w-3 h-3 text-white'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className='pl-3 w-full'>
                  <div className='text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400'>
                    <span className='font-semibold text-gray-900 dark:text-white'>
                      Leslie Livingston
                    </span>
                    mentioned you in a comment:
                    <span className='font-medium text-primary-600 dark:text-primary-500'>
                      @bonnie.green
                    </span>
                    what do you say?
                  </div>
                  <div className='text-xs font-medium text-primary-600 dark:text-primary-500'>
                    1 hour ago
                  </div>
                </div>
              </a>
              <a
                href='#'
                className='flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600'
              >
                <div className='flex-shrink-0'>
                  <img
                    className='w-11 h-11 rounded-full'
                    src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png'
                    alt='Robert image'
                  />
                  <div className='flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-purple-500 rounded-full border border-white dark:border-gray-700'>
                    <svg
                      aria-hidden='true'
                      className='w-3 h-3 text-white'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z'></path>
                    </svg>
                  </div>
                </div>
                <div className='pl-3 w-full'>
                  <div className='text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400'>
                    <span className='font-semibold text-gray-900 dark:text-white'>
                      Robert Brown
                    </span>
                    posted a new video: Glassmorphism - learn how to implement
                    the new design trend.
                  </div>
                  <div className='text-xs font-medium text-primary-600 dark:text-primary-500'>
                    3 hours ago
                  </div>
                </div>
              </a>
            </div>
            <a
              href='#'
              className='block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline'
            >
              <div className='inline-flex items-center'>
                <svg
                  aria-hidden='true'
                  className='mr-2 w-4 h-4 text-gray-500 dark:text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M10 12a2 2 0 100-4 2 2 0 000 4z'></path>
                  <path
                    fill-rule='evenodd'
                    d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                View all
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
