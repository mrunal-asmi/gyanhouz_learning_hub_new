import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HomepageInteractive from './components/HomepageInteractive';

export const metadata: Metadata = {
  title: "GYANHOUZ Learning Hub - India's First Integrated Learning Ecosystem",
  description:
    "Transform your child's future with India's revolutionary education ecosystem. From age 2-16, experience miraculous outcomes through preschool, career labs, innovation programs, and skill development under one roof.",
};

export default function Homepage() {
  return (
    <main className="min-h-screen bg-background" style={{ backgroundImage: "url('/assets/images/bg2.jpeg')" }}>
      <Header />
      <HomepageInteractive />
      <Footer />
    </main>
  );
}
