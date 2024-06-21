/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { Fragment, useState, useRef, useEffect } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  Bars3BottomRightIcon,
  XMarkIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  MagnifyingGlassIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { v4 as uuid } from 'uuid';

import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline';
import NavItem from './NavItem';
import GetAQuoteModal from './GetAQuoteModal';
import SearchModal from './modals/SearchModal';
import Image from 'next/image';
import TobAppBar from './TopAppBar';
import { GetOrStoreAuthToken } from '@/utils/GetOrStoreAuthToken';
import AxiosProxy from '@/utils/AxiosProxy';
import { useRouter } from 'next/navigation';

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

interface User {
  firstName: string;
  email: string;
}

export default function AppHeader() {
  const router = useRouter();

  const [search, toggleSearch] = useState(false);

  const services: Array<NavLabel> = [
    {
      name: 'Legal Transcription',
      description: 'Expertise and Precision in every legal transcript',
      href: '/services/legal',
      icon: ArrowPathIcon,
      subtitle: 'Data Labeling customized to your needs',
      features: [
        'Enhance your artifical intelligence',
        'Global network of experts',
        'Highest quality annotated data',
      ],
      price: '0.10$ per task',
    },
    {
      name: 'Audio and Video Transcription services',
      description: 'Accurate transcription for audio and video content',
      href: '/services/audio-and-video',
      icon: CursorArrowRaysIcon,
      subtitle: 'Accurate translation in any language',
      features: [
        'Fast Delivery',
        'Unrivaled Accuracy',
        'Lowest Priced Anywhere',
      ],
      price: '0.11$ per word',
    },
    {
      name: 'General Transcription',
      description: 'Versatile transcription services for all your needs.',
      href: '/services/general',
      icon: ArrowPathIcon,
      subtitle: 'Data Labeling customized to your needs',
      features: [
        'Enhance your artifical intelligence',
        'Global network of experts',
        'Highest quality annotated data',
      ],
      price: '0.10$ per task',
    },
    {
      name: 'Focus groups and Interviews',
      description: 'Enhance your research with precise transcripts',
      href: '/services/focus-groups-and-interviews',
      icon: ChartPieIcon,
    },
    {
      name: 'Medical Transcription',
      description: 'Accurate and confidential medical transcription',
      href: '/services/medical',
      icon: FingerPrintIcon,
      subtitle: 'Industry best speech-to-text transcription software',
      features: [
        'Fast Delivery',
        'Unrivaled Accuracy',
        'Lowest Priced Anywhere',
      ],
      price: '0.07$ per minute',
    },
    {
      name: 'Academic & Conference Transcription',
      description: 'Transcription for academic and conference excellence',
      href: '/services/academic-and-conference',
      icon: SquaresPlusIcon,
      subtitle: 'Create custom datasets for AI model training',
      features: [
        'Customized styles, tagging and speaker names',
        'Timestamps to the millisecond',
        'Transcription formats for any AI system',
        'Highly secure platform & confidential data',
        'Annotation services available',
      ],
      price: '2.00$ per minute',
    },
  ];

  const solutions: Array<NavLabel> = [
    {
      name: 'Court reporting & Legal',
      description: 'Expert and accurate legal transcription, every time.',
      href: '/industry/legal',
      imgUrl: '/icons/legal-document.png',
    },
    {
      name: 'Corporate & general business',
      description: 'Expert transcription for seamless business operations',
      href: '/industry/enterprise',
      imgUrl: '/icons/paper.png',
    },
    {
      name: 'Media production',
      description: 'Capture every word in your media projects',
      href: '/industry/media-production',
      imgUrl: '/icons/video-editor.png',
    },
    {
      name: 'Digital & online learning',
      description:
        'Enhancing digital education with accurate transcription services.',
      href: '/industry/education',
      imgUrl: '/icons/online-learning.png',
    },

    {
      name: 'Government',
      description:
        'Secure and precise transcription for government and public sectors.',
      href: '/industry/government',
      imgUrl: '/icons/policy.png',
    },
    {
      name: 'Healthcare',
      description:
        'Accurate and reliable transcriptions that meets healthcare standards.',
      href: '/industry/healthcare',
      icon: BuildingOffice2Icon,
    },
  ];

  const resources: Array<NavLabel> = [
    {
      name: 'About Us',
      description: 'See how we make a difference.',
      href: '/about-us',
      icon: ChartPieIcon,
    },
    {
      name: 'Support',
      description: "We're here to assist you 24/7.",
      href: '/support',
      icon: InformationCircleIcon,
    },
    {
      name: 'FAQs',
      description: 'Quick solutions to your concerns.',
      href: '/faqs',
      icon: QuestionMarkCircleIcon,
    },
    {
      name: 'Legal',
      description: 'Understand our terms and policies.',
      href: '/legal',
      icon: FingerPrintIcon,
    },
  ];

  const menuPopovers = [
    { title: 'Industry', items: [...solutions] },
    { title: 'Services', items: [...services] },
    { title: 'Company', items: [...resources] },
  ];

  const account = [
    {
      name: 'Account Settings',
      description: 'Manage Account.',
      href: '/dashboard/account',
      icon: ChartPieIcon,
    },
    {
      name: 'Pending Orders',
      description: 'Pending Orders.',
      href: '/dashboard/pending',
      icon: ChartPieIcon,
    },
    {
      name: 'Delivered Orders',
      description: 'Completed Orders.',
      href: '/dashboard/delivered',
      icon: ChartPieIcon,
    },
  ];

  const [open, setOpen] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  let timeout: ReturnType<typeof setTimeout>;
  const timeoutDuration: number = 10;

  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState<User>({
    email: '',
    firstName: '',
  });

  const logout = () => {
    window.localStorage.removeItem('x-token');
    window.localStorage.removeItem('rft-btt');

    setIsAuth(false);

    router.push('/auth/login');
  };

  const buttonRefs = useRef<HTMLButtonElement[]>([]);

  const [openMenus, setOpenMenus] = useState<boolean[]>(
    menuPopovers.map(() => false),
  );

  const toggleMenu = (index: number) => {
    setOpenMenus((_prev) => {
      const to_update = [...menuPopovers.map(() => false)];
      to_update[index] = !_prev[index];
      return [...to_update];
    });
  };

  // const clearOpenMenu = () => {
  //   setOpenMenus(() => [...menuPopovers.map(() => false)]);
  // };

  // add delay before opening menu
  const onHover = (open: boolean, action: string, index: number) => {
    // if menu is open = close || close = open
    if (
      (!open && !openMenus[index] && action == 'onMouseEnter') ||
      (open && openMenus[index] && action == 'onMouseLeave')
    ) {
      clearTimeout(timeout);
      timeout = setTimeout(() => toggleMenu(index), timeoutDuration);
    }
    // clear delay
  };

  useEffect(() => {
    const activeIndex = openMenus.findIndex((value) => value);
    if (buttonRefs.current[activeIndex]) {
      // toggle menu by clicking button ref
      buttonRefs.current[activeIndex].click();
    }
  }, [openMenus]);

  useEffect(() => {
    if (window != undefined) {
      window.addEventListener('scroll', () => {
        const heightOffset = window.pageYOffset;
        if (heightOffset > 200) {
          document
            .querySelector('header')
            ?.classList.add('is-sticky', 'shadow-lg');
        } else {
          document
            .querySelector('header')
            ?.classList.remove('is-sticky', 'shadow-lg');
        }
      });
    }
  });

  const verifyAuthenticationStatus = async () => {
    const auth_token = window.localStorage.getItem('rft-btt');
    if (auth_token == null) {
      setIsAuth(false);
      setLoading(false);
      return null;
    }
    try {
      const response = await AxiosProxy.post(
        '/auth/refresh',
        {},
        {
          headers: {
            Authorization: 'Bearer ' + auth_token,
          },
        },
      );

      if (response.status == 201) {
        GetOrStoreAuthToken(response.data.access_token);
        window.localStorage.setItem('rft-btt', response.data.refresh_token);
        setIsAuth(true);
        setUser({
          email: response.data.email,
          firstName: response.data.firstName,
        });
      }
    } catch (err) {
      // @ts-ignore
      if (err.code == 'ERR_BAD_REQUEST') {
        // unauthorized request
        // @ts-ignore
        console.log(err.code);
      }
      // @ts-ignore
      if (err.code == 'ERR_NETWORK') {
        // @ts-ignore
        console.log(err.code);
      } else {
        // @ts-ignore
        console.log(err.code);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // check auth status
    verifyAuthenticationStatus();
  }, []);

  return (
    <div>
      <GetAQuoteModal open={showQuote} setOpen={setShowQuote} />

      <TobAppBar />
      <header
        className={classNames(
          'page-header',
          'bg-white',
          'relative',
          'transition',
          'w-full',
          'z-30',
        )}
      >
        <nav
          className='mx-auto flex relative max-w-7xl items-center justify-between lg:justify-end px-6 py-3 md:px-16 lg:px-20'
          aria-label='Global'
        >
          <div className='hidden lg:flex flex-1 absolute -top-1.5 left-6 md:left-16  lg:left-20'>
            <a
              href='/'
              aria-label='Verbalscripts Logo'
              className='-m-1.5 p-1.5 text-2xl font-bold'
            >
              <img
                className='h-[4.0rem] w-[100%] md:h-[4.0rem] lg:h-[4.8rem]'
                src='/icons/logo-png.png'
                alt='Logo Image'
              />
            </a>
          </div>
          <div className='flex items-center lg:hidden'>
            <a
              href='/'
              className='-m-1.5 p-1.5 text-2xl font-bold'
              aria-label='Verbalscripts Mobile Logo'
            >
              <img
                className='w-[2.2rem]'
                src='/icons/logo-v.png'
                alt='Mobile Logo Image'
              />
            </a>
          </div>

          <div className='flex items-center lg:hidden space-x-3'>
            <a
              href='#'
              onClick={() => toggleSearch(!search)}
              aria-label='Search Icon'
              className='text-sm  uppercase font-semibold rounded-full leading-6 py-2.5  px-2 text-gray-900 transition hover:bg-orange-100'
            >
              <MagnifyingGlassIcon className='w-5 text-gray-800' />
            </a>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3BottomRightIcon className='h-8 w-8' aria-hidden='true' />
            </button>
          </div>

          <Popover.Group className='hidden lg:flex lg:gap-x-1 lg:items-center'>
            <a
              href='/'
              className='text-sm uppercase font-semibold px-2 py-2.5 leading-6 text-gray-900 transition hover:bg-orange-100'
            >
              Home
            </a>

            {menuPopovers.map((popover, index) => (
              <Popover
                key={uuid()}
                onMouseEnter={() =>
                  onHover(openMenus[index], 'onMouseEnter', index)
                }
                onMouseLeave={() =>
                  onHover(openMenus[index], 'onMouseLeave', index)
                }
                className='relative'
              >
                {({ open }) => (
                  <>
                    <Popover.Button
                      ref={(element) =>
                        (buttonRefs.current[index] =
                          element as HTMLButtonElement)
                      }
                      className='flex uppercase text-sm px-2 py-2.5 items-center gap-x-1 text-md font-semibold leading-6 text-gray-900'
                    >
                      {popover.title}
                      <ChevronDownIcon
                        className='h-5 w-5 flex-none text-gray-400'
                        aria-hidden='true'
                      />
                    </Popover.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'
                    >
                      <Popover.Panel className='absolute -left-8 top-8 z-10 mt-3 w-screen max-w-xl overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                        <div className='p-4 w-full grid  grid-cols-1 gap-x-3 gap-y-3 lg:grid-cols-2'>
                          {popover.items.map((item: NavLabel) => (
                            <NavItem key={item.name} label={item} />
                          ))}
                        </div>
                        {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
      {callsToAction.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
        >
          <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          {item.name}
        </a>
      ))}
    </div> */}
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            ))}

            <a
              href='/contact-us'
              className='text-sm  uppercase font-semibold rounded-md leading-6 py-2.5  px-2 text-gray-900 transition hover:bg-orange-100'
            >
              Contact
            </a>
            <a
              href='#'
              onClick={() => toggleSearch(!search)}
              className='text-sm  uppercase font-semibold rounded-full leading-6 py-2.5  px-2 text-gray-900 transition hover:bg-orange-100'
            >
              <MagnifyingGlassIcon className='w-5 text-gray-800' />
            </a>
            <button
              onClick={() => setShowQuote(true)}
              className=' text-lg font-semibold  px-5 py-2 bg-indigo-600 transition text-center  hover:-translate-y-1 hover:shadow-xl rounded-full text-gray-100'
            >
              Get a Qoute
            </button>
            <a
              href='/upload-files'
              className='ml-1 text-lg font-semibold ring-1 ring-inset px-5 py-2 ring-indigo-500 hover:ring-indigo-400 text-indigo-500 hover:text-indigo-400 rounded-full'
            >
              Order Now
            </a>
          </Popover.Group>
          {/* <div className='hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-5'></div> */}
        </nav>

        <Dialog as='div' className='lg:hidden' onClose={setOpen} open={open}>
          <div className='fixed inset-0 z-10 bg-white-300' />

          <Dialog.Panel className='fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='/' className='-m-1.5 p-1.5 text-2xl font-bold'>
                <img className='h-[4rem]' src='/icons/logo-v.png' alt='' />
              </a>
              <button
                type='button'
                className='-m-1.5 rounded-md p-2.5 '
                onClick={() => setOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon
                  className='h-8 w-8 text-gray-900'
                  aria-hidden='true'
                />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-4 py-6 px-5'>
                  <a
                    href='/'
                    className='-mx-3 block rounded-lg px-3 py-2 text-xl  font-bold leading-7 text-gray-800 hover:text-gray-900'
                  >
                    Home
                  </a>
                  {menuPopovers.map((popover, index) => (
                    <Disclosure
                      key={`${popover.title}${index}`}
                      as='div'
                      className='-mx-3'
                    >
                      {({ open }) => (
                        <>
                          <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-xl font-bold leading-7 text-gray-800 hover:text-gray-900'>
                            <span
                              className={classNames(
                                open ? 'text-gray-900' : '',
                              )}
                            >
                              {popover.title}
                            </span>
                            <ChevronDownIcon
                              className={classNames(
                                'h-8 w-8 flex-none transition-all',
                                open ? 'rotate-0' : '-rotate-90',
                              )}
                              aria-hidden='true'
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className='mt-2 ml-2 space-y-1 border-l border-gray-400'>
                            {[...popover.items].map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                as='a'
                                href={item.href}
                                className='block rounded-lg py-2 pl-6 pr-3 text-lg font-semibold leading-7 text-gray-600 hover:bg-gray-50'
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                  {isAuth ? (
                    <Disclosure as='div' className='-mx-3'>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-xl font-bold leading-7 text-gray-800 hover:text-gray-900'>
                            <span
                              className={classNames(
                                open ? 'text-gray-900' : '',
                              )}
                            >
                              My Account
                            </span>
                            <ChevronDownIcon
                              className={classNames(
                                'h-8 w-8 flex-none transition-all',
                                open ? 'rotate-0' : '-rotate-90',
                              )}
                              aria-hidden='true'
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className='mt-2 ml-2 space-y-1 border-l border-gray-400'>
                            {[...account].map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                as='a'
                                href={item.href}
                                className='block rounded-lg py-2 pl-6 pr-3 text-lg font-semibold leading-7 text-gray-600 hover:bg-gray-50'
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ) : null}

                  <div className='border-b py-2 border-gray-200'></div>
                  <button
                    onClick={() => setShowQuote(true)}
                    className='-mx-3 block underline underline-offset-2 rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-indigo-500 hover:bg-gray-50'
                  >
                    Request a Quote
                  </button>
                  <a
                    href='/upload-files'
                    className='-mx-3 underline underline-offset-2 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-indigo-500 hover:bg-gray-50'
                  >
                    Place Order
                  </a>
                </div>

                <div className='mx-4 mb-3'>
                  {isAuth ? (
                    <a
                      href='/dashboard/pending'
                      className='-mx-3 block text-center rounded-full  bg-indigo-500  px-3 py-2.5 text-xl font-semibold leading-7 text-white hover:bg-indigo-400 hover:text-gray-200'
                    >
                      My Files
                    </a>
                  ) : (
                    <a
                      href='/dashboard/pending'
                      className='-mx-3 block text-center rounded-full  bg-indigo-500  px-3 py-2.5 text-xl font-semibold leading-7 text-white hover:bg-indigo-400 hover:text-gray-200'
                    >
                      Get Started
                    </a>
                  )}
                </div>
                {!isAuth ? (
                  <div className='mx-4 grid grid-cols-1 md:grid-cols-1  gap-y-3 md:gap-x-10 divide-x divide-gray-900/5 bg-gray-50'>
                    <div>
                      <a
                        href='/auth/login'
                        className='-mx-3 block text-center rounded-full ring-1 ring-inset ring-indigo-500  px-3 py-2.5 text-xl font-semibold leading-7 text-indigo-500 hover:ring-indigo-400 hover:text-indigo-400'
                      >
                        Transcriber Login
                      </a>
                    </div>{' '}
                    <div>
                      <a
                        href='/auth/login'
                        className='-mx-3 block text-center rounded-full ring-1 ring-inset ring-indigo-500  px-3 py-2.5 text-xl font-semibold leading-7 text-indigo-500 hover:ring-indigo-400 hover:text-indigo-400'
                      >
                        Client Login
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className='mx-4 block '>
                    <button
                      onClick={() => logout()}
                      className='w-full text-center focus:ring-4 focus:outline-none focus:ring-indigo-300 rounded-full ring-1 ring-inset ring-indigo-500  px-3 py-2.5 text-xl font-semibold leading-7 text-indigo-500 hover:ring-indigo-400 hover:text-indigo-400'
                    >
                      Sign out
                    </button>
                  </div>
                )}

                <div className='flex items-center justify-evenly mt-10'>
                  <a href='/privacy-policy' className='text-gray-600 text-sm'>
                    {' '}
                    Privacy
                  </a>
                  <span className='text-gray-600 text-xl'>|</span>
                  <a href='/privacy-policy' className='text-gray-600 text-sm'>
                    Terms and conditions
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className='md:hidden bg-white fixed bottom-0 left-0 right-0 flex  justify-center px-3 py-4 z-30 shadow-2xl gap-x-5'>
        <div className='max-w-7xl'>
          <button
            onClick={() => setShowQuote(true)}
            className=' rounded-full ring-1 ring-inset ring-indigo-500  px-6 py-2.5 text-xl font-semibold leading-7 text-indigo-500 hover:ring-indigo-400 hover:text-indigo-400'
          >
            Get a Qoute
          </button>
        </div>

        <div className='mt-2'>
          <a
            href='/upload-files'
            className='rounded-full  bg-indigo-500  px-6 py-2.5 text-xl font-semibold leading-7 text-white hover:bg-indigo-400 hover:text-gray-200'
          >
            Order Now
          </a>
        </div>
      </div>
      <SearchModal open={search} setOpen={toggleSearch} />
    </div>
  );
}
