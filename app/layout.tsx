import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import { LanguageProvider } from '@/context/LanguageContext';
import { siteData } from '@/data/siteData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shreeprakash.edu.np'),
  title: {
    default: `${siteData.ne.school.name} | ${siteData.en.school.name}, Dhorpatan Baglung`,
    template: `%s | ${siteData.en.school.name}`,
  },
  description: siteData.ne.school.description,
  keywords: [
    'Shree Prakash Secondary School',
    'श्री प्रकाश माध्यमिक विद्यालय',
    'Dhorpatan Municipality School',
    'Baglung Government School',
    'Community School in Baglung',
    'Class 1 to 10 School Nepal',
    'SEE School Baglung',
    'ढोरपाटन नगरपालिका बागलुङ विद्यालय',
  ],
  authors: [{ name: siteData.en.school.name }],
  creator: siteData.en.school.name,
  openGraph: {
    type: 'website',
    locale: 'ne_NP',
    url: 'https://shreeprakash.edu.np',
    title: `${siteData.ne.school.name} | ${siteData.en.school.name}`,
    description: siteData.ne.school.description,
    siteName: siteData.en.school.name,
    images: [
      {
        url: '/images/hero-school.jpg',
        width: 1200,
        height: 800,
        alt: `${siteData.en.school.name} building and community`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteData.ne.school.name} | ${siteData.en.school.name}`,
    description: siteData.en.school.description,
    images: ['/images/hero-school.jpg'],
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
    <html lang="ne" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex flex-col min-h-screen">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
