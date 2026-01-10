'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  availableSeats: number;
  deadline: string;
}

export default function HeroSection({ availableSeats, deadline }: HeroSectionProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const heroSlides = [
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1260b9044-1764922460395.png",
    alt: 'Young Indian girl in blue shirt conducting science experiment with colorful liquids in modern laboratory',
    title: 'Where IQ Actually Develops',
    subtitle: 'Experience-based learning that builds confident innovators, not memorizers'
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a009f90c-1765197239094.png",
    alt: 'Group of diverse children building colorful robot with electronic components in innovation lab',
    title: 'Innovation Built, Not Imagined',
    subtitle: 'Hands-on robotics, electronics, and science labs for young minds'
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1aa14fe32-1764658682774.png",
    alt: 'Children in bright classroom exploring career simulation setup with professional equipment',
    title: 'Experience Careers, Don\'t Guess Them',
    subtitle: 'Industry Club & Career Discovery Labs for future-ready children'
  }];


  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHydrated, heroSlides.length]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-gradient-to-br from-brand-orange/10 via-background to-brand-teal/10">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) =>
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
          currentSlide === index ? 'opacity-100' : 'opacity-0'}`
          }>

            <AppImage
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0} />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Urgency Badge */}
            <div className="inline-flex items-center space-x-2 bg-error/90 text-error-foreground px-4 py-2 rounded-full mb-6 animate-pulse">
              <Icon name="ExclamationTriangleIcon" size={20} variant="solid" />
              <span className="text-sm font-semibold">
                Only {availableSeats} Seats Left for 2025-26 Batch!
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {heroSlides[currentSlide].title}
            </h1>

            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact-campus-locator"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-brand-orange-foreground font-bold text-lg rounded-lg shadow-brand hover:bg-brand-red hover:shadow-lg hover:-translate-y-1 transition-smooth">

                <Icon name="CalendarIcon" size={24} className="mr-2" />
                Book Free Assessment
              </Link>
              <Link
                href="/learning-programs-hub"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-smooth">

                Explore Programs
                <Icon name="ArrowRightIcon" size={24} className="ml-2" />
              </Link>
            </div>

            {/* Deadline Counter */}
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <Icon name="ClockIcon" size={24} className="text-warning" />
              <div>
                <p className="text-white/70 text-sm">Application Deadline</p>
                <p className="text-white font-bold text-lg">{deadline}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {heroSlides.map((_, index) =>
        <button
          key={index}
          onClick={() => handleSlideChange(index)}
          className={`w-3 h-3 rounded-full transition-smooth ${
          currentSlide === index ?
          'bg-brand-orange w-8' : 'bg-white/50 hover:bg-white/70'}`
          }
          aria-label={`Go to slide ${index + 1}`} />

        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <Icon name="ChevronDownIcon" size={32} className="text-white/70" />
      </div>
    </section>);

}