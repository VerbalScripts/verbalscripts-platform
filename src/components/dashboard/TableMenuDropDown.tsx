import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { classNames } from '@/utils/classNames';
import {
  DocumentDuplicateIcon,
  EllipsisVerticalIcon,
  PencilSquareIcon,
  ShareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

interface TableMenuDropDownProps {
  isGrid?: boolean;
  rename: () => void;
  remove: () => void;
  duplicate: () => void;
  share: () => void;
}
export default function TableMenuDropDown({
  isGrid,
  rename,
  remove,
  duplicate,
  share,
}: TableMenuDropDownProps) {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        {isGrid ? (
          <Menu.Button className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white p-1 text-sm  text-gray-700 shadow-sm'>
            <EllipsisVerticalIcon
              className='-mr-1 h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
          </Menu.Button>
        ) : (
          <Menu.Button className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-1 text-sm  text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
            More
            <ChevronDownIcon
              className='-mr-1 h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
          </Menu.Button>
        )}
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
        <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  onClick={() => rename()}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'flex items-center gap-x-2 px-4 py-2 text-sm',
                  )}
                >
                  <PencilSquareIcon className='h-5 w-5' />
                  <span>Rename</span>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  onClick={() => duplicate()}
                  className={classNames(
                    active
                      ? 'cursor-pointer bg-gray-100 text-gray-900'
                      : 'text-gray-700',
                    'px-4 flex items-center gap-x-2 py-2 text-sm',
                  )}
                >
                  <DocumentDuplicateIcon className='w-5 h-5' />
                  <span>Duplicate</span>
                </div>
              )}
            </Menu.Item>
          </div>

          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  onClick={() => share()}
                  className={classNames(
                    active
                      ? 'cursor-pointer bg-gray-100 text-gray-900'
                      : 'text-gray-700',
                    'px-4 flex items-center gap-x-2 py-2 text-sm',
                  )}
                >
                  <ShareIcon className='h-5 w-5' />
                  <span>Share</span>
                </a>
              )}
            </Menu.Item>
          </div>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <div
                  onClick={() => remove()}
                  className={classNames(
                    active
                      ? 'cursor-pointer bg-gray-100 text-gray-900'
                      : 'text-gray-700',
                    'flex items-center gap-x-2 px-4 py-2 text-sm',
                  )}
                >
                  <TrashIcon className='h-5 w-5' />
                  <span>Delete</span>
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
