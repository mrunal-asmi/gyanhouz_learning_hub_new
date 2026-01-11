import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import CareerLabsInteractive from './components/CareerLabsInteractive';

export const metadata: Metadata = {
  title: 'Career Labs - GYANHOUZ Learning Hub',
  description:
    "Discover your child's dream career early with India's most advanced career discovery system. Comprehensive career exploration programs from age 2-16 with expert mentors, real industry projects, and hands-on learning experiences across 50+ career pathways.",
};

export default function CareerLabsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-20">
        <CareerLabsInteractive />
      </div>
      <Footer />
    </main>
  );
}
