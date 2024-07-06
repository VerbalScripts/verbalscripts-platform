/* eslint-disable @typescript-eslint/no-unused-vars */
import AxiosProxy from '@/utils/AxiosProxy';
import { classNames } from '@/utils/classNames';
import {
  ArrowLongRightIcon,
  CheckCircleIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';
import { Player } from '@lottiefiles/react-lottie-player';
import { Button } from 'flowbite-react';
import moment from 'moment';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ComponentSpinner from './ComponentSpinner';
import { CogIcon } from '@heroicons/react/20/solid';

interface NotificationPreviewProps {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}

export default function NotificationsPreview({
  open,
  setOpen,
}: NotificationPreviewProps) {
  const [notifications, setNotifications] = useState<UserNotification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchNotifications = async () => {
    try {
      const response = await AxiosProxy.get('/notification', {
        headers: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
          Expires: '0',
        },
      });

      if (response.status == 200) {
        setNotifications(response.data.results || []);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const markAllAsRead = async () => {
    try {
      const response = await AxiosProxy.patch('/notification/mark-all-read');

      if (response.status == 201) {
        setNotifications(response.data.results || []);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleFeeds = async () => {
    return Promise.all([markAllAsRead(), fetchNotifications()]);
  };

  useEffect(() => {
    if (open) {
      handleFeeds();
    } else {
      setLoading(false);
    }
  }, [open]);

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
          'fixed  z-[100] top-14 h-auto  right-16 ',
          open ? 'block toast-render' : 'hidden toast-hide',
        )}
      >
        <div className='flex  items-stretch justify-center text-center md:items-center bg-white dark:bg-zinc-700 rounded-xl border border-gray-200 dark:border-0'>
          <div
            className='max-w-sm lg:max-w-md text-base list-none  divide-y divide-gray-100 shadow-lg dark:divide-gray-600  '
            id='notification-dropdown'
          >
            <div className='py-2 text-left px-4 flex justify-between items-center'>
              <span className='text-lg font-bold  text-gray-700   dark:text-white'>
                Notifications
              </span>

              <Link href={'/dashboard/settings#manage-notifications'}>
                <CogIcon className='text-gray-700 dark:text-white w-6 h-6' />
              </Link>
            </div>

            <div className='min-w-md max-h-[20rem] h-[20rem]  overflow-y-auto'>
              {notifications.length == 0 && !loading ? (
                <div className='h-full w-full flex flex-col items-center justify-center px-10'>
                  {/* add lottie animation here */}
                  <Player
                    autoplay
                    loop={true}
                    src='https://lottie.host/0a51c829-7800-4e7e-9e93-61768c37479e/VKuYZcqOtG.json'
                    style={{ width: '180px', height: '200px' }}
                  ></Player>

                  <div className='text-gray-600 font-semibold dark:text-white text-md'>
                    No new Notifications
                  </div>
                </div>
              ) : notifications.length > 0 && !loading ? (
                notifications.map((notification) => (
                  <a
                    key={notification.id}
                    href='#'
                    className='flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600'
                  >
                    <div className='flex-shrink-0'>
                      <div className='flex justify-center items-center w-10 h-10 rounded-full bg-indigo-100 dark:bg-gray-400'>
                        <CheckCircleIcon className='text-orange-500 w-6 h-6' />
                      </div>
                    </div>
                    <div className='pl-3 w-full text-left'>
                      <div className='font-semibold text-md text-gray-600 dark:text-white'>
                        {notification.title}
                      </div>
                      {/* <div className='mb-2 text-xs font-medium text-indigo-500 dark:text-indigo-300 dark:text-primary-500'>
                        {moment(notification.createdAt).fromNow()}
                      </div> */}
                      <div className='text-gray-600 dark:text-gray-300 font-normal text-sm mb-1.'>
                        {notification.content}
                      </div>
                    </div>
                  </a>
                ))
              ) : (
                <div className='h-full min-w-md flex items-center justify-center'>
                  <ComponentSpinner size='md' />
                </div>
              )}
            </div>
            <div className='flex items-center justify-end py-2 px-4 '>
              <Link
                href='/dashboard/notifications'
                className='flex items-center space-x-2 font-semibold py-2 px-2 bg-indigo-500 rounded-xl'
              >
                <span className='text-white'>View all</span>
                <ArrowLongRightIcon className='w-5 text-white' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
