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
import React from 'react';

export default function ContactForm() {
  const services = [
    'Legal Transcription',
    'Video and Audio Transcription services',
    'General Transcription',
    'Focus groups and Interviews',
    'Medical Transcription',
    'Academic & Conference Transcription',
  ];
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
          <div className='mx-auto max-w-4xl lg:text-left'>
            <h2 className='text-xl font-semibold leading-7 text-indigo-600'>
              Get a Project Estimate Fast
            </h2>

            <p className='mx-auto max-w-2xl mt-6 text-xl leading-8 text-gray-600'>
              If you have copy typing requirements or would like a full written
              quote within 60 minutes directly from our team, simply fill out
              the form below in as much detail as possible and we will respond
              within 60 minutes (during office hours).
            </p>
          </div>
          <form action='#' method='POST' className='mt-10  sm:mt-10 text-left'>
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
                  <div key={index} className='flex items-center mb-4'>
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
            <div className='my-5 flex flex-end'>
              <button
                type='submit'
                className='rounded-xl bg-indigo-500 px-8 py-1.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Submit
              </button>
            </div>
            <div className='text-gray-700'>
              We will be collecting data when you complete this form. By
              completing this form you consent to us holding this data solely
              for the purposes of providing you with a written quotation by
              email. For details of our{' '}
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
        </div>
      </div>
    </div>
  );
}
