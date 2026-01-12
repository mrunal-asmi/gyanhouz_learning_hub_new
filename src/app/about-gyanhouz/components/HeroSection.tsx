import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-brand-orange/10 via-background to-brand-teal/10 py-20 lg:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-brand-orange/10 rounded-full">
              <span className="text-brand-orange font-semibold text-sm">India's Education Revolution</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              Where IQ Actually <span className="text-brand-orange">Develops</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              GYANHOUZ embodies the Education Revolution - transforming learning from passive consumption to active discovery. We represent experiential wisdom where children don't just learn concepts but live them through hands-on exploration.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-brand-orange">10+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Years</p>
                  <p className="text-xs text-muted-foreground">Experience</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-brand-teal">5000+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Students</p>
                  <p className="text-xs text-muted-foreground">Transformed</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-brand-blue">25+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Campuses</p>
                  <p className="text-xs text-muted-foreground">Pan India</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1e8f07571-1764661581736.png"
                alt="Young Indian children engaged in hands-on science experiment with colorful liquids in modern bright classroom"
                className="w-full h-[400px] lg:h-[500px] object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-semibold">Innovation Built, Not Imagined</p>
                <p className="text-sm opacity-90">Experiential learning at its finest</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;