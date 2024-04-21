import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
// import AxiosProxy from '@/utils/AxiosProxy';
import { XMarkIcon } from '@heroicons/react/24/outline';
import TranscriptionOptions from '../dashboard/TranscriptionOptions';

interface RemoveFilesProps {
  open: boolean;
  files?: string[];
  reload?: () => Promise<void>;
  setOpen: (arg0: boolean) => void;
}

export default function OrderNowModal({ open, setOpen }: RemoveFilesProps) {
  //   const cancelButtonRef = useRef(null);

  //   const [loading, setLoading] = useState<boolean>(false);

  //   const createFolderHttp = async () => {
  //     try {
  //       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //       // @ts-ignore
  //       setLoading(true);
  //       const response = await AxiosProxy.post('/files/delete', {
  //         files,
  //       });
  //       if (response.status == 200) {
  //         console.log(response.data);
  //         await reload();
  //         setOpen(false);
  //       } else {
  //         console.log('success');
  //         console.log(response.data);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-[60]' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-100 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full '>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-300 sm:duration-500'
                enterFrom='translate-y-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-300 sm:duration-500'
                leaveFrom='translate-x-0'
                leaveTo='translate-y-full'
              >
                <Dialog.Panel className='pointer-events-auto relative w-screen '>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute right-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4'>
                      <button
                        type='button'
                        className='relative rounded-md text-gray-500 hover:text-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-200'
                        onClick={() => setOpen(false)}
                      >
                        <span className='absolute -inset-2.5' />
                        <span className='sr-only'>Close panel</span>
                        <XMarkIcon className='h-10 w-10' aria-hidden='true' />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className='flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl'>
                    <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                      <TranscriptionOptions />
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
