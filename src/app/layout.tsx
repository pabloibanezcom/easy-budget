import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import connectDB from '@/db';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.scss';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Easy Budget',
  description: 'Web app created by Pablo Ibanez'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  connectDB();
  return (
    <ClerkProvider>
      <html lang="en">
        <ThemeRegistry>
          <body className={inter.className}>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
            <SignedIn>
              <Providers>{children}</Providers>
            </SignedIn>
          </body>
        </ThemeRegistry>
      </html>
    </ClerkProvider>
  );
}
