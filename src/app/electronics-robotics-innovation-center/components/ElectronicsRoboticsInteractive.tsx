'use client';

import HeroSection from './HeroSection';
import WhyDifferentSection from './WhyDifferentSection';
import TechnologyStackSection from './TechnologyStackSection';
import LearningPathwaySection from './LearningPathwaySection';
import ProjectShowcaseSection from './ProjectShowcaseSection';
import CompetitionSection from './CompetitionSection';
import IndustryConnectionsSection from './IndustryConnectionsSection';
import EnrollmentCTASection from './EnrollmentCTASection';
import Footer from './Footer';

export default function ElectronicsRoboticsInteractive() {
  return (
    <div className="w-full">
      <HeroSection />
      <WhyDifferentSection />
      <TechnologyStackSection />
      <LearningPathwaySection />
      <ProjectShowcaseSection />
      <CompetitionSection />
      <IndustryConnectionsSection />
      <EnrollmentCTASection />
      <Footer />
    </div>
  );
}
