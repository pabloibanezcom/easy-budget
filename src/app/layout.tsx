import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Easy Budget',
  description: 'Web app created by Pablo Ibanez'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ThemeRegistry>
          <body className={inter.className}>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {children}
          </body>
        </ThemeRegistry>
      </html>
    </ClerkProvider>
  );
}
