import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  className?: string;
}

const heroImages = [
  {
    desktopSrc: '/assets/images/pencil.jpeg',
    mobileSrc: '/assets/images/pencilMob.jpg.jpeg',
    alt: 'Gyanhouz preschool reimagined and beyond the classroom admission open poster',
  },
  {
    desktopSrc: '/assets/images/openSchool.jpeg',
    mobileSrc: '/assets/images/openSchoolMob.jpg.jpeg',
    alt: 'Gyanhouz open schools preschool program poster',
  },
  {
    desktopSrc: '/assets/images/fivePetals.jpeg',
    mobileSrc: '/assets/images/fivePetalsMob.jpg.jpeg',
    alt: 'Gyanhouz five petals preschool learning framework poster',
  },
  {
    desktopSrc: '/assets/images/leap.jpeg',
    mobileSrc: '/assets/images/leapMob.jpg.jpeg',
    alt: 'Gyanhouz LEAP learning architecture poster',
  },
];

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

      <div className="mx-auto py-8 md:py-16 lg:py-5 relative z-10">
        <div className="space-y-4 md:space-y-12 lg:space-y-8">
          {heroImages.map((image, index) => (
            <div
              key={image.desktopSrc}
              className="relative overflow-hidden md:rounded-2xl md:shadow-elevated"
            >
              <AppImage
                src={image.mobileSrc}
                alt={image.alt}
                width={360}
                height={image.mobileSrc.includes('leapMob') ? 644 : 640}
                className="block md:hidden w-full h-auto object-contain"
                priority={index === 0}
                sizes="100vw"
              />
              <AppImage
                src={image.desktopSrc}
                alt={image.alt}
                width={1600}
                height={image.desktopSrc.includes('leap') ? 804 : 800}
                className="hidden md:block w-full h-[400px] lg:h-[600px] object-cover"
                priority={index === 0}
                sizes="100vw"
              />

              <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          ))}

          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
