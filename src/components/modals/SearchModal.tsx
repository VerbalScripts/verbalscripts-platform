import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
// import AxiosProxy from '@/utils/AxiosProxy';
import PageSearch from '../PageSearch';

interface SearchModalProps {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}

export default function SearchModal({ open, setOpen }: SearchModalProps) {
  //   const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-[60]' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-50'
          enterFrom='opacity-0'
          enterTo='opacity-50'
          leave='ease-in-out duration-50'
          leaveFrom='opacity-50'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-orange-50 pointer-events-nonepointer-events-none bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className=' fixed inset-y-0 right-0 flex w-full '>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-100 sm:duration-100'
                enterFrom='translate-y-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-100 sm:duration-100'
                leaveFrom='translate-x-0'
                leaveTo='translate-y-full'
              >
                <Dialog.Panel className='mx-auto   relative z-[200] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                  <div className=' bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                    <form className='space-y-6' action='#' method='POST'>
                      <PageSearch />
                    </form>
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
