'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Heart, Sparkles, Cpu, Users2 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLanguage } from '@/context/LanguageContext';

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Award,
  Heart,
  Sparkles,
  Cpu,
  Users2,
};

export default function CoreValues() {
  const { data, isNepali } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={isNepali ? 'हाम्रा मूल्य र मान्यताहरू' : 'Our Guiding Ethos'}
          title={isNepali ? 'विद्यालयका मूल मान्यताहरू (Core Values)' : 'Core Values We Uphold'}
          subtitle={
            isNepali
              ? 'प्रत्येक विद्यार्थीको मन, वचन र कर्ममा प्रतिविम्बित हुनुपर्ने आधारभूत जीवन मूल्यहरू।'
              : 'Fundamental principles cultivated in every classroom, assembly, and community interaction.'
          }
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.coreValues.map((val, idx) => {
            const Icon = iconMap[val.icon] || Shield;

            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-gold-400 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-navy-950 mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
