'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLanguage } from '@/context/LanguageContext';

export default function ProgramsOffered() {
  const { data, isNepali } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={isNepali ? 'शैक्षिक तहहरू (Class 1 to 10)' : 'Academic Wings (Grades 1-10)'}
          title={
            isNepali
              ? 'कक्षा १ देखि १० सम्मका शैक्षिक कार्यक्रमहरू'
              : 'Our Academic Programs (Grades 1 to 10 & ECD)'
          }
          subtitle={
            isNepali
              ? 'नेपाल सरकारको राष्ट्रिय पाठ्यक्रम अनुसार प्रारम्भिक बालविकासदेखि SEE सम्मको पूर्ण, निःशुल्क र गुणस्तरीय शिक्षा।'
              : "Following Nepal's National Curriculum Framework from Early Childhood Development through National SEE certification."
          }
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {data.programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Program Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image
                  src={program.image}
                  alt={program.level}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-gold-500 text-navy-950 inline-block mb-1">
                    {program.ageGroup}
                  </span>
                  <h3 className="font-serif font-bold text-base leading-tight">
                    {program.level}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-navy-800 bg-navy-50 px-2.5 py-1 rounded-md inline-block mb-3">
                    {program.grades}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {program.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href={`/contact?program=${program.id}#apply`}
                    className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold text-navy-900 group-hover:text-gold-600 transition-colors py-1.5"
                  >
                    <span>{isNepali ? 'भर्ना सम्बन्धी जानकारी लिनुहोस्' : 'Learn More / Inquire'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
