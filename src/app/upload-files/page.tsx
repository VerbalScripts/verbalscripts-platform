import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import UploadFile from '@/components/UploadFile';

import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VerbalScripts | Upload Files',
};

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

  return (
    <div className='bg-zinc-800 relative'>
      <AppHeader />

      <UploadFile />

      <AppFooter />
    </div>
  );
}
