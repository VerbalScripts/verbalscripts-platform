
import React from 'react';
import FileEmpty from '@/components/dashboard/FileEmpty';

// import type { Metadata } from 'next';
// import { useAppSelector } from '@/store/hooks';

// export const metadata: Metadata = {
//   title: 'VerbalScripts | Dashboard',
//   description:
//     'VerbalScripts offers fast, affordable, and highly accurate human transcription, translation, data annotation, and AI dataset services customized for your needs.',
// };

export default function Page() {
  // const authState = useAppSelector((state) => state.auth.isAuth);

  return (
    <div>
      <FileEmpty />
    </div>
  );
}
