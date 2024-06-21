import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';

export default function NavItem({ label }: NavItemProp) {
  function RenderNavItem({ label }: NavItemProp) {
    if (label.icon != undefined) {
      return (
        <label.icon
          className='h-5 w-5 text-gray-600 group-hover:text-indigo-600'
          aria-hidden='true'
        />
      );
    } else if (label.imgUrl != undefined) {
      return (
        <Image src={label.imgUrl} alt={label.name} height={35} width={35} />
      );
    }
  }

  return (
    <div className='group relative flex items-center gap-x-2 rounded-md p-4 text-sm leading-6 hover:bg-orange-100'>
      <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
        <RenderNavItem label={label} />
      </div>
      <div className='flex-auto'>
        <a
          href={label.href}
          className='block  text-sm navitem-text uppercase font-semibold text-gray-900'
        >
          {label.name}
          <span className='absolute inset-0' />
        </a>
        <p className=' text-gray-600 text-sm line-clamp-2'>
          {label.description}
        </p>
      </div>
    </div>
  );
}
