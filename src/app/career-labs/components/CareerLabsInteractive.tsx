'use client';

import { useEffect, useState } from 'react';
import CareerHeroSection from './CareerHeroSection';
import AgeBasedProgramsSection from './AgeBasedProgramsSection';
import CareerPathwaysSection from './CareerPathwaysSection';
import MentorNetworkSection from './MentorNetworkSection';
import IndustryPartnershipsSection from './IndustryPartnershipsSection';
import SuccessMetricsSection from './SuccessMetricsSection';
import CareerAssessmentSection from './CareerAssessmentSection';
import EnrollmentFormSection from './EnrollmentFormSection';

const CareerLabsInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20">
          <div className="animate-pulse space-y-8">
            <div className="h-96 bg-muted rounded-2xl"></div>
            <div className="h-64 bg-muted rounded-2xl"></div>
            <div className="h-64 bg-muted rounded-2xl"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <CareerHeroSection />
      <AgeBasedProgramsSection />
      <CareerPathwaysSection />
      <MentorNetworkSection />
      <IndustryPartnershipsSection />
      <SuccessMetricsSection />
      <CareerAssessmentSection />
      <EnrollmentFormSection />
    </>
  );
};

export default CareerLabsInteractive;
