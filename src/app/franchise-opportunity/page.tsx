import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import FranchiseOpportunityInteractive from './components/FranchiseOpportunityInteractive';

export const metadata: Metadata = {
  title: 'Franchise Opportunity - GYANHOUZ Learning Hub',
  description:
    "Join India's first integrated learning ecosystem franchise with 7+ revenue streams, proven ROI in 18-24 months, and comprehensive support. Transform education while building a profitable business with GYANHOUZ.",
};

export default function FranchiseOpportunityPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-20">
        <FranchiseOpportunityInteractive />
      </div>
      <Footer />
    </main>
  );
}
