import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Career Discovery - GYANHOUZ Learning Hub',
  description: 'Explore and discover your future career path with GYANHOUZ Learning Hub.',
};

export default function CareerDiscoveryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-20">
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-poppins">
              Career Discovery
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-source">
              Unlock your potential and explore diverse career pathways designed for the next generation of leaders.
            </p>
          </div>
        </section>
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder content for Career Discovery */}
              <div className="p-8 bg-card rounded-2xl shadow-subtle border border-border">
                <h3 className="text-2xl font-bold mb-4 font-poppins">Self-Assessment</h3>
                <p className="text-muted-foreground font-source">
                  Discover your strengths, interests, and values through our comprehensive assessment tools.
                </p>
              </div>
              <div className="p-8 bg-card rounded-2xl shadow-subtle border border-border">
                <h3 className="text-2xl font-bold mb-4 font-poppins">Industry Insights</h3>
                <p className="text-muted-foreground font-source">
                  Gain deep insights into various industries and understand the skills required for success.
                </p>
              </div>
              <div className="p-8 bg-card rounded-2xl shadow-subtle border border-border">
                <h3 className="text-2xl font-bold mb-4 font-poppins">Expert Guidance</h3>
                <p className="text-muted-foreground font-source">
                  Connect with industry experts and mentors who can guide you on your career journey.
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
