import React, { useEffect, useState, useRef } from 'react';
import { BellAlertIcon } from '@heroicons/react/24/outline';
import AxiosProxy from '@/utils/AxiosProxy';
import { classNames } from '@/utils/classNames';

export default function BellIconWrapper() {
  const [showNote, setshowNote] = useState(false);
  const [Isnote, setIsnote] = useState(false);
  const audioPlayer = useRef<HTMLAudioElement | null>(null);

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
  };

  const closeToast = () => {
    setTimeout(() => {
      setshowNote(false);
    }, 7000);
  };

  useEffect(() => {
    if (Isnote) {
      console.log('show toast ...');
      setshowNote(true);
      if (audioPlayer.current != null) {
        audioPlayer.current.volume = 0.2;
        audioPlayer.current.play();
      }
      closeToast();
    }
  }, [Isnote]);

  useEffect(() => {
    setTimeout(() => {
      httpNotifications();
    }, 5000);
  }, []);

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
          'absolute  pointer-events-none top-12  right-0 transition-all rounded-xl bg-blue-500 text-gray-50 w-[10rem] p-1 leading-6',
          showNote ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        You have new notifications.
      </div>
    </div>
  );
}
