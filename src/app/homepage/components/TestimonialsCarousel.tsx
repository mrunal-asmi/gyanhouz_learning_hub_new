'use client';

import { useState, useEffect } from 'react';

import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  parentName: string;
  childName: string;
  childAge: number;
  location: string;
  image: string;
  alt: string;
  rating: number;
  testimonial: string;
  transformation: string;
}

export default function TestimonialsCarousel() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      parentName: 'Priya Sharma',
      childName: 'Aarav',
      childAge: 7,
      location: 'Mumbai',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f7ae23d3-1765121385610.png',
      alt: 'Indian mother in blue saree smiling with young son in school uniform outdoors',
      rating: 5,
      testimonial:
        'My son went from being shy and hesitant to confidently presenting his robot project at school. The transformation in just 6 months has been incredible. He now asks "why" and "how" about everything!',
      transformation: 'From shy observer to confident innovator',
    },
    {
      id: 2,
      parentName: 'Rajesh Kumar',
      childName: 'Ananya',
      childAge: 9,
      location: 'Bangalore',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_19f0fd5cb-1763295525028.png',
      alt: 'Professional Indian father in white shirt with daughter in pink dress in modern home',
      rating: 5,
      testimonial:
        'The Career Discovery Lab changed everything. Ananya experienced being a doctor, engineer, and designer. Now she has clear goals instead of confusion. Worth every rupee!',
      transformation: 'From career confusion to clear direction',
    },
    {
      id: 3,
      parentName: 'Meera Patel',
      childName: 'Rohan',
      childAge: 5,
      location: 'Delhi',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c2798ae8-1765452265606.png',
      alt: 'Young Indian mother in yellow kurta with toddler son playing with educational toys',
      rating: 5,
      testimonial:
        'The preschool program is nothing like traditional schools. Rohan learns through play, experiments, and exploration. His curiosity and problem-solving skills have skyrocketed!',
      transformation: 'From passive learner to active explorer',
    },
    {
      id: 4,
      parentName: 'Amit Desai',
      childName: 'Ishaan',
      childAge: 11,
      location: 'Pune',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f9e1b09c-1764697521254.png',
      alt: 'Indian father in casual shirt with pre-teen son in science lab with microscope',
      rating: 5,
      testimonial:
        'Ishaan built his first working circuit at GYANHOUZ. Now he wants to be an inventor. The hands-on approach makes learning exciting, not boring. Best decision we made!',
      transformation: 'From disinterested student to passionate inventor',
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(interval);
  }, [isHydrated, currentIndex]);
  const current = testimonials[currentIndex];
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full mb-4">
            <Icon name="HeartIcon" size={20} variant="solid" />
            <span className="text-sm font-semibold">Parent Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Real Transformations, Real Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how GYANHOUZ is changing children's lives across India
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl shadow-brand overflow-hidden">
            <div className="grid md:grid-cols-5 gap-8 p-8 lg:p-12">
              {/* Image Section */}
              <div className="md:col-span-2">
                <div className="relative h-80 md:h-full rounded-xl overflow-hidden">
                  <AppImage src={current.image} alt={current.alt} fill className="object-cover" />

                  <div className="absolute top-4 left-4 bg-warning text-warning-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    ⭐ {current.rating}.0
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:col-span-3 flex flex-col justify-center">
                <div className="mb-6">
                  <Icon name="ChatBubbleLeftRightIcon" size={48} className="text-primary/20" />
                </div>

                <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                  "{current.testimonial}"
                </blockquote>

                <div className="bg-success/10 border-l-4 border-success px-4 py-3 rounded mb-6">
                  <p className="text-success font-semibold">✨ {current.transformation}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-foreground text-lg">{current.parentName}</p>
                    <p className="text-muted-foreground">
                      Parent of {current.childName} ({current.childAge} years) • {current.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 bg-card shadow-brand rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
            aria-label="Previous testimonial"
          >
            <Icon name="ChevronLeftIcon" size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 bg-card shadow-brand rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
            aria-label="Next testimonial"
          >
            <Icon name="ChevronRightIcon" size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-smooth ${
                currentIndex === index ? 'bg-primary w-8' : 'bg-muted hover:bg-muted-foreground/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* View All CTA */}
      </div>
    </section>
  );
}
