'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLanguage } from '@/context/LanguageContext';

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data, isNepali } = useLanguage();
  const testimonials = data.testimonials;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={isNepali ? 'अभिभावकको विश्वास' : 'Voices of Trust'}
          title={
            isNepali
              ? 'हाम्रा अभिभावक तथा पूर्व-विद्यार्थीका भनाइहरू'
              : 'What Our Parents & Alumni Say'
          }
          subtitle={
            isNepali
              ? 'सामुदायिक शिक्षामा समुदायको विश्वास, अभिभावकको अनुभव र विद्यार्थीहरूको प्रगति यात्रा।'
              : 'Real experiences from the families and alumni who cherish our community school.'
          }
          align="center"
        />

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative border border-navy-800">
            <Quote className="w-24 h-24 text-gold-500/10 absolute top-6 right-8 pointer-events-none" />

            <div className="relative min-h-[220px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-1.5 text-gold-400">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold-400 stroke-gold-400" />
                    ))}
                  </div>

                  <p className="text-lg sm:text-xl lg:text-2xl font-serif text-slate-100 italic leading-relaxed">
                    &ldquo;{current.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-navy-800">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold-400/80 shrink-0">
                      <Image
                        src={current.avatar}
                        alt={current.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg text-white">
                        {current.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gold-400 font-medium">
                        {current.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-navy-800/80">
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? 'w-8 bg-gold-400'
                        : 'w-2.5 bg-navy-700 hover:bg-navy-600'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-navy-800 hover:bg-gold-500 text-slate-200 hover:text-navy-950 transition-colors border border-navy-700 focus:outline-none"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-navy-800 hover:bg-gold-500 text-slate-200 hover:text-navy-950 transition-colors border border-navy-700 focus:outline-none"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
