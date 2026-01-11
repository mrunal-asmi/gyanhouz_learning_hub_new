import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Collaboration - GYANHOUZ Learning Hub',
  description: 'Partner with GYANHOUZ Learning Hub to transform the future of education.',
};

export default function CollaborationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-20">
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-poppins">
              Collaboration
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-source">
              Join our ecosystem of innovators, educators, and industry leaders to create meaningful impact in learning.
            </p>
          </div>
        </section>
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 font-poppins">Why Collaborate with Us?</h2>
                <p className="text-lg text-muted-foreground mb-6 font-source">
                  At GYANHOUZ, we believe in the power of collective intelligence. By partnering with us, you become part of a movement that is redefining how children learn and grow.
                </p>
                <ul className="space-y-4">
                  {[
                    'Access to a global network of experts',
                    'Innovative learning methodologies',
                    'Scalable educational solutions',
                    'Shared vision for future-ready education',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground font-source">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-elevated border border-border">
                <h3 className="text-2xl font-bold mb-6 font-poppins">Partnership Inquiry</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 font-poppins">Organization Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Your Organization" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 font-poppins">Contact Person</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 font-poppins">Email Address</label>
                    <input type="email" className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="email@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 font-poppins">Message</label>
                    <textarea className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none transition-all h-32" placeholder="How would you like to collaborate?"></textarea>
                  </div>
                  <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all shadow-subtle">
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
