import type { Metadata } from 'next';
// import { Inter } from "next/font/google";
import '../globals.css';
import DashboardNavigation from '@/components/DashboardNavigation';
import DashboardHeader from '@/components/DashboardHeader';
import NextNprogress from '@/lib/NextNprogress';
import { Suspense } from 'react';

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'VerbalScripts | Dashboard',
  description:
    'TranscribeMe offers fast, affordable, and highly accurate human transcription, translation, data annotation, and AI dataset services customized for your needs.',
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className='relative bg-white'>
      <Suspense>
        <NextNprogress />
      </Suspense>
      <DashboardHeader />
      <div>
        <div className='grid grid-flow-col'>
          <div className='col-span-1'>
            <DashboardNavigation />
          </div>

          <div className='cols-span-10 lg:col-span-12'>{children}</div>
        </div>
      </div>
    </section>
  );
}
