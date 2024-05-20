import type { Metadata } from 'next';
import ForgotPassword from '@/components/auth/ForgotPassword';
import ResetAccount from '@/components/auth/ResetAccount';
import SignInForm from '@/components/auth/SignInForm';
import SignUpForm from '@/components/auth/SignUpForm';
import AuthHeader from '@/components/AuthHeader';
import AppFooter from '@/components/AppFooter';

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
    <div className='bg-zinc-900 '>
      <AuthHeader route={params.type} />

      <div className='flex  bg-white pb-60'>
        <div className='order-1 hidden md:block rounded-xl bg-gray-200 mx-2 h-screen w-full'>
          <img
            src='/pics/78.png'
            className='h-[100%] object-cover rounded-xl'
            alt=''
          />
        </div>

        <div className=' overflow-x-hidden max-w-lg w-full my-10 md:my-0  flex flex-col justify-between px-8 bg-white'>
          <div className='py-14'>
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
      <AppFooter />
    </div>
  );
}
