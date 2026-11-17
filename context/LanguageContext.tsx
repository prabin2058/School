'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { siteData, getSiteData } from '@/data/siteData';

export type Language = 'ne' | 'en';
export type SiteContent = typeof siteData['ne'];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  data: SiteContent;
  isNepali: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ne');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedLang = localStorage.getItem('spss_lang') as Language;
    if (savedLang === 'en' || savedLang === 'ne') {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('spss_lang', lang);
      document.documentElement.lang = lang;
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === 'ne' ? 'en' : 'ne';
    setLanguage(nextLang);
  };

  const data = getSiteData(language);
  const isNepali = language === 'ne';

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        data,
        isNepali,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
