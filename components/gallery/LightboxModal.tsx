'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export default function LightboxModal({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}: LightboxModalProps) {
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation: Escape to close, Left/Right arrows to navigate
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-navy-950/95 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-5xl w-full bg-navy-900 rounded-3xl overflow-hidden shadow-2xl border border-navy-700 z-10 flex flex-col"
        >
          {/* Top Bar */}
          <div className="px-6 py-4 bg-navy-950/80 border-b border-navy-800 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gold-500/20 text-gold-400 border border-gold-500/30">
                <Tag className="w-3 h-3" />
                {currentItem.category}
              </span>
              <span className="text-xs text-slate-400">
                Image {currentIndex + 1} of {items.length}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-navy-800 hover:bg-gold-500 text-slate-300 hover:text-navy-950 transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Image Container */}
          <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black">
            <Image
              src={currentItem.image}
              alt={currentItem.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
              className="object-contain"
            />

            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-navy-950/70 hover:bg-gold-500 text-white hover:text-navy-950 transition-all shadow-lg border border-white/20 focus:outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-navy-950/70 hover:bg-gold-500 text-white hover:text-navy-950 transition-all shadow-lg border border-white/20 focus:outline-none"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div className="p-6 bg-navy-950 text-white border-t border-navy-800">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-1">
              {currentItem.title}
            </h3>
            {currentItem.description && (
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentItem.description}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
