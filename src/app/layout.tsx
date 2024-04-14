import { Inter } from 'next/font/google';
import './globals.css';
import  Head  from 'next/head'

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={inter.className}>
      <Head>
        <title>
          VerbalScripts: Fast; Accurate Human Transcription Services
        </title>
        <meta
          property='og:title'
          content='VerbalScripts: Fast; Accurate Human Transcription Services'
        />
        <meta
          property='description'
          content='VerbalScripts offers fast, affordable, and highly accurate human transcription, translation, data annotation, and AI dataset services customized for your needs.'
        />
      </Head>
      <body className='relative min-h-screen'>{children}</body>
    </html>
  );
}
