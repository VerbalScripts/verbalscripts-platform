import type { Metadata } from 'next';
import ForgotPassword from '@/components/auth/ForgotPassword';
import ResetAccount from '@/components/auth/ResetAccount';
import SignInForm from '@/components/auth/SignInForm';
import SignUpForm from '@/components/auth/SignUpForm';
import AuthHeader from '@/components/AuthHeader';
import { GoogleOAuthProvider } from '@react-oauth/google';

interface AuthPageProps {
  params: { type: string };
}

export async function generateMetadata({
  params,
}: AuthPageProps): Promise<Metadata> {
  if (params.type == 'login') {
    return { title: 'VerbalScripts | Sign In' };
  }
  if (params.type == 'register') {
    return { title: 'VerbalScripts | Sign Up' };
  }
  if (params.type == 'reset-password') {
    return { title: 'VerbalScripts | Password Reset' };
  }

  if (params.type == 'reset-account') {
    return { title: 'VerbalScripts | Account Reset' };
  }

  return { title: 'VerbalScripts | Authenticate' };
}

export default function AuthPage({ params }: AuthPageProps) {
  return (
    <GoogleOAuthProvider clientId='518999707678-blqrbflnrb469fd0pei88t5peku4c2ka.apps.googleusercontent.com'>
      <div className='bg-white max-h-screen'>
        <div className='flex'>
          <div className='order-1 hidden lg:block  w-full'>
            <img src='/pics/78.png' className='h-full object-cover' alt='' />
          </div>

          <div className='max-h-screen h-screen overflow-y-auto max-w-2xl w-full    bg-white'>
            <AuthHeader />

            <div className=' flex flex-col justify-between my-10 md:my-0 px-8'>
              <div className='py-10'>
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
                <a className='underline text-indigo-500 underline-offset-4' href='/legal/privacy-policy'>
                  {' '}
                  Privacy Policy
                </a>{' '}
                and{'  '}
                <a className='underline text-indigo-500 underline-offset-4' href='/legal/terms-of-service'>
                  {' '}
                  Terms of Service
                </a>{' '}
                apply.
              </div>
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
