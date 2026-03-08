import type { Metadata, Viewport } from 'next';
import '../styles/index.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Next.js with Tailwind CSS',
  description: 'A boilerplate project with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-repeat bg-center bg-[url('/assets/images/back1.png')]"
        style={{
          backgroundAttachment: 'fixed',
          backgroundBlendMode: 'multiply',
        }}
       
      >
        {children}
      </body>
    </html>
  );
}
