/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { EnvelopeOpenIcon } from '@heroicons/react/24/outline';
import AxiosProxy from '@/utils/AxiosProxy';
import { systemProcessStatus } from '@/store/features/fileUpload';
import { useSetRecoilState } from 'recoil';
import ComponentSpinner from '../ComponentSpinner';

interface UpdateUsernameProps {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}
export default function UpdateUsername({ open, setOpen }: UpdateUsernameProps) {
  const cancelButtonRef = useRef<HTMLButtonElement | null>(null);
  const [loading, setLoading] = useState(false);
  const setSystemProgressContent = useSetRecoilState(systemProcessStatus);
  const emailRef = useRef<HTMLInputElement>(null);

  const httpUpdateUsername = async () => {
    try {
      setLoading(true);

      if (
        emailRef.current == null ||
        (emailRef.current != null && emailRef.current.value.length > 10)
      ) {
        return false;
      }

      const response = await AxiosProxy.post(`/users/update`, {
        email: emailRef.current.value,
      });

      if (response.status == 200) {
        setSystemProgressContent({
          show: true,
          message: `Your account username has been updated`,
          title: 'Account Email Update',
          success: true,
        });
      }
    } catch (err) {
      // @ts-ignore
      if (err.code == 'NETWORK_ERR') {
        throw new Error('There was a problem with Your Internet Connection');
      }

      setSystemProgressContent({
        show: true,
        message: `An Unknown error ocurred and request failed`,
        title: 'Account Email Update Failed',
        success: false,
      });
    } finally {
      setOpen(false);
      setLoading(false);
    }
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-50'
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                  <div className='sm:flex flex-col sm:items-center'>
                    <div className=' mb-5 mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:h-20 sm:w-20'>
                      <EnvelopeOpenIcon
                        className='h-10 w-10 text-indigo-500'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='text-center sm:ml-4 sm:mt-0 sm:text-left'>
                      <Dialog.Title
                        as='h3'
                        className='text-xl font-semibold leading-6 text-gray-700'
                      >
                        Change Email Account
                      </Dialog.Title>
                      <div className='mt-2'></div>
                    </div>
                  </div>
                  <form className='space-y-6' action='#' method='POST'>
                    <div>
                      <div className='mt-2 w-full'>
                        <input
                          id='email-address'
                          name='email'
                          type='email'
                          ref={emailRef}
                          autoComplete='email'
                          required
                          placeholder='Enter New Account Email'
                          className='block w-full rounded-md border-0 py-3.5 text-gray-600 shadow-sm text-lg font-semibold ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:leading-6'
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className=' px-4 py-3 flex gap-y-2 flex-col sm:px-6 mb-5'>
                  <button
                    type='button'
                    disabled={loading}
                    className='inline-flex w-full justify-center rounded-xl bg-indigo-500 px-4 py-2.5  font-semibold text-white shadow-sm hover:bg-indigo-400  sm:w-auto'
                    onClick={() => httpUpdateUsername()}
                  >
                    {loading ? <ComponentSpinner /> : null} <span>Save</span>
                  </button>
                  <button
                    type='button'
                    disabled={loading}
                    className='mt-3 inline-flex w-full justify-center rounded-xl px-3 py-2.5  font-semibold text-gray-800 sm:mt-0 sm:w-auto'
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
