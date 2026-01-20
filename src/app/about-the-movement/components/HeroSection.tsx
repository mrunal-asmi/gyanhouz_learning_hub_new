'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className={`relative py-20 lg:py-32 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-16 bg-muted/50 rounded-lg mb-6 animate-pulse"></div>
            <div className="h-32 bg-muted/50 rounded-lg mb-8 animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`relative py-20 lg:py-32 overflow-hidden ${className}`}>
      <div className="absolute inset-0 z-0">
        <AppImage
          src="/assets/images/bgnew.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-semibold text-sm lg:text-base font-poppins">
              Expanding early only preschool model to multiple learning modules
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-poppins leading-tight">
            <span className="text-primary"> </span>
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground mb-8 font-source leading-relaxed">
            Expanding early only preschool model to multiple learning module under single campus.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center space-x-2 px-6 py-3 bg-card rounded-lg shadow-subtle">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-foreground font-nunito">
                Active Movement Since 2020
              </span>
            </div>
            <div className="flex items-center space-x-2 px-6 py-3 bg-card rounded-lg shadow-subtle">
              <span className="text-2xl font-bold text-primary font-poppins">5000+</span>
              <span className="text-sm text-muted-foreground font-source">Lives Transformed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
