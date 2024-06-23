/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

interface ChangeUsernameProps {
  open: boolean;
  setOpen: (arg0: boolean) => void;
  openUpdate: (arg0: boolean) => void;
}
export default function ChangeUsername({
  open,
  setOpen,
  openUpdate,
}: ChangeUsernameProps) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-50'
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
                  <div className='flex flex-col justify-center items-center'>
                    <div className='mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-14 sm:w-14'>
                      <ExclamationTriangleIcon
                        className='h-8 w-8 text-red-600'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='mt-3 text-center '>
                      <Dialog.Title
                        as='h3'
                        className='text-2xl font-semibold leading-6 text-gray-900'
                      >
                        Warning
                      </Dialog.Title>
                      <div className='mt-2'>
                        <p className='text-gray-500'>
                          Are you sure you want to change your account email{' '}
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=' px-4 py-3 flex flex-col gap-y-2 sm:px-6'>
                  <button
                    type='button'
                    onClick={() => openUpdate(true)}
                    className='inline-flex w-full justify-center rounded-xl text-lg focus:ring-4 focus:outline-none focus:ring-red-200 bg-red-600 px-4 py-2  font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'
                  >
                    I understand, let{"'"}s change
                  </button>
                  <button
                    type='button'
                    className='inline-flex w-full justify-center rounded-xl  px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 sm:mt-0 sm:w-auto'
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
