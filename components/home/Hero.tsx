'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MapPin, Award, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { data, isNepali } = useLanguage();

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Background Image: Shree Prakash Secondary School building & community */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={data.hero.bgImage}
          alt={`${data.school.name} building, teachers and students in Dhorpatan Baglung`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Optimized overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/75 to-navy-950/85 -z-10" />

      {/* Decorative ambient subtle glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-navy-600/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
        {/* Government Community School Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/25 border border-gold-400/50 text-gold-300 text-xs sm:text-sm font-semibold mb-4 shadow-sm backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span>{data.hero.badge}</span>
        </motion.div>

        {/* Location Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-2 text-slate-200 text-sm sm:text-base font-medium mb-3"
        >
          <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
          <span>{data.school.location}</span>
          <span className="text-slate-400">•</span>
          <span className="text-gold-300 font-semibold">{data.school.levels}</span>
        </motion.div>

        {/* School Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight leading-tight max-w-5xl mx-auto"
        >
          <span className="block text-white mb-2">
            {data.school.name}
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200 text-2xl sm:text-4xl md:text-5xl block font-sans font-bold">
            {data.school.subName}
          </span>
        </motion.h1>

        {/* Headline / Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed"
        >
          {data.hero.subheadline}
        </motion.p>

        {/* Two Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <Link
            href="/contact#apply"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 hover:from-gold-600 hover:to-amber-600 text-navy-950 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-gold-500/25 transition-all duration-300 active:scale-95 text-base"
          >
            <span>{data.hero.ctaPrimary.label}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/80 hover:border-gold-400 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 active:scale-95 text-base"
          >
            <span>{data.hero.ctaSecondary.label}</span>
          </Link>
        </motion.div>

        {/* Trust badges footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 pt-8 border-t border-white/15 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-200 font-medium"
        >
          {data.hero.badges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-navy-900/60 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
              <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
              <span>{badge}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 bg-navy-900/60 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
            <Award className="w-4 h-4 text-gold-400 shrink-0" />
            <span>{data.school.establishedYear}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
