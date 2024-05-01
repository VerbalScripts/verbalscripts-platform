import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
// import AxiosProxy from '@/utils/AxiosProxy';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

import { classNames } from '@/utils/classNames';
import AxiosProxy from '@/utils/AxiosProxy';
import SettingsTab from '../dashboard/Tabs/SettingsTab';
import InstructionsTab from '../dashboard/Tabs/InstructionsTab';

interface OrderNowProps {
  open: boolean;
  files: string[];
  reload?: () => Promise<void>;
  setOpen: (arg0: boolean) => void;
}

type tabValues = 'settings' | 'instructions' | 'finish';

export default function OrderNowModal({ open, setOpen, files }: OrderNowProps) {
  //   const cancelButtonRef = useRef(null);
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [orderConfiuration, setOrderConfiuration] =
    useState<OrderConfiguration>({
      language: 'English',
      text_format: 'clean',
      speakers: '1-2',
      apply_timestamps: 'Not Required',
      turn_around_time: '2_days',
    });
  const [instructions, setInstructions] = useState<string>('');

  const [activeTab, setActiveTab] = useState<tabValues>('settings');
  const [position, setPosition] = useState<number>(0);
  const [status, setStatus] = useState<{ complete: boolean; message: string }>({
    complete: false,
    message: '',
  });
  const sectionArray: tabValues[] = ['settings', 'instructions', 'finish'];

  useEffect(() => {
    if (position < sectionArray.length) {
      setActiveTab(sectionArray[position]);
    }
    console.log(activeTab);
  }, [position]);

  const createOrder = async () => {
    // set payload
    const payload: Order = {
      configuration: {
        ...orderConfiuration,
        instructions,
      },
      files: files,
    };
    console.log(payload);

    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setLoading(true);
      const response = await AxiosProxy.post('/orders/client/create', {
        order: payload,
      });
      if (response.status == 201) {
        console.log(response.data);
        // await reload();
        // setOpen(false);
        setStatus({ complete: true, message: 'success' });
      } else {
        console.log('success');
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
      setStatus({ complete: true, message: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const goToInProgress = () => {
    router.push('/dashboard/in-progress');
  };

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
                    {!status.complete ? (
                      <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                        <div>
                          <ol className='lg:flex justify-center items-center w-full md:py-6 lg:py-10 space-y-4 lg:space-y-0 lg:space-x-4'>
                            <li className='relative '>
                              <a
                                href='https://verbalscripts.com/'
                                className='flex items-center font-medium w-full  '
                              >
                                <span
                                  className={classNames(
                                    'w-6 h-6   border border-transparent rounded-full flex justify-center items-center mr-3 text-md lg:w-8 lg:h-8',
                                    activeTab == 'settings'
                                      ? 'bg-indigo-500 text-white'
                                      : 'bg-gray-50 text-gray-500 border  border-gray-200',
                                  )}
                                >
                                  {' '}
                                  1{' '}
                                </span>
                                <div className='block'>
                                  <h4
                                    className={classNames(
                                      'text-md',
                                      activeTab == 'settings'
                                        ? 'text-indigo-500'
                                        : 'text-gray-600',
                                    )}
                                  >
                                    General Settings
                                  </h4>
                                </div>
                                <svg
                                  className='w-5 h-5 ml-2 stroke-indigo-600 sm:ml-4'
                                  viewBox='0 0 24 24'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    d='M5 18L9.67462 13.0607C10.1478 12.5607 10.3844 12.3107 10.3844 12C10.3844 11.6893 10.1478 11.4393 9.67462 10.9393L5 6M12.6608 18L17.3354 13.0607C17.8086 12.5607 18.0452 12.3107 18.0452 12C18.0452 11.6893 17.8086 11.4393 17.3354 10.9393L12.6608 6'
                                    stroke='stroke-current'
                                    stroke-width='1.6'
                                    stroke-linecap='round'
                                  />
                                </svg>
                              </a>
                            </li>
                            <li className='relative  '>
                              <a className='flex items-center font-medium w-full  '>
                                <span
                                  className={classNames(
                                    'w-6 h-6   border border-transparent rounded-full flex justify-center items-center mr-3 text-md lg:w-8 lg:h-8',
                                    activeTab == 'instructions'
                                      ? 'bg-indigo-500 text-white'
                                      : 'bg-gray-50 text-gray-500 border  border-gray-300',
                                  )}
                                >
                                  {' '}
                                  2{' '}
                                </span>
                                <div className='block'>
                                  <h4
                                    className={classNames(
                                      'text-md',
                                      activeTab == 'instructions'
                                        ? 'text-indigo-500'
                                        : 'text-gray-600',
                                    )}
                                  >
                                    Instructions
                                  </h4>
                                </div>
                                <svg
                                  className='w-5 h-5 ml-2 stroke-indigo-600 sm:ml-4'
                                  viewBox='0 0 24 24'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    d='M5 18L9.67462 13.0607C10.1478 12.5607 10.3844 12.3107 10.3844 12C10.3844 11.6893 10.1478 11.4393 9.67462 10.9393L5 6M12.6608 18L17.3354 13.0607C17.8086 12.5607 18.0452 12.3107 18.0452 12C18.0452 11.6893 17.8086 11.4393 17.3354 10.9393L12.6608 6'
                                    stroke='stroke-current'
                                    stroke-width='1.6'
                                    stroke-linecap='round'
                                  />
                                </svg>
                              </a>
                            </li>

                            <li className='relative  '>
                              <a className='flex items-center font-medium w-full  '>
                                <span
                                  className={classNames(
                                    'w-6 h-6   border border-transparent rounded-full flex justify-center items-center mr-3 text-md lg:w-8 lg:h-8',
                                    activeTab == 'finish'
                                      ? 'bg-indigo-500 text-white'
                                      : 'bg-gray-50 text-gray-500 border  border-gray-300',
                                  )}
                                >
                                  {' '}
                                  3{' '}
                                </span>
                                <div className='block'>
                                  <h4
                                    className={classNames(
                                      'text-md',
                                      activeTab == 'finish'
                                        ? 'text-indigo-500'
                                        : 'text-gray-600',
                                    )}
                                  >
                                    Finish
                                  </h4>
                                </div>
                              </a>
                            </li>
                          </ol>

                          {/* tab content */}
                          <div className='mx-auto max-w-4xl border border-gray-300 rounded-xl py-7 px-10'>
                            <div
                              className={classNames(
                                activeTab == 'settings' ? '' : 'hidden',
                              )}
                            >
                              <SettingsTab
                                config={orderConfiuration}
                                setConfig={setOrderConfiuration}
                              />
                            </div>
                            <div
                              className={classNames(
                                activeTab == 'instructions' ? '' : 'hidden',
                              )}
                            >
                              <InstructionsTab
                                instructions={instructions}
                                setInstructions={setInstructions}
                              />
                            </div>

                            <div
                              className={classNames(
                                activeTab == 'finish' ? '' : 'hidden',
                              )}
                            >
                              <div className='flex gap-x-5'>
                                <div className='hidden md:block max-w-[25rem] md:max-w-[25rem]'>
                                  <img
                                    src='/bg-auth-0.jpg'
                                    className='rounded-xl object-cover'
                                    alt=''
                                  />
                                </div>
                                <div className=''>
                                  <div>
                                    <div className='text-gray-700 text-3xl mb-8'>
                                      Complete Your Order
                                    </div>

                                    <div className='text-gray-700'>
                                      If you have any additional instructions,
                                      or demos you can reach out to our team via
                                      our chat with more information.
                                    </div>
                                  </div>

                                  <div className='mt-10 flex justify-end'>
                                    <button
                                      onClick={() => createOrder()}
                                      disabled={loading}
                                      className='flex gap-x-5  items-center disabled:bg-indigo-400  justify-center rounded-full bg-indigo-600 px-3 py-2.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                    >
                                      {loading ? (
                                        <div
                                          className='inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
                                          role='status'
                                        >
                                          <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
                                            Loading...
                                          </span>
                                        </div>
                                      ) : null}
                                      Place Order
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className='mt-8 md:mt-16 flex justify-end gap-x-4'>
                              {position > 0 ? (
                                <button
                                  onClick={() => setPosition(position - 1)}
                                  className='rounded-full ring-1 ring-inset ring-gray-400 py-2.5 px-7 text-gray-600'
                                >
                                  Prev
                                </button>
                              ) : null}
                              {position < sectionArray.length ? (
                                <button
                                  onClick={() => setPosition(position + 1)}
                                  className='rounded-full bg-indigo-500 py-2.5 px-7 text-white'
                                >
                                  Next
                                </button>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : status.complete && status.message == 'success' ? (
                      <div className='flex  justify-center items-center'>
                        <div className='max-w-lg flex flex-col items-center'>
                          <img
                            src='/order-success.svg'
                            className='min-w-[28rem]'
                            alt=''
                          />
                          <div>
                            <div className='font-semibold text-center text-2xl mb-5 text-gray-800'>
                              Thank you, Order Received
                            </div>
                            <div className='text-gray-700 text-center'>
                              Thank you {'brian'} your has been received and we
                              have began processing it. We will reach out to you
                              in <b>2 to 10 business days</b> with your file and
                              payment instructions. In the mean time if you any
                              queries you can reach out via our{' '}
                              <a className='text-indigo-500 underline'>
                                support
                              </a>{' '}
                              or click on <b>Chat Widget</b> to chat with use
                              and one of our agents will respond as a soon as
                              possible.
                            </div>
                          </div>
                          <div className='mt-10'>
                            <button
                              onClick={() => goToInProgress()}
                              className='rounded-full bg-indigo-500 text-white text-md py-3 px-12 font-semibold'
                            >
                              Track Your Order
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className='text-4xl text-gray-700'>Failed</div>
                    )}
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
