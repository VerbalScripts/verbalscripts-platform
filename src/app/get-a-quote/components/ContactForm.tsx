'use client';

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
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import React from 'react';

export default function ContactForm() {
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
            href='#faq-content-tab'
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
            href='#faq-content-tab'
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
          className='mx-auto mt-16 max-w-xl sm:mt-20'
        >
          <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
            <div>
              <label
                htmlFor='first-name'
                className='block text-md font-semibold leading-6 text-gray-900'
              >
                First name
              </label>
              <div className='mt-2.5'>
                <input
                  type='text'
                  name='first-name'
                  id='first-name'
                  autoComplete='given-name'
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='last-name'
                className='block text-md font-semibold leading-6 text-gray-900'
              >
                Last name
              </label>
              <div className='mt-2.5'>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  autoComplete='family-name'
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='company'
                className='block text-md font-semibold leading-6 text-gray-900'
              >
                Company (optional)
              </label>
              <div className='mt-2.5'>
                <input
                  type='text'
                  name='company'
                  id='company'
                  autoComplete='organization'
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='email'
                className='block text-md font-semibold leading-6 text-gray-900'
              >
                Email
              </label>
              <div className='mt-2.5'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  autoComplete='email'
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='phone-number'
                className='block text-md font-semibold leading-6 text-gray-900'
              >
                Phone number (optional)
              </label>
              <div className='relative mt-2.5'>
                <div className='absolute inset-y-0 left-0 flex items-center'>
                  <label htmlFor='country' className='sr-only'>
                    Country
                  </label>
                  <select
                    id='country'
                    name='country'
                    className='h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm'
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon
                    className='pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400'
                    aria-hidden='true'
                  />
                </div>
                <input
                  type='tel'
                  name='phone-number'
                  id='phone-number'
                  autoComplete='tel'
                  className='block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='message'
                className='block text-md font-semibold leading-6 text-gray-900'
              >
                Message
              </label>
              <div className='mt-2.5'>
                <textarea
                  name='message'
                  id='message'
                  rows={4}
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className='mt-10 flex justify-center'>
            <button
              type='submit'
              className='rounded-full bg-indigo-600 px-8 py-3.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Let{"'"}s talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
