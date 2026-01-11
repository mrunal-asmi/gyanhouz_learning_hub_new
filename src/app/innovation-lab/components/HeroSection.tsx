import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section
      className={`relative bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Icon name="SparklesIcon" size={20} className="text-primary" />
              <span className="text-sm font-semibold text-primary font-poppins">
                India's Most Advanced Innovation Lab
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground font-poppins leading-tight">
              Where Young Minds Become
              <span className="block text-primary mt-2">Tomorrow's Inventors</span>
            </h1>

            <p className="text-lg text-muted-foreground font-source leading-relaxed">
              Transform your child from a passive learner to an active innovator. Our ecosystem
              connects invention with real-world mentorship, cutting-edge technology, and practical
              problem-solving skills that traditional schools simply cannot offer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#enrollment"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-base hover:bg-primary/90 transition-all duration-300 shadow-subtle hover:shadow-elevated font-nunito"
              >
                Start Innovation Journey
                <Icon name="ArrowRightIcon" size={20} className="ml-2" />
              </a>
              <a
                href="#virtual-tour"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-foreground border-2 border-border rounded-lg font-semibold text-base hover:border-primary hover:text-primary transition-all duration-300 font-nunito"
              >
                <Icon name="PlayIcon" size={20} className="mr-2" />
                Virtual Lab Tour
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-poppins">500+</div>
                <div className="text-sm text-muted-foreground font-source mt-1">
                  Inventions Created
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent font-poppins">50+</div>
                <div className="text-sm text-muted-foreground font-source mt-1">
                  Patent Applications
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary font-poppins">100+</div>
                <div className="text-sm text-muted-foreground font-source mt-1">Expert Mentors</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1f966c70b-1767715904004.png"
                alt="Young Indian students working together on robotics project with circuit boards and electronic components in modern innovation lab"
                className="w-full h-[500px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-semibold font-poppins">Real Innovation, Real Results</p>
                <p className="text-sm font-source mt-1 opacity-90">
                  Students building tomorrow's solutions today
                </p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-accent text-white px-6 py-4 rounded-xl shadow-elevated">
              <div className="flex items-center space-x-3">
                <Icon name="TrophyIcon" size={32} />
                <div>
                  <div className="text-2xl font-bold font-poppins">25+</div>
                  <div className="text-sm font-source">National Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
