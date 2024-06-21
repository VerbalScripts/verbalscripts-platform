'use client';

export default function SecuritySettings() {
  return (
    <div>
      <div className='space-y-6 mb-5'>
        <div className='mb-3'>
          <h2 className='text-2xl font-semibold leading-7 text-gray-900 dark:text-gray-100'>
            Reset Account Password
          </h2>
          <p className='mb-5 mt-1 text-md leading-6 text-gray-600 dark:text-gray-200'>
            To change your password, We will send a reset password link to the
            email address connected to this account.
          </p>
        </div>
        <div className='flex items-center justify-start gap-x-6'>
          <button
            type='submit'
            className='rounded-full bg-indigo-500 px-7 py-2 text-lg  font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Reset Password
          </button>
        </div>
      </div>

      <div className='space-y-6 mb-5'>
        <div className='mb-3'>
          <h2 className='text-2xl font-semibold leading-7 text-gray-900 dark:text-gray-100'>
            Change Username
          </h2>
          <p className='mb-5 mt-1 text-md leading-6 text-gray-600 dark:text-gray-200'>
            Changing your username can have unintended side effects
          </p>
        </div>
        <div className='flex items-center justify-start gap-x-6'>
          <button
            type='submit'
            className='rounded-full bg-indigo-500 px-7 py-2 text-lg  font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Change Username
          </button>
        </div>
      </div>

      <div className='space-y-6 mb-5'>
        <div className='mb-3'>
          <h2 className='text-2xl font-semibold leading-7 text-gray-900 dark:text-gray-100'>
            Delete account
          </h2>
          <p className='mb-5 mt-1 text-md leading-6 text-gray-600 dark:text-gray-200'>
            Your account is currently an owner in these organizations:
            bryan-coder, Dhahabu-Themanini, and VerbalScripts You must remove
            yourself, transfer ownership, or delete these organizations before
            you can delete your user.
          </p>
        </div>
        <div className='flex items-center justify-start gap-x-6'>
          <button
            type='submit'
            className='rounded-full bg-red-100 border border-ring-400  px-7 py-2 text-lg  font-semibold text-red-400 shadow-sm hover:bg-red-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-50'
          >
            Change Username
          </button>
        </div>
      </div>
    </div>
  );
}
