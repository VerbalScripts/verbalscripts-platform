import React, { useEffect, useState, useRef } from 'react';
import { BellAlertIcon } from '@heroicons/react/24/outline';
import AxiosProxy from '@/utils/AxiosProxy';
import { classNames } from '@/utils/classNames';

export default function BellIconWrapper() {
  const [showNote, setshowNote] = useState(false);
  const [Isnote, setIsnote] = useState(false);
  const audioPlayer = useRef<HTMLAudioElement | null>(null);
  const [loading, setLoading] = useState(true)

  const httpNotifications = async () => {
    try {
      const response = await AxiosProxy.get(
        '/notification?read=false&content=true',
      );

      if (response.status == 200) {
        console.log('called it tracing ... ');
        setIsnote(true);
      }
    } catch (err) {
      console.log(err);
    }
    finally {
      setLoading(false)
    }
  };

  const closeToast = () => {
    setTimeout(() => {
      setshowNote(false);
    }, 5000);
  };

  useEffect(() => {
    if (Isnote) {
      setshowNote(true);
      if (audioPlayer.current != null) {
        audioPlayer.current.volume = 0.2;
        audioPlayer.current.play();
      }
      closeToast();
    }
  }, [Isnote]);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        httpNotifications();
      }, 5000);
    }
  }, [loading]);

  return (
    <div className='relative z-10'>
      <audio src={'/audio/new_notifications.mp3'} ref={audioPlayer}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <div>
        <div className=''>
          <span
            className={classNames(
              'absolute right-0     transition-all -top-2 bg-red-300 h-4 w-4 rounded-full ',
              Isnote ? 'visible opacity-100 ' : 'opacity-0 invisible',
            )}
          ></span>
          <BellAlertIcon
            className='h-6 w-6 text-gray-700 dark:text-white'
            aria-hidden='true'
          />
        </div>
      </div>
      <div
        className={classNames(
          'absolute  pointer-events-none top-12 text-left  -right-4 transition-all rounded-lg bg-blue-500  w-[15rem] py-1.5 leading-6 px-3',
          showNote ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <span className='absolute w-7 h-7 rotate-45 -z-[1] right-4 -top-2 bg-blue-500'></span>
        <div className='text-gray-50 font-bold'>New Notifications</div>
        <div className='text-gray-200'>You have new notifications.</div>
      </div>
    </div>
  );
}
