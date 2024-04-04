'use client';

import { classNames } from '@/utils/classNames';
import { Disclosure } from '@headlessui/react';
import { CogIcon } from '@heroicons/react/20/solid';
import {
  RocketLaunchIcon,
  CheckBadgeIcon,
  ClockIcon,
  Squares2X2Icon,
  FolderPlusIcon,
  ArchiveBoxIcon,
  ChevronDownIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

import { usePathname } from 'next/navigation';

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
      icon: FolderPlusIcon,
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
      name: 'Help and Information',
      icon: FolderPlusIcon,
      href: '/dashboard/faqs',
    },

    {
      name: 'Log out',
      icon: ArchiveBoxIcon,
      href: '/auth/deauth',
    },
  ];
  // const [open, setOpen] = useState(false);

  return (
    <aside className=' px-8 py-5 border-r border-gray-300  min-h-screen flex flex-col justify-between'>
      {/* title */}

      <div>
        <div className='flex lg:flex-1 mb-16'>
          <a href='/' className='-m-1.5 p-1.5 text-2xl text-gray-700 font-bold'>
            <span>Verbal</span>
            <span className='text-orange-500 italic'>Scripts</span>
          </a>
        </div>
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
            'bg-indigo-500/15 rounded-xl p-3 text-center',
            expanded ? '' : 'hidden',
          )}
        >
          <div className='text-gray-700'>
            You have not signed in yet!. Click the button to continue
          </div>
          <div className='mt-5'>
            <Link
              href='/auth/login'
              className='rounded-full  px-4 py-1.5 bg-indigo-500 text-md font-semibold focus:ring-4 focus:outline-none focus:ring-indigo-300'
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
