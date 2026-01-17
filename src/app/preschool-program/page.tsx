import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from './components/HeroSection';
import ComparisonSection from './components/ComparisonSection';
import ResultsShowcase from './components/ResultsShowcase';
import TestimonialsSection from './components/TestimonialsSection';
import CurriculumSection from './components/CurriculumSection';
import FutureOpportunitiesSection from './components/FutureOpportunitiesSection';
import AdmissionForm from './components/AdmissionForm';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
  title: 'Preschool++ Program - GYANHOUZ Learning Hub',
  description:
    "India's FIRST integrated preschool program offering ambidextrous writing, trilingual fluency, stage confidence, and innovation skills. Transform your child's future with miraculous results that traditional preschools cannot deliver.",
};

export default function PreschoolProgramPage() {
  return (
    <main className="min-h-screen bg-background" >
      <Header />

      <div className="pt-16 lg:pt-20" >
        
        <HeroSection />
        <ComparisonSection />
        <ResultsShowcase />
        <CurriculumSection />
        <FutureOpportunitiesSection />
        <AdmissionForm />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </div>

      <Footer />
    </main>
  );
}
