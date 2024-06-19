'use client';

import React, { useEffect, useState } from 'react';

import AxiosProxy from '@/utils/AxiosProxy';
import { Player } from '@lottiefiles/react-lottie-player';
import moment from 'moment';

// export const metadata: Metadata = {
//   title: 'VerbalScripts | Notications',
//   description:
//     'VerbalScripts offers fast, affordable, and highly accurate human transcription, translation, data annotation, and AI dataset services customized for your needs.',
// };

export default function Page() {
  const [notifications, setNotifications] = useState<UserNotification[]>([]);

  const fetchNotifications = async () => {
    try {
      const response = await AxiosProxy.get(
        '/notification?read=false&content=true',
      );

      if (response.status == 200) {
        setNotifications(response.data.results || []);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className='min-h-screen'>
      <title>VerbalScripts | Notifications</title>
      <div className='py-3 px-6 md:px-24 '>
        <div className='mb-10 text-gray-800 text-4xl md:text-5xl font-bold dark:text-white'>
          Your Notifications
        </div>

        {notifications.length == 0 ? (
          <div className='h-full w-full flex flex-col items-center justify-center px-10'>
            {/* add lottie animation here */}
            <Player
              autoplay
              loop={false}
              src='https://lottie.host/0a51c829-7800-4e7e-9e93-61768c37479e/VKuYZcqOtG.json'
              style={{ width: '180px', height: '200px' }}
            ></Player>

            <div className='text-gray-600 font-semibold dark:text-white text-md'>
              No new Notifications
            </div>
          </div>
        ) : (
          notifications.map((notification) => (
            <a
              key={notification.id}
              href='#'
              className='flex py-3 px-4 border-b  dark:border-gray-600'
            >
              <div className='flex-shrink-0'></div>
              <div className='pl-3 w-full text-left'>
                <div className='font-semibold text-lg text-gray-600 dark:text-white'>
                  {notification.title}
                </div>
                <div className='mb-2 text-xs font-medium text-orange-500 dark:text-indigo-300 dark:text-primary-500'>
                  {moment(notification.createdAt).fromNow()}
                </div>
                <div className='text-gray-600 dark:text-gray-300  text-md mb-1.'>
                  {notification.content}
                </div>
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
}
