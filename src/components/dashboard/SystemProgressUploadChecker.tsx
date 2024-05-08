/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { useEffect, useState } from 'react';

import { Player } from '@lottiefiles/react-lottie-player';
import AxiosProxy from '@/utils/AxiosProxy';
import { v4 as uuid } from 'uuid';

interface SystemProgressUploadCheckerProps {
  id: string;
  open: boolean;
  setOpen: (arg0: boolean) => void;
  reload: () => Promise<void>;
}
export default function SystemProgressUploadChecker({
  id,
  reload,
  setOpen,
  open,
}: SystemProgressUploadCheckerProps) {
  const [loading, setLoading] = useState(true);
  const [updateHash, setUpdateHash] = useState('ai');

  const closeToast = async () => {
    setTimeout(async () => {
      setOpen(false);
      await reload();
    }, 3000);
  };

  const httpFileDownloadCheck = async () => {
    try {
      const response = await AxiosProxy.get(
        `/files/ping-cloud-download-status?ids=${id}`,
      );

      if (response.status == 200) {
        if (!response.data.acknowledged) {
          setUpdateHash(uuid());
        } else {
          console.log('complete');
          setLoading(false);
          const idsResponse: { id: string; status: string }[] =
            response.data.fileIds;

          let flag = true;
          idsResponse.forEach((statusOb) => {
            if (statusOb.status != 'complete') {
              flag = false;
            }
          });

          if (flag) {
            // setkeepGoing(false);
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    httpFileDownloadCheck();
  }, [updateHash]);

  useEffect(() => {
    httpFileDownloadCheck();
  }, [id]);

  return (
    <div
      className={classNames(
        'absolute  z-[100]  bottom-5 right-5 rounded-xl min-w-[25rem] border border-gray-200 dark:border-0 px-1',
        open ? 'block toast-render' : 'hidden toast-hide',
      )}
    >
      <Toast className='flex flex-col py-0 px-0 max-w-none'>
        {/* show pending files */}

        <div className='relative flex  justify-between bg-indigo-200 w-full rounded-xl mt-2'>
          <div className='inline-flex h-12 w-[4rem] shrink-0 items-center justify-center rounded-l-xl   bg-indigo-100 text-indigo-500 dark:bg-indigo-900 dark:text-indigo-300'>
            <ArrowUpTrayIcon className='h-5 w-5' />
          </div>
          <Player
            autoplay
            loop={false}
            src='https://lottie.host/db2c8531-c1fd-4b36-b479-8d51a3561de3/3WLdR01a4E.json'
            style={{ width: '180px', height: '250px' }}
          ></Player>

          {/* <Toast.Toggle /> */}
        </div>
      </Toast>
    </div>
  );
}
