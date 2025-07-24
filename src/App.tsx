import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CommunitySection from './components/CommunitySection';
import JourneySection from './components/JourneySection';
import PricingSection from './components/PricingSection';
import TestimonialAndCTA from './components/TestimonialAndCTA';
import Footer from './components/Footer';

function App() {
  return (
    <main className="relative bg-white overflow-hidden">
      {/* Background net grid */}
      <div className="absolute inset-0 -z-10">
        <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 100">
          <defs>
            <pattern id="net" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M10 0 L0 0 0 10" fill="none" stroke="gray" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#net)" />
        </svg>
      </div>

      <Header />
      <HeroSection />
      <FeaturesSection />
      <CommunitySection />
      <JourneySection />
      <PricingSection />
      <TestimonialAndCTA />
      <Footer />
    </main>
  );
}

export default App;