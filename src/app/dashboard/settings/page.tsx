import React from 'react';

export default function page() {
  return (
    <div className='min-h-screen'>
      <section className='relative px-6 py-14 sm:py-20 lg:px-24'>
        <div className='mb-10 text-gray-800 text-4xl md:text-5xl font-bold dark:text-white'>
          Your Settings
        </div>
        <div className='mx-auto max-w-7xl text-left'>
          <div className='border-b border-gray-900/10 pb-12'>
            <div className='mb-1 text-gray-800 text-2xl font-semibold dark:text-white'>
              Your Notifications
            </div>
            <p className='mt-1 text-sm leading-6 text-gray-600 dark:text-gray-200'>
              We{"'"}ll always let you know about important changes, but you
              pick what else you want to hear about.
            </p>

            <div className='mt-10 space-y-10'>
              <fieldset>
                <legend className='text-lg font-semibold leading-6 text-gray-900 dark:text-white'>
                  Enable dark mode
                </legend>
                <div className='mt-6 space-y-6'>
                  <div className='relative flex gap-x-3'>
                    <div className='flex h-6 items-center'>
                      <input
                        id='comments'
                        name='comments'
                        type='checkbox'
                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                    </div>
                    <div className='text-sm leading-6'>
                      <label
                        htmlFor='comments'
                        className='font-medium text-gray-900 dark:text-white'
                      >
                        Comments
                      </label>
                      <p className='text-gray-500 dark:text-gray-200'>
                        Get notified when someones posts a comment on a posting.
                      </p>
                    </div>
                  </div>

                  <div className='relative flex gap-x-3'>
                    <div className='flex h-6 items-center'>
                      <input
                        id='offers'
                        name='offers'
                        type='checkbox'
                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                    </div>
                    <div className='text-sm leading-6'>
                      <label
                        htmlFor='offers'
                        className='font-medium text-gray-900 dark:text-white'
                      >
                        Offers
                      </label>
                      <p className='text-gray-500 dark:text-gray-200'>
                        Get notified when a candidate accepts or rejects an
                        offer.
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
