import React from 'react';
import Link from 'next/link';

interface BreadCrumpLink {
  name: string;
  href: string;
}

interface BreadcrumbRenderProps {
  links: BreadCrumpLink[];
}

export default function BreadcrumbRender({ links }: BreadcrumbRenderProps) {
  return (
    <nav className='flex  text-gray-700 mb-4 -ml-1.5' aria-label='Breadcrumb'>
      <ol className='inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse'>
        {links.map((link, index) => (
          <li key={index}>
            <div className='flex items-center'>
              {index > 0 ? (
                <svg
                  className='rtl:rotate-180 block w-7 h-7 mx-1 text-gray-400 '
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 6 10'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m1 9 4-4-4-4'
                  />
                </svg>
              ) : (
                <span></span>
              )}
              <Link
                href='#'
                className='ms-1 text-gray-800 text-xl md:text-5xl font-bold  hover:text-blue-600 md:ms-2 dark:text-gray-100 dark:hover:orange-500'
              >
                {link.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
