import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import CareerLabsInteractive from './components/CareerLabsInteractive';

export const metadata: Metadata = {
  title: 'Career Labs Discovery - Experience Real Careers | GYANHOUZ Learning Hub',
  description:
    "India's first career discovery lab for children. Experience 50+ real-world professions through hands-on simulations, industry mentorship, and practical skill development. Career labs near me, career discovery for kids, best career guidance program.",
};

export default function CareerLabsDiscoveryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <CareerLabsInteractive />
      </main>
    </div>
  );
}
