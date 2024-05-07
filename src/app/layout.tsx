import { Urbanist } from 'next/font/google';
import './globals.css';
// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title:
//     'VerbalScripts | Fast, affordable, and highly accurate human transcription',
//   keywords: [
//     'transcription',
//     'audio transcription',
//     'video transcription',
//     'speech to text',
//     'academic transcription',
//     'proofreading',
//   ],
//   description:
//     'VerbalScripts offers fast, affordable, and highly accurate human transcription, translation, data annotation, and AI dataset services customized for your needs.',
// };

const urbanist = Urbanist({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={urbanist.className}>
      <body className='relative max-w-screen'>{children}</body>
    </html>
  );
}
