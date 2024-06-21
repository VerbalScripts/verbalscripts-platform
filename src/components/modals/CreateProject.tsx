import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import AddProjectOptions from '../dashboard/AddProjectOptions';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface CreateProjectProps {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}

export default function CreateProject({ open, setOpen }: CreateProjectProps) {
  const cancelButtonRef = useRef(null);

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
          enter='ease-out duration-100'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='h-screen min-w-7xl'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-100'
              enterFrom='opacity-0 -translate-y-28 sm:-translate-y-28 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-100'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 -translate-y-28 sm:-translate-y-28 sm:scale-95'
            >
              <Dialog.Panel className='relative flex justify-center items-center transform overflow-hidden h-screen px-24 py-10  bg-gray-100  shadow-xl transition-all max-w-7xl'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-500'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute right-0 top-0 z-50 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4'>
                    <button
                      type='button'
                      className='relative rounded-full text-gray-500 hover:text-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-200'
                      onClick={() => setOpen(false)}
                    >
                      <span className='absolute -inset-2.5' />
                      <span className='sr-only'>Close panel</span>
                      <XMarkIcon className='h-10 w-10' aria-hidden='true' />
                    </button>
                  </div>
                </Transition.Child>

                <div className='max-auto max-w-4xl'>
                  <div className='mb-5'>
                    <p className='text-4xl text-left font-semibold text-gray-800'>
                      Add Files for Transcription
                    </p>
                    <p className='mt-3 text-md text-left text-gray-700'>
                      Pick an Upload option that best suites your needs.
                    </p>
                  </div>
                  <AddProjectOptions />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
