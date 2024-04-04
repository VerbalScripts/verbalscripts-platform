'use client'

import React, { useEffect } from 'react';
import FileEmpty from '@/components/FileEmpty';

// import type { Metadata } from 'next';
import { useAppSelector } from '@/store/hooks';

// export const metadata: Metadata = {
//   title: 'VerbalScripts | Dashboard',
//   description:
//     'VerbalScripts offers fast, affordable, and highly accurate human transcription, translation, data annotation, and AI dataset services customized for your needs.',
// };

export default function Page() {
  const authState = useAppSelector((state) => state.auth.isAuth);

  useEffect(() => {
    console.log(authState);
  }, [authState]);

  return (
    <div>
      <FileEmpty />
    </div>
  );
}
