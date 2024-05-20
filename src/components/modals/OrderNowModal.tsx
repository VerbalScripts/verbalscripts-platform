import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
// import AxiosProxy from '@/utils/AxiosProxy';
import {
  DocumentCheckIcon,
  RectangleGroupIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

import { classNames } from '@/utils/classNames';
import SettingsTab from '../dashboard/Tabs/SettingsTab';
import InstructionsTab from '../dashboard/Tabs/InstructionsTab';
import { hostUrl } from '../../../config';
import { GetOrStoreAuthToken } from '@/utils/GetOrStoreAuthToken';

interface OrderNowProps {
  open: boolean;
  files: OrderFile[];
  reload: () => Promise<void>;
  setOpen: (arg0: boolean) => void;
  clearSelection: () => void;
}

type tabValues = 'settings' | 'instructions' | 'finish';

export default function OrderNowModal({
  open,
  setOpen,
  reload,
  files,
  clearSelection,
}: OrderNowProps) {
  //   const cancelButtonRef = useRef(null);
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [orderConfiuration, setOrderConfiuration] =
    useState<OrderConfiguration>({
      language: 'English',
      text_format: 'clean',
      speakers: '1-2',
      samples: [],
      apply_timestamps: 'Not Required',
      turn_around_time: '2_days',
    });
  const [instructions, setInstructions] = useState<string>('');
  const [samples, setFiles] = useState<File[]>([]);

  const [activeTab, setActiveTab] = useState<tabValues>('settings');
  const [position, setPosition] = useState<number>(0);
  const [status, setStatus] = useState<{ complete: boolean; message: string }>({
    complete: false,
    message: '',
  });
  const sectionArray: tabValues[] = ['settings', 'instructions', 'finish'];

  // const includedFeatures = [
  //   'Private forum access',
  //   'Member resources',
  //   'Entry to annual conference',
  //   'Official member t-shirt',
  // ];

  useEffect(() => {
    if (position < sectionArray.length) {
      setActiveTab(sectionArray[position]);
    }
  }, [position]);

  useEffect(() => {
    console.log(samples);
  }, [samples]);

  const createOrder = async () => {
    // set payload
    const payload: Order = {
      configuration: {
        ...orderConfiuration,
        instructions,
      },
      files: [...files.map((ord) => ord.id)],
    };

    const formData = new FormData();
    console.log('ceate payload', payload);

    formData.append('order', JSON.stringify(payload));
    // add files if any
    console.log(samples);
    if (samples.length > 0) {
      samples.forEach((sample) => {
        formData.append('samples', sample);
      });
    }

    console.log(formData);

    const xhr = new XMLHttpRequest();

    // xhr.upload.addEventListener('progress', function (event) {
    //   if (event.lengthComputable) {
    //     const percent = Math.round((event.loaded / event.total) * 100);

    //     console.log(percent);
    //   }
    // });

    xhr.addEventListener('readystatechange', async function () {
      // route to a new page and update status
      // resolve('happy')
      if (this.readyState == 4 && this.status == 201) {
        //  setOpen(false);
        setLoading(false);
        await reload();
        setStatus({ complete: true, message: 'success' });
      }
    });

    xhr.addEventListener('load', function () {
      clearSelection();
      console.log('loaded');
    });

    xhr.addEventListener('error', function () {
      // setOpen( false );
      setStatus({ complete: true, message: 'error' });
      // reject(xhr.response)
    });

    setLoading(true);

    xhr.open('POST', `${hostUrl}/orders/client/create`, true);

    const access_token = GetOrStoreAuthToken();
    console.log(access_token);
    if (access_token == null) {
      // xhr.setRequestHeader('x-token', uuid());
      // request login
    } else {
      xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
    }
    xhr.send(formData);
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
                  <div className='flex h-full  flex-col bg-white  shadow-xl'>
                    {!status.complete ? (
                      <div className='relative '>
                        <div className='flex justify-between'>
                          <div className='max-w-md bg-indigo-500 h-screen'>
                            <img
                              src='/svg/create-order.svg'
                              className='min-w-[28rem] mt-32'
                              alt=''
                            />
                          </div>

                          <div className='py-7 px-10 w-[100%] max-h-screen overflow-y-auto'>
                            <div className='mx-auto max-w-2xl  rounded-full'>
                              <ol className='flex items-center w-full'>
                                <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
                                  <span className='flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0'>
                                    {position > 0 ? (
                                      <svg
                                        className='w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 16 12'
                                      >
                                        <path
                                          stroke='currentColor'
                                          stroke-linecap='round'
                                          stroke-linejoin='round'
                                          stroke-width='2'
                                          d='M1 5.917 5.724 10.5 15 1.5'
                                        />
                                      </svg>
                                    ) : (
                                      <RectangleGroupIcon className='w-6 text-gray-600' />
                                    )}
                                  </span>
                                </li>
                                <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                                  <span className='flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0'>
                                    {position > 1 ? (
                                      <svg
                                        className='w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 16 12'
                                      >
                                        <path
                                          stroke='currentColor'
                                          stroke-linecap='round'
                                          stroke-linejoin='round'
                                          stroke-width='2'
                                          d='M1 5.917 5.724 10.5 15 1.5'
                                        />
                                      </svg>
                                    ) : (
                                      <WrenchScrewdriverIcon className='w-6 text-gray-600' />
                                    )}
                                  </span>
                                </li>
                                <li className='flex items-center w-full'>
                                  {position == 2 ? (
                                    <svg
                                      className='w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300'
                                      aria-hidden='true'
                                      xmlns='http://www.w3.org/2000/svg'
                                      fill='none'
                                      viewBox='0 0 16 12'
                                    >
                                      <path
                                        stroke='currentColor'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                        stroke-width='2'
                                        d='M1 5.917 5.724 10.5 15 1.5'
                                      />
                                    </svg>
                                  ) : (
                                    <DocumentCheckIcon className='w-6 text-gray-600' />
                                  )}
                                </li>
                              </ol>
                            </div>

                            {/* tab content */}
                            <div className='mt-20 w-full '>
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
                                  setFiles={setFiles}
                                  samples={samples}
                                  instructions={instructions}
                                  setInstructions={setInstructions}
                                />
                              </div>

                              <div
                                className={classNames(
                                  activeTab == 'finish' ? '' : 'hidden',
                                )}
                              >
                                <div className='flex space-x-5'>
                                  <div className=''>
                                    <div className='flex flex-col items-center'>
                                      <div className=''>
                                        <div className='flex flex-col items-center'>
                                          <div className='mx-auto max-w-2xl sm:text-center'>
                                            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                                              Place Your Order
                                            </h2>
                                            <p className='mt-6 text-lg leading-8 text-gray-600'>
                                              Distinctio et nulla eum soluta et
                                              neque labore quibusdam. Saepe et
                                              quasi iusto modi velit ut non
                                              voluptas in. Explicabo id ut
                                              laborum.
                                            </p>
                                          </div>

                                          <div className='mx-auto max-w-lg mb-20'>
                                            <div className='mt-10 flex items-center gap-x-4'>
                                              <h4 className='flex-none text-sm font-semibold leading-6 text-indigo-600'>
                                                Files Preview
                                              </h4>
                                              <div className='h-px flex-auto bg-gray-100' />
                                            </div>
                                            <ul
                                              role='list'
                                              className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-1 sm:gap-6'
                                            >
                                              {files.map((file, index) => (
                                                <li
                                                  key={file.id}
                                                  className='flex gap-x-3'
                                                >
                                                  {index + 1} {' . '}
                                                  <DocumentCheckIcon
                                                    className='h-6 w-5 flex-none text-indigo-600'
                                                    aria-hidden='true'
                                                  />
                                                  {file.label}
                                                </li>
                                              ))}
                                            </ul>
                                          </div>

                                          {/* <div className='mx-auto max-w-lg'>
                                            <div className='mt-10 flex items-center gap-x-4'>
                                              <h4 className='flex-none text-sm font-semibold leading-6 text-indigo-600'>
                                                What’s included
                                              </h4>
                                              <div className='h-px flex-auto bg-gray-100' />
                                            </div>
                                            <ul
                                              role='list'
                                              className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-1 sm:gap-6'
                                            >
                                              {includedFeatures.map(
                                                (feature) => (
                                                  <li
                                                    key={feature}
                                                    className='flex gap-x-3'
                                                  >
                                                    <CheckIcon
                                                      className='h-6 w-5 flex-none text-indigo-600'
                                                      aria-hidden='true'
                                                    />
                                                    {feature}
                                                  </li>
                                                ),
                                              )}
                                            </ul>
                                          </div> */}

                                          <div className='mt-10 p-2 lg:mt-0 lg:w-full lg:max-w-md'>
                                            <div className='rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
                                              <div className='mx-auto max-w-xs px-8 flex flex-col items-center'>
                                                {/* <p className='text-base font-semibold text-gray-600'>
                                                  Pay once, own it forever
                                                </p> */}
                                                {/* <p className='mt-6 flex items-baseline justify-center gap-x-2'>
                                                  <span className='text-5xl font-bold tracking-tight text-gray-900'>
                                                    $349
                                                  </span>
                                                  <span className='text-sm font-semibold leading-6 tracking-wide text-gray-600'>
                                                    USD
                                                  </span>
                                                </p> */}
                                                <button
                                                  onClick={() => createOrder()}
                                                  disabled={loading}
                                                  className='flex space-x-5  items-center disabled:bg-indigo-400  justify-center rounded-full bg-indigo-600 px-3 md:px-10 py-2.5 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
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
                                                  Create Order
                                                </button>
                                                <p className='mt-6 text-xs leading-5 text-gray-600'>
                                                  Invoices and receipts
                                                  available for easy company
                                                  reimbursement
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className='mt-8 md:mt-16 flex justify-end gap-x-4'>
                                {position > 0 ? (
                                  <button
                                    onClick={() => setPosition(position - 1)}
                                    className='rounded-full font-semibold capitalize ring-1 ring-inset ring-gray-400 py-2.5 px-7 text-gray-600'
                                  >
                                    Prev: {sectionArray[position - 1]}
                                  </button>
                                ) : null}
                                {position < sectionArray.length - 1 ? (
                                  <button
                                    onClick={() => setPosition(position + 1)}
                                    className='rounded-full font-semibold capitalize bg-indigo-500 py-2.5 px-7 text-white'
                                  >
                                    Next: {sectionArray[position + 1]}
                                  </button>
                                ) : null}
                              </div>
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
