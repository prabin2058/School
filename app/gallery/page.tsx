'use client';

import React from 'react';
import AboutBanner from '@/components/about/AboutBanner';
import GalleryView from '@/components/gallery/GalleryView';
import CtaBanner from '@/components/home/CtaBanner';
import { useLanguage } from '@/context/LanguageContext';

export default function GalleryPage() {
  const { isNepali } = useLanguage();

  return (
    <>
      <AboutBanner
        title={isNepali ? 'फोटो ग्यालरी' : 'Campus Photo Gallery'}
        subtitle={
          isNepali
            ? 'श्री प्रकाश माध्यमिक विद्यालयका शैक्षिक, खेलकुद, अतिरिक्त क्रियाकलाप र सामुदायिक गौरवका प्रत्यक्ष झलकहरू।'
            : 'Capturing moments of learning, volleyball championships, cultural pageants, and campus life in Dhorpatan.'
        }
      />
      <GalleryView />
      <CtaBanner />
    </>
  );
}
