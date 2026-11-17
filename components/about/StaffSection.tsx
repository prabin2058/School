'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLanguage } from '@/context/LanguageContext';

export default function StaffSection() {
  const { data, isNepali } = useLanguage();
  const teachers = data.teachers || [];

  return (
    <section id="faculty" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={isNepali ? "शिक्षक तथा कर्मचारी" : "Our Faculty & Staff"}
          title={isNepali ? "हाम्रा समर्पित शिक्षक तथा कर्मचारी परिवार" : "Our Dedicated Teachers & Staff"}
          subtitle={
            isNepali
              ? "सामुदायिक शिक्षाको रूपान्तरणमा अहोरात्र खटिएका दक्ष, तालिमप्राप्त र लगनशील शिक्षक टोली।"
              : "A qualified, government-trained, and dedicated team of educators transforming community education in Dhorpatan."
          }
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                <Image
                  src={teacher.photo}
                  alt={teacher.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs text-gold-300 font-medium">{teacher.qualification}</p>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-navy-800 bg-navy-50 px-2.5 py-0.5 rounded-md inline-block mb-1.5 uppercase tracking-wide">
                    {teacher.department}
                  </span>
                  <h3 className="font-serif font-bold text-base text-navy-950 group-hover:text-gold-600 transition-colors">
                    {teacher.name}
                  </h3>
                  <p className="text-xs text-gold-700 font-semibold mt-0.5">
                    {teacher.subject}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-navy-600" />
                    <span>{isNepali ? "शिक्षक परिवार" : "Faculty Member"}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
