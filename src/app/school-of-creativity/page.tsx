import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'School of Creativity - GYANHOUZ Learning Hub',
  description: 'Where imagination becomes expression at GYANHOUZ School of Creativity.',
};

export default function SchoolOfCreativityPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-20">
        <section className="py-20 bg-brand-orange/5">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center space-x-2 bg-brand-orange/10 px-4 py-2 rounded-full mb-6">
              <Icon name="PaintBrushIcon" size={20} className="text-brand-orange" />
              <span className="text-sm font-semibold text-brand-orange font-poppins">
                Unleash Your Imagination
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-poppins">
              School of Creativity
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-source">
              Where imagination becomes expression. We provide the tools and environment for
              children to explore their creative potential.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 bg-card rounded-2xl shadow-subtle border border-border hover:shadow-elevated transition-all duration-300">
                <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="PaintBrushIcon" size={28} className="text-brand-orange" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-poppins">Visual Arts</h3>
                <p className="text-muted-foreground font-source">
                  From painting to digital design, explore various mediums of visual expression.
                </p>
              </div>
              <div className="p-8 bg-card rounded-2xl shadow-subtle border border-border hover:shadow-elevated transition-all duration-300">
                <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="MusicalNoteIcon" size={28} className="text-brand-orange" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-poppins">Performing Arts</h3>
                <p className="text-muted-foreground font-source">
                  Music, dance, and drama programs that build confidence and stage presence.
                </p>
              </div>
              <div className="p-8 bg-card rounded-2xl shadow-subtle border border-border hover:shadow-elevated transition-all duration-300">
                <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="PencilSquareIcon" size={28} className="text-brand-orange" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-poppins">Creative Writing</h3>
                <p className="text-muted-foreground font-source">
                  Storytelling and expression through the power of words and imagination.
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
