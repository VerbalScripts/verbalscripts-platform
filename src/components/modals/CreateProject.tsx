import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import AddProjectOptions from '../dashboard/AddProjectOptions';

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
          <div className='flex min-h-full items-end justify-center p-4  sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden px-24 py-10 rounded-lg bg-gray-100  shadow-xl transition-all max-w-3xl'>
                <div className=''>
                  <div className='mb-2'>
                    <p className='text-2xl text-left font-semibold text-gray-800'>
                      Add Files for Transcription
                    </p>
                    <p className='mt-1 text-md text-left text-gray-700'>
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
