/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Fragment, useState, useEffect } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ComputerDesktopIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

interface HeaderProps extends NavLabelProp {
  heightOffset: number;
  showQuote: (arg0: boolean) => void;
}

export default function AppHeader({
  solutions,
  resources,
  services,
  showQuote,
  heightOffset,
}: HeaderProps) {
  const [open, setOpen] = useState(false);

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
              <span>Verbal</span>
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

          <Popover.Group className='hidden lg:flex lg:gap-x-5'>
            <a
              href='/'
              className='text-md font-semibold leading-6 text-gray-900'
            >
              Home
            </a>

            <Popover className='relative'>
              <Popover.Button className='flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-900'>
                Services
                <ChevronDownIcon
                  className='h-5 w-5 flex-none text-gray-400'
                  aria-hidden='true'
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-200'
                enterFrom='opacity-0 translate-y-1'
                enterTo='opacity-100 translate-y-0'
                leave='transition ease-in duration-150'
                leaveFrom='opacity-100 translate-y-0'
                leaveTo='opacity-0 translate-y-1'
              >
                <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                  <div className='p-4'>
                    {services.map((item) => (
                      <div
                        key={item.name}
                        className='group relative flex items-center gap-x-4 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'
                      >
                        <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                          <item.icon
                            className='h-6 w-6 text-gray-600 group-hover:text-indigo-600'
                            aria-hidden='true'
                          />
                        </div>
                        <div className='flex-auto'>
                          <a
                            href={item.href}
                            className='block font-semibold text-gray-900'
                          >
                            {item.name}
                            <span className='absolute inset-0' />
                          </a>
                          <p className=' text-gray-600'>{item.description}</p>
                        </div>
                      </div>
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
            </Popover>

            <Popover className='relative'>
              <Popover.Button className='flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-900'>
                Solutions
                <ChevronDownIcon
                  className='h-5 w-5 flex-none text-gray-400'
                  aria-hidden='true'
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-200'
                enterFrom='opacity-0 translate-y-1'
                enterTo='opacity-100 translate-y-0'
                leave='transition ease-in duration-150'
                leaveFrom='opacity-100 translate-y-0'
                leaveTo='opacity-0 translate-y-1'
              >
                <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-xl overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                  <div className='p-4 w-full grid  grid-cols-1 gap-x-8 gap-y-3 lg:grid-cols-2'>
                    {solutions.map((item) => (
                      <div
                        key={item.name}
                        className='group relative flex items-center gap-x-4 rounded-md p-4 text-sm leading-6 hover:bg-gray-50'
                      >
                        <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                          <item.icon
                            className='h-6 w-6 text-gray-600 group-hover:text-indigo-600'
                            aria-hidden='true'
                          />
                        </div>
                        <div className='flex-auto'>
                          <a
                            href={item.href}
                            className='block font-semibold text-gray-900'
                          >
                            {item.name}
                            <span className='absolute inset-0' />
                          </a>
                          <p className=' text-gray-600 line-clamp-2'>
                            {item.description}
                          </p>
                        </div>
                      </div>
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
            </Popover>

            <a
              href='/freelancers'
              className='text-md font-semibold leading-6 text-gray-900'
            >
              Freelancers
            </a>
            <Popover className='relative'>
              <Popover.Button className='flex items-center gap-x-4 text-md font-semibold leading-6 text-gray-900'>
                Resources
                <ChevronDownIcon
                  className='h-5 w-5 flex-none text-gray-400'
                  aria-hidden='true'
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-200'
                enterFrom='opacity-0 translate-y-1'
                enterTo='opacity-100 translate-y-0'
                leave='transition ease-in duration-150'
                leaveFrom='opacity-100 translate-y-0'
                leaveTo='opacity-0 translate-y-1'
              >
                <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                  <div className='p-4'>
                    {resources.map((item: unknown) => (
                      <div
                        key={item.name}
                        className='group relative flex items-center gap-x-2 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'
                      >
                        <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                          <item.icon
                            className='h-6 w-6 text-gray-600 group-hover:text-indigo-600'
                            aria-hidden='true'
                          />
                        </div>
                        <div className='flex-auto'>
                          <a
                            href={item.href}
                            className='block font-semibold text-gray-900'
                          >
                            {item.name}
                            <span className='absolute inset-0' />
                          </a>
                          <p className=' text-gray-600'>{item.description}</p>
                        </div>
                      </div>
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
            </Popover>
          </Popover.Group>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-5'>
            <button
              onClick={() => showQuote(true)}
              className=' text-lg font-semibold  px-4 py-2 bg-indigo-600 transition text-center  hover:-translate-y-1 hover:shadow-xl rounded-md text-gray-100'
            >
              Get a Qoute
            </button>
            <a
              href='#'
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
                  <a
                    href='/freelancers'
                    className='-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    Freelancers
                  </a>
                  <Disclosure as='div' className='-mx-3'>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                          Resources
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
                    href='/freelancers'
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
                      href='#'
                      className='-mx-3 block text-center rounded-md  bg-indigo-500  px-3 py-3.5 text-xl font-semibold leading-7 text-white hover:bg-indigo-400 hover:text-gray-200'
                    >
                      Customer Login
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
