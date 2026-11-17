'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Quote, ArrowRight, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function PrincipalWelcome() {
  const { data, isNepali } = useLanguage();
  const { principal } = data;

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Principal / Headmaster Photo Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative h-96 lg:h-full min-h-[420px] bg-navy-950"
            >
              <Image
                src={principal.photo}
                alt={principal.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white">
                <p className="font-serif font-bold text-xl">{principal.name}</p>
                <p className="text-xs text-gold-400">{principal.title}</p>
              </div>

              {/* Experience badge */}
              <div className="hidden lg:flex absolute bottom-6 left-6 bg-navy-900/90 backdrop-blur-md border border-gold-500/40 text-white py-2.5 px-4 rounded-xl shadow-lg items-center gap-3">
                <Award className="w-5 h-5 text-gold-400" />
                <div>
                  <p className="text-xs text-slate-300">
                    {isNepali ? 'सामुदायिक शैक्षिक सेवा' : 'Community Education'}
                  </p>
                  <p className="text-xs font-bold text-gold-400">
                    {isNepali ? '२२+ वर्षको शिक्षण नेतृत्व' : '22+ Years Leadership'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Principal Text Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 p-8 sm:p-12 lg:p-14"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-100 text-navy-800 text-xs font-semibold uppercase tracking-wider mb-4">
                <span>{isNepali ? 'प्रधानाध्यापकको सन्देश' : "Headmaster's Message"}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-950 tracking-tight">
                {isNepali
                  ? 'सामुदायिक शिक्षामा स्वागत तथा शुभकामना'
                  : 'Welcome & Leadership Greeting'}
              </h2>

              {/* Highlight Quote */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-amber-50/70 border-l-4 border-gold-500 relative">
                <Quote className="w-7 h-7 text-gold-500/30 absolute top-2 right-3" />
                <p className="text-slate-800 italic text-base sm:text-lg font-serif leading-relaxed">
                  &ldquo;{principal.quote}&rdquo;
                </p>
              </div>

              {/* Excerpt */}
              <p className="mt-6 text-slate-600 leading-relaxed text-base">
                {principal.messageExcerpt}
              </p>

              {/* Signature / Details */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif font-bold text-lg text-navy-950">
                    {principal.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {principal.title}
                  </p>
                  <p className="text-xs text-gold-700 font-medium mt-0.5">
                    {principal.credentials}
                  </p>
                </div>

                <Link
                  href="/about#principal"
                  className="inline-flex items-center gap-2 text-navy-900 font-bold hover:text-gold-600 transition-colors text-sm group"
                >
                  <span>{isNepali ? 'विस्तृत सन्देश पढ्नुहोस्' : 'Read Full Letter'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-gold-600" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
