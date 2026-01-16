'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const TopBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  const banners = [
    {
      id: 1,
      image: '/assets/images/homebanner1.jpeg',
      alt: 'Gyanhouz Learning Hub Banner 1',
    },
    {
      id: 2,
      image: '/assets/images/homebanner2.jpeg',
      alt: 'Gyanhouz Learning Hub Banner 2',
    },
    {
      id: 3,
      image: '/assets/images/homebanner3.jpeg',
      alt: 'Gyanhouz Learning Hub Banner 3',
    },
  ];

  useEffect(() => {
    setIsHydrated(true);
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (!isHydrated) return null;

  return (
    <section className="pt-28 lg:pt-36 pb-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative w-full h-[400px] md:h-[600px] lg:h-[750px] overflow-hidden rounded-2xl shadow-elevated">
          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {banners.map((banner) => (
              <div key={banner.id} className="min-w-full h-full relative">
                <AppImage
                  src={banner.image}
                  alt={banner.alt}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all z-20"
            aria-label="Previous slide"
          >
            <Icon name="ChevronLeftIcon" size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all z-20"
            aria-label="Next slide"
          >
            <Icon name="ChevronRightIcon" size={24} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
