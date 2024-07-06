'use client';

import { useState } from 'react';
import ChangeUsername from '../modals/ChangeUsername';
import UpdateUsername from '../modals/UpdateUsername';
import ResetAccountPassword from '../modals/ResetAccountPassword';

export default function SecuritySettings() {
  const [changeUsername, setChangeUsername] = useState(false);
  const [warnUsername, setWarnUsername] = useState(false);
  const [resetAccount, setResetAccount] = useState(false);
  // const [deleteAcc, setDeleteAcc] = useState(false);

  return (
    <div>
      <ChangeUsername
        openUpdate={setChangeUsername}
        open={warnUsername}
        setOpen={setWarnUsername}
      />
      <UpdateUsername open={changeUsername} setOpen={setChangeUsername} />
      <ResetAccountPassword open={resetAccount} setOpen={setResetAccount} />

      <div className='space-y-6 mb-10'>
        <div className='mb-3'>
          <h2 className='text-2xl py-2 mb-3 border-b border-gray-200 dark:border-gray-700 font-semibold leading-7 text-gray-700 dark:text-gray-100'>
            Reset Account Password
          </h2>
          <p className='mb-5 mt-1 text-md leading-6 text-gray-600 dark:text-gray-200'>
            To change your password, We will send a reset password link to the
            email address connected to this account.
          </p>
        </div>
        <div className='flex items-center justify-start gap-x-6'>
          <button
            type='button'
            onClick={() => setResetAccount(true)}
            className='rounded-full bg-indigo-500 px-7 py-2 text-lg  font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Reset Password
          </button>
        </div>
      </div>

      <div className='space-y-6 mb-10'>
        <div className='mb-3'>
          <h2 className='text-2xl py-2 mb-3 border-b border-gray-200 dark:border-gray-700 font-semibold leading-7 text-gray-700 dark:text-gray-100'>
            Change Username
          </h2>
          <p className='mb-5 mt-1 text-md leading-6 text-gray-600 dark:text-gray-200'>
            Changing your username can have unintended side effects
          </p>
        </div>
        <div className='flex items-center justify-start gap-x-6'>
          <button
            type='button'
            onClick={() => setWarnUsername(true)}
            className='rounded-full bg-black px-7 py-2 text-lg  font-semibold text-gray-200 shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Change Username
          </button>
        </div>
      </div>

      <div className='space-y-6 mb-10'>
        <div className='mb-3'>
          <h2 className='text-2xl py-2 mb-3 border-b border-gray-200 dark:border-gray-500 font-semibold leading-7 text-red-400 dark:text-red-400'>
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
            type='button'
            onClick={() => {}}
            className='rounded-full bg-red-100 border border-ring-400  px-7 py-2 text-lg  font-semibold text-red-400 shadow-sm hover:bg-red-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-50'
          >
            Change Username
          </button>
        </div>
      </div>
    </div>
  );
}
