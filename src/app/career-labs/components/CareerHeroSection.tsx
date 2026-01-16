import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CareerHeroSectionProps {
  className?: string;
}

const CareerHeroSection = ({ className = '' }: CareerHeroSectionProps) => {
  return (
    <section
      className={`relative bg-gradient-to-br from-secondary via-brand-trust to-secondary overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Icon name="SparklesIcon" size={20} className="text-brand-orange" />
              <span className="text-sm font-semibold text-white font-source">
                India's Most Advanced Career Discovery System
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight font-poppins">
              Helping Children <span className="text-brand-orange">Try the Future</span> Before
              Choosing It
            </h1>

            <p className="text-lg lg:text-xl text-white/90 leading-relaxed font-source">
              From age 2 to 16, our comprehensive Career Labs guide children through early career
              discovery and hands-on exploration of 50+ career pathways with expert mentors and real
              industry projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-primary text-white rounded-lg font-semibold text-base hover:bg-primary/90 transition-all duration-300 shadow-elevated hover:shadow-elevated-hover flex items-center justify-center space-x-2 font-nunito">
                <span>Explore Career Pathways</span>
                <Icon name="ArrowRightIcon" size={20} />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-base hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 font-nunito">
                <Icon name="PlayIcon" size={20} />
                <span>Watch Success Stories</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white font-poppins">50+</div>
                <div className="text-sm text-white/80 mt-1 font-source">Career Pathways</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white font-poppins">200+</div>
                <div className="text-sm text-white/80 mt-1 font-source">Industry Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white font-poppins">95%</div>
                <div className="text-sm text-white/80 mt-1 font-source">Career Clarity</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1644626ed-1764661581325.png"
                alt="Indian teenage student in blue shirt working on robotics project with circuit boards and laptop in modern Science Lab"
                className="w-full h-[500px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-elevated">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="AcademicCapIcon" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground font-poppins">
                      Arjun Sharma, Age 14
                    </div>
                    <div className="text-xs text-muted-foreground font-source">
                      Discovered AI Engineering passion through Career Labs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHeroSection;
