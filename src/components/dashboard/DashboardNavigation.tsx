'use client';

import { classNames } from '@/utils/classNames';
import { Disclosure } from '@headlessui/react';
import { ArrowUpOnSquareStackIcon, CogIcon } from '@heroicons/react/20/solid';
import {
  RocketLaunchIcon,
  CheckBadgeIcon,
  ClockIcon,
  Squares2X2Icon,
  ChevronDownIcon,
  UserIcon,
  ArrowLeftEndOnRectangleIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

import { usePathname } from 'next/navigation';
import AppTitle from '../AppTitle';

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

function NavigationItemLink({ item, expanded }: NavItemProp) {
  return (
    <div key={item.name} className='mb-3'>
      <Link
        href={item.href}
        className={classNames(
          'flex items-center gap-x-4 px-3 py-2.5 font-semibold  text-gray-600 rounded-full ',
          usePathname() == item.href
            ? 'bg-indigo-500 text-white'
            : 'hover:bg-indigo-500/5',
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
    </div>
  );
}

interface DashboardNavigationProps {
  expanded: boolean;
}

export default function DashboardNavigation({
  expanded = true,
}: DashboardNavigationProps) {
  const appRoutes: Array<NavItem> = [
    {
      name: 'Dashboard',
      icon: Squares2X2Icon,
      href: '/dashboard',
    },

    {
      name: 'Upload',
      icon: ArrowUpOnSquareStackIcon,
      href: '/dashboard/upload',
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
      href: '/auth/deauth',
    },
  ];
  // const [open, setOpen] = useState(false);

  return (
    <aside
      className={classNames(
        'py-5 border-r bg-gray-100 border-gray-300  min-h-screen flex flex-col justify-between max-h-screen overflow-x-hidden overflow-y-auto',
        expanded ? 'px-8' : 'px-1',
      )}
    >
      {/* title */}

      <div>
        <div className={classNames(expanded ? 'block' : 'hidden')}>
          <AppTitle />
        </div>
        <div className={classNames(expanded ? 'hidden' : 'block py-10')}></div>
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
        <div
          className={classNames(
            ' bg-indigo-500/15 rounded-xl px-2 py-4 text-center',
            expanded ? '' : 'hidden',
          )}
        >
          <div className='text-gray-700'>
            You have not signed in yet!. Click the button to continue
          </div>
          <div className='mt-5'>
            <Link
              href='/auth/login'
              className='rounded-full  px-4 py-2.5 bg-indigo-500 text-md font-semibold focus:ring-4 focus:outline-none focus:ring-indigo-300'
            >
              Login
            </Link>
          </div>
        </div>

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
    </aside>
  );
}
