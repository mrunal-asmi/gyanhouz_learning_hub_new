import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Robotics & Electronics Lab - GYANHOUZ Learning Hub',
  description: 'Hands-on learning in robotics, electronics, and automation at GYANHOUZ.',
};

export default function RoboticsElectronicsLabPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-20">
        <section className="py-20 bg-blue-500/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-poppins">
              Robotics & Electronics Lab
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-source">
              Turning ideas into machines and innovation through hands-on robotics and electronics
              exploration.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 bg-card rounded-2xl shadow-subtle border border-border">
                <h3 className="text-2xl font-bold mb-4 font-poppins">Circuit Design</h3>
                <p className="text-muted-foreground font-source">
                  Learn the fundamentals of electronics and design your own functional circuits.
                </p>
              </div>
              <div className="p-8 bg-card rounded-2xl shadow-subtle border border-border">
                <h3 className="text-2xl font-bold mb-4 font-poppins">Robot Building</h3>
                <p className="text-muted-foreground font-source">
                  From simple bots to complex autonomous systems, build and program your own robots.
                </p>
              </div>
              <div className="p-8 bg-card rounded-2xl shadow-subtle border border-border">
                <h3 className="text-2xl font-bold mb-4 font-poppins">IoT & Automation</h3>
                <p className="text-muted-foreground font-source">
                  Explore the world of connected devices and smart automation systems.
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
