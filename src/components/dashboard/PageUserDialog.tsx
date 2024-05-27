/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  UserIcon,
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  ClockIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface PageUserDialogProps {
  firstName: string;
  email: string;
}
interface menuRoute {
  label: string;
  href: string;
  isProtected: boolean;
  icon: React.ElementType;
}
export default function PageUserDialog({
  firstName,
  // @ts-ignore
  email,
}: PageUserDialogProps) {
  const router = useRouter();

  const menuRoutes: menuRoute[] = [
    {
      label: 'Account settings',
      href: '/dashboard/account',
      icon: UserIcon,
      isProtected: true,
    },
    {
      label: 'Pending Orders',
      href: '/dashboard/pending',
      icon: ClockIcon,
      isProtected: false,
    },
    {
      label: 'Delivered',
      href: '/dashboard/delivered',
      icon: CheckBadgeIcon,
      isProtected: false,
    },
  ];

  const logout = () => {
    window.localStorage.removeItem('x-token');
    window.localStorage.removeItem('rft-btt');

    router.push('/auth/login');
  };
  return (
    
    <Menu as='div' className='relative z-[50] inline-block text-left'>
      <div>
        <Menu.Button className='flex space-x-3 items-center'>
          <span className='text-white text-md font-semibold'>
            Hi, {firstName}
          </span>{' '}
          <ChevronDownIcon className='text-white w-6' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 z-[1000] mt-2 w-52 origin-top-right  bg-white dark:bg-slate-800 shadow-lg focus:outline-none'>
          <div>
            <div className='py-1 px-2'>
              {menuRoutes.map((route) => (
                <Menu.Item key={route.label}>
                  {({ active }) => (
                    <Link
                      href={route.href}
                      className={classNames(
                        active
                          ? 'bg-gray-100 text-gray-900 dark:text-white'
                          : 'text-gray-700 dark:text-gray-200',
                        'flex items-center gap-x-3 hover:bg-indigo-500/5 text-gray-600 px-4 py-2 text-sm font-semibold rounded-full',
                      )}
                    >
                      <route.icon
                        className={classNames('transition-all', 'h-5 w-5 ')}
                      />
                      {route.label}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </div>

            <form method='POST' action='#'>
              <Menu.Item>
                {() => (
                  <button
                    type='submit'
                    onClick={logout}
                    className={classNames(
                      'block w-full ml-3 px-4 py-2 text-left text-gray-600 dark:text-white font-semibold text-md',
                      'mt-1 border-t border-gray-200 dark:border-gray-800 flex items-center',
                    )}
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} color={'gray'} />
                    <span className='ml-3'>Sign out</span>
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
