import type { Metadata } from 'next';
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
        <ContactInteractive />
        <AdmissionProcess />
        <ContactInfo />
      </div>

      <Footer />
    </main>
  );
}
