import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Next.js with Tailwind CSS',
  description: 'A boilerplate project with Next.js and Tailwind CSS',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <div className="absolute inset-0 bg-[length:200%_200%] bg-gradient-to-tr from-blue-200 via-cyan-200 via-yellow-200 via-green-200 to-orange-200 animate-gradient-xy -z-10" />

      <body className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-200">{children}</body>
    </html>
  );
}
