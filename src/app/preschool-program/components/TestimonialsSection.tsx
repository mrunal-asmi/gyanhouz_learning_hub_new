'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  id: number;
  parentName: string;
  childName: string;
  childAge: string;
  location: string;
  rating: number;
  testimonial: string;
  achievement: string;
  image: string;
  alt: string;
  videoThumbnail?: string;
}

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection = ({ className = '' }: TestimonialsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      parentName: 'Priya Sharma',
      childName: 'Aarav',
      childAge: '5 years',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      testimonial:
        'I was skeptical when they promised ambidextrous writing, but Aarav started writing with both hands fluently within 6 months. He now speaks English, Hindi, and Sanskrit confidently. The transformation is nothing short of miraculous. Traditional preschools never offered anything close to this.',
      achievement: 'Ambidextrous writing + Trilingual fluency achieved in 8 months',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_13da0ea4e-1763300921982.png',
      alt: 'Smiling Indian mother in blue traditional dress with young son in school uniform',
    },
    {
      id: 2,
      parentName: 'Rajesh Kumar',
      childName: 'Ananya',
      childAge: '4 years',
      location: 'Delhi NCR',
      rating: 5,
      testimonial:
        "Ananya was extremely shy and wouldn't speak in front of anyone. After joining GYANHOUZ, she now performs on stage confidently every week. She recently won a storytelling competition against children 2 years older. The stage confidence program is truly revolutionary.",
      achievement: 'From shy to stage performer in 4 months',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d6ff086f-1763295161118.png',
      alt: 'Professional Indian father in business suit with young daughter in colorful dress smiling together',
    },
    {
      id: 3,
      parentName: 'Meera Patel',
      childName: 'Arjun',
      childAge: '6 years',
      location: 'Bangalore, Karnataka',
      rating: 5,
      testimonial:
        "The integrated approach is what sets GYANHOUZ apart. Arjun doesn't just learn - he experiments, creates, and innovates daily. He built his first simple robot at age 5! The innovation lab exposure has sparked a genuine love for science and problem-solving.",
      achievement: 'Built first robot at age 5 + Advanced problem-solving skills',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_131f95752-1763300633344.png',
      alt: 'Young Indian mother in casual wear with son wearing glasses holding science project',
    },
    {
      id: 4,
      parentName: 'Amit Verma',
      childName: 'Diya',
      childAge: '3 years',
      location: 'Pune, Maharashtra',
      rating: 5,
      testimonial:
        "At just 3 years old, Diya can already write simple words with both hands and speaks in three languages. The daily Sanskrit shlokas have improved her memory remarkably. We've seen cognitive development that pediatricians say is 2 years ahead of typical milestones.",
      achievement: '2 years ahead in cognitive development at age 3',
      image: 'https://images.unsplash.com/photo-1561572108-c47bc8b2a8e5',
      alt: 'Professional Indian father in white shirt with young daughter in pink dress outdoors',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full mb-4">
            <Icon name="ChatBubbleLeftRightIcon" size={20} className="text-success" />
            <span className="text-sm font-semibold text-success font-poppins">
              Parent Testimonials
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground font-poppins mb-4">
            Real Stories, <span className="text-primary">Real Results</span>
          </h2>

          <p className="text-lg text-muted-foreground font-source">
            Hear from parents who witnessed their children's miraculous transformation at GYANHOUZ.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-elevated overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-gradient-to-br from-primary/10 to-secondary/10 p-8 lg:p-12 flex flex-col justify-center items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-elevated border-4 border-white">
                  <AppImage
                    src={currentTestimonial.image}
                    alt={currentTestimonial.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold text-foreground font-poppins mb-2">
                  {currentTestimonial.parentName}
                </h3>

                <div className="text-sm text-muted-foreground font-source mb-4">
                  Parent of {currentTestimonial.childName} ({currentTestimonial.childAge})
                </div>

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="StarIcon"
                      size={20}
                      className="text-warning"
                      variant="solid"
                    />
                  ))}
                </div>

                <div className="text-xs text-muted-foreground font-source flex items-center space-x-1">
                  <Icon name="MapPinIcon" size={16} className="text-primary" />
                  <span>{currentTestimonial.location}</span>
                </div>
              </div>

              <div className="lg:col-span-3 p-8 lg:p-12">
                <div className="mb-6">
                  <Icon name="ChatBubbleLeftIcon" size={48} className="text-primary/20" />
                </div>

                <p className="text-lg text-foreground font-source leading-relaxed mb-6">
                  {currentTestimonial.testimonial}
                </p>

                <div className="bg-accent/10 rounded-xl p-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="TrophyIcon"
                      size={24}
                      className="text-accent flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="text-sm font-semibold text-foreground font-poppins mb-1">
                        Key Achievement
                      </div>
                      <div className="text-sm text-muted-foreground font-source">
                        {currentTestimonial.achievement}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300"
                    aria-label="Previous testimonial"
                  >
                    <Icon name="ChevronLeftIcon" size={20} />
                  </button>

                  <div className="flex items-center space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex ? 'bg-primary w-8' : 'bg-border'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300"
                    aria-label="Next testimonial"
                  >
                    <Icon name="ChevronRightIcon" size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="inline-flex items-center space-x-2 px-6 py-3 bg-white border-2 border-primary text-primary rounded-lg font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-300 shadow-subtle font-nunito">
              <Icon name="PlayIcon" size={20} />
              <span>Watch Video Testimonials</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
