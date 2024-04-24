import React from 'react';

export default function LinkUpload() {
  return (
    <div className='my-10'>
      <div className='text-slate-800 font-bold text-xl'>
        Add a link to your file.
      </div>

      <form action='#' method='POST' className=''>
        <div className='flex items-center'>
          <div>
            <label
              htmlFor='first-name'
              className='block text-md my-2 leading-6 text-gray-600'
            >
              You can add a link to external video or audio file and make sure
              the file is downloadable in your browser.
            </label>
            <div className='mt-2.5 flex gap-5'>
              <input
                type='text'
                name='first-name'
                id='first-name'
                placeholder='http:// or https://example.com/my-file.txt'
                autoComplete='given-name'
                className='md:w-3/4 rounded-md border-0 px-3.5 py-2.5 text-gray-700 text-lg shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-md focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
            <div className='my-5'>
              <button className='bg-indigo-500 text-white text-xl font-semibold rounded-full py-2.5 px-4 '>
                Upload Now
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
