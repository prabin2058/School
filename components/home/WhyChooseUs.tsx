'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Cpu,
  Activity,
  HeartHandshake,
  ShieldCheck,
  Users2,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLanguage } from '@/context/LanguageContext';

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Cpu,
  Activity,
  HeartHandshake,
  ShieldCheck,
  Users2,
};

export default function WhyChooseUs() {
  const { data, isNepali } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={isNepali ? 'हाम्रा विशेषताहरू' : 'Our Key Strengths'}
          title={
            isNepali
              ? 'श्री प्रकाश माध्यमिक विद्यालय किन रोज्ने?'
              : 'Why Choose Shree Prakash Secondary School?'
          }
          subtitle={
            isNepali
              ? 'नेपाल सरकारको निःशुल्क शिक्षा नीति अन्तर्गत प्रविधिमैत्री कक्षाकोठा, दिवा खाजा, खेलकुद र समर्पित शिक्षक टोलीको संगम।'
              : 'Delivering 100% free, technology-enabled, inclusive education with midday meals, sports, and dedicated mentorship.'
          }
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.whyChooseUs.map((feature, index) => {
            const Icon = iconMap[feature.icon] || BookOpen;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-gold-400 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-3 group-hover:text-navy-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-gold-700 group-hover:text-gold-600">
                  <span className="w-2 h-2 rounded-full bg-gold-500" />
                  <span>{isNepali ? 'सामुदायिक विद्यालयको गौरव' : 'Pride of Community Education'}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
