import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import LearningProgramsInteractive from './components/LearningProgramsInteractive';

export const metadata: Metadata = {
  title: 'Learning Programs Hub - GYANHOUZ',
  description: 'Explore comprehensive learning programs from Preschool Foundation (2-6 years) to Innovation Labs and Career Discovery. Experience hands-on learning with robotics, electronics, science labs, and industry simulations.',
};

export default function LearningProgramsHubPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <LearningProgramsInteractive />
      </main>
    </div>
  );
}