'use client';

import React from 'react';
import AboutBanner from '@/components/about/AboutBanner';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactFaq from '@/components/contact/ContactFaq';
import MapEmbed from '@/components/contact/MapEmbed';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { isNepali } = useLanguage();

  return (
    <>
      <AboutBanner
        title={isNepali ? 'सम्पर्क तथा भर्ना शाखा' : 'Contact & Admissions Office'}
        subtitle={
          isNepali
            ? 'विद्यालय सम्बन्धी कुनै पनि जानकारी, नयाँ भर्ना सोधपुछ वा सुझावका लागि हामीलाई सिधै सम्पर्क गर्नुहोस्।'
            : 'We welcome you to reach out for new admissions, student counseling, and school information.'
        }
      />

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
          </div>

          <div className="mt-16">
            <MapEmbed />
          </div>

          <div className="mt-8">
            <ContactFaq />
          </div>
        </div>
      </section>
    </>
  );
}
