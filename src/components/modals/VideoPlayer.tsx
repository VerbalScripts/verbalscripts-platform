import { Fragment, useEffect, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import AxiosProxy from '@/utils/AxiosProxy';
import axios, { CancelTokenSource } from 'axios';

interface VideoPlayerProps {
  fileId: string;
  open: boolean;
  resetPlayer: (arg0: string) => void;
  setOpen: (arg0: boolean) => void;
}

let cancelTokenSource: CancelTokenSource | undefined;

export default function VideoPlayer({
  open,
  setOpen,
  fileId,
  resetPlayer,
}: VideoPlayerProps) {
  const cancelButtonRef = useRef(null);

  const videoPlayerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (fileId) {
      filePreviewBlob();
    }
  }, [fileId]);

  useEffect(() => {
    if (!open) {
      resetPlayer('');
    }
  }, [open]);

  const filePreviewBlob = async () => {
    try {
      const downloadUrl = `/files/download?files=${fileId}`;
      cancelTokenSource = axios.CancelToken.source();

      const response = await AxiosProxy({
        url: downloadUrl, // Adjust the URL according to your setup
        method: 'GET',
        responseType: 'blob',
        cancelToken: cancelTokenSource.token,
      });

      //   const filename = response.headers['content-disposition']
      //     .split('filename=')[1]
      //     .split(';')[0];

      const sourceBlob = window.URL.createObjectURL(new Blob([response.data]));

      if (videoPlayerRef.current != null) {
        videoPlayerRef.current.src = sourceBlob;
        videoPlayerRef.current.play(); // To load the new video source
      }

      // Cleanup
      // window.URL.revokeObjectURL(url);

      // Reset downloading state
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
      } else {
        console.error('Error downloading file:', error);
      }
    }
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-[80]'
        initialFocus={cancelButtonRef}
        onClose={setOpen}
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
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-gray-800  shadow-xl transition-all max-w-3xl'>
                <div className=''>
                  <video
                    className='w-full'
                    ref={videoPlayerRef}
                    autoPlay
                    controls
                  >
                    <source src={''} type='video/mp4' />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
