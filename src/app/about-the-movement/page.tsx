import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import AboutInteractive from './components/AboutInteractive';

export const metadata: Metadata = {
  title: 'About the Movement - GYANHOUZ Learning Hub',
  description:
    "Discover the Education Revolution at GYANHOUZ - India's first integrated learning ecosystem transforming education from age 2-16 through practical innovation, holistic development, and career readiness.",
};

export default function AboutTheMovementPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-20">
        <AboutInteractive />
      </div>
      <Footer />
    </main>
  );
}
