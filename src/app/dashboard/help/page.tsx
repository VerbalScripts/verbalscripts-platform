import React from 'react';

export default function Page() {
  return (
    <div>
      <section
        className='relative px-6 sm:py-20 lg:px-8'
        style={{ backgroundColor: '#f9f8f2' }}
      >
        <div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20' />
        <div className='absolute  right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center' />

        <div className='mx-auto max-w-2xl text-left lg:text-center'>
          <p className='mt-2 text-4xl font-bold   text-gray-900 sm:text-5xl'>
            Need Help ?
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
          </p>
        </div>
        <div className='mx-auto max-w-2xl text-left lg:text-center'>
          <div className='mt-6 flex flex-col md:flex-row  gap-5 '>
            <input
              id='search-box'
              name='search'
              type='email'
              autoComplete='email'
              required
              className='w-full min-w-80 lg:min-w-2xl  flex-auto rounded-md border-0 bg-white px-3.5 py-3.5 text-gray-600 font-semibold shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-3 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
              placeholder='Search for topic ?'
            />
          </div>
        </div>
      </section>
    </div>
  );
}
