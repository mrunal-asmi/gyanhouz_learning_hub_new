import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ScienceLabsInteractive from './components/ScienceLabsInteractive';

export const metadata: Metadata = {
  title: 'Science Labs Experience - Hands-On Scientific Discovery | GYANHOUZ',
  description:
    'Transform science education from theory to practice. State-of-the-art laboratory facilities for physics, chemistry, biology experiments. Best science lab for kids, practical science learning, experiential science education near me.',
};

export default function ScienceLabsExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <ScienceLabsInteractive />
      </main>
    </div>
  );
}
