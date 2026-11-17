'use client';

import React from 'react';
import Image from 'next/image';
import { GraduationCap } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLanguage } from '@/context/LanguageContext';

export default function PrincipalMessageSection() {
  const { data, isNepali } = useLanguage();
  const { principal } = data;

  return (
    <section id="principal" className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={isNepali ? 'प्रधानाध्यापकको सन्देश' : "Headmaster's Address"}
          title={
            isNepali
              ? 'समुदाय, अभिभावक तथा विद्यार्थीहरूमा अपिल'
              : 'Message from the Headmaster'
          }
          subtitle={
            isNepali
              ? 'सामुदायिक शिक्षाको रूपान्तरण, संस्कारयुक्त सिकाइ र २१ औं शताब्दीको प्रविधिमैत्री अभियान।'
              : 'Transforming public education through technology, moral integrity, and community partnership.'
          }
          align="center"
        />

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 text-center lg:text-left">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-lg border-4 border-gold-400/40 mb-6">
                <Image
                  src={principal.photo}
                  alt={principal.name}
                  fill
                  sizes="240px"
                  className="object-cover object-top"
                />
              </div>

              <h3 className="font-serif font-bold text-xl text-navy-950">
                {principal.name}
              </h3>
              <p className="text-sm font-semibold text-gold-700 mt-1">
                {principal.title}
              </p>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {principal.credentials}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-600">
                <GraduationCap className="w-4 h-4 text-navy-800" />
                <span>{data.school.name}</span>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5 text-slate-700 leading-relaxed text-base">
              <div className="p-5 rounded-2xl bg-amber-50/70 border-l-4 border-gold-500 mb-6">
                <p className="italic font-serif text-slate-900 text-lg">
                  &ldquo;{principal.quote}&rdquo;
                </p>
              </div>

              {principal.fullMessage.map((paragraph, idx) => (
                <p key={idx} className="text-slate-600">
                  {paragraph}
                </p>
              ))}

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="font-serif font-bold text-navy-900">{principal.name}</p>
                  <p className="text-xs text-slate-500">{principal.title}, {data.school.name}</p>
                </div>
                <div className="text-xs text-gold-600 font-bold uppercase tracking-wider bg-gold-50 px-3 py-1.5 rounded-lg border border-gold-200">
                  {data.school.address.city}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
