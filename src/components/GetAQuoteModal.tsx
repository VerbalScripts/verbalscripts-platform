/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { FormEvent, Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import ComponentSpinner from './ComponentSpinner';
import AxiosProxy from '@/utils/AxiosProxy';
import { classNames } from '@/utils/classNames';
import { Player } from '@lottiefiles/react-lottie-player';

interface SliderOverProp {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}

export default function GetAQuoteModal({ open, setOpen }: SliderOverProp) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [content, setContent] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [duration, setDuration] = useState('');
  const [phone, setPhone] = useState('');

  const [sample, setSample] = useState<File | null>(null)

  const postQuote = async (event: FormEvent) => {
    try {
      event.preventDefault();
      setLoading(true);

      const formdata = new FormData();

      formdata.append('content', content);
      formdata.append('fullName', fullName);
      formdata.append('companyName', companyName);
      formdata.append('service_type', serviceType);
      formdata.append('duration', duration);
      formdata.append('phone', phone);
      formdata.append('email', email);

      // add file sample if exists
      if (sample != null) {
        formdata.append('quote-sample', sample);
      }

      const response = await AxiosProxy.post('/quotes/add', formdata);

      if (response.status == 201) {
        setSuccess(true);
      }
    } catch (err) {
      setError(
        'An Unexpected Error Occurred and Could not process your request. Retry again',
      );
    } finally {
      setLoading(false);
    }
  };
  const reset = () => {
    setSuccess(false);
    setLoading(false);
    setEmail('');
    setServiceType('');
    setContent('');
    setCompanyName('');
    setError('');
    setDuration('');
    setPhone('');
  };

  function updateFileSample ( e: React.ChangeEvent<HTMLInputElement> ): void {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };

    if (target.files.length == 0) return;
    setSample(target.files[0])
  }

  useEffect(() => {
    reset();
  }, [open]);

  const services = [
    'Legal Transcription',
    'Video and Audio Transcription services',
    'General Transcription',
    'Focus groups and Interviews',
    'Medical Transcription',
    'Academic & Conference Transcription',
  ];
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
            <div className='pointer-events-none fixed inset-y-0  flex right-0   pl-10'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto relative w-full md:max-w-md'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute right-0 top-0  z-[20] flex pr-2 pt-4  sm:pr-4'>
                      <button
                        type='button'
                        className='relative rounded-full w-10 h-10 bg-red-100 flex justify-center items-center text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                        onClick={() => setOpen(false)}
                      >
                        <span className='absolute -inset-2.5' />
                        <span className='sr-only'>Close panel</span>
                        <XMarkIcon
                          className='h-8 w-8 text-red-500 '
                          aria-hidden='true'
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {success ? (
                    <div className='flex gap-y-10 h-full bg-white flex-col justify-center overflow-y-scroll  py-14 shadow-xl'>
                      <div>
                        <Player
                          autoplay
                          loop={false}
                          src='https://lottie.host/0a51c829-7800-4e7e-9e93-61768c37479e/VKuYZcqOtG.json'
                          style={{ width: '200px', height: '240px' }}
                        ></Player>
                      </div>
                      <div className='text-gray-600 px-10 text-center'>
                        Your Quotation Review request has been received. We will
                        get back to you as soon as possible with the amount
                        estimate.
                      </div>
                    </div>
                  ) : (
                    <div className='flex h-full flex-col overflow-y-scroll bg-white py-14 shadow-xl'>
                      <div className='px-4 sm:px-6'>
                        <Dialog.Title className='text-3xl font-semibold leading-6 text-gray-800'>
                          Get a Quotation
                        </Dialog.Title>
                      </div>
                      <div className='relative flex-1 px-4 sm:px-6'>
                        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                          <div className='text-gray-700 text-lg mt-2'>
                            Fill the form below and we will get back to you.
                          </div>
                          <form
                            action='#'
                            method='POST'
                            onSubmit={postQuote}
                            className='mt-5  sm:mt-5 text-left'
                          >
                            <div className='sm:col-span-2 mb-2'>
                              <label
                                htmlFor='first-name'
                                className='block text-md font-semibold leading-6 text-gray-900 mb-2.5'
                              >
                                Full Name
                              </label>

                              <input
                                type='text'
                                id='fullName'
                                name='fullName'
                                onChange={(e) => setFullName(e.target.value)}
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                required
                              />
                            </div>

                            <div className='sm:col-span-2 mb-2'>
                              <label
                                htmlFor='email'
                                className='block mb-2 text-md font-medium text-gray-900 dark:text-white'
                              >
                                Company Name (optional)
                              </label>
                              <input
                                type='text'
                                id='companyName'
                                name='companyName'
                                onChange={(e) => setCompanyName(e.target.value)}
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                              />
                            </div>

                            <div className='sm:col-span-2 mb-2'>
                              <label
                                htmlFor='email'
                                className='block mb-2 text-md font-me dium text-gray-900 dark:text-white'
                              >
                                Your email
                              </label>
                              <input
                                type='email'
                                name='email'
                                id='email'
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                aria-describedby='helper-text-explanation'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                              />
                            </div>

                            <div className='sm:col-span-2 mb-2'>
                              <label
                                htmlFor='phoneNumber'
                                className='block mb-2 text-md font-medium text-gray-900 dark:text-white'
                              >
                                Phone Number (optional)
                              </label>
                              <input
                                type='tel'
                                id='phoneNumber'
                                min={1}
                                name='phoneNumber'
                                onChange={(e) => setPhone(e.target.value)}
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                              />
                            </div>

                            <div className='sm:col-span-2 mb-2'>
                              <label
                                htmlFor='duration'
                                className='block mb-2 text-md font-me dium text-gray-900 dark:text-white'
                              >
                                Duration In Hours.
                              </label>
                              <input
                                type='number'
                                id='duration'
                                name='duration'
                                required
                                onChange={(e) => setDuration(e.target.value)}
                                aria-describedby='helper-text-explanation'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                              />
                            </div>

                            <div className='sm:col-span-2 mb-2'>
                              <label
                                htmlFor='email'
                                className='block mb-2 text-md font-medium text-gray-900 dark:text-white'
                              >
                                Choose Type of service
                              </label>
                              <div className='my-2'>
                                <select
                                  required
                                  onChange={(e) =>
                                    setServiceType(e.target.value)
                                  }
                                  className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                >
                                  <option selected value='blank'>
                                    Transcription Type
                                  </option>
                                  {services.map((service, index) => (
                                    <option key={index} value={service}>
                                      {service}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            <div className='sm:col-span-2 mb-2'>
                              <label
                                htmlFor='quote-sample'
                                className='block mb-2 text-md font-me dium text-gray-900 dark:text-white'
                              >
                                Add Sample File (Optional)
                              </label>
                              <input
                                type='file'
                                id='quote-sample'
                                name='quote-sample'
                                accept='jpeg,mpeg,png,jpg'
                                required
                                onChange={(e) => updateFileSample(e)}
                                aria-describedby='helper-text-explanation'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                              />
                            </div>

                            <div className='sm:col-span-2'>
                              <label
                                htmlFor='message'
                                className='block mb-2 text-md font-medium text-gray-900 dark:text-white'
                              >
                                Project Summary
                              </label>
                              <textarea
                                id='description'
                                rows={4}
                                required
                                onChange={(e) => setContent(e.target.value)}
                                className='block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                placeholder='Project description...'
                              ></textarea>
                            </div>
                            <div className='my-5 flex justify-end'>
                              <button
                                type='submit'
                                disabled={loading}
                                className=' inline-flex items-center gap-x-2 rounded-xl bg-indigo-500 px-8 py-1.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                              >
                                {loading ? <ComponentSpinner /> : null}
                                <span>Submit</span>
                              </button>
                            </div>
                            {error.length > 0 ? (
                              <p className='text-red-500 py-2 px-1.5 rounded-xl ring-red-100 ring-1'>
                                {error}
                              </p>
                            ) : (
                              ''
                            )}
                            <div className='text-gray-700'>
                              We will be collecting data when you complete this
                              form. By completing this form you consent to us
                              holding this data solely for the purposes of
                              providing you with a written quotation by email.
                              For details of our{' '}
                              <a
                                href='/legal/privacy-policy'
                                className='undeline underline-offset-4 text-indigo-500'
                              >
                                privacy policy click here
                              </a>{' '}
                              and for information on{' '}
                              <a
                                href='/legal/data-protection-policy'
                                className='undeline underline-offset-4 text-indigo-500'
                              >
                                data protection policy click helper
                              </a>
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
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
