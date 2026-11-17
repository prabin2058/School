'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { data, isNepali } = useLanguage();

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="py-16">
      <SectionHeader
        badge={isNepali ? 'प्रायः सोधिने प्रश्नहरू' : 'Frequently Asked Questions'}
        title={
          isNepali
            ? 'भर्ना तथा विद्यालय सम्बन्धी जिज्ञासाहरू'
            : 'Admissions & School Help Desk'
        }
        subtitle={
          isNepali
            ? 'निःशुल्क शिक्षा, पाठ्यपुस्तक, दिवा खाजा र भर्ना प्रक्रिया सम्बन्धी मुख्य प्रश्नहरूका उत्तर।'
            : 'Clear answers regarding free education, textbooks, midday meals, and student enrollment.'
        }
        align="center"
      />

      <div className="max-w-3xl mx-auto space-y-4">
        {data.contactFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-all duration-200"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50 transition-colors"
              >
                <span className="font-serif font-bold text-base text-navy-950 flex items-center gap-2.5">
                  <HelpCircle className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>{faq.q}</span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-gold-600' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
