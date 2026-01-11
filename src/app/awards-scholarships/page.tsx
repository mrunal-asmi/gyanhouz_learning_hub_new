import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Awards & Scholarships - GYANHOUZ Learning Hub',
  description: 'Recognizing excellence and supporting talent through GYANHOUZ Awards & Scholarships.',
};

export default function AwardsScholarshipsPage() {
  const awards = [
    {
      title: 'Young Innovator Award',
      description: 'Recognizing students who demonstrate exceptional creativity and problem-solving skills in our Innovation Lab.',
      icon: '🏆',
    },
    {
      title: 'Future Leader Scholarship',
      description: 'Supporting high-potential students with financial assistance to pursue advanced career pathways.',
      icon: '🎓',
    },
    {
      title: 'Community Impact Award',
      description: 'Honoring students who use their skills to make a positive difference in their local communities.',
      icon: '🌟',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-20">
        <section className="py-20 bg-gradient-to-b from-brand-orange/10 to-transparent">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-poppins">
              Scholarships & Awards
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-source">
              Recognizing talent, effort and innovation. Celebrating achievements and empowering the next generation.
            </p>
          </div>
        </section>
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="p-8 bg-card rounded-2xl shadow-subtle border border-border hover:shadow-elevated transition-all duration-300 text-center">
                  <div className="text-5xl mb-6">{award.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 font-poppins">{award.title}</h3>
                  <p className="text-muted-foreground font-source">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8 font-poppins">Apply for a Scholarship</h2>
            <p className="text-lg text-muted-foreground mb-10 font-source">
              Are you a high-achiever looking for support to reach your full potential? Our scholarship programs are designed to help talented students access world-class education and mentorship.
            </p>
            <button className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-subtle hover:shadow-elevated">
              View Application Process
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
