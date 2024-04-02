'use client';

// import { Inter } from "next/font/google";
import '../globals.css';
import DashboardNavigation from '@/components/DashboardNavigation';
import DashboardHeader from '@/components/DashboardHeader';
import NextNprogress from '@/lib/NextNprogress';
import { Suspense, useState } from 'react';
import { classNames } from '@/utils/classNames';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

// const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <section className='min-h-screen' style={{ backgroundColor: '#fff' }}>
      <Suspense>
        <NextNprogress />
      </Suspense>
      <div>
        <div className='relative h-full'>
          <div
            className={classNames(
              'absolute transition-all  duration-300 left-0 top-0',
              expanded ? 'w-[18rem]' : 'w-[5rem]',
            )}
          >
            <button
              onClick={() => setExpanded(!expanded)}
              className='absolute bg-white top-[1.2rem] -right-[1rem] z-50 rounded-full p-2 border text-gray-700 border-gray-300'
            >
              <ArrowLeftIcon
                className={classNames(
                  'h-5 w-5 transition-all',
                  expanded ? '' : '-rotate-180',
                )}
              />
            </button>
            <DashboardNavigation expanded={expanded} />
          </div>

          <div
            className={classNames(
              'absolute transition-all duration-300 top-0 right-0 ',
              expanded ? 'w-[calc(100%-18rem)]' : 'w-[calc(100%-5rem)]',
            )}
          >
            <DashboardHeader />
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
