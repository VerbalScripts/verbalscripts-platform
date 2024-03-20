import React, { FormEvent } from 'react';

export default function ForgotPassword() {
  // const validation = {};

  // const [loading, setLoading] = useState(false);

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
      <div className='flex lg:hidden justify-start text-3xl  md:text-4xl text-gray-700 font-bold py-10 leading-10'>
        <a href='/'>
          <span>Verbal</span>
          <span className='text-orange-500 italic'>Scripts</span>
        </a>
      </div>
      <div className='mx-auto max-w-md  pt-10 md:pt-20   lg:pt-24'>
        <div className='mb-10 md:mb-16 text-center  md:text-left text-3xl md:text-4xl font-bold text-gray-700'>
          Enter Email Address
        </div>
      </div>
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
            Email address
          </label>
          <div className='mt-2'>
            <input
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='block w-full rounded-md border-3 py-4 px-4 text-gray-600 shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div>
          <button
            type='submit'
            className='flex w-full  justify-center rounded-full bg-indigo-600 px-3 py-4 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Proceed
          </button>
        </div>
      </form>
    </>
  );
}
