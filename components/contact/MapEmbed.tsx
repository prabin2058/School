'use client';

import React from 'react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function MapEmbed() {
  const { data, isNepali } = useLanguage();
  const { school } = data;

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl">
      <div className="p-6 bg-navy-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-navy-800">
        <div>
          <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider block">
            {isNepali ? 'गुगल नक्सा (Google Maps Navigation)' : 'Google Maps Navigation'}
          </span>
          <h3 className="text-lg font-serif font-bold text-white mt-0.5">
            {isNepali
              ? 'ढोरपाटन नगरपालिका बागलुङ स्थित विद्यालयको लोकेसन'
              : 'School Campus Location in Dhorpatan Baglung'}
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <MapPin className="w-4 h-4 text-gold-400" />
          <span>{school.location}</span>
        </div>
      </div>

      <div className="relative w-full h-[400px] sm:h-[450px] bg-slate-100">
        <iframe
          src={school.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Google Map Location of ${school.name}`}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
