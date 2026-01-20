import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface ContactHeroProps {
  className?: string;
}

const ContactHero = ({ className = '' }: ContactHeroProps) => {
  return (
    <section className={`relative py-20 lg:py-28 overflow-hidden ${className}`}>
      <div className="absolute inset-0 z-0">
        <AppImage
          src="/assets/images/bgnew.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-brand-orange/80 to-secondary/80 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-elevated">
            <Icon name="EnvelopeIcon" size={40} className="text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins leading-tight">
            Start Your Child's <span className="text-accent">Transformation Journey</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 font-source leading-relaxed max-w-3xl mx-auto">
            Join India's FIRST integrated learning ecosystem. Multiple pathways to unlock your
            child's infinite potential from age 2 to 16.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-white/90">
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircleIcon" size={24} className="text-accent" />
              <span className="text-sm font-medium font-source">Quick Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircleIcon" size={24} className="text-accent" />
              <span className="text-sm font-medium font-source">Expert Guidance</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircleIcon" size={24} className="text-accent" />
              <span className="text-sm font-medium font-source">Flexible Options</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
