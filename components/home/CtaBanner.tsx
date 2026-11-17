'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function CtaBanner() {
  const { data } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-navy-900/90 to-navy-800/80 border border-gold-500/30 rounded-3xl p-8 sm:p-12 lg:p-16 text-center shadow-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 text-gold-400 text-xs sm:text-sm font-semibold mb-6 border border-gold-500/30"
          >
            <Sparkles className="w-4 h-4" />
            <span>{data.ctaBanner.badge}</span>
          </motion.div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
            {data.ctaBanner.title}
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {data.ctaBanner.subtitle}
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact#apply"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-600 hover:to-amber-600 text-navy-950 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-gold-500/30 transition-all duration-300 active:scale-95 text-base"
            >
              <span>{data.ctaBanner.buttonPrimary}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border-2 border-slate-300/80 hover:border-gold-400 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 active:scale-95 text-base"
            >
              <Calendar className="w-4 h-4 text-gold-400" />
              <span>{data.ctaBanner.buttonSecondary}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
