import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Leytara - AI Search Marketing Agency | Get Cited, Get Chosen, Get Found',
  description: 'Leytara helps your brand appear where AI and people look for answers — from Google\'s AI Overviews to ChatGPT, Perplexity, and beyond. Expert LLM optimization and answer engine marketing.',
  keywords: 'AI search marketing, LLM optimization, answer engine optimization, ChatGPT marketing, Perplexity SEO, Google AI Overviews, search marketing agency',
  authors: [{ name: 'Leytara' }],
  openGraph: {
    title: 'Leytara - AI Search Marketing Agency',
    description: 'Get cited, get chosen, get found. We help brands appear where AI and people look for answers.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leytara - AI Search Marketing Agency',
    description: 'Get cited, get chosen, get found. We help brands appear where AI and people look for answers.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}