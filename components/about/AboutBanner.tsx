'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface AboutBannerProps {
  title: string;
  subtitle: string;
}

export default function AboutBanner({ title, subtitle }: AboutBannerProps) {
  const { isNepali } = useLanguage();

  return (
    <section className="relative pt-36 pb-20 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 border border-white/10"
        >
          <Link href="/" className="hover:text-gold-400 transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>{isNepali ? 'गृहपृष्ठ' : 'Home'}</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-gold-400" />
          <span className="text-gold-400 font-semibold">{title}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white mb-4"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
