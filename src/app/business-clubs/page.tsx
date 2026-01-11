import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Business Clubs - GYANHOUZ Learning Hub',
  description: 'Nurturing young entrepreneurs and business leaders at GYANHOUZ.',
};

export default function BusinessClubsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-20">
        <section className="py-20 bg-green-500/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-poppins">
              Business Clubs
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-source">
              Teaching finance, leadership, and real-world working. Develop entrepreneurship and financial literacy skills.
            </p>
          </div>
        </section>
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-8 bg-card rounded-2xl shadow-subtle border border-border">
                <h3 className="text-2xl font-bold mb-4 font-poppins">Young Entrepreneurs Club</h3>
                <p className="text-muted-foreground font-source mb-4">
                  Learn how to turn ideas into viable businesses, from market research to pitching.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Business Planning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Marketing Strategies</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-card rounded-2xl shadow-subtle border border-border">
                <h3 className="text-2xl font-bold mb-4 font-poppins">Leadership & Ethics</h3>
                <p className="text-muted-foreground font-source mb-4">
                  Develop the soft skills and ethical foundation required to lead in the 21st century.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Public Speaking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Team Management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
