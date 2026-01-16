import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Professional Classes - GYANHOUZ Learning Hub',
  description: 'Advanced professional training and skill development at GYANHOUZ.',
};

export default function ProfessionalClassesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-20">
        <section className="py-20 bg-purple-500/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-poppins">
              Professional Classes
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-source">
              Future skills, confidence, communication, leadership. Stage-confidence and speaking in
              crowd.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-card rounded-2xl shadow-subtle border border-border">
                <h3 className="text-xl font-bold mb-4 font-poppins">Digital Marketing</h3>
                <p className="text-muted-foreground font-source">
                  Learn SEO, social media marketing, and content strategy from industry
                  professionals.
                </p>
              </div>
              <div className="p-8 bg-card rounded-2xl shadow-subtle border border-border">
                <h3 className="text-xl font-bold mb-4 font-poppins">Data Science</h3>
                <p className="text-muted-foreground font-source">
                  Master data analysis, visualization, and machine learning fundamentals.
                </p>
              </div>
              <div className="p-8 bg-card rounded-2xl shadow-subtle border border-border">
                <h3 className="text-xl font-bold mb-4 font-poppins">UI/UX Design</h3>
                <p className="text-muted-foreground font-source">
                  Design intuitive user interfaces and create compelling user experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
