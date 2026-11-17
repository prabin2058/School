'use client';

import React from 'react';
import AboutBanner from '@/components/about/AboutBanner';
import HistorySection from '@/components/about/HistorySection';
import VisionMission from '@/components/about/VisionMission';
import CoreValues from '@/components/about/CoreValues';
import PrincipalMessageSection from '@/components/about/PrincipalMessageSection';
import StaffSection from '@/components/about/StaffSection';
import FacilitiesSection from '@/components/about/FacilitiesSection';
import CtaBanner from '@/components/home/CtaBanner';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { isNepali } = useLanguage();

  return (
    <>
      <AboutBanner
        title={isNepali ? 'हाम्रो विद्यालयको परिचय' : 'About Our School'}
        subtitle={
          isNepali
            ? 'वि.सं. २०३९ सालदेखि ढोरपाटन नगरपालिका बागलुङमा गुणस्तरीय, समावेशी र प्रविधिमैत्री सामुदायिक शिक्षाको संवाहक।'
            : 'Serving Dhorpatan Municipality, Baglung with quality, inclusive, and technology-enabled public education since 1982 AD.'
        }
      />
      <HistorySection />
      <VisionMission />
      <CoreValues />
      <PrincipalMessageSection />
      <StaffSection />
      <FacilitiesSection />
      <CtaBanner />
    </>
  );
}
