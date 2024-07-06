import { Fragment, useEffect, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { hostUrl } from '../../../config';

interface VideoPlayerProps {
  fileId: string;
  open: boolean;
  resetPlayer: (arg0: string) => void;
  setOpen: (arg0: boolean) => void;
}

export default function VideoPlayer({
  open,
  setOpen,
  fileId,
  resetPlayer,
}: VideoPlayerProps) {
  const cancelButtonRef = useRef(null);

  const videoPlayerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (fileId != '') {
      filePreviewBlob();
    }
  }, [fileId]);

  useEffect(() => {
    if (!open) {
      resetPlayer('');
    }
  }, [open]);

  const filePreviewBlob = async () => {
    setTimeout(() => {
      const sourceBlob = `${hostUrl}/files/stream/${fileId}`;

      if (videoPlayerRef.current != null) {
        videoPlayerRef.current.src = sourceBlob;
        videoPlayerRef.current.load(); // To load the new video source
        videoPlayerRef.current.play();
      }
    }, 500);
    // Reset downloading state
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
                    <source src={''} />
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
