'use client';

export default function SecuritySettings() {
  return (
    <div>
      <div className='space-y-6'>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-2xl font-semibold leading-7 text-gray-900 dark:text-white'>
            Change Password
          </h2>
          <p className='mt-2 mb-3 text-md leading-6 text-gray-600 dark:text-white'>
            To change your password, We will send a reset password link to the
            email address connected to this account.
          </p>
        </div>
      </div>

      <div className='flex items-center justify-start gap-x-6'>
        <button
          type='submit'
          className='rounded-full bg-indigo-500 px-8 py-2.5 text-lg  font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}
