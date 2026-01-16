'use client';

import TopBanner from './TopBanner';
import HeroSection from './HeroSection';
import EcosystemMap from './EcosystemMap';
import ResultsShowcase from './ResultsShowcase';
import FOMOGenerator from './FOMOGenerator';
import FranchiseSpotlight from './FranchiseSpotlight';
import SuccessCarousel from './SuccessCarousel';
import QuickActionCenter from './QuickActionCenter';
import UrgencyPopup from './UrgencyPopup';

const HomepageInteractive = () => {
  return (
    <>
      <UrgencyPopup />
      <TopBanner />
      <HeroSection />
      <EcosystemMap />
      <ResultsShowcase />
      <FOMOGenerator />
      <FranchiseSpotlight />
      <SuccessCarousel />
      <QuickActionCenter />
    </>
  );
};

export default HomepageInteractive;
