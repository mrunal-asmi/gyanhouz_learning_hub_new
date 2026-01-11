import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import InnovationLabInteractive from './components/InnovationLabInteractive';

export const metadata: Metadata = {
  title: 'Innovation Lab - GYANHOUZ Learning Hub',
  description:
    "Join India's most advanced innovation lab where young minds transform into tomorrow's inventors through hands-on projects, expert mentorship, and cutting-edge technology. Patent-level inventions from ages 8-16.",
};

export default function InnovationLabPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-20">
        <InnovationLabInteractive />
      </div>
      <Footer />
    </main>
  );
}
