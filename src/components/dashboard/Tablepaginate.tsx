import Link from 'next/link';
import React from 'react';

interface TablepaginateProps {
  page: number;
  perPageCount: number;
  totalCount: number;
}

export default function Tablepaginate({
  page,
  perPageCount,
  totalCount,
}: TablepaginateProps) {
  return (
    <div className='flex  justify-center py-10'>
      <div className='flex flex-col items-center'>
        <span className='text-sm text-gray-700 dark:text-gray-400'>
          Showing{' '}
          <span className='font-semibold text-gray-900 dark:text-white'>
            {page}
          </span>{' '}
          to{' '}
          <span className='font-semibold text-gray-900 dark:text-white'>
            {perPageCount}
          </span>{' '}
          of{' '}
          <span className='font-semibold text-gray-900 dark:text-white'>
            {totalCount}
          </span>{' '}
          Entries
        </span>

        <div className='inline-flex mt-2 xs:mt-0'>
          {page > 1 ? (
            <Link
              href={`?page=${page - 1}&limit=${perPageCount}`}
              className='flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              Prev
            </Link>
          ) : null}
          {page < totalCount / perPageCount ? (
            <Link
              href={`?page=${page + 1}&limit=${perPageCount}`}
              className='flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              Next
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
