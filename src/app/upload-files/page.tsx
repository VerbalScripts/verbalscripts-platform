'use client';

import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import FileSelectionTab from '@/components/FileSelectionTab';
import GetAQuoteModal from '@/components/GetAQuoteModal';
import DropboxUpload from '@/components/uploadOptions/DropboxUpload';
import GoogleUpload from '@/components/uploadOptions/GoogleUpload';
import LinkUpload from '@/components/uploadOptions/LinkUpload';
import LocalFileUpload from '@/components/uploadOptions/LocalFileUpload';
import VimeoUpload from '@/components/uploadOptions/VimeoUpload';
import React, { useRef, useState } from 'react';

export default function Page() {
  const [activeTab, setActiveTab] = useState<string>();
  // const supportedFormats = [
  //   'mp3',
  //   'wav',
  //   'wmv',
  //   'mpeg',
  //   'mp4',
  //   'mp3',
  //   'ogg',
  //   'mkv',
  // ];

  const [heightOffset, setOffsetHeight] = useState(0);
  const [open, setOpen] = useState(false);

  const solutions = useRef<Array<NavLabel>>([]);

  const onBodyScroll = (event: React.UIEvent<HTMLElement>) => {
    setOffsetHeight((event.target as HTMLElement).scrollTop);
  };

  return (
    <div
      className='bg-zinc-800 max-h-screen overflow-y-scroll overflow-x-hidden relative'
      onScroll={onBodyScroll}
    >
      <AppHeader
        heightOffset={heightOffset}
        dataPush={solutions}
        showQuote={setOpen}
      />

      <GetAQuoteModal open={open} setOpen={setOpen} />

      <section className='bg-white'>
        <div className=' py-14 md:py-24'>
          <div className='mx-auto max-w-2xl'>
            <p className='mt-2 text-center text-3xl font-bold  text-gray-900'>
              Ready to try our service out. Go ahead and upload your file.
            </p>

            <div className='mt-10'>
              <div className='mt-10'>
                <FileSelectionTab callback={setActiveTab} />
              </div>
            </div>

            {/* tabs playground */}

            <section className='min-h-96'>
              {activeTab == 'local-file' ? (
                <LocalFileUpload />
              ) : activeTab == 'google-drive' ? (
                <GoogleUpload />
              ) : activeTab == 'vimeo' ? (
                <VimeoUpload />
              ) : activeTab == 'dropbox' ? (
                <DropboxUpload />
              ) : activeTab == 'link' ? (
                <LinkUpload />
              ) : (
                <LocalFileUpload />
              )}
            </section>

            <div className='flex items-center justify-between'>
              <p className='mt-2 text-2xl font-bold  text-gray-800'>
                Need help ?
              </p>
              <div className='flex items-center gap-x-3'>
                <a
                  href='/contact-us'
                  className='rounded-full border px-5 py-2.5'
                >
                  Contact Us
                </a>

                <a href='#' className='rounded-full border px-5 py-2.5'>
                  Let{"'"}s chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppFooter />
    </div>
  );
}
