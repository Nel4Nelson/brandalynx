import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layouts/navbar';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BrandALYANX - Brand Strategy & Identity Design',
  description: 'Professional branding solutions for your business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}