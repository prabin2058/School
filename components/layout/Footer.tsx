'use client';

import React from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Youtube,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const iconMap: Record<string, React.ElementType> = {
  Facebook,
  Youtube,
  Phone,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { data, isNepali } = useLanguage();

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-8 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-navy-800">
          {/* Col 1: School Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-500 text-navy-950 flex items-center justify-center font-bold shadow-md shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-white tracking-tight leading-none block">
                  {data.school.name}
                </span>
                <span className="text-xs text-gold-400 font-medium">
                  {data.school.establishedYear}
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              {data.school.description}
            </p>
            <div className="pt-2">
              <span className="inline-block bg-navy-900 border border-navy-700 text-gold-400 text-xs px-3 py-1 rounded-md font-medium">
                {data.school.levels}
              </span>
            </div>
            <div className="flex items-center space-x-3 pt-3">
              {data.school.socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon] || Facebook;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-400 hover:text-gold-400 hover:border-gold-500/50 hover:bg-navy-800 transition-all duration-200"
                    aria-label={`Visit our ${social.name} page`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-white font-serif font-bold text-base mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-gold-500">
              {isNepali ? 'द्रुत नेभिगेसन (Quick Links)' : 'Quick Navigation'}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {data.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-gold-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gold-500/70 group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/about#vision"
                  className="text-slate-400 hover:text-gold-400 transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500/70 group-hover:translate-x-1 transition-transform" />
                  <span>{isNepali ? 'दूरदृष्टि तथा लक्ष्य (Vision & Mission)' : 'Vision & Mission'}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about#faculty"
                  className="text-slate-400 hover:text-gold-400 transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500/70 group-hover:translate-x-1 transition-transform" />
                  <span>{isNepali ? 'शिक्षक परिवार (Our Faculty)' : 'Our Faculty'}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about#facilities"
                  className="text-slate-400 hover:text-gold-400 transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500/70 group-hover:translate-x-1 transition-transform" />
                  <span>{isNepali ? 'भौतिक संरचना (Facilities)' : 'Campus Facilities'}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Wings */}
          <div>
            <h3 className="text-white font-serif font-bold text-base mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-gold-500">
              {isNepali ? 'शैक्षिक तहहरू (Class 1 to 10)' : 'Academic Wings (Grades 1-10)'}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {data.programs.map((prog) => (
                <li key={prog.id} className="text-slate-400 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 shrink-0" />
                  <div>
                    <span className="text-slate-200 font-medium block">{prog.level}</span>
                    <span className="text-xs text-slate-500">{prog.grades}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-serif font-bold text-base mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-gold-500">
              {isNepali ? 'सम्पर्क ठेगाना' : 'School Contact'}
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <span>{data.school.address.street}, {data.school.address.city}, {data.school.address.district}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{data.school.contact.phones[0]}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{data.school.contact.emails[0]}</span>
              </div>
              <div className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400">
                  {data.school.contact.officeHours}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact#apply"
                className="inline-block w-full text-center bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-lg shadow transition-colors"
              >
                {isNepali ? 'भर्ना सम्बन्धी सोधपुछ' : 'Admission Inquiry'}
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} {data.school.name}. {isNepali ? 'सर्वाधिकार सुरक्षित।' : 'All rights reserved.'}</p>
          <div className="flex items-center space-x-6">
            <span>{data.school.affiliation}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
