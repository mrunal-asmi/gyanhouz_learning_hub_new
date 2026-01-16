import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactInteractive from './components/ContactInteractive';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Contact & Campus Locator - GYANHOUZ Learning Hub',
  description:
    'Find your nearest GYANHOUZ campus across India. Book campus tours, request callbacks, and connect with our admissions team. Visit our Science Labs and experience the future of education.',
};

export default function ContactCampusLocatorPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <ContactInteractive />
        <Footer />
      </div>
    </main>
  );
}
