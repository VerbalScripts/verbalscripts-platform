import React from 'react';

export default function LinkUpload() {
  return (
    <div>
      <div className='flex items-center gap-x-4'>
        <div className='flex items-center justify-center bg-slate-800 px-5 text-gray-100 py-1.5 rounded-full font-semibold'>
          Option 2
        </div>
        <div className='text-slate-800 font-bold text-xl'>
          Add a link to your file.
        </div>
      </div>

      <form action='#' method='POST' className=''>
        <div className='flex items-center'>
          <div>
            <label
              htmlFor='first-name'
              className='block text-md my-2 leading-6 text-gray-700'
            >
              You can add a link to external video or audio file and make sure
              the file is downloadable in your browser.
            </label>
            <div className='mt-2.5 flex gap-5'>
              <input
                type='text'
                name='first-name'
                id='first-name'
                autoComplete='given-name'
                className='md:w-3/4 rounded-md border-0 px-3.5 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />

              <button className='bg-indigo-500 text-white text-xl font-semibold rounded-full py-1.5 px-4 '>
                Upload Now
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
