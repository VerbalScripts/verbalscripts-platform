import Link from 'next/link';
import React from 'react';

export default function NavItem({ label }: NavItemProp) {
  return (
    <div className='group relative flex items-center gap-x-4 rounded-md p-4 text-sm leading-6 hover:bg-orange-100'>
      <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
        <label.icon
          className='h-6 w-6 text-gray-600 group-hover:text-indigo-600'
          aria-hidden='true'
        />
      </div>
      <div className='flex-auto'>
        <Link href={label.href} className='block font-semibold text-gray-900'>
          {label.name}
          <span className='absolute inset-0' />
        </Link>
        <p className=' text-gray-600 line-clamp-2'>{label.description}</p>
      </div>
    </div>
  );
}
