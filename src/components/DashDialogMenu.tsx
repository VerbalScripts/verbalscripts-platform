import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useRecoilValue } from 'recoil';
import { getUser } from '@/store/configureStore';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface menuRoute {
  label: string;
  href?: string;
  isProtected: boolean;
}
export default function DashDialogMenu() {
  const user = useRecoilValue(getUser);

  const menuRoutes: menuRoute[] = [
    {
      label: ' Account settings',
      href: '/dashboard/account',
      isProtected: true,
    },
    {
      label: 'Support',
      href: '/dashboard/support',
      isProtected: false,
    },
    {
      label: 'Orders',
      href: '/dashboard/orders',
      isProtected: false,
    },
  ];
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex  rounded-full h-8 w-8 overflow-hidden ring-gray-300'>
          <img
            src='/icons/user-icon.jpg'
            className='ring-1  object-cover'
            alt=''
          />
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
        <Menu.Items className='absolute right-0 z-30 mt-2 w-56 origin-top-right rounded-md bg-gray-50 dark:bg-slate-800 shadow-lg focus:outline-none'>
          <div className='py-1 px-2'>
            {user.isAuth ? (
              <div className='py-3 px-4 text-gray-600 dark:text-white border-b border-gray-200 mb-2'>
                <span className='font-bold'>{user.email}</span>
              </div>
            ) : (
              <div className='py-3 px-4 text-gray-600 dark:text-white border-b border-gray-200 mb-2'>
                <span className='font-bold'>Guest User</span> - This is a
                temporary account, please login to save your uploads.
              </div>
            )}

            {menuRoutes.map((route) => (
              <Menu.Item key={route.label}>
                {({ active }) => (
                  <a
                    href={route.href}
                    className={classNames(
                      active
                        ? 'bg-gray-100 text-gray-900 dark:text-white'
                        : 'text-gray-700 dark:text-gray-200',
                      'block hover:bg-indigo-500/5 text-gray-600 px-4 py-2 text-md font-semibold rounded-full',
                    )}
                  >
                    {route.label}
                  </a>
                )}
              </Menu.Item>
            ))}

            <form method='POST' action='#'>
              <Menu.Item>
                {() => (
                  <button
                    type='submit'
                    className={classNames(
                      'block w-full px-4 py-2 text-left text-gray-600 dark:text-white font-semibold text-md',
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
