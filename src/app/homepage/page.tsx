import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HomepageInteractive from './components/HomepageInteractive';

export const metadata: Metadata = {
  title: 'GYANHOUZ Learning Hub - Where IQ Actually Develops | India\'s Premier Educational Ecosystem',
  description: 'Experience India\'s first integrated learning ecosystem combining preschool, innovation labs, and career discovery. Transform your child from passive learner to confident innovator. Limited seats available for 2025-26 batch.',
};

export default function Homepage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <HomepageInteractive />
      </main>
    </>
  );
}