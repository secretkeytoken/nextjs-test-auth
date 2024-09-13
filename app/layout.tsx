import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { NextAuthProvider } from '@/components/NextAuthProvider';
import { Session } from 'next-auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: Session | null;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.className
        )}
      >
        <NextAuthProvider session={session}>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
