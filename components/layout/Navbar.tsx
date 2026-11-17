'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, GraduationCap, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { data, isNepali } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top micro bar */}
      <div className="hidden lg:block bg-navy-950 text-slate-300 text-xs py-2 px-6 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              {data.school.contact.phones[0]}
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-gold-400" />
              {data.school.contact.emails[0]}
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <span className="text-gold-400 font-medium">{data.school.tagline}</span>
            <span className="text-navy-700">|</span>
            <span className="text-slate-400 text-xs">{data.school.affiliation}</span>
            <span className="text-navy-700">|</span>
            {/* Language Switcher in top bar */}
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-navy-900 border-b border-slate-100'
            : 'bg-white/90 backdrop-blur-sm py-4 text-navy-900 border-b border-slate-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-navy-900 to-navy-700 text-gold-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-xl text-navy-900 tracking-tight leading-tight group-hover:text-navy-700 transition-colors">
                {data.school.name}
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
                {data.school.location}
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {data.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                    isActive
                      ? 'text-navy-900 bg-navy-50 font-bold'
                      : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-gold-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right: Language switcher & CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <LanguageSwitcher />
            <Link
              href="/contact#apply"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-950 text-sm font-bold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 active:scale-95"
            >
              <span>{isNepali ? 'भर्ना जानकारी' : 'Apply Now'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Right: Language Switcher + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-navy-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-xl animate-fade-in">
            <div className="space-y-1 pt-2">
              {data.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2.5 rounded-lg text-base font-semibold ${
                      isActive
                        ? 'bg-navy-900 text-gold-400 font-bold'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-navy-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-3">
              <Link
                href="/contact#apply"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-bold px-4 py-3 rounded-lg shadow"
              >
                <span>{isNepali ? 'भर्ना सम्बन्धी जानकारी' : 'Apply for Admission'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
