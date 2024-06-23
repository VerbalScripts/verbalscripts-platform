import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { EnvelopeOpenIcon } from '@heroicons/react/24/outline';
import AxiosProxy from '@/utils/AxiosProxy';
import ComponentSpinner from '../ComponentSpinner';

interface ResetAccountPasswordProps {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}

export default function ResetAccountPassword({
  open,
  setOpen,
}: ResetAccountPasswordProps) {
  const cancelButtonRef = useRef(null);

  const [loading, setLoading] = useState<boolean>(false);

  const createFolderHttp = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setLoading(true);
      const response = await AxiosProxy.post('/user/reset-account');
      if (response.status == 201) {
        setOpen(false);
      } else {
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                  <div className='sm:flex flex-col sm:items-center'>
                    <div className=' mb-5 mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:h-20 sm:w-20'>
                      <EnvelopeOpenIcon
                        className='h-10 w-10 text-indigo-500'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='text-center sm:ml-4 sm:mt-0 sm:text-left'>
                      <Dialog.Title
                        as='h3'
                        className='text-2xl font-semibold leading-6 text-gray-700'
                      >
                        Request a Reset
                      </Dialog.Title>
                      <div className='mt-2'></div>
                    </div>
                  </div>
                  <div className='text-center text-gray-600 text-lg sm:ml-4 sm:mt-0 sm:text-center'>
                    If you need to reset your account we will send an email with
                    instructions on how to reset your password.
                  </div>
                </div>
                <div className=' px-4 py-3 flex flex-col gap-y-2 sm:px-6 mb-5'>
                  <button
                    type='button'
                    disabled={loading}
                    className='inline-flex w-full justify-center rounded-xl bg-indigo-500 px-7 py-2.5 text-lg  font-semibold text-white shadow-sm hover:bg-indigo-400 sm:ml-3 sm:w-auto'
                    onClick={() => createFolderHttp()}
                  >
                    {loading ? <ComponentSpinner /> : null}
                    <span>Reset Password</span>
                  </button>
                  <button
                    type='button'
                    disabled={loading}
                    className='mt-3 inline-flex w-full justify-center rounded-xl px-4 py-2.5  font-semibold text-gray-800 hover:bg-gray-100  sm:mt-0 sm:w-auto'
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
