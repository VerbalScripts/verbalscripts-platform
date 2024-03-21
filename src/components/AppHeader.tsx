/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, {
  Fragment,
  useState,
  MutableRefObject,
  useRef,
  useEffect,
} from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ComputerDesktopIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  NewspaperIcon,
  AcademicCapIcon,
  MicrophoneIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import NavItem from './NavItem';
import Link from 'next/link';

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

interface HeaderProps {
  heightOffset: number;
  showQuote: (arg0: boolean) => void;
  dataPush?: MutableRefObject<NavLabel[]>;
}

export default function AppHeader({
  showQuote,
  dataPush,
  heightOffset,
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  let timeout: ReturnType<typeof setTimeout>;
  const timeoutDuration: number = 100;

  // control popover
  const [menuOpen, setMenuOpen] = useState(false); // reset state on startup

  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // toggle menu by clicking button ref
    buttonRef?.current?.click();
  };

  // add delay before opening menu
  const onHover = (open: boolean, action: string) => {
    // if menu is open = close || close = open
    if (
      (!open && !menuOpen && action == 'onMouseEnter') ||
      (!open && !menuOpen && action == 'onMouseLeave')
    )
      // clear delay
      clearTimeout(timeout);
    timeout = setTimeout(() => toggleMenu(), timeoutDuration);
  };

  // const handleClick = (open: boolean) => {
  //   setMenuOpen(!open);
  //   clearTimeout(timeout);
  // };

  const handleClickOutside = (event: Event) => {
    if (
      buttonRef?.current &&
      !buttonRef?.current?.contains(event.target as Node)
    ) {
      event.stopPropagation();
    }
  };

  const services: Array<NavLabel> = [
    {
      name: 'Transcription',
      description: 'Get a better understanding of your traffic',
      href: '/services/transcription',
      icon: ChartPieIcon,
    },
    {
      name: 'Translation',
      description: 'Speak directly to your customers',
      href: '/services/translation',
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
      name: 'Legal Transcription',
      description: 'Your customers’ data will be safe and secure',
      href: '/services/legal',
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
      name: 'AI Datasets',
      description: 'Connect with third-party tools',
      href: '/services/ai',
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
    {
      name: 'Data Annotation',
      description: 'Build strategic funnels that will convert',
      href: '/services/annotation',
      icon: ArrowPathIcon,
      subtitle: 'Data Labeling customized to your needs',
      features: [
        'Enhance your artifical intelligence',
        'Global network of experts',
        'Highest quality annotated data',
      ],
      price: '0.10$ per task',
    },
  ];

  const solutions: Array<NavLabel> = [
    {
      name: 'Court and Legal',
      description:
        'We convert audio/video content into transcripts quickly and securing to save law firms, investigators, police force, or research firms time and money.',
      href: '/solutions/legal',
      icon: NewspaperIcon,
    },
    {
      name: 'Medical Research',
      description:
        'We have experienced, dedicated teams of workers who specialize in healthcare related content who provide accurate and confidential transcriptions for both our Medical and HIPAA-compliant services.',
      href: '/solutions/medical',
      icon: ChartPieIcon,
    },
    {
      name: 'Corporate and business',
      description:
        'Customized for your large volume needs, including a variety of enterprise security requirements.',
      href: '/solutions/enterprise',
      icon: ArrowPathIcon,
    },
    {
      name: 'AI Machine Learning',
      description:
        'The very best in human intelligence requires top quality training data for speech NLP and computer vision models.',
      href: '/solutions/ai',
      icon: FingerPrintIcon,
    },
    {
      name: 'Education',
      description:
        'Fast, easy lecture and dissertation transcripts for students or faculty, compatible with NVivo and other research platforms.',
      href: '/solutions/academic',
      icon: AcademicCapIcon,
    },
    {
      name: 'Digital and online learning',
      description:
        'Transcription that is perfect for all types of qualitative research needs, including focus groups, surveys and in-depth interviews.',
      href: '/solutions/market-research',
      icon: ChartBarIcon,
    },

    {
      name: 'Consulting',
      description:
        'Fast transcription and research data to meet due diligence and management consulting research needs.',
      href: '/solutions/consulting',
      icon: SquaresPlusIcon,
    },
    {
      name: 'Media Production',
      description: 'Automated speech recognition & analytics for call centers',
      href: '/solutions/call-centers',
      icon: MicrophoneIcon,
    },
    {
      name: 'Government',
      description: 'Automated speech recognition & analytics for call centers',
      href: '/solutions/call-centers',
      icon: MicrophoneIcon,
    },
  ];

  const resources: Array<NavLabel> = [
    {
      name: 'About Us',
      description: 'Frequently Asked Qustions',
      href: '/about-us',
      icon: ChartPieIcon,
    },
    {
      name: 'FAQs',
      description: 'Frequently Asked Qustions',
      href: '/faqs',
      icon: ChartPieIcon,
    },
    {
      name: 'Terms & Conditions',
      description: 'View terms and conditions',
      href: '/terms-and-conditions',
      icon: ChartPieIcon,
    },
    {
      name: 'Policies',
      description: 'check valid policies',
      href: '/policies',
      icon: ChartPieIcon,
    },
  ];

  useEffect(() => {
    if (heightOffset > 200) {
      document
        .querySelector('header')
        ?.classList.add('fixed', 'top-0', 'animate-nav-bottom', 'shadow-lg');
      document
        .querySelector('header')
        ?.classList.remove('relative', 'animate-nav-top');
    } else {
      document
        .querySelector('header')
        ?.classList.remove('fixed', 'top-0', 'animate-nav-bottom');
      document
        .querySelector('header')
        ?.classList.add('relative', 'animate-nav-top');
    }

    if (dataPush) dataPush.current = solutions;

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <>
      <div className='mx-auto  max-w-7xl relative z-30'>
        <p className='hidden relative z-50 md:flex  h-10 items-center  justify-end gap-6 px-4 text-sm font-medium text-white sm:px-6 lg:px-8'>
          <a
            href='/auth/login'
            className='-mx-3 flex items-center gap-x-5 rounded-lg px-3 py-2.5 text-base  transition leading-7 text-white hover:text-orange-400'
          >
            <ComputerDesktopIcon className='h-5 w-5' aria-hidden='true' />
            Freelancer Sign In
          </a>
          |
          <a
            href='/auth/login'
            className='-mx-3 flex items-center gap-x-5 rounded-lg px-3 py-2.5 text-base transition leading-7 text-white hover:text-orange-400'
          >
            <UserIcon className='h-5 w-5' aria-hidden='true' />
            Customer Login
          </a>
        </p>
      </div>
      <header
        className={classNames(
          'bg-white',
          'relative',
          'transition',
          'w-full',
          'z-30',
        )}
      >
        <nav
          className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5 text-3xl font-bold'>
              <span className='text-gray-800'>Verbal</span>
              <span className='text-orange-500 italic'>Scripts</span>
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>

          <Popover.Group className='hidden lg:flex lg:gap-x-1'>
            <Link
              href='/'
              className='text-md font-semibold px-4 py-1 leading-6 text-gray-900 transition hover:bg-orange-100'
            >
              Home
            </Link>

            <Popover
              onMouseEnter={() => onHover(open, 'onMouseEnter')}
              onMouseLeave={() => onHover(open, 'onMouseLeave')}
              className='relative'
            >
              {({ open }) => (
                <>
                  <Popover.Button
                    ref={buttonRef}
                    className='flex px-4 py-1 items-center gap-x-1 text-md font-semibold leading-6 text-gray-900'
                  >
                    Industry
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
                    <Popover.Panel className='absolute -left-8 top-4 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                      <div className='p-4'>
                        {services.map((item: NavLabel) => (
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

            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button className='flex px-4 py-1 items-center gap-x-1 text-md font-semibold leading-6 text-gray-900'>
                    Solutions
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
                    <Popover.Panel className='absolute -left-8 top-4 z-10 mt-3 w-screen max-w-xl overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                      <div className='p-4 w-full grid  grid-cols-1 gap-x-8 gap-y-3 lg:grid-cols-2'>
                        {solutions.map((item: NavLabel) => (
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

            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button className='flex px-4 py-1 items-center gap-x-1 text-md font-semibold leading-6 text-gray-900'>
                    Company
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
                    <Popover.Panel className='absolute -left-10 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                      <div className='p-4'>
                        {resources.map((item: NavLabel) => (
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
            <Link
              href='/contact-us'
              className='text-md font-semibold rounded-md leading-6 py-1 px-4 text-gray-900 transition hover:bg-orange-100'
            >
              Contact
            </Link>
          </Popover.Group>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-5'>
            <button
              onClick={() => showQuote(true)}
              className=' text-lg font-semibold  px-4 py-2 bg-indigo-600 transition text-center  hover:-translate-y-1 hover:shadow-xl rounded-md text-gray-100'
            >
              Get a Qoute
            </button>
            <a
              href='/dashboard'
              className=' text-lg font-semibold ring-1 ring-inset px-4 py-2 ring-indigo-500 hover:ring-indigo-400 text-indigo-500 hover:text-indigo-400 rounded-md'
            >
              Order Now
            </a>
          </div>
        </nav>

        <Dialog as='div' className='lg:hidden' onClose={setOpen} open={open}>
          <div className='fixed inset-0 z-10 bg-white-300' />

          <Dialog.Panel className='fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-end'>
              <button
                type='button'
                className='-m-1.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  <a
                    href='/'
                    className='-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    Home
                  </a>
                  <Disclosure as='div' className='-mx-3'>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                          Services
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'rotate-180' : '',
                              'h-5 w-5 flex-none',
                            )}
                            aria-hidden='true'
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='mt-2 space-y-2'>
                          {[...services].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as='a'
                              href={item.href}
                              className='block rounded-lg py-2 pl-6 pr-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50'
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
                        <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                          Solutions
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'rotate-180' : '',
                              'h-5 w-5 flex-none',
                            )}
                            aria-hidden='true'
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='mt-2 space-y-2'>
                          {[...solutions].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as='a'
                              href={item.href}
                              className='block rounded-lg py-2 pl-6 pr-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50'
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
                        <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                          Company
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'rotate-180' : '',
                              'h-5 w-5 flex-none',
                            )}
                            aria-hidden='true'
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='mt-2 space-y-2'>
                          {[...resources].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as='a'
                              href={item.href}
                              className='block rounded-lg py-2 pl-6 pr-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <div className='border-b py-2 border-gray-200'></div>
                  <a
                    href='/freelancers'
                    className='-mx-3 block underline underline-offset-2 rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-orange-500 hover:bg-gray-50'
                  >
                    Request a Quote
                  </a>
                  <a
                    href='/dashboard'
                    className='-mx-3 underline underline-offset-2 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-orange-500 hover:bg-gray-50'
                  >
                    Order Now
                  </a>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-1  gap-y-3 md:gap-x-10 divide-x divide-gray-900/5 bg-gray-50'>
                  <div>
                    <a
                      href='#'
                      className='-mx-3 block text-center rounded-md ring-1 ring-inset ring-indigo-500  px-3 py-3.5 text-xl font-semibold leading-7 text-indigo-500 hover:ring-indigo-400 hover:text-indigo-400'
                    >
                      Freelancer Sign In
                    </a>
                  </div>

                  <div>
                    <a
                      href='/auth/login'
                      className='-mx-3 block text-center rounded-md  bg-indigo-500  px-3 py-3.5 text-xl font-semibold leading-7 text-white hover:bg-indigo-400 hover:text-gray-200'
                    >
                      Customer Sign In
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className='md:hidden bg-white fixed bottom-0 left-0 right-0 flex  justify-center px-3 py-8 z-30 shadow-2xl gap-x-5'>
        <div className='max-w-7xl'>
          <a
            href='#'
            className='rounded-md ring-1 ring-inset ring-indigo-500  px-6 py-4 text-xl font-semibold leading-7 text-indigo-500 hover:ring-indigo-400 hover:text-indigo-400'
          >
            Get a Qoute
          </a>
        </div>

        <div>
          <a
            href='#'
            className='rounded-md  bg-indigo-500  px-6 py-4 text-xl font-semibold leading-7 text-white hover:bg-indigo-400 hover:text-gray-200'
          >
            Order Now
          </a>
        </div>
      </div>
    </>
  );
}
