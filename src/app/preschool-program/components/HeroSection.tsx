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

      <div className="container mx-auto px-4 py-16 lg:py-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          <div className="space-y-12 lg:space-y-8">
           
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <AppImage
                src="/assets/images/pencil.jpeg"
                alt="Happy Indian preschool children in colorful classroom actively engaged in hands-on learning activities with teacher"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 lg:py-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          <div className="space-y-12 lg:space-y-8">
           
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <AppImage
                src="/assets/images/openSchool.jpeg"
                alt="Happy Indian preschool children in colorful classroom actively engaged in hands-on learning activities with teacher"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 lg:py-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          <div className="space-y-12 lg:space-y-8">
           
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <AppImage
                src="/assets/images/fivePetals.jpeg"
                alt="Happy Indian preschool children in colorful classroom actively engaged in hands-on learning activities with teacher"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            </div>
            <div className="container mx-auto px-4 py-16 lg:py-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          <div className="space-y-12 lg:space-y-8">
           
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <AppImage
                src="/assets/images/leap.jpeg"
                alt="Happy Indian preschool children in colorful classroom actively engaged in hands-on learning activities with teacher"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
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
