'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLanguage } from '@/context/LanguageContext';

export default function GalleryPreview() {
  const { data, isNepali } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={isNepali ? 'तस्विरहरूमा विद्यालय' : 'Campus Moments in Pictures'}
          title={
            isNepali
              ? 'श्री प्रकाश मा.वि. का यादगार क्षणहरू'
              : 'Glimpses of Student Life & Community'
          }
          subtitle={
            isNepali
              ? 'कक्षाकोठाका गतिविधि, कम्प्युटर अभ्यास, भलिबल तथा खेलकुद, र सांस्कृतिक कार्यक्रमहरूको झलक।'
              : 'Classroom learning, computer lab sessions, volleyball championships, and cultural festivities.'
          }
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.photoPreview.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative h-64 sm:h-72 rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-navy-900/80 backdrop-blur-sm text-gold-400 border border-gold-500/30">
                    {item.category}
                  </span>
                </div>

                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-white font-serif font-bold text-base sm:text-lg leading-tight mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ImageIcon className="w-3.5 h-3.5 text-gold-400" />
                    <span>{isNepali ? 'पूर्ण फोटो ग्यालरी हेर्नुहोस्' : 'View in Full Gallery'}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group active:scale-95"
          >
            <span>{isNepali ? 'सबै तस्विरहरू हेर्नुहोस्' : 'View Full Gallery'}</span>
            <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
