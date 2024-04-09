import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VerbalScripts: Fast &amp; Accurate Human Transcription Services',
  description:
    'TranscribeMe offers fast, affordable, and highly accurate human transcription, translation, data annotation, and AI dataset services customized for your needs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={inter.className}>
      <body className='relative min-h-screen'>{children}</body>
    </html>
  );
}
