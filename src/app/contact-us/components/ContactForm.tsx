/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import ComponentSpinner from '@/components/ComponentSpinner';
import AxiosProxy from '@/utils/AxiosProxy';
import { classNames } from '@/utils/classNames';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelopeCircleCheck,
  faPhoneFlip,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const postMessage = async (event: FormEvent) => {
    try {
      event.preventDefault();
      setLoading(true);

      const response = await AxiosProxy.post('/contact/add', {
        companyName,
        email,
        firstName,
        lastName,
        content: message,
      });

      if (response.status == 201) {
        setSuccess(true)
      }
    } catch (err) {
      setError(
        'An Unexpected Error Occurred and Could not process your request. Retry again',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-wrap lg:flex-nowrap items-start space-y-16 lg:space-x-6 lg:space-y-0 px-6 md:px-16 lg:px-24 xl:px-32'>
      <div className='w-full xl:w-[40%] lg:sticky top-[20%]'>
        <h2 className='text-xl font-bold leading-7 capitalize footer-title'>
          How to reach us?
        </h2>
        <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-800  00 section-title'>
          Get In Touch
        </p>

        <p className='mt-2 text-md lg:text-lg leading-7   text-left text-gray-600  00 section-title'>
          Talk to us via our channels.
        </p>
        {/* faqs menu */}

        <div className='flex items-center mt-5 gap-x-3 my-5'>
          <a
            href='mailto:support@verbalscripts.com'
            className={classNames(
              'py-3 px-7 font-bold hover:bg-gray-100 transition-all duration-100 bg-gray-200 capitalize text-left rounded-md mb-2',
            )}
          >
            <FontAwesomeIcon
              icon={faEnvelopeCircleCheck}
              className='h-6 w-6 text-gray-700'
            />
          </a>
          <a
            href='https://wa.me/17279668531'
            className={classNames(
              'py-3 px-7 font-bold hover:bg-gray-100 transition-all duration-100 bg-gray-200 capitalize text-left rounded-md mb-2',
            )}
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className='h-6 w-6 text-gray-700'
            />
          </a>

          <a
            href='tel:+1 (727) 966-8531'
            aria-label='Company Telephone'
            className={classNames(
              'py-3 px-7 font-bold hover:bg-gray-100 transition-all duration-100 bg-gray-200 capitalize text-left rounded-md mb-2',
            )}
          >
            <span className='text-gray-300  text-lg hover:text-indigo-500'>
              <FontAwesomeIcon
                icon={faPhoneFlip}
                className='h-6 w-6 text-gray-700'
              />
            </span>
          </a>
        </div>

        {/* social media */}
        <p className='mt-2 text-3xl md:text-4xl  font-bold text-left text-gray-800  00 section-title'>
          Follow Us on Media ?
        </p>
        <div className='flex items-center mt-5 gap-x-3'>
          <a
            href=''
            aria-label='LinkedIn handle'
            className='text-center mb-3  rounded-xl transition hover:bg-indigo-500 flex h-10 w-10 items-center justify-center'
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className='h-6 w-6 text-gray-700'
            />
          </a>
          <a
            href=''
            aria-label='Twitter handle'
            className='text-center mb-3 flex h-10 w-10 rounded-xl transition hover:bg-indigo-500 items-center justify-center'
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              className='h-6 w-6 text-gray-700'
            />
          </a>

          <a
            href=''
            aria-label='Facebook handle'
            className='text-center mb-3 flex rounded-xl transition hover:bg-indigo-500 h-10 w-10 items-center justify-center'
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className='h-6 w-6 text-gray-700'
            />
          </a>
          <a
            target='_blank'
            aria-label='Instagram handle'
            href='https://www.instagram.com/verbal_scripts?igsh=dDliMGVkNnhoYmdv'
            className='text-center mb-3 flex rounded-xl transition hover:bg-indigo-500 h-10 w-10 items-center justify-center'
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className='h-6 w-6  text-gray-700'
            />
          </a>
        </div>
      </div>
      <div
        id='faq-content-tab'
        className='
    lg:order-2 lg:min-w-[40rem] xl:min-w-[50rem] w-full'
      >
        <div className='mx-auto max-w-2xl text-center'>
          <div className='mx-auto max-w-4xl lg:text-center'>
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">What we do</h2> */}

            <p className='mx-auto max-w-2xl mt-6 text-xl leading-8 text-gray-600'>
              Fill the information below and we will help solve issues as best
              as we can.
            </p>
          </div>
        </div>
        <form
          action='#'
          method='POST'
          onSubmit={postMessage}
          className='mx-auto mt-16 max-w-xl sm:mt-20'
        >
          <div className='grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 mb-2'>
            <div className=''>
              <label
                htmlFor='first-name'
                className='block text-md font-semibold leading-6 text-gray-900 mb-2.5'
              >
                First Name
              </label>

              <input
                type='text'
                id='firstName'
                name='firstName'
                onChange={(e) => setFirstName(e.target.value)}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                required
              />
            </div>
            <div className=''>
              <label
                htmlFor='first-name'
                className='block text-md font-semibold leading-6 text-gray-900 mb-2.5'
              >
                Last Name
              </label>

              <input
                type='text'
                id='lastName'
                name='lastName'
                onChange={(e) => setLastName(e.target.value)}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                required
              />
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='first-name'
                className='block text-md font-semibold leading-6 text-gray-900 mb-2.5'
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
            <div className='sm:col-span-2'>
              <label
                htmlFor='email'
                className='block mb-2 text-md font-medium text-gray-900 dark:text-white'
              >
                Your email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby='helper-text-explanation'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              />
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='message'
                className='block mb-2 text-md font-medium text-gray-900 dark:text-white'
              >
                Message
              </label>
              <textarea
                id='message'
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className='block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='I want ...'
              ></textarea>
            </div>
          </div>
          <div className='my-5 flex justify-end'>
            <button
              type='submit'
              className='rounded-xl bg-indigo-500 px-8 py-1.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              {loading ? <ComponentSpinner /> : null}
              <span>Let{"'"}s Talk</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
