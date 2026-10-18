import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import site from '@/shared/config/site.json';
import './globals.css';
import './visual-polish.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: site.url,
    title: site.openGraphTitle,
    description: site.openGraphDescription,
    images: [{ url: `/images/${site.openGraphImage}`, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = { themeColor: site.themeColor };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
