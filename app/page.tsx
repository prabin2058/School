import React from 'react';
import Hero from '@/components/home/Hero';
import PrincipalWelcome from '@/components/home/PrincipalWelcome';
import StatsCounter from '@/components/home/StatsCounter';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ProgramsOffered from '@/components/home/ProgramsOffered';
import LatestNews from '@/components/home/LatestNews';
import GalleryPreview from '@/components/home/GalleryPreview';
import TestimonialsSlider from '@/components/home/TestimonialsSlider';
import CtaBanner from '@/components/home/CtaBanner';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Welcome from Principal */}
      <PrincipalWelcome />

      {/* 3. Stats Counters */}
      <StatsCounter />

      {/* 4. Why Choose Us (6 feature cards with icons) */}
      <WhyChooseUs />

      {/* 5. Programs / Classes Offered */}
      <ProgramsOffered />

      {/* 6. Latest News & Events (3 cards) */}
      <LatestNews />

      {/* 7. Photo Preview (6 images + View Full Gallery button) */}
      <GalleryPreview />

      {/* 8. Testimonials Slider from Parents */}
      <TestimonialsSlider />

      {/* 9. Call-To-Action Banner for Admission */}
      <CtaBanner />
    </>
  );
}
