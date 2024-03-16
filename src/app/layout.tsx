import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VerbalScripts: Fast &amp; Accurate Human Transcription Services",
  description: "TranscribeMe offers fast, affordable, and highly accurate human transcription, translation, data annotation, and AI dataset services customized for your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        {children}
      </body>
    </html>
  );
}
