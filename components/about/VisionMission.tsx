'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLanguage } from '@/context/LanguageContext';

export default function VisionMission() {
  const { data, isNepali } = useLanguage();
  const { visionMission } = data;

  return (
    <section id="vision" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={isNepali ? 'मार्गदर्शक सिद्धान्त' : 'Guiding Compass'}
          title={isNepali ? 'दूरदृष्टि तथा लक्ष्य (Vision & Mission)' : 'Vision & Mission'}
          subtitle={
            isNepali
              ? 'हाम्रो मुख्य उद्देश्य, मार्गदर्शक सिद्धान्त र शैक्षिक दर्शन।'
              : 'Our foundational purpose and core educational philosophy.'
          }
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-navy-800 to-navy-600" />
            <div>
              <div className="w-14 h-14 rounded-2xl bg-navy-50 text-navy-900 border border-navy-200 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-navy-800" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy-950 mb-4">
                {visionMission.vision.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                {visionMission.vision.statement}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gold-500 to-amber-500" />
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gold-50 text-gold-700 border border-gold-200 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-gold-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy-950 mb-4">
                {visionMission.mission.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                {visionMission.mission.statement}
              </p>
              <ul className="space-y-3">
                {visionMission.mission.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
