import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Science Labs - GYANHOUZ Learning Hub',
  description:
    'Hands-on experiments that transform curiosity into clarity at GYANHOUZ Science Labs.',
};

export default function ScienceLabsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-20">
        <section className="py-20 bg-blue-600/5">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-600/10 px-4 py-2 rounded-full mb-6">
              <Icon name="BeakerIcon" size={20} className="text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 font-poppins">
                Discovery-Based Learning
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-poppins">
              Science Labs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-source">
              Hands-on experiments that transform curiosity into clarity. Introduction to Hands-On
              Science Experiments at Gyanhouz.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 lg:p-12 shadow-subtle border border-border">
              <h2 className="text-3xl font-bold text-foreground font-poppins mb-8 text-center">
                Discoveries, Not Demonstrations
              </h2>

              <div className="prose prose-lg max-w-none text-muted-foreground font-source mb-12">
                <p>
                  Hands-on science experiences are not demonstrations — they are discoveries. At
                  Gyanhouz, science is not taught from a book. It is experienced through small,
                  safe, high-engagement experiments that use everyday materials.
                </p>
                <p>
                  Children explore how things work, make predictions, observe changes, and explain
                  their thinking.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4 p-6 bg-muted/50 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MagnifyingGlassIcon" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground font-poppins mb-2">Observe</h3>
                    <p className="text-sm font-source">
                      Developing keen observation skills through real experiments.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-muted/50 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="QuestionMarkCircleIcon" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground font-poppins mb-2">Question</h3>
                    <p className="text-sm font-source">
                      Encouraging children to ask "Why?" and "How?".
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-muted/50 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="LightBulbIcon" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground font-poppins mb-2">Think</h3>
                    <p className="text-sm font-source">Making predictions and analyzing results.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-muted/50 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="ChatBubbleLeftEllipsisIcon" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground font-poppins mb-2">Explain</h3>
                    <p className="text-sm font-source">
                      Articulating scientific concepts in their own words.
                    </p>
                  </div>
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
