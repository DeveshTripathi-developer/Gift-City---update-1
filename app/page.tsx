import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import GiftCitySection from '@/components/GiftCitySection';
import PhilosophySection from '@/components/PhilosophySection';
import ExperienceSection from '@/components/ExperienceSection';
import InvestmentLeadershipSection from '@/components/InvestmentLeadershipSection';
import QuoteBanner from '@/components/QuoteBanner';
import ConnectSection from '@/components/ConnectSection';
import RegulatorySection from '@/components/RegulatorySection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbfaf7] text-[#1a140e] font-sans antialiased selection:bg-[#b17a2b] selection:text-white">
      {/* Top Navigation Bar with Logo */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* 01 / GIFT City */}
        <GiftCitySection />

        {/* 02 / Our Philosophy */}
        <PhilosophySection />

        {/* 03 / Our Foundation & Experience */}
        <ExperienceSection />

        {/* 04 / Investment Leadership */}
        <InvestmentLeadershipSection />

        {/* Quote Break Banner */}
        <QuoteBanner />

        {/* 05 / Connect With Us Interactive Form */}
        <ConnectSection />

        {/* 06 / Regulatory & Investor Information */}
        <RegulatorySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
