import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Competitions - GYANHOUZ Learning Hub',
  description: 'Showcase your talent and compete with the best at GYANHOUZ Competitions.',
};

export default function CompetitionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-20">
        <section className="py-20 bg-yellow-500/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-poppins">
              Competitions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-source">
              Fun, practical, sponsored challenges — not boring exams. Showcase your talent and
              compete with the best.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center bg-card p-8 rounded-2xl shadow-subtle border border-border">
                <div className="w-full md:w-1/3 aspect-video bg-muted rounded-lg flex items-center justify-center text-4xl">
                  🤖
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 font-poppins">
                    National Robotics Challenge
                  </h3>
                  <p className="text-muted-foreground font-source mb-6">
                    A premier competition for young roboticists to solve real-world problems using
                    automation and AI.
                  </p>
                  <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all">
                    Register Now
                  </button>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center bg-card p-8 rounded-2xl shadow-subtle border border-border">
                <div className="w-full md:w-1/3 aspect-video bg-muted rounded-lg flex items-center justify-center text-4xl">
                  💡
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 font-poppins">Innovation Fair 2026</h3>
                  <p className="text-muted-foreground font-source mb-6">
                    Present your inventions and startup ideas to a panel of industry experts and
                    investors.
                  </p>
                  <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
