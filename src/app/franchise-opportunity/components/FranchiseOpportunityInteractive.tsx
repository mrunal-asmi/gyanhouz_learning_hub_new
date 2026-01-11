'use client';

import { useState } from 'react';
import HeroSection from './HeroSection';
import RevenueStreamsSection from './RevenueStreamsSection';
import MarketOpportunitySection from './MarketOpportunitySection';
import ROISection from './ROISection';
import SuccessStoriesSection from './SuccessStoriesSection';
import SupportSection from './SupportSection';
import InvestmentSection from './InvestmentSection';
import FranchiseInquiryForm from './FranchiseInquiryForm';

const FranchiseOpportunityInteractive = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleInquiryClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <HeroSection onInquiryClick={handleInquiryClick} />
      <RevenueStreamsSection />
      <MarketOpportunitySection />
      <ROISection />
      <SuccessStoriesSection />
      <SupportSection />
      <InvestmentSection />

      <section className="py-16 bg-gradient-to-r from-primary to-brand-orange">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-poppins">
            Ready to Transform Education and Build Wealth?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 font-source">
            Join India's fastest-growing education franchise network. Start your journey today with
            comprehensive support every step of the way.
          </p>
          <button
            onClick={handleInquiryClick}
            className="px-10 py-5 bg-white text-primary rounded-lg font-bold text-xl hover:bg-white/90 transition-all duration-300 shadow-elevated hover:shadow-xl font-nunito"
          >
            Apply for Franchise Now
          </button>
        </div>
      </section>

      <FranchiseInquiryForm isOpen={isFormOpen} onClose={handleCloseForm} />
    </>
  );
};

export default FranchiseOpportunityInteractive;
