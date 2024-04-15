
import { DM_Sans } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'VerbalScripts | Fast, affordable, and highly accurate human transcription',
  keywords: [
    'transcription',
    'audio transcription',
    'video transcription',
    'speech to text',
    'academic transcription',
    'proofreading',
  ],
  description:
    'VerbalScripts offers fast, affordable, and highly accurate human transcription, translation, data annotation, and AI dataset services customized for your needs.',
};

const dm_sans = DM_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={dm_sans.className}>
      <body className='relative min-h-screen'>{children}</body>
    </html>
  );
}
