import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import SuccessStoriesInteractive from './components/SuccessStoriesInteractive';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Success Stories - GYANHOUZ Learning Hub',
  description:
    'Discover inspiring transformation stories of GYANHOUZ students achieving remarkable outcomes in academics, innovation, leadership, and holistic development through our revolutionary integrated learning ecosystem.',
};

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 lg:pt-24">
        <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold font-nunito mb-4">
                <Icon name="SparklesIcon" size={20} />
                <span>Real Transformations, Measurable Results</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-poppins leading-tight">
                Success Stories That
                <span className="block text-primary mt-2">Inspire & Transform</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground font-source leading-relaxed max-w-3xl mx-auto">
                Discover how GYANHOUZ's revolutionary integrated learning ecosystem is transforming
                children from age 2-16 into confident, skilled, and future-ready individuals. These
                aren't just stories—they're proof of what's possible when education meets
                innovation.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <div className="flex items-center space-x-2 px-4 py-2 bg-card rounded-lg shadow-subtle">
                  <Icon name="CheckBadgeIcon" size={24} className="text-success" />
                  <span className="text-sm font-semibold text-foreground font-source">
                    500+ Success Stories
                  </span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-card rounded-lg shadow-subtle">
                  <Icon name="TrophyIcon" size={24} className="text-warning" />
                  <span className="text-sm font-semibold text-foreground font-source">
                    95% Achievement Rate
                  </span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-card rounded-lg shadow-subtle">
                  <Icon name="HeartIcon" size={24} className="text-error" />
                  <span className="text-sm font-semibold text-foreground font-source">
                    98% Parent Satisfaction
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <SuccessStoriesInteractive />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
