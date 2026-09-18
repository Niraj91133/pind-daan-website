import React from 'react';
import Link from 'next/link';
import Hero from '@/components/home/Hero';
import IntentDesk from '@/components/home/IntentDesk';
import SewaMap from '@/components/home/SewaMap';
import SewaCategories from '@/components/home/SewaCategories';
import HowItWorks from '@/components/home/HowItWorks';
import AcharyaProfile from '@/components/home/AcharyaProfile';
import GayaJiPilgrimage from '@/components/home/GayaJiPilgrimage';
import PlanMyVisit from '@/components/home/PlanMyVisit';
import SpecialModes from '@/components/home/SpecialModes';
import HomeFAQ from '@/components/home/HomeFAQ';
import BottomCtaBanner from '@/components/home/BottomCtaBanner';

export default function HomePage() {
  return (
    <div className="space-y-0">
      
      {/* 01 & 02. Hero Section */}
      <Hero />

      {/* 03. Intent Desk: "Aapko Kis Sewa Ki Zarurat Hai?" */}
      <IntentDesk />

      {/* 04. Sewa Categories (Ancestral, Pandit, Yatra, Parivaar) */}
      <SewaCategories />

      {/* 05. Visual Sewa Map Architecture */}
      <SewaMap />

      {/* 06. How Sewa Works */}
      <HowItWorks />

      {/* 07. Pradhan Teerth Purohit Profile & Guidance */}
      <AcharyaProfile />

      {/* 08. Gaya Ji Pilgrimage & Sacred Places */}
      <GayaJiPilgrimage />

      {/* 09. Plan Your Visit */}
      <PlanMyVisit />

      {/* 10. Senior / Family / NRI Modes */}
      <SpecialModes />

      {/* 11. Sahayata FAQs */}
      <HomeFAQ />

      {/* 12. Bottom Sewa CTA Banner */}
      <BottomCtaBanner />

    </div>
  );
}
