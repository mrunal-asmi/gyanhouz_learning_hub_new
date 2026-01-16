'use client';

import { useState, useEffect } from 'react';
import ScienceHeroSection from './ScienceHeroSection';
import LabFacilitiesSection from './LabFacilitiesSection';
import ExperimentShowcase from './ExperimentShowcase';
import ScientificMethodSection from './ScientificMethodSection';
import ScienceOutcomesSection from './ScienceOutcomesSection';
import ScienceAdmissionForm from './ScienceAdmissionForm';
import Footer from '@/app/homepage/components/Footer';

export default function ScienceLabsInteractive() {
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
          <p className="text-muted-foreground">Loading Science Labs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ScienceHeroSection onEnrollClick={() => setIsFormOpen(true)} />
      <LabFacilitiesSection />
      <ExperimentShowcase />
      <ScientificMethodSection />
      <ScienceOutcomesSection onEnrollClick={() => setIsFormOpen(true)} />
      <Footer />
      <ScienceAdmissionForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}
