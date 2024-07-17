import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
// import AxiosProxy from '@/utils/AxiosProxy';
import {
  DocumentCheckIcon,
  TrashIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import { classNames } from '@/utils/classNames';
import SettingsTab from '../dashboard/Tabs/SettingsTab';
import InstructionsTab from '../dashboard/Tabs/InstructionsTab';
import { hostUrl } from '../../../config';
import { GetOrStoreAuthToken } from '@/utils/GetOrStoreAuthToken';
import ComponentSpinner from '../ComponentSpinner';
import { Player } from '@lottiefiles/react-lottie-player';
import { bytesToMB } from '@/utils/bytesToMb';

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
      service: 'General Transcription',
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
  const sectionImages: string[] = [
    '/dashboard/checklist.png',
    '/dashboard/additional-info.png',
    '/dashboard/confirm.png',
  ];

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

  const createOrder = async () => {
    // set payload
    const payload = {
      configuration: {
        ...orderConfiuration,
        instructions,
      },
      files: [...files.map((ord) => ord.id)],
    };

    const formData = new FormData();

    formData.append('order', JSON.stringify(payload));
    // add files if any
    if (samples.length > 0) {
      samples.forEach((sample) => {
        formData.append('samples', sample);
      });
    }

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
    });

    xhr.addEventListener('error', function () {
      // setOpen( false );
      setStatus({ complete: true, message: 'error' });
      // reject(xhr.response)
    });

    setLoading(true);

    xhr.open('POST', `${hostUrl}/orders/client/create`, true);

    const access_token = GetOrStoreAuthToken();
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
                    <div className='relative '>
                      <div className='flex justify-between'>
                        <div className='max-w-md h-screen order-2 px-6 py-16'>
                          <div
                            style={{ background: '#8568F533' }}
                            className={classNames(
                              'shadow-2xl max-h-[70%] overflow-hidden',
                            )}
                          >
                            <AnimatePresence>
                              <motion.img
                                key={sectionImages[position]}
                                src={sectionImages[position]}
                                alt='Switching Image'
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className='min-w-[28rem] h-full object-cover'
                              />
                            </AnimatePresence>
                            {/* <img
                              
                              className='min-w-[28rem] toggle-images'
                              alt=''
                            /> */}
                          </div>

                          <div className='mt-5 bg-red-100 rounded-md px-6 py-3'>
                            <h1 className='text-2xl text-gray-700 font-semibold'>
                              Disclaimer
                            </h1>
                            <p className='text-md text-gray-600 mt-2'>
                              We understand the importance of your projects and
                              are working diligently to deliver your transcripts
                              on time. Thank you for choosing VerbalScripts!
                            </p>
                          </div>
                        </div>
                        {!status.complete ? (
                          <div className='sticky top-10 order-1 py-[2rem] px-6 md:px-24 w-[100%] max-h-screen overflow-y-auto'>
                            <div className='mx-auto max-w-2xl py-6 pb-16 px-14 border-b border-orange-400'>
                              <div className='text-center text-3xl text-gray-700 font-semibold mb-5'>
                                Checkout
                              </div>
                              <ol className='flex items-center w-full'>
                                <li
                                  className={classNames(
                                    "flex w-full items-center after:content-[''] after:mb-0.5 after:ml-5 after:mr-5 after:w-full after:h-1 after:border-b  after:border-1 after:inline-block",
                                  )}
                                  style={{ borderColor: '#EFE7EC' }}
                                >
                                  <div
                                    className={classNames(
                                      'relative z-10 flex items-center before:absolute before:border-b before:border-r before:-rotate-45 before:border-gray-300 before:top-0 before:left-0 before:w-full before:h-full before:translate-x-2.5 before:mb-1  justify-center font-bold text-lg after:-z-[1] after:border-2 w-6 h-6 after:absolute after:left-0 after:w-full after:top-0 after:h-full bg-white after:rounded-md after:rotate-45 lg:h-8 lg:w-8 dark:bg-indigo-800 shrink-0',
                                      position == 0
                                        ? 'pending-border text-tab-pending after:bg-white'
                                        : 'complete-tab-indicator text-white ',
                                    )}
                                  >
                                    <span>1</span>
                                    <span className='absolute -bottom-10  text-gray-500 font-semibold text-lg'>
                                      Checklist
                                    </span>
                                  </div>
                                </li>
                                <li
                                  className={classNames(
                                    "flex w-full items-center after:content-[''] after:mb-0.5 after:ml-5 after:mr-5 after:w-full after:h-1 after:border-b  after:border-1 after:inline-block",
                                  )}
                                  style={{ borderColor: '#EFE7EC' }}
                                >
                                  <div
                                    className={classNames(
                                      'relative z-10 flex items-center before:absolute before:border-b before:border-r before:-rotate-45 before:border-gray-300 before:top-0 before:left-0 before:w-full before:h-full before:translate-x-2.5 before:mb-1  justify-center font-bold text-lg after:-z-[1] after:border-2 w-6 h-6 after:absolute after:left-0 after:w-full after:top-0 after:h-full bg-white after:rounded-md after:rotate-45 lg:h-8 lg:w-8 dark:bg-indigo-800 shrink-0',
                                      position > 1
                                        ? 'complete-tab-indicator text-white '
                                        : 'pending-border text-tab-pending after:bg-white',
                                    )}
                                  >
                                    <span className='absolute  border-b border-l rotate-45 border-gray-300 top-0 left-0 w-full h-full -translate-x-2.5 mb-1'></span>
                                    <span>2</span>
                                    <span className='absolute -bottom-10  text-gray-500 font-semibold text-lg'>
                                      Instructions
                                    </span>
                                  </div>
                                </li>
                                <li className='flex items-center'>
                                  <div
                                    className={classNames(
                                      'relative z-10 flex items-center before:absolute before:border-b before:border-l before:rotate-45 before:border-gray-300 before:top-0 before:left-0 before:w-full before:h-full before:-translate-x-2.5 before:mb-1  justify-center font-bold text-lg after:-z-[1] after:border-2 w-6 h-6 after:absolute after:left-0 after:w-full after:top-0 after:h-full bg-white after:rounded-md after:rotate-45 lg:h-8 lg:w-8 dark:bg-indigo-800 shrink-0',
                                      position == 2
                                        ? 'complete-tab-indicator text-white '
                                        : 'pending-border text-tab-pending after:bg-white',
                                    )}
                                  >
                                    <span>3</span>
                                    <span className='absolute -bottom-10  text-gray-500 font-semibold text-lg'>
                                      Summary
                                    </span>
                                  </div>
                                </li>
                              </ol>
                            </div>

                            {/* tab content */}
                            <div className='mt-10 mx-auto max-w-2xl '>
                              <div
                                className={classNames(
                                  activeTab == 'settings' ? '' : 'hidden',
                                )}
                              >
                                <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10'>
                                  General Information
                                </h1>
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
                                <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10'>
                                  Additional Information
                                </h1>
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
                                        <div className='flex flex-col'>
                                          <div className='mx-auto max-w-2xl sm:text-left'>
                                            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                                              Order Summary
                                            </h2>
                                            <p className='mt-6 text-lg leading-8 text-gray-600'>
                                              Confirm the configuration or
                                              presets that you have chosen are
                                              correct, then place your file.
                                            </p>
                                          </div>

                                          {/* preview files */}
                                          <div className=' mb-2'>
                                            <div className='mt-3 flex items-center gap-x-4'>
                                              <h4 className='flex-none text-sm font-semibold leading-6 text-indigo-600'>
                                                Files Preview
                                              </h4>
                                              <div className='h-px flex-auto bg-gray-100' />
                                            </div>
                                            <ul
                                              role='list'
                                              className='mt-8 bg-gray-200 rounded-xl p-4 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-1 sm:gap-6'
                                            >
                                              {files.map((file) => (
                                                <li
                                                  key={file.id}
                                                  className='flex gap-x-3 text-lg justify-between items-center'
                                                >
                                                  <div className='flex gap-x-3 items-start'>
                                                    <DocumentCheckIcon
                                                      className='h-6 w-5 flex-none text-indigo-600'
                                                      aria-hidden='true'
                                                    />
                                                    <div className='flex flex-col'>
                                                      <div className='text-gray-700 font-semibold text-lg'>
                                                        {file.label}
                                                      </div>
                                                      <div className='text-gray-600'>
                                                        <span>
                                                          {bytesToMB(file.size)}{' '}
                                                          {'MBs. | '}{' '}
                                                        </span>

                                                        <span className='bg-indigo-500 px-1 py-0.5 rounded-md text-white font-semibold text-xs uppercase'>
                                                          {
                                                            file.mimetype.split(
                                                              '/',
                                                            )[1]
                                                          }
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <button onClick={() => {}}>
                                                    <TrashIcon className='w-7 h-7 text-gray-800' />
                                                  </button>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>

                                          {/* configuration confirm */}
                                          <div className=' mb-2'>
                                            <div className='mt-5 flex items-center gap-x-4'>
                                              <h4 className='flex-none text-sm font-semibold leading-6 text-indigo-600 mb-4'>
                                                Settings
                                              </h4>
                                              <div className='h-px flex-auto bg-gray-100' />
                                            </div>

                                            <SettingsTab
                                              config={orderConfiuration}
                                              setConfig={setOrderConfiuration}
                                            />
                                          </div>

                                          {/* additional information */}

                                          <div className=' mb-2'>
                                            <div className='mt-5 flex items-center gap-x-4'>
                                              <h4 className='flex-none text-sm font-semibold leading-6 text-indigo-600 mb-4'>
                                                Instructions
                                              </h4>
                                              <div className='h-px flex-auto bg-gray-100' />
                                            </div>
                                            <InstructionsTab
                                              setFiles={setFiles}
                                              samples={samples}
                                              instructions={instructions}
                                              setInstructions={setInstructions}
                                            />
                                          </div>

                                          {/* <div className='mt-10 p-2 lg:mt-0 lg:w-full lg:max-w-md'>
                                            <div className='rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
                                              <div className='mx-auto max-w-xs px-8 flex flex-col items-center'>
                                                <p className='text-base font-semibold text-gray-600'>
                                                  Pay once, own it forever
                                                </p>
                                                <p className='mt-6 flex items-baseline justify-center gap-x-2'>
                                                  <span className='text-5xl font-bold tracking-tight text-gray-900'>
                                                    $349
                                                  </span>
                                                  <span className='text-sm font-semibold leading-6 tracking-wide text-gray-600'>
                                                    USD
                                                  </span>
                                                </p>
                                                <button
                                                  onClick={() => createOrder()}
                                                  disabled={loading}
                                                  className='inline-flex space-x-3  items-center disabled:bg-indigo-400  justify-center rounded-full bg-indigo-600 px-3 md:px-10 py-2.5 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                                >
                                                  {loading ? (
                                                    <ComponentSpinner />
                                                  ) : (
                                                    <div></div>
                                                  )}
                                                  <span>Create Order</span>
                                                </button>
                                                <p className='mt-6 text-xs leading-5 text-gray-600'>
                                                  Invoices and receipts
                                                  available for easy company
                                                  reimbursement
                                                </p>
                                              </div>
                                            </div>
                                          </div> */}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className='mt-8 md:mt-5 flex justify-end gap-x-4'>
                                {position > 0 ? (
                                  <button
                                    onClick={() => setPosition(position - 1)}
                                    className='rounded-lg font-semibold capitalize ring-1 ring-inset ring-gray-400 py-2.5 px-7 text-gray-700'
                                  >
                                    Prev: {sectionArray[position - 1]}
                                  </button>
                                ) : null}
                                {position < sectionArray.length - 1 ? (
                                  <button
                                    onClick={() => setPosition(position + 1)}
                                    className='rounded-lg font-semibold capitalize bg-indigo-600 text-lg py-2.5 px-7 text-white'
                                  >
                                    Next: {sectionArray[position + 1]}
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => createOrder()}
                                    disabled={loading}
                                    className='inline-flex space-x-3  items-center disabled:bg-indigo-400 btn-vlg text-lg  justify-center rounded-lg bg-indigo-600 px-3 md:px-10 py-2.5 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                  >
                                    {loading ? (
                                      <ComponentSpinner />
                                    ) : (
                                      <div></div>
                                    )}
                                    <span>Place Your Order</span>
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        ) : status.complete && status.message == 'success' ? (
                          <div className='w-full flex fle-col items-center'>
                            <div className='mx-auto max-w-md flex flex-col items-center'>
                              <Player
                                autoplay
                                loop={true}
                                src='https://lottie.host/993f6c56-9347-4c9a-a4a8-d32e4934cd68/sowshNXkDp.json'
                                style={{ width: '250px', height: '250px' }}
                              ></Player>
                              <div>
                                <div className='font-semibold text-center text-2xl mb-5 text-gray-800'>
                                  Thank you, Order Success
                                </div>
                                <div className='text-gray-700 text-center'>
                                  Thank you {'brian'} your has been received and
                                  we have began processing it. We will reach out
                                  to you in <b>2 to 10 business days</b> with
                                  your file and payment instructions.
                                </div>
                              </div>
                              <div className='mt-10'>
                                <button
                                  onClick={() => goToInProgress()}
                                  className='text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2'
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
