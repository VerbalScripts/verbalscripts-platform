import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface SliderOverProp {
  open: boolean;
  setOpen: Function;
}

export default function GetAQuoteModal({ open, setOpen }: SliderOverProp) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto relative w-screen max-w-md'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4'>
                      <button
                        type='button'
                        className='relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                        onClick={() => setOpen(false)}
                      >
                        <span className='absolute -inset-2.5' />
                        <span className='sr-only'>Close panel</span>
                        <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className='flex h-full flex-col overflow-y-scroll bg-white py-14 shadow-xl'>
                    <div className='px-4 sm:px-6'>
                      <Dialog.Title className='text-3xl font-semibold leading-6 text-gray-700'>
                        Request a Quotation
                      </Dialog.Title>
                    </div>
                    <div className='relative flex-1 px-4 sm:px-6'>
                      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                        <div className='my-6 text-gray-600 font-semibold text-2xl'>
                          Provide Your Contact info so we reach out about your
                          quote
                        </div>
                        <form className='space-y-6' action='#' method='POST'>
                          <div>
                            <label
                              htmlFor='username'
                              className='block text-lg font-medium leading-6 text-gray-900'
                            >
                              Full Name
                            </label>
                            <div className='mt-2'>
                              <input
                                id='username'
                                name='username'
                                type='text'
                                required
                                className='block w-full rounded-md border-0 px-3 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 text-md sm:leading-6'
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor='email'
                              className='block text-lg font-medium leading-6 text-gray-900'
                            >
                              Email
                            </label>
                            <div className='mt-2'>
                              <input
                                id='email'
                                name='email'
                                type='email'
                                required
                                className='block w-full rounded-md border-0 px-3 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 text-md sm:leading-6'
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor='company_name'
                              className='block text-lg font-medium leading-6 text-gray-900'
                            >
                              Company Name
                            </label>
                            <div className='mt-2'>
                              <input
                                id='company_name'
                                name='company_name'
                                type='text'
                                required
                                className='block w-full rounded-md border-0 px-3 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 text-md sm:leading-6'
                              />
                            </div>
                          </div>

                          <div>
                            <button
                              type='submit'
                              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                            >
                              Next
                            </button>
                          </div>
                        </form>

                        {/* <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p> */}
                      </div>
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
