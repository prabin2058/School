'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLanguage } from '@/context/LanguageContext';

export default function LatestNews() {
  const { data, isNepali } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={isNepali ? 'सूचना तथा गतिविधिहरू' : 'News & Announcements'}
          title={
            isNepali
              ? 'विद्यालयका पछिल्ला गतिविधि तथा सूचनाहरू'
              : 'Latest Campus News & Announcements'
          }
          subtitle={
            isNepali
              ? 'शैक्षिक क्यालेन्डर, परीक्षा समयतालिका, अतिरिक्त क्रियाकलाप र सामुदायिक सूचनाहरू।'
              : 'Academic calendars, examination schedules, athletic achievements, and community notices.'
          }
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.newsAndEvents.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-navy-950/80 backdrop-blur-sm text-gold-400 text-xs font-semibold px-3 py-1 rounded-full border border-gold-500/30">
                  {item.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gold-600" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-navy-600" />
                      {item.author}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-navy-950 group-hover:text-gold-600 transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-navy-900 group-hover:text-gold-600 transition-colors"
                  >
                    <span>{isNepali ? 'विस्तृत जानकारी' : 'Read Notice'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
