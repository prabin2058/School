'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'pill' | 'toggle';
}

export default function LanguageSwitcher({
  className = '',
  variant = 'pill',
}: LanguageSwitcherProps) {
  const { language, setLanguage, toggleLanguage, isNepali } = useLanguage();

  if (variant === 'toggle') {
    return (
      <button
        onClick={toggleLanguage}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 border ${
          isNepali
            ? 'bg-navy-900 text-gold-400 border-gold-500/40 hover:bg-navy-800'
            : 'bg-gold-500 text-navy-950 border-gold-600 hover:bg-gold-600'
        } ${className}`}
        aria-label="Toggle language"
        title="नेपाली / English"
      >
        <Globe className="w-3.5 h-3.5" />
        <span>{isNepali ? '🇳🇵 नेपाली' : '🇬🇧 English'}</span>
      </button>
    );
  }

  return (
    <div
      className={`inline-flex items-center p-1 rounded-full bg-slate-100 border border-slate-300/80 shadow-inner ${className}`}
    >
      <button
        onClick={() => setLanguage('ne')}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
          isNepali
            ? 'bg-navy-900 text-gold-400 shadow-sm'
            : 'text-slate-600 hover:text-navy-900'
        }`}
        aria-label="Switch to Nepali"
      >
        🇳🇵 नेपाली
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
          !isNepali
            ? 'bg-navy-900 text-gold-400 shadow-sm'
            : 'text-slate-600 hover:text-navy-900'
        }`}
        aria-label="Switch to English"
      >
        🇬🇧 English
      </button>
    </div>
  );
}
