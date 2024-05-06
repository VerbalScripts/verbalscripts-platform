'use client';
// import { Inter } from "next/font/google";
import '../globals.css';
import DashboardNavigation from '@/components/dashboard/DashboardNavigation';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import NextNprogress from '@/lib/NextNprogress';
import { Suspense, useState } from 'react';
import { classNames } from '@/utils/classNames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { RecoilRoot } from 'recoil';
import StoreWrapper from '@/components/dashboard/StoreWrapper';
import Script from 'next/script';

// add redux

// const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <RecoilRoot>
      <Script
        src='//code.tidio.co/c85xnh9sahm0ijtezx6yvkixt4hq3aul.js'
        strategy='lazyOnload'
      />
      <StoreWrapper>
        <section className='dark-mode-toggle bg-white min-h-screen'>
          <Suspense>
            <NextNprogress />
          </Suspense>
          <div>
            <div className='relative h-full'>
              <div
                className={classNames(
                  'absolute transition-all z-50 bg-white  duration-300 left-0 top-0',
                  expanded ? 'w-[16rem]' : 'w-[5rem]',
                )}
              >
                <button
                  onClick={() => setExpanded(!expanded)}
                  className='absolute bg-white top-[3rem] -right-[1rem] z-50 rounded-full h-10 w-10 border text-gray-700 border-gray-300'
                >
                  <FontAwesomeIcon
                    icon={faAngleDoubleLeft}
                    className={classNames(
                      'h-5 w-5 transition-all text-gray-600 mt-1',
                      expanded ? '' : '-rotate-180',
                    )}
                  />
                </button>
                <DashboardNavigation expanded={expanded} />
              </div>

              <div
                className={classNames(
                  'absolute dark:bg-zinc-800 transition-all duration-300 top-0 right-0 max-h-screen overflow-x-auto overflow-y-auto',
                  expanded
                    ? 'w-[calc(100%] md:w-[calc(100%-16rem)]'
                    : 'w-[calc(100%-5rem)] md:w-[calc(100%-5rem)]',
                )}
              >
                <DashboardHeader />
                {children}
              </div>
            </div>
          </div>
        </section>
      </StoreWrapper>
    </RecoilRoot>
  );
}
