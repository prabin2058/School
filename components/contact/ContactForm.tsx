'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const { data, isNepali } = useLanguage();
  const formContent = data.contactForm;

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: formContent.subjects[0] || 'New Admission Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = isNepali ? 'कृपया पूरा नाम लेख्नुहोस्।' : 'Full name is required.';
    }

    if (!formData.email.trim()) {
      errs.email = isNepali ? 'कृपया ईमेल ठेगाना लेख्नुहोस्।' : 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = isNepali ? 'कृपया मान्य ईमेल लेख्नुहोस्।' : 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      errs.message = isNepali ? 'कृपया सन्देश लेख्नुहोस्।' : 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = isNepali
        ? 'सन्देश कम्तिमा १० अक्षरको हुनुपर्छ।'
        : 'Message must be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(null);
    setSubmitError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const resData = await res.json();

      if (res.ok && resData.success) {
        setSubmitSuccess(
          isNepali
            ? 'धन्यवाद! तपाईंको सन्देश विद्यालय प्रशासनमा सफलतापूर्वक प्राप्त भयो। हामी छिट्टै सम्पर्क गर्नेछौं।'
            : 'Thank you! Your message has been received by the school administration.'
        );
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: formContent.subjects[0] || '',
          message: '',
        });
      } else {
        setSubmitError(resData.error || (isNepali ? 'फारम पठाउन सकिएन।' : 'Failed to submit form.'));
      }
    } catch (err) {
      setSubmitError(
        isNepali
          ? 'सर्भरसँग सम्पर्क हुन सकेन। कृपया पछि प्रयास गर्नुहोस्।'
          : 'Unable to connect to server.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="apply" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl">
      <div className="mb-8">
        <span className="text-xs font-semibold text-gold-700 bg-gold-50 border border-gold-200 px-3 py-1 rounded-full uppercase tracking-wider">
          {formContent.badge}
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 mt-3">
          {formContent.title}
        </h3>
        <p className="text-slate-600 text-sm mt-1">
          {formContent.subtitle}
        </p>
      </div>

      {submitSuccess && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold">{isNepali ? 'सन्देश प्राप्त भयो!' : 'Delivered!'}</p>
            <p>{submitSuccess}</p>
          </div>
        </div>
      )}

      {submitError && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold">{isNepali ? 'त्रुटि भयो' : 'Error'}</p>
            <p>{submitError}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div>
          <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            {formContent.labels.name} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={isNepali ? "जस्तै: रामबहादुर पुन" : "e.g. Ram Bahadur Pun"}
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
              errors.name
                ? 'border-red-400 focus:ring-red-200'
                : 'border-slate-300 focus:border-navy-900 focus:ring-navy-100'
            }`}
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              {formContent.labels.email} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ram@example.com"
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
                errors.email
                  ? 'border-red-400 focus:ring-red-200'
                  : 'border-slate-300 focus:border-navy-900 focus:ring-navy-100'
              }`}
            />
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              {formContent.labels.phone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+977 9847XXXXXX"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-navy-900 focus:ring-2 focus:ring-navy-100 transition-colors focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            {formContent.labels.subject}
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-navy-900 focus:ring-2 focus:ring-navy-100 transition-colors bg-white focus:outline-none"
          >
            {formContent.subjects.map((subj, idx) => (
              <option key={idx} value={subj}>
                {subj}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            {formContent.labels.message} <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder={
              isNepali
                ? "विद्यार्थीको कक्षा, भर्ना वा आवश्यक जानकारी बारे यहाँ लेख्नुहोस्..."
                : "Enter details regarding admission, grade level, or your inquiry..."
            }
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
              errors.message
                ? 'border-red-400 focus:ring-red-200'
                : 'border-slate-300 focus:border-navy-900 focus:ring-navy-100'
            }`}
          />
          {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-600 hover:to-amber-600 text-navy-950 font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 disabled:opacity-70 disabled:pointer-events-none text-base"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>{formContent.labels.submitting}</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>{formContent.labels.submit}</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
