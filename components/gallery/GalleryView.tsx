'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Tag } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import LightboxModal, { GalleryItem } from '@/components/gallery/LightboxModal';
import { useLanguage } from '@/context/LanguageContext';

export default function GalleryView() {
  const { data, isNepali } = useLanguage();
  const categories = data.galleryCategories;
  const allImages = data.galleryImages as GalleryItem[];

  const [activeCategory, setActiveCategory] = useState<string>(categories[0] || 'सबै');
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // If language changes, reset activeCategory to categories[0]
  const isAll =
    activeCategory === 'सबै' ||
    activeCategory === 'All' ||
    activeCategory === categories[0];

  const filteredImages = isAll
    ? allImages
    : allImages.filter(
        (img) => img.category.toLowerCase() === activeCategory.toLowerCase()
      );

  const handleOpenLightbox = (index: number) => {
    setSelectedIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={isNepali ? 'तस्विर सङ्ग्रह' : 'Visual Archive'}
          title={
            isNepali
              ? 'विद्यालयका शैक्षिक, खेलकुद तथा सांस्कृतिक झलकहरू'
              : 'Glimpses of School Life & Activities'
          }
          subtitle={
            isNepali
              ? 'ढोरपाटन नगरपालिका बागलुङमा अवस्थित श्री प्रकाश मा.वि. का विद्यार्थी, शिक्षक तथा समुदायको प्रत्यक्ष झलक।'
              : 'Moments of discovery, sportsmanship, and cultural vibrancy at Shree Prakash Secondary School.'
          }
          align="center"
        />

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat, idx) => {
            const isActive =
              activeCategory === cat || (idx === 0 && isAll);

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 ${
                  isActive
                    ? 'bg-navy-900 text-gold-400 shadow-md border border-gold-500/40'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-gold-400 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Responsive Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredImages.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                onClick={() => handleOpenLightbox(index)}
                className="relative h-72 rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200/80 bg-slate-100"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent opacity-50 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-sm text-gold-400 border border-gold-500/30 flex items-center gap-1.5">
                      <Tag className="w-3 h-3" />
                      {item.category}
                    </span>
                    <span className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-serif font-bold text-base sm:text-lg leading-tight mb-1">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-xs text-slate-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <LightboxModal
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
          items={filteredImages}
          currentIndex={selectedIndex}
          onNavigate={(newIdx) => setSelectedIndex(newIdx)}
        />
      </div>
    </div>
  );
}
