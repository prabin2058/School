'use client';

import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Youtube,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const iconMap: Record<string, React.ElementType> = {
  Facebook,
  Youtube,
  Phone,
};

export default function ContactInfo() {
  const { data, isNepali } = useLanguage();
  const { school } = data;

  return (
    <div className="space-y-8">
      <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-10 border border-navy-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <span className="text-xs font-semibold text-gold-400 bg-navy-900 border border-gold-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
          {isNepali ? 'विद्यालय कार्यालय' : 'School Administration'}
        </span>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-4 mb-6">
          {isNepali ? 'सिधै सम्पर्क गर्नुहोस्' : 'Direct Campus Contact'}
        </h3>

        <div className="space-y-6 text-slate-300">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-navy-900 border border-navy-800 text-gold-400 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                {isNepali ? 'विद्यालय ठेगाना' : 'Campus Location'}
              </p>
              <p className="text-sm sm:text-base font-semibold text-white mt-0.5">
                {school.address.street}
              </p>
              <p className="text-xs text-slate-400">
                {school.address.city}, {school.address.district}, {school.address.province}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-navy-900 border border-navy-800 text-gold-400 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                {isNepali ? 'सम्पर्क फोन नम्बर' : 'Phone Numbers'}
              </p>
              <p className="text-sm sm:text-base font-semibold text-white mt-0.5">
                {school.contact.phones[0]}
              </p>
              <p className="text-xs text-slate-400">
                {school.contact.phones[1]} ({isNepali ? 'प्रधानाध्यापक' : 'Headmaster'})
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-navy-900 border border-navy-800 text-gold-400 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                {isNepali ? 'ईमेल ठेगाना' : 'Email Addresses'}
              </p>
              <p className="text-sm sm:text-base font-semibold text-white mt-0.5">
                {school.contact.emails[0]}
              </p>
              <p className="text-xs text-slate-400">
                {school.contact.emails[1]}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-navy-900 border border-navy-800 text-gold-400 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                {isNepali ? 'कार्यालय समय' : 'Office Hours'}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-relaxed">
                {school.contact.officeHours}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-navy-800">
          <p className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-3">
            {isNepali ? 'अनलाइन जोडिनुहोस्' : 'Connect With Us'}
          </p>
          <div className="flex items-center gap-3">
            {school.socialLinks.map((social) => {
              const Icon = iconMap[social.icon] || Facebook;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-navy-900 hover:bg-gold-500 text-slate-300 hover:text-navy-950 border border-navy-800 flex items-center justify-center transition-all duration-200"
                  aria-label={social.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-amber-50/80 border border-gold-300/80 rounded-2xl p-6 flex items-start gap-4">
        <ShieldCheck className="w-6 h-6 text-gold-700 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-serif font-bold text-navy-950 text-base">
            {isNepali ? 'अभिभावक भेटघाट तथा परामर्श' : 'Parent Counseling & Visits'}
          </h4>
          <p className="text-xs text-slate-700 leading-relaxed mt-1">
            {isNepali
              ? 'अभिभावकज्यूहरूले कार्यालय समयभित्र विद्यालयमा उपस्थित भई आफ्ना नानीबाबुहरूको सिकाइ प्रगति तथा भर्ना सम्बन्धी परामर्श लिन सक्नुहुनेछ।'
              : 'Parents are warmly welcomed to visit during school working hours for academic consultations and new student enrollment.'}
          </p>
        </div>
      </div>
    </div>
  );
}
