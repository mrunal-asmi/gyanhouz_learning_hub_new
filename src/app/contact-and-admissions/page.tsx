import type { Metadata } from 'next';
import { Suspense } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ContactHero from './components/ContactHero';
import ContactInteractive from './components/ContactInteractive';
import ContactInfo from './components/ContactInfo';
import AdmissionProcess from './components/AdmissionProcess';

export const metadata: Metadata = {
  title: 'Contact & Admissions - GYANHOUZ Learning Hub',
  description:
    "Start your child's transformation journey with GYANHOUZ. Multiple admission pathways for preschool, career labs, innovation programs, and franchise opportunities. Contact us today.",
};

export default function ContactAndAdmissionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="pt-16 lg:pt-20">
        <ContactHero />
        <Suspense
          fallback={
            <div className="py-16 lg:py-20 bg-background">
              <div className="container mx-auto px-4">
                <div className="text-center">
                  <div className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              </div>
            </div>
          }
        >
          <ContactInteractive />
        </Suspense>
        <AdmissionProcess />
        <ContactInfo />
      </div>

      <Footer />
    </main>
  );
}
