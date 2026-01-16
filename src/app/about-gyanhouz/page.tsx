import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import VisionMissionSection from './components/VisionMissionSection';
import FounderSection from './components/FounderSection';
import TimelineSection from './components/TimelineSection';
import ResearchSection from './components/ResearchSection';
import PhilosophyComparisonSection from './components/PhilosophyComparisonSection';
import AwardsSection from './components/AwardsSection';
import TeamSection from './components/TeamSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: "About GYANHOUZ - India's Education Revolution | Learning Hub",
  description:
    "Discover GYANHOUZ's vision to transform education from passive consumption to active discovery. Learn about our research-backed experiential learning methodology, founder story, and mission to make every child a confident innovator.",
};

export default function AboutGyanHouzPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <VisionMissionSection />
        <FounderSection />
        <TimelineSection />
        <ResearchSection />
        <PhilosophyComparisonSection />
        <AwardsSection />
        <TeamSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
