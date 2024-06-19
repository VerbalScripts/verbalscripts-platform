/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import ComponentSpinner from './ComponentSpinner';
import AxiosProxy from '@/utils/AxiosProxy';

interface SliderOverProp {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}

export default function GetAQuoteModal({ open, setOpen }: SliderOverProp) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const postQuote = async () => {
    try {
      setLoading(true);
      const response = await AxiosProxy.get('/quotes/add');

      if (response.status == 201) {
        setSuccess(`Your Quote request has been received successfully, One of our team members will get back to you via ${email} with the response`)
      }
    } catch (err) {
      setError('An Unexpected Error Occurred and Could not process your request. Retry again')
    } finally {
      setLoading(false);
    }
  };

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
                      <Dialog.Title className='text-3xl font-semibold leading-6 text-gray-800'>
                        Get a Quotation
                      </Dialog.Title>
                    </div>
                    <div className='relative flex-1 px-4 sm:px-6'>
                      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                        <div className='my-6 text-gray-600  text-lg'>
                          Provide Your Contact info so we reach out about your
                          quote
                        </div>
                        <form
                          action='#'
                          method='POST'
                          className='mt-5  sm:mt-5 text-left'
                        >
                          <div className='sm:col-span-2 mb-5'>
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
                              className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                              required
                            />
                          </div>

                          <div className='sm:col-span-2 mb-5'>
                            <label
                              htmlFor='email'
                              className='block mb-2 text-md font-medium text-gray-900 dark:text-white'
                            >
                              Company Name
                            </label>
                            <input
                              type='text'
                              id='companyName'
                              name='companyName'
                              className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                              required
                            />
                          </div>

                          <div className='sm:col-span-2 mb-5'>
                            <label
                              htmlFor='email'
                              className='block mb-2 text-md font-medium text-gray-900 dark:text-white'
                            >
                              Choose Type of service
                            </label>
                            <div className='my-2 px-6'>
                              {services.map((service, index) => (
                                <div
                                  key={index}
                                  className='flex items-center mb-4'
                                >
                                  <input
                                    type='radio'
                                    value=''
                                    name='service_type'
                                    className='w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                                  />
                                  <label
                                    htmlFor='service_type'
                                    className='ms-2 text-md font-medium text-gray-900 dark:text-gray-300'
                                  >
                                    {service}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className='sm:col-span-2 mb-5'>
                            <label
                              htmlFor='email'
                              className='block mb-2 text-md font-medium text-gray-900 dark:text-white'
                            >
                              Your email
                            </label>
                            <input
                              type='email'
                              id='email'
                              aria-describedby='helper-text-explanation'
                              className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            />

                            <p
                              id='helper-text-explanation'
                              className='mt-2 text-sm text-gray-500 dark:text-gray-400'
                            >
                              We’ll never share our response via this email . .
                            </p>
                          </div>

                          <div className='sm:col-span-2'>
                            <label
                              htmlFor='message'
                              className='block mb-2 text-md font-medium text-gray-900 dark:text-white'
                            >
                              Additional Information - be detailed as possible
                            </label>
                            <textarea
                              id='message'
                              rows={4}
                              className='block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                              placeholder='Project description...'
                            ></textarea>
                          </div>
                          <div className='my-5'>
                            <button
                              type='submit'
                              disabled={loading}
                              onClick={() => postQuote()}
                              className=' inline-flex items-center gap-x-3 rounded-xl bg-indigo-500 px-8 py-1.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                            >
                              {loading ? <ComponentSpinner /> : <span />}
                              <span>Submit</span>
                            </button>
                          </div>
                          <div className='text-gray-700'>
                            We will be collecting data when you complete this
                            form. By completing this form you consent to us
                            holding this data solely for the purposes of
                            providing you with a written quotation by email. For
                            details of our{' '}
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
