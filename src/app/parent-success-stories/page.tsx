import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ParentSuccessStoriesInteractive from './components/ParentSuccessStoriesInteractive';

export const metadata: Metadata = {
  title: 'Parent Success Stories - GYANHOUZ Learning Hub',
  description: 'Discover real transformation stories from parents whose children have thrived at GYANHOUZ. Watch video testimonials, explore before-after journeys, and see documented child development outcomes through our innovative learning programs.',
};

export default function ParentSuccessStoriesPage() {
  return (
    <>
      <Header />
      <ParentSuccessStoriesInteractive />
    </>
  );
}