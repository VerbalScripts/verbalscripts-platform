import React from 'react';
import FileEmpty from '@/components/FileEmpty';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VerbalScripts | Dashboard',
  description:
    'VerbalScripts offers fast, affordable, and highly accurate human transcription, translation, data annotation, and AI dataset services customized for your needs.',
};

export default function page() {
  return (
    <div>
      <FileEmpty />
    </div>
  );
}
