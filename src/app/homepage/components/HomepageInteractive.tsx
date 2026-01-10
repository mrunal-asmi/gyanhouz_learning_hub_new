'use client';

import { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import ProgramsExplorer from './ProgramsExplorer';
import ComparisonSection from './ComparisonSection';
import TestimonialsCarousel from './TestimonialsCarousel';
import FranchiseSection from './FranchiseSection';
import TrustSection from './TrustSection';
import CTASection from './CTASection';
import Footer from './Footer';

export default function HomepageInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Mock data for urgency indicators
  const availableSeats = 127;
  const applicationDeadline = '31st December 2025';

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading GYANHOUZ...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection 
        availableSeats={availableSeats}
        deadline={applicationDeadline}
      />
      <StatsSection />
      <ProgramsExplorer />
      <ComparisonSection />
      <TestimonialsCarousel />
      <FranchiseSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
}