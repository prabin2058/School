'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Library,
  FlaskConical,
  Trophy,
  Cpu,
  Utensils,
  ShieldCheck,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLanguage } from '@/context/LanguageContext';

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Library,
  Trophy,
  FlaskConical,
  Utensils,
  ShieldCheck,
};

export default function FacilitiesSection() {
  const { data, isNepali } = useLanguage();
  const facilities = data.facilities || [];

  return (
    <section id="facilities" className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={isNepali ? "भौतिक पूर्वाधार तथा सुविधाहरू" : "Facilities & Infrastructure"}
          title={isNepali ? "विद्यालयका भौतिक पूर्वाधार तथा सुविधाहरू" : "School Facilities & Physical Infrastructure"}
          subtitle={
            isNepali
              ? "नेपाल सरकार तथा स्थानीय समुदायको सहकार्यमा निर्मित बालमैत्री, सुरक्षित र प्रविधिमैत्री संरचना।"
              : "Child-friendly, secure, and technology-enabled learning infrastructure built in collaboration with the Government of Nepal and the local community."
          }
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => {
            const Icon = iconMap[fac.icon] || Library;

            return (
              <motion.div
                key={fac.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={fac.image}
                    alt={fac.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-navy-950/80 backdrop-blur-sm text-gold-400 border border-gold-500/30 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-navy-950 mb-2 group-hover:text-gold-600 transition-colors">
                      {fac.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {fac.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-gold-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                    <span>{isNepali ? "बालमैत्री तथा सुरक्षित संरचना" : "Child-Friendly & Safe Environment"}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
