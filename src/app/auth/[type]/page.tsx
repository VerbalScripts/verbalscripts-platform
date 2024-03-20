'use client';

import ForgotPassword from '@/components/auth/ForgotPassword';
import ResetAccount from '@/components/auth/ResetAccount';
import SignInForm from '@/components/auth/SignInForm';
import SignUpForm from '@/components/auth/SignUpForm';
import { useParams } from 'next/navigation';

export default function Login() {
  const params = useParams<{ type: string }>();

  return (
    <div className='bg-white  grid lg:grid-cols-2'>
      <div className='hidden h-screen lg:flex md:flex-col md:justify-between backdrop-blur-lg login-img'>
        <div className='flex justify-start text-4xl text-white font-bold py-10 leading-10 px-10'>
          <a href='/'>
            <span>Verbal</span>
            <span className='text-orange-500 italic'>Scripts</span>
          </a>
        </div>

        <div className='pb-40 px-20'>
          <div className='max-w-md'>
            <p className='text-4xl text-bold lg:text-4xl text-gray-100 mb-4 leading-[3.5rem]'>
              Welcome to VerbalScripts WorkHub
            </p>

            <p className='text-gray-100 text-xl lg:text-2xl '>
              Work flexibly from anywhere on a variety of work including{' '}
              <a href='#' className='text-orange-500 underline'>
                transcription
              </a>
              ,{' '}
              <a href='#' className='text-orange-500 underline'>
                translation
              </a>
              , annotation and subtitling.
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-between md:max-h-screen bg-white md:overflow-y-scroll overflow-x-hidden px-5'>
        <div className='animate-auth'>
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
