import { Fragment, useRef, useState, FormEvent } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import AxiosProxy from '@/utils/AxiosProxy';
import { useSetRecoilState } from 'recoil';
import { systemProcessStatus } from '@/store/features/fileUpload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faInstagram,
  faXTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import ComponentSpinner from '@/components/ComponentSpinner';

interface TalkToUsProps {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}

export default function TalkToUs({ open, setOpen }: TalkToUsProps) {
  const cancelButtonRef = useRef(null);
  const folderRef = useRef(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const setSystemProgressContent = useSetRecoilState(systemProcessStatus);

  const postMessage = async (event: FormEvent) => {
    try {
      event.preventDefault();
      setLoading(true);

      const response = await AxiosProxy.post('/contact/add', {
        companyName,
        email,
        firstName,
        lastName,
        content: message,
      });

      if (response.status == 201) {
        setOpen(false);
        setSystemProgressContent({
          show: true,
          message: `Message  has been sent successfully`,
          title: 'Message Sent',
          success: true,
        });
      }
    } catch (err) {
        setSystemProgressContent({
            show: true,
            message: `Could Not Reach our contact`,
            title: 'Message Transmit Failed',
            success: false,
          });
    } finally {
      setLoading(false);
    }
  };


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-[80]'
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
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl'>
                <div className='flex'>
                  <div className='relative z-[1] max-w-[24rem] lg:max-w-[28rem]'>
                    <img
                      src='/dashboard/talk-to-us.jpg'
                      className='object-cover  w-full h-full z-[20]   '
                      alt='talk-to-is'
                    />
                    <div className='absolute left-0 w-full bottom-0 h-[13rem] bg-zinc-900/70 px-6 md:px-10 flex flex-col justify-center '>
                      <p className='text-2xl md:text-3xl  font-bold text-left text-gray-100  00 section-title'>
                        Need Help ?
                      </p>
                      <p className='mt-2 text-lg  text-left text-gray-200 section-title'>
                        Kindly reach out to get started!
                      </p>
                      <div className='flex items-center mt-5 gap-x-3'>
                        <a
                          href=''
                          aria-label='LinkedIn handle'
                          className='text-center mb-3  rounded-xl transition hover:bg-indigo-500 flex h-10 w-10 items-center justify-center'
                        >
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            className='h-6 w-6 text-gray-100'
                          />
                        </a>
                        <a
                          href=''
                          aria-label='Twitter handle'
                          className='text-center mb-3 flex h-10 w-10 rounded-xl transition hover:bg-indigo-500 items-center justify-center'
                        >
                          <FontAwesomeIcon
                            icon={faXTwitter}
                            className='h-6 w-6 text-gray-100'
                          />
                        </a>

                        <a
                          href=''
                          aria-label='Facebook handle'
                          className='text-center mb-3 flex rounded-xl transition hover:bg-indigo-500 h-10 w-10 items-center justify-center'
                        >
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className='h-6 w-6 text-gray-100'
                          />
                        </a>
                        <a
                          target='_blank'
                          aria-label='Instagram handle'
                          href='https://www.instagram.com/verbal_scripts?igsh=dDliMGVkNnhoYmdv'
                          className='text-center mb-3 flex rounded-xl transition hover:bg-indigo-500 h-10 w-10 items-center justify-center'
                        >
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className='h-6 w-6  text-gray-100'
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='px-4 py-6 w-full'>
                    <div className='sm:flex flex-col mt-7'>
                      <div className='text-left'>
                        <Dialog.Title
                          as='h3'
                          className='text-4xl font-bold leading-6 text-gray-800'
                        >
                          Get In Touch
                        </Dialog.Title>
                        <div className='mt-2'></div>
                      </div>
                    </div>

                    <form
                      action='#'
                      method='POST'
                      onSubmit={postMessage}
                      className='mx-auto mt-5 max-w-xl '
                    >
                      <div className='grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 mb-2'>
                        <div className=''>
                          <label
                            htmlFor='first-name'
                            className='block text-md font-semibold leading-6 text-gray-900 mb-2.5'
                          >
                            First Name
                          </label>

                          <input
                            type='text'
                            id='firstName'
                            name='firstName'
                            onChange={(e) => setFirstName(e.target.value)}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            required
                          />
                        </div>
                        <div className=''>
                          <label
                            htmlFor='first-name'
                            className='block text-md font-semibold leading-6 text-gray-900 mb-2.5'
                          >
                            Last Name
                          </label>

                          <input
                            type='text'
                            id='lastName'
                            name='lastName'
                            onChange={(e) => setLastName(e.target.value)}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            required
                          />
                        </div>
                        <div className='sm:col-span-2'>
                          <label
                            htmlFor='first-name'
                            className='block text-md font-semibold leading-6 text-gray-900 mb-2.5'
                          >
                            Company Name (optional)
                          </label>

                          <input
                            type='text'
                            id='companyName'
                            name='companyName'
                            onChange={(e) => setCompanyName(e.target.value)}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                          />
                        </div>
                        <div className='sm:col-span-2'>
                          <label
                            htmlFor='email'
                            className='block mb-2 text-md font-medium text-gray-900 dark:text-white'
                          >
                            Your email
                          </label>
                          <input
                            type='email'
                            id='email'
                            name='email'
                            onChange={(e) => setEmail(e.target.value)}
                            aria-describedby='helper-text-explanation'
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                          />
                        </div>
                        <div className='sm:col-span-2'>
                          <label
                            htmlFor='message'
                            className='block mb-2 text-md font-medium text-gray-900 dark:text-white'
                          >
                            Message
                          </label>
                          <textarea
                            id='message'
                            onChange={(e) => setMessage(e.target.value)}
                            rows={4}
                            className='block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            placeholder='I want ...'
                          ></textarea>
                        </div>
                      </div>
                      <div className='my-5 flex justify-end gap-x-5'>
                        <button
                          type='button'
                          disabled={loading}
                          className='mt-3 inline-flex w-full justify-center rounded-xl px-3 py-2.5  font-semibold text-gray-800 shadow-sm   sm:mt-0 sm:w-auto'
                          onClick={() => setOpen(false)}
                          ref={cancelButtonRef}
                        >
                          Cancel
                        </button>
                        <button
                          type='submit'
                          disabled={loading}
                          className='rounded-xl bg-indigo-500 px-8 py-1.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        >
                          {loading ? <ComponentSpinner /> : null}
                          <span>Let{"'"}s Talk</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
