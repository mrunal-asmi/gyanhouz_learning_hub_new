'use client';

import { useState, useEffect } from 'react';
import CareerHeroSection from './CareerHeroSection';
import CareerZonesSection from './CareerZonesSection';
import CareerPathwayExplorer from './CareerPathwayExplorer';
import IndustryPartnerships from './IndustryPartnerships';
import CareerOutcomesSection from './CareerOutcomesSection';
import CareerAdmissionForm from './CareerAdmissionForm';
import Footer from '@/app/homepage/components/Footer';

export default function CareerLabsInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading Career Labs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <CareerHeroSection onEnrollClick={() => setIsFormOpen(true)} />
      <CareerZonesSection />
      <CareerPathwayExplorer />
      <IndustryPartnerships />
      <CareerOutcomesSection onEnrollClick={() => setIsFormOpen(true)} />
      <Footer />
      <CareerAdmissionForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}
