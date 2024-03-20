import React, { FormEvent, useState } from 'react'
import { Eye, EyeOff } from 'react-ionicons';

export default function ResetAccount () {
  const [is_visible, toggleVisible] = useState(true);

  
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      // const formData = new FormData(event.currentTarget);

      // setLoading(true);
      // setTimeout(() => {
      //   setLoading(false);
      // }, 2000);
    };
  return (
    <>
      {' '}
      <div className='flex lg:hidden justify-start text-3xl  md:text-4xl text-gray-700 font-bold py-10 leading-10'>
        <a href='/'>
          <span>Verbal</span>
          <span className='text-orange-500 italic'>Scripts</span>
        </a>
      </div>
      <div className='mx-auto max-w-md  pt-10 md:pt-20   lg:pt-24'>
        <div className='mb-10 md:mb-16 text-center  md:text-left text-3xl md:text-4xl font-bold text-gray-700'>
          Reset Account Password
        </div>
      </div>
      <div className='mx-auto max-w-md border-b border-gray-300 my-10'></div>
      <form
        className='space-y-6 mx-auto max-w-md'
        onSubmit={handleSubmit}
        action='#'
        method='POST'
      >
        <div className='my-4'>
          <label
            htmlFor='email'
            className='block text-md font-medium leading-6 text-gray-600'
          >
            Password
          </label>
          <div className='mt-2 relative'>
            <input
              id='password'
              name='password'
              type={is_visible ? 'password' : 'text'}
              autoComplete='password'
              required
              className='block w-full rounded-md border-3  py-4 px-4 text-gray-600 shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6'
            />
            <span
              className='absolute top-4 right-4 cursor-pointer'
              onClick={() => toggleVisible(!is_visible)}
            >
              {is_visible ? (
                <EyeOff height={'30px'} />
              ) : (
                <Eye height={'30px'} />
              )}
            </span>
          </div>
        </div>

        <div className='my-4'>
          <label
            htmlFor='email'
            className='block text-md font-medium leading-6 text-gray-600'
          >
            Repeat Password
          </label>
          <div className='mt-2 relative'>
            <input
              id='password_confirm'
              name='password'
              type={is_visible ? 'password' : 'text'}
              autoComplete='password_confirm'
              required
              className='block w-full rounded-md border-3  py-4 px-4 text-gray-600 shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6'
            />
            <span
              className='absolute top-4 right-4 cursor-pointer'
              onClick={() => toggleVisible(!is_visible)}
            >
              {is_visible ? (
                <EyeOff height={'30px'} />
              ) : (
                <Eye height={'30px'} />
              )}
            </span>
          </div>
        </div>

        <div>
          <button
            type='submit'
            className='flex w-full  justify-center rounded-full bg-indigo-600 px-3 py-4 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Reset Password
          </button>
        </div>
      </form>
    </>
  );
}
