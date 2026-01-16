'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  parentName: string;
  childName: string;
  childAge: number;
  program: string;
  testimonial: string;
  achievement: string;
  image: string;
  alt: string;
  rating: number;
}

const SuccessCarousel = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      parentName: 'Priya Sharma',
      childName: 'Aarav',
      childAge: 5,
      program: 'Preschool++',
      testimonial:
        'I never imagined my 5-year-old could write with both hands fluently! Aarav now speaks English, Hindi, and is learning Sanskrit. His confidence on stage is remarkable. GYANHOUZ has truly transformed him.',
      achievement: 'Ambidextrous writing, 3 languages, stage performances',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_13da0ea4e-1763300921982.png',
      alt: 'Happy Indian mother in blue saree smiling with young son in school uniform outdoors',
      rating: 5,
    },
    {
      id: 2,
      parentName: 'Rajesh Kumar',
      childName: 'Ananya',
      childAge: 14,
      program: 'Career Labs',
      testimonial:
        'The Career Labs program gave Ananya clarity about her future at just 14! She is now working on real projects with industry mentors. This is exactly what modern education should be.',
      achievement: 'Career clarity, industry mentorship, real-world projects',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1211dd392-1763294112808.png',
      alt: 'Professional Indian father in white shirt with teenage daughter in casual wear smiling together',
      rating: 5,
    },
    {
      id: 3,
      parentName: 'Meera Patel',
      childName: 'Rohan',
      childAge: 10,
      program: 'Science Lab',
      testimonial:
        'Rohan built his first robot at age 10! The Science Lab has unleashed his creativity. He is now participating in national competitions and winning awards. Thank you GYANHOUZ!',
      achievement: 'Robotics expertise, national competitions, innovation awards',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1dd6c684d-1767585644940.png',
      alt: 'Smiling Indian mother in traditional dress with young boy holding robotics project trophy',
      rating: 5,
    },
    {
      id: 4,
      parentName: 'Amit Verma',
      childName: 'Diya',
      childAge: 7,
      program: 'Science Lab',
      testimonial:
        'Diya conducts experiments at home now! She understands concepts that I learned in high school. The practical approach at GYANHOUZ has made her fall in love with science.',
      achievement: 'Scientific thinking, 200+ experiments, advanced concepts',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1204eff2e-1767704879964.png',
      alt: 'Indian father in casual shirt with young daughter in lab coat conducting science experiment',
      rating: 5,
    },
  ];

  const handlePrevious = () => {
    if (isHydrated) {
      setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
  };

  const handleNext = () => {
    if (isHydrated) {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }
  };

  const handleDotClick = (index: number) => {
    if (isHydrated) {
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full mb-6">
            <Icon name="ChatBubbleLeftRightIcon" size={20} className="text-primary" />
            <span className="text-lg font-semibold text-primary font-poppins">
              Parent Testimonials
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-poppins">
            Real Stories,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Real Transformations
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-source">
            Hear from parents whose children have experienced miraculous development through our
            integrated ecosystem.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-elevated overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 relative h-80 lg:h-auto">
                <AppImage
                  src={testimonials[isHydrated ? activeIndex : 0].image}
                  alt={testimonials[isHydrated ? activeIndex : 0].alt}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonials[isHydrated ? activeIndex : 0].rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="StarIcon"
                        size={20}
                        className="text-warning fill-current"
                      />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 font-poppins">
                    {testimonials[isHydrated ? activeIndex : 0].parentName}
                  </h3>
                  <p className="text-sm text-white/90 font-source">
                    Parent of {testimonials[isHydrated ? activeIndex : 0].childName}, Age{' '}
                    {testimonials[isHydrated ? activeIndex : 0].childAge}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-3 p-8 lg:p-12">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-lg font-semibold text-sm font-poppins">
                    {testimonials[isHydrated ? activeIndex : 0].program}
                  </span>
                </div>

                <blockquote className="text-lg text-foreground mb-6 font-source leading-relaxed">
                  "{testimonials[isHydrated ? activeIndex : 0].testimonial}"
                </blockquote>

                <div className="bg-accent/10 rounded-xl p-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Icon name="TrophyIcon" size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 font-poppins">
                        Key Achievements
                      </h4>
                      <p className="text-sm text-muted-foreground font-source">
                        {testimonials[isHydrated ? activeIndex : 0].achievement}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          isHydrated && activeIndex === index
                            ? 'w-8 bg-primary'
                            : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handlePrevious}
                      className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300"
                      aria-label="Previous testimonial"
                    >
                      <Icon name="ChevronLeftIcon" size={20} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300"
                      aria-label="Next testimonial"
                    >
                      <Icon name="ChevronRightIcon" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/success-stories"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-semibold transition-colors duration-300 font-poppins"
            >
              <span>Read More Success Stories</span>
              <Icon name="ArrowRightIcon" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCarousel;
