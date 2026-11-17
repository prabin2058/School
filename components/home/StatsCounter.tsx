'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Calendar, Trophy } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const iconMap: Record<string, React.ElementType> = {
  Users,
  GraduationCap,
  Calendar,
  Trophy,
};

export default function StatsCounter() {
  const { data } = useLanguage();

  return (
    <section className="bg-navy-950 text-white py-16 sm:py-20 relative overflow-hidden border-y border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {data.stats.map((stat, index) => {
            const Icon = iconMap[stat.icon] || Trophy;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-navy-900/60 border border-navy-800/80 hover:border-gold-500/50 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight group-hover:text-gold-400 transition-colors">
                  {stat.value}
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
