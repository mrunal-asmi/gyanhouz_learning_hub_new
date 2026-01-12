'use client';

import { useState } from 'react';
import HeroSection from './HeroSection';
import WhyGYANHOUZSection from './WhyGYANHOUZSection';
import InvestmentBreakdown from './InvestmentBreakdown';
import ROICalculator from './ROICalculator';
import TerritoryMap from './TerritoryMap';
import SuccessStories from './SuccessStories';
import ProcessTimeline from './ProcessTimeline';
import InquiryForm from './InquiryForm';

export default function FranchiseInteractive() {
  const [isInquiryFormOpen, setIsInquiryFormOpen] = useState(false);

  const handleInquiryClick = () => {
    setIsInquiryFormOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryFormOpen(false);
  };

  return (
    <>
      <HeroSection onInquiryClick={handleInquiryClick} />
      <WhyGYANHOUZSection />
      <InvestmentBreakdown />
      <ROICalculator />
      <TerritoryMap />
      <SuccessStories />
      <ProcessTimeline />
      <InquiryForm isOpen={isInquiryFormOpen} onClose={handleCloseInquiry} />
    </>
  );
}