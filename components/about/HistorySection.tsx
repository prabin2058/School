'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLanguage } from '@/context/LanguageContext';

export default function HistorySection() {
  const { data, isNepali } = useLanguage();
  const { history } = data;

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={isNepali ? 'हाम्रो विकास यात्रा' : 'Our Historic Journey'}
          title={history.title}
          subtitle={
            isNepali
              ? 'वि.सं. २०३९ सालमा प्राथमिक विद्यालयका रूपमा सुरु भई आज बागलुङको नमुना माध्यमिक विद्यालय बनेको प्रेरणादायी इतिहास।'
              : 'From humble beginnings in 1982 AD to one of Baglung district’s most trusted public secondary institutions.'
          }
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-5 text-slate-700 leading-relaxed text-base">
            {history.paragraphs.map((p, i) => (
              <p key={i} className="text-slate-600">
                {p}
              </p>
            ))}
            <div className="p-6 rounded-2xl bg-amber-50/70 border border-gold-300/60 mt-6">
              <h4 className="font-serif font-bold text-navy-950 text-lg mb-2">
                {isNepali ? '४ दशकभन्दा लामो गौरवमय यात्रा' : 'Over 4 Decades of Enduring Legacy'}
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {isNepali
                  ? 'यस विद्यालयबाट अध्ययन पूरा गरेका विद्यार्थीहरू आज देश तथा विदेशमा डाक्टर, इन्जिनियर, शिक्षक, राष्ट्रसेवक र समाजसेवीका रूपमा क्रियाशील छन्।'
                  : 'Our alumni actively serve across healthcare, engineering, public service, technology, and social leadership throughout Nepal and abroad.'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-gold-400 space-y-8">
              {history.milestones.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-5 h-5 rounded-full bg-navy-900 border-4 border-gold-500 group-hover:scale-125 transition-transform" />

                  <div className="bg-slate-50 hover:bg-white p-5 rounded-xl border border-slate-200/80 hover:border-gold-400 shadow-sm hover:shadow-md transition-all duration-200">
                    <span className="inline-block text-xs font-bold text-gold-700 bg-gold-100 px-3 py-1 rounded-full mb-1">
                      {item.year}
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-navy-950 mt-1">
                      {item.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
