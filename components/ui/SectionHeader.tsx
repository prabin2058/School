import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  dark?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  dark = false,
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {badge && (
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3.5 ${
            dark
              ? 'bg-gold-500/20 text-gold-400 border border-gold-500/30'
              : 'bg-gold-100 text-gold-800 border border-gold-300'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight mb-4 ${
          dark ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 flex items-center gap-1.5 ${isCenter ? 'justify-center' : 'justify-start'}`}
      >
        <span className="h-1 w-10 rounded-full bg-gold-500" />
        <span className="h-1 w-2 rounded-full bg-navy-600" />
      </div>
    </div>
  );
}
