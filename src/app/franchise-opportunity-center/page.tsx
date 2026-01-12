import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import FranchiseInteractive from './components/FranchiseInteractive';

export const metadata: Metadata = {
  title: 'Franchise Opportunity Center - GYANHOUZ Learning Hub',
  description: 'Join India\'s fastest-growing education revolution. Partner with GYANHOUZ and own a premium learning ecosystem with proven ROI, comprehensive training, and ongoing support across 45+ cities.',
};

export default function FranchiseOpportunityCenterPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <FranchiseInteractive />
      </div>
    </main>
  );
}