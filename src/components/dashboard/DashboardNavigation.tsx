'use client';

import { classNames } from '@/utils/classNames';
import { Dialog, Disclosure } from '@headlessui/react';
import {
  RocketLaunchIcon,
  CheckBadgeIcon,
  ClockIcon,
  ChevronDownIcon,
  UserIcon,
  ArrowLeftEndOnRectangleIcon,
  QuestionMarkCircleIcon,
  CreditCardIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

import { usePathname, useRouter } from 'next/navigation';
import AppTitle from '../AppTitle';
import { useRecoilValue } from 'recoil';
import { userState } from '@/store/configureStore';
import { CogIcon } from '@heroicons/react/20/solid';

type NavItem = {
  name: string;
  icon: React.ElementType;
  href: string;
  routes?: Array<NavItem>;
};

interface NavItemProp {
  item: NavItem;
  expanded?: boolean;
}

interface DashboardNavigationProps {
  expanded: boolean;
  open: boolean;
  setOpen: (arg0: boolean) => void;
}

export default function DashboardNavigation({
  expanded = true,
  open,
  setOpen,
}: DashboardNavigationProps) {
  const NavigationItemLink = ({ item, expanded }: NavItemProp) => {
    const pathname = usePathname();

    return (
      <div key={item.name} className='mb-3'>
        {item.href != '/deauth' ? (
          <Link
            href={item.href}
            className={classNames(
              'flex items-center gap-x-4 px-3 py-2.5 font-semibold hover:bg-orange-300/50 text-white  rounded-full ',
              pathname == item.href ? 'bg-orange-300 text-white' : '',
              expanded ? '' : 'justify-center',
            )}
          >
            <item.icon
              className={classNames(
                'transition-all',
                expanded ? 'h-6 w-6 ' : 'h-7 w-7 ',
              )}
            />
            {expanded ? <span>{item.name}</span> : null}
          </Link>
        ) : (
          <button
            className='flex w-full items-center hover:bg-orange-300/50 space-x-4 px-3 py-2.5 font-semibold text-gray-200  rounded-full '
            onClick={() => logout()}
          >
            <item.icon
              className={classNames(
                'transition-all',
                expanded ? 'h-6 w-6 ' : 'h-7 w-7 ',
              )}
            />
            {expanded ? <span>{item.name}</span> : null}
          </button>
        )}
      </div>
    );
  };

  const router = useRouter();

  const appRoutes: Array<NavItem> = [
    {
      name: 'Dashboard',
      icon: SquaresPlusIcon,
      href: '/dashboard',
    },
    {
      name: 'Pending',
      icon: ClockIcon,
      href: '/dashboard/pending',
    },
    {
      name: 'In Progress',
      icon: RocketLaunchIcon,
      href: '/dashboard/in-progress',
    },
    {
      name: 'Delivered',
      icon: CheckBadgeIcon,
      href: '/dashboard/delivered',
    },
    {
      name: 'Account',
      icon: UserIcon,
      href: '/dashboard/account',
    },
    {
      name: 'Invoice',
      icon: CreditCardIcon,
      href: '/dashboard/invoice',
    },
    {
      name: 'Settings',
      icon: CogIcon,
      href: '/dashboard/settings',
    },
  ];

  const bottomRoutes: Array<NavItem> = [
    {
      name: 'Help Center',
      icon: QuestionMarkCircleIcon,
      href: '/dashboard/support',
    },

    {
      name: 'Log out',
      icon: ArrowLeftEndOnRectangleIcon,
      href: '/deauth',
    },
  ];
  // const [open, setOpen] = useState(false);

  const logout = () => {
    window.localStorage.removeItem('x-token');
    window.localStorage.removeItem('rft-btt');

    router.push('/auth/login');
  };

  const globalUser = useRecoilValue(userState);

  return (
    <aside className=' '>
      {/* title */}
      <div
        className={classNames(
          'bg-zinc-900  min-h-screen  max-h-screen overflow-x-hidden overflow-y-auto',
          'hidden md:flex flex-col justify-between',
          'py-5     ',
          expanded ? 'px-8' : 'px-0 md:px-1',
        )}
      >
        <div>
          <div>
            <AppTitle />
          </div>
          <div
            className={classNames(expanded ? 'hidden' : 'block py-10')}
          ></div>
          {appRoutes.map((item) => {
            if (typeof item.routes != 'undefined' && item.routes.length > 0) {
              return (
                <Disclosure key={item.name} as='div'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-full  hover:bg-gray-50'>
                        <NavigationItemLink expanded={expanded} item={item} />

                        <ChevronDownIcon
                          className={classNames(
                            'h-5 w-5 transition-all flex-none text-gray-600',
                            open ? 'rotate-180' : '',
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='ml-2 p-3 space-y-2 bg-gray-200'>
                        <Disclosure.Button>
                          {item.routes!.map((route) => (
                            <NavigationItemLink
                              expanded={expanded}
                              key={route.name}
                              item={route}
                            />
                          ))}
                        </Disclosure.Button>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              );
            }
            return (
              <NavigationItemLink
                expanded={expanded}
                key={item.name}
                item={item}
              />
            );
          })}
        </div>

        {/* routes */}

        {/* routes end */}

        {/* bottom section */}
        <div>
          {!globalUser.isAuth ? (
            <div
              className={classNames(
                ' bg-indigo-500/15 rounded-xl px-2 py-4 text-center',
                expanded ? '' : 'hidden',
              )}
            >
              <div className=' dark:text-indigo-200'>
                You have not signed in yet!. Click the button to continue
              </div>
              <div className='mt-5'>
                <Link
                  href={'/auth/login'}
                  className='rounded-full  px-4 py-2.5 bg-indigo-500 text-md font-semibold focus:ring-4 focus:outline-none focus:ring-indigo-300'
                >
                  Login
                </Link>
              </div>
            </div>
          ) : null}

          {/* bottom routes */}
          <div className='mt-10'>
            {bottomRoutes.map((item) => (
              <NavigationItemLink
                expanded={expanded}
                key={item.name}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>

      <Dialog as='div' className='md:hidden' onClose={setOpen} open={open}>
        <div className='fixed inset-0 z-10 bg-white-300' />

        <Dialog.Panel className='fixed inset-y-0 right-0 z-30 w-full  bg-zinc-900   overflow-x-hidden overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-end'>
            <button
              type='button'
              className='-m-1.5 rounded-md p-2.5 '
              onClick={() => setOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-8 w-8 text-white' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div>
                <div>
                  <AppTitle />
                </div>
                <div
                  className={classNames(expanded ? 'hidden' : 'block py-10')}
                ></div>
                {appRoutes.map((item) => {
                  if (
                    typeof item.routes != 'undefined' &&
                    item.routes.length > 0
                  ) {
                    return (
                      <Disclosure key={item.name} as='div'>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className='flex w-full items-center justify-between rounded-full  hover:bg-gray-50'>
                              <NavigationItemLink
                                expanded={expanded}
                                item={item}
                              />

                              <ChevronDownIcon
                                className={classNames(
                                  'h-5 w-5 transition-all flex-none text-gray-600',
                                  open ? 'rotate-180' : '',
                                )}
                                aria-hidden='true'
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className='ml-2 p-3 space-y-2 bg-gray-200'>
                              <Disclosure.Button>
                                {item.routes!.map((route) => (
                                  <NavigationItemLink
                                    expanded={expanded}
                                    key={route.name}
                                    item={route}
                                  />
                                ))}
                              </Disclosure.Button>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    );
                  }
                  return (
                    <NavigationItemLink
                      expanded={expanded}
                      key={item.name}
                      item={item}
                    />
                  );
                })}
              </div>

              {/* routes */}

              {/* routes end */}

              {/* bottom section */}
              <div>
                {!globalUser.isAuth ? (
                  <div
                    className={classNames(
                      ' bg-indigo-500/15 rounded-xl px-2 py-4 text-center',
                      expanded ? '' : 'hidden',
                    )}
                  >
                    <div className=' dark:text-indigo-200'>
                      You have not signed in yet!. Click the button to continue
                    </div>
                    <div className='mt-5'>
                      <Link
                        href={'/auth/login'}
                        className='rounded-full  px-4 py-2.5 bg-indigo-500 text-md font-semibold focus:ring-4 focus:outline-none focus:ring-indigo-300'
                      >
                        Login
                      </Link>
                    </div>
                  </div>
                ) : null}

                {/* bottom routes */}
                <div className='mt-10'>
                  {bottomRoutes.map((item) => (
                    <NavigationItemLink
                      expanded={expanded}
                      key={item.name}
                      item={item}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </aside>
  );
}
