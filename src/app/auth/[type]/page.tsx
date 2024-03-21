'use client';

import { useParams } from 'next/navigation';

import ForgotPassword from '@/components/auth/ForgotPassword';
import ResetAccount from '@/components/auth/ResetAccount';
import SignInForm from '@/components/auth/SignInForm';
import SignUpForm from '@/components/auth/SignUpForm';
import AuthHeader from '@/components/AuthHeader';

export default function Login() {
  const params = useParams<{ type: string }>();

  return (
    <div className='bg-white md:bg-gray-200 min-h-screen  overflow-x-hidden'>
      <AuthHeader />

      <div className='mx-auto max-w-xl my-10 md:my-20 rounded-lg flex flex-col justify-between px-5 bg-white'>
        <div className='py-16'>
          {params.type == 'login' ? (
            <SignInForm />
          ) : params.type == 'register' ? (
            <SignUpForm />
          ) : params.type == 'reset-password' ? (
            <ForgotPassword />
          ) : params.type == 'reset-account' ? (
            <ResetAccount />
          ) : (
            <SignUpForm />
          )}
        </div>

        <div className='mx-auto text-sm text-gray-600 max-w-md mb-3 text-center'>
          This site is protected by reCAPTCHA and the VerbalScripts{' '}
          <span className='underline'> Privacy Policy</span> and{'  '}
          <span className='underline'> Terms of Service</span> apply.
        </div>
      </div>
    </div>
  );
}
