import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VerbalScripts | Dashboard',
  description:
    'VerbalScripts offers fast, affordable, and highly accurate human transcription, translation, data annotation, and AI dataset services customized for your needs.',
};

export default function page() {
  return (
    <div>
      <section className='relative px-6 py-14 sm:py-20 lg:px-24'>
        <div className='mx-auto max-w-7xl text-left'>
          <form>
            <div className='space-y-12'>
              <div className='border-b border-gray-900/10 pb-12'>
                <h2 className='text-2xl font-semibold leading-7 text-gray-900'>
                  Personal Information
                </h2>
                <p className='mt-1 text-md leading-6 text-gray-600'>
                  Use a permanent address where you can receive mail.
                </p>

                <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                  <div className='sm:col-span-3'>
                    <label
                      htmlFor='first-name'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      First name
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='first-name'
                        id='first-name'
                        autoComplete='given-name'
                        className='block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-3'>
                    <label
                      htmlFor='last-name'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Last name
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='last-name'
                        id='last-name'
                        autoComplete='family-name'
                        className='block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-4'>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Email address
                    </label>
                    <div className='mt-2'>
                      <input
                        id='email'
                        name='email'
                        type='email'
                        autoComplete='email'
                        className='block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-3'>
                    <label
                      htmlFor='country'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Country
                    </label>
                    <div className='mt-2'>
                      <select
                        id='country'
                        name='country'
                        autoComplete='country-name'
                        className='block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>

                  <div className='col-span-full'>
                    <label
                      htmlFor='street-address'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Street address
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='street-address'
                        id='street-address'
                        autoComplete='street-address'
                        className='block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-2 sm:col-start-1'>
                    <label
                      htmlFor='city'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      City
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        name='city'
                        id='city'
                        autoComplete='address-level2'
                        className='block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-6 flex items-center justify-end gap-x-6'>
              <button
                type='button'
                className='text-md px-4 py-2.5 font-semibold leading-6 text-gray-900'
              >
                Cancel
              </button>
              <button
                type='submit'
                className='rounded-full bg-indigo-500 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
