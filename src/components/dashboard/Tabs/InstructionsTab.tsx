import React from 'react';

export default function InstructionsTab() {
  return (
    <section className='flex flex-col gap-10  divide-gray-400'>
      <div className=''>
        <label htmlFor='message' className='flex flex-col leading-6 '>
          <span className='font-semibold text-lg text-gray-700'>
            Instructions
          </span>
          <span className='text-md text-gray-600'>
            Please enter special instructions, terms, acronyms, keywords, names
            of places, speaker names, etc.
          </span>
        </label>
        <div className='mt-2.5'>
          <textarea
            name='message'
            id='message'
            rows={4}
            className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
            defaultValue={''}
          />
        </div>
      </div>
    </section>
  );
}
