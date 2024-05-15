'use client';

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { Fragment, useState, useRef, useEffect } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ComputerDesktopIcon,
  UserIcon,
  ArrowUpTrayIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
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

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function AppHeader() {
  const services: Array<NavLabel> = [
    {
      name: 'Legal Transcription',
      description: 'Build strategic funnels that will convert',
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
      name: 'Video and Audio Transcription services',
      description: 'Speak directly to your customers',
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
      description: 'Build strategic funnels that will convert',
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
      description: 'Get a better understanding of your traffic',
      href: '/services/focus-groups-and-interviews',
      icon: ChartPieIcon,
    },
    {
      name: 'Medical Transcription',
      description: 'Your customers’ data will be safe and secure',
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
      description: 'Connect with third-party tools',
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
      description:
        'We convert audio/video content into transcripts quickly and securing to save law firms, investigators, police force, or research firms time and money.',
      href: '/solutions/legal',
      imgUrl: '/icons/legal-document.png',
    },
    {
      name: 'Corporate & general business',
      description:
        'Customized for your large volume needs, including a variety of enterprise security requirements.',
      href: '/solutions/enterprise',
      imgUrl: '/icons/paper.png',
    },
    {
      name: 'Media production',
      description:
        'The very best in human intelligence requires top quality training data for speech NLP and computer vision models.',
      href: '/solutions/ai',
      imgUrl: '/icons/video-editor.png',
    },
    {
      name: 'Digital & online learning',
      description:
        'Fast, easy lecture and dissertation transcripts for students or faculty, compatible with NVivo and other research platforms.',
      href: '/solutions/education',
      imgUrl: '/icons/online-learning.png',
    },

    {
      name: 'Government',
      description:
        'Making live events, meetings, ad campaigns and press briefings more accessible and actionable.',
      href: '/solutions/government',
      imgUrl: '/icons/policy.png',
    },
  ];

  const resources: Array<NavLabel> = [
    {
      name: 'About Us',
      description: 'Learn More About Us.',
      href: '/about-us',
      icon: ChartPieIcon,
    },
    {
      name: 'Support',
      description: 'Get help and ask queries',
      href: '/support',
      icon: InformationCircleIcon,
    },
    {
      name: 'FAQs',
      description: 'Frequently asked questions',
      href: '/faqs',
      icon: QuestionMarkCircleIcon,
    },
    {
      name: 'Terms and Conditions',
      description: 'Terms, privacy and usage.',
      href: '/terms-and-conditions',
      icon: FingerPrintIcon,
    },
  ];

  const menuPopovers = [
    { title: 'Industry', items: [...solutions] },
    { title: 'Services', items: [...services] },
    { title: 'Company', items: [...resources] },
  ];

  const [open, setOpen] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  let timeout: ReturnType<typeof setTimeout>;
  const timeoutDuration: number = 10;

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

  // useEffect(() => {
  //   console.log(buttonRefs)
  // }, [buttonRefs])
  // const handleClick = (open: boolean) => {
  //   setMenuOpen(!open);
  //   clearTimeout(timeout);
  // };

  // const handleClickOutside = (event: Event) => {
  //   buttonRefs.current.forEach((buttonRef) => {
  //     if (buttonRef && !buttonRef.contains(event.target as Node)) {
  //       event.stopPropagation();
  //       clearOpenMenu();
  //     }
  //   });
  // };

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
      // document.addEventListener('mousedown', handleClickOutside);
      // return () => {
      //   document.removeEventListener('mousedown', handleClickOutside);
      // };
    }
  });

  return (
    <>
      <GetAQuoteModal open={showQuote} setOpen={setShowQuote} />

      <div className='mx-auto  max-w-7xl relative z-30'>
        <p className='hidden relative z-50 md:flex  h-10 items-center  justify-end space-x-6  text-sm font-medium text-white px-6 md:px-16 lg:px-20'>
          <a
            href='/dashboard/pending'
            className='-mx-3 flex items-center underline  underline-offset-4 gap-x-5 rounded-lg px-3 py-2.5 text-base  transition leading-7 text-white hover:text-orange-400'
          >
            <ArrowUpTrayIcon className='h-5 w-5' aria-hidden='true' />
            Try Now
          </a>
          |
          <a
            href='/auth/login'
            className='-mx-3 flex items-center gap-x-5 rounded-lg px-3 py-2.5 text-base  transition leading-7 text-white hover:text-orange-400'
          >
            <ComputerDesktopIcon className='h-5 w-5' aria-hidden='true' />
            Transcriber Login
          </a>
          |
          <a
            href='/auth/login'
            className='-mx-3 flex items-center gap-x-5 rounded-lg px-3 py-2.5 text-base transition leading-7 text-white hover:text-orange-400'
          >
            <UserIcon className='h-5 w-5' aria-hidden='true' />
            Client Login
          </a>
        </p>
      </div>
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
          className='mx-auto flex relative max-w-7xl items-center justify-between lg:justify-end px-6 py-4 md:px-16 lg:px-20'
          aria-label='Global'
        >
          <div className='hidden lg:flex flex-1 absolute -top-1 md:-top-2 left-6 md:left-16  lg:left-20'>
            <a href='/' className='-m-1.5 p-1.5 text-2xl font-bold'>
              <img
                className='h-[4.0rem] md:h-[4.0rem] lg:h-[4.8rem]'
                src='/icons/logo-png.png'
                alt=''
              />
            </a>
          </div>
          <div className='flex items-center lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-8 w-8' aria-hidden='true' />
            </button>
            <a href='/' className='-m-1.5 p-1.5 text-2xl font-bold'>
              <img className='h-[3rem]' src='/icons/logo-v.png' alt='' />
            </a>
          </div>

          <div className='flex items-center lg:hidden'>
            <a
              href='/dashboard/pending'
              className='-mx-3  text-center rounded-full inline-flex items-center gap-x-2 bg-indigo-500  px-3 py-1.5 text-xl font-semibold leading-7  hover:bg-indigo-400 hover:text-gray-200'
            >
              <ArrowUpTrayIcon className='text-white h-5 w-5' />
              <span className='text-white'>Try Now</span>
            </a>
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
                        <div className='p-4 w-full grid  grid-cols-1 gap-x-8 gap-y-3 lg:grid-cols-2'>
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
                  <Disclosure as='div' className='-mx-3'>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-xl font-bold leading-7 text-gray-800 hover:text-gray-900'>
                          <span
                            className={classNames(open ? 'text-gray-900' : '')}
                          >
                            Services
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
                          {[...services].map((item) => (
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
                  <Disclosure as='div' className='-mx-3'>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-xl font-bold leading-7 text-gray-800 hover:text-gray-900'>
                          <span
                            className={classNames(open ? 'text-gray-900' : '')}
                          >
                            Industries
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
                          {[...solutions].map((item) => (
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

                  <Disclosure as='div' className='-mx-3'>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-xl font-bold leading-7 text-gray-800 hover:text-gray-900'>
                          <span
                            className={classNames(open ? 'text-gray-900' : '')}
                          >
                            Company
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
                          {[...resources].map((item) => (
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
                  <a
                    href='/dashboard/pending'
                    className='-mx-3 block text-center rounded-full  bg-indigo-500  px-3 py-2.5 text-xl font-semibold leading-7 text-white hover:bg-indigo-400 hover:text-gray-200'
                  >
                    Get Started
                  </a>
                </div>
                <div className='mx-4 grid grid-cols-1 md:grid-cols-1  gap-y-3 md:gap-x-10 divide-x divide-gray-900/5 bg-gray-50'>
                  <div>
                    <a
                      href='#'
                      className='-mx-3 block text-center rounded-full ring-1 ring-inset ring-indigo-500  px-3 py-2.5 text-xl font-semibold leading-7 text-indigo-500 hover:ring-indigo-400 hover:text-indigo-400'
                    >
                      Transcriber Login
                    </a>
                  </div>{' '}
                  <div>
                    <a
                      href='#'
                      className='-mx-3 block text-center rounded-full ring-1 ring-inset ring-indigo-500  px-3 py-2.5 text-xl font-semibold leading-7 text-indigo-500 hover:ring-indigo-400 hover:text-indigo-400'
                    >
                      Client Login
                    </a>
                  </div>
                </div>
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
    </>
  );
}
