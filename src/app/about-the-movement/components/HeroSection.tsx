'use client';

import { useState, useEffect } from 'react';

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
      <section
        className={`relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20 lg:py-32 ${className}`}
      >
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
    <section
      className={`relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20 lg:py-32 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-semibold text-sm lg:text-base font-poppins">
              The Education Revolution
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-poppins leading-tight">
            Unlocking Every Child's <span className="text-primary">Infinite Potential</span>
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground mb-8 font-source leading-relaxed">
            India's FIRST integrated learning ecosystem that transforms education from theoretical
            memorization to practical innovation, career readiness, and holistic development for
            ages 2-16.
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
