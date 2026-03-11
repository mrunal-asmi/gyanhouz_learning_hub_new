import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 z-0">
        <AppImage
          src="/assets/images/bgnew.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Icon name="SparklesIcon" size={20} className="text-primary" />
              <span className="text-sm font-semibold text-primary font-poppins">
                PRESCHOOL++ • Limitless future opportunities
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground font-poppins leading-tight">
              India’s first <span className="text-primary">full-spectrum</span> learning ecosystem
              for ages <span className="text-secondary">1.5–6</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground font-source leading-relaxed">
              Strong academics + thinking-oriented confidence + games & toys based learning + a
              Gurukul-inspired foundation. Built for an AI-era child: smart, curious, creative and
              future-ready.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-and-admissions"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-base hover:bg-primary/90 transition-all duration-300 shadow-elevated hover:shadow-elevated-hover font-nunito"
              >
                Enroll Your Child Now
                <Icon name="ArrowRightIcon" size={20} className="ml-2" />
              </Link>

              {/* <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-foreground border-2 border-border rounded-lg font-semibold text-base hover:border-primary hover:text-primary transition-all duration-300 shadow-subtle font-nunito">
                <Icon name="PlayIcon" size={20} className="mr-2" />
                Watch Success Stories
              </button> */}
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary font-poppins">
                  1.5–6
                </div>
                <div className="text-sm text-muted-foreground font-source mt-1">
                  Playgroup to Upper KG
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-secondary font-poppins">
                  NEP 2020
                </div>
                <div className="text-sm text-muted-foreground font-source mt-1">
                  NCF-FS 2022 • NCF 2023
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-accent font-poppins">
                  Cambridge
                </div>
                <div className="text-sm text-muted-foreground font-source mt-1">
                  Aligned (CBSE • ICSE)
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <AppImage
                src="/assets/images/school.jpeg"
                alt="Happy Indian preschool children in colorful classroom actively engaged in hands-on learning activities with teacher"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-elevated">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="CheckBadgeIcon" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground font-poppins">
                      For class timings & fees
                    </div>
                    <div className="text-sm text-muted-foreground font-source">
                      WhatsApp us • www.gyanhouz.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
