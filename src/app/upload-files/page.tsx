'use client';

import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import GetAQuoteModal from '@/components/GetAQuoteModal';
import UploadFile from '@/components/UploadFile';

import React, { useRef, useState } from 'react';

export default function Page() {
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

      <UploadFile />

      <AppFooter />
    </div>
  );
}
