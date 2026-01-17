'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface AgeJourneyStep {
  age: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  outcomes: string[];
}

const HeroSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const journeySteps: AgeJourneyStep[] = [
    {
      age: '1.5-6 Years',
      title: 'Foundation Building',
      description: 'Holistic development through play-based learning and early literacy',
      image: 'https://images.unsplash.com/photo-1646148327678-63ae561ec90c',
      alt: 'Happy Indian toddler girl with pigtails playing with colorful building blocks in bright classroom',
      outcomes: [
        'Confident stage speaker, Great Learner, Higher IQ levels, Scientific thinking, Confident child goes out to meet the world, Good academics, Early reader, Good Phonics, General knowledge Solve any problems, Go getter!!',
      ],
    },
    {
      age: '7-12 Years',
      title: 'Skill Mastery',
      description: 'Practical learning through hands-on experiments and creative expression',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d8fb08bc-1764659821764.png',
      alt: 'Indian boy in blue shirt conducting science experiment with test tubes in modern laboratory',
      outcomes: ['Scientific Thinking', 'Creative Expression', 'Stage Confidence'],
    },
    {
      age: '9-12 Years',
      title: 'Innovation Discovery',
      description: 'STEM excellence through robotics, electronics, and project-based learning',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_158f511ec-1767955070898.png',
      alt: 'Indian girl with glasses working on robotics project with circuit boards and laptop',
      outcomes: ['Robotics Skills', 'Problem Solving', 'Innovation Mindset'],
    },
    {
      age: '13-16 Years',
      title: 'Career Readiness',
      description: 'Future-focused career discovery with industry mentors and real-world projects',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_159a79c5d-1767090827586.png',
      alt: 'Confident Indian teenage boy presenting project on digital screen to group in modern classroom',
      outcomes: ['Career Clarity', 'Industry Skills', 'Leadership Development'],
    },
  ];

  const handleStepChange = (index: number) => {
    if (isHydrated) {
      setActiveStep(index);
    }
  };

  return (
    <section className="relative pt-16 pb-16 lg:pb-24 overflow-hidden " >
      <div className="absolute inset-0 z-0">
        
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
      </div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-3 bg-primary/10 px-4 md:px-8 py-3 md:py-4 rounded-full mb-8 max-w-full">
            <Icon
              name="SparklesIcon"
              size={60}
              className="text-primary flex-shrink-0 scale-50 md:scale-100"
            />
            <span className="text-xl md:text-5xl lg:text-6xl font-bold text-primary font-poppins whitespace-nowrap">
              India's FIRST Integrated Learning Ecosystem
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-poppins leading-tight">
            Unlocking Every Child's
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-brand-orange to-accent">
              Infinite Potential
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 font-source leading-relaxed">
            From preschool foundations to academic excellence, creativity, competitions, and future
            skills — Gyanhouz nurtures your child at every stage of life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact-and-admissions"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-base hover:bg-primary/90 transition-all duration-300 shadow-elevated hover:shadow-lg hover:scale-105 font-nunito inline-flex items-center space-x-2"
            >
              <span>Start Your Child's Journey</span>
              <Icon name="ArrowRightIcon" size={20} />
            </Link>
            <Link
              href="/franchise-opportunity"
              className="px-8 py-4 bg-white text-foreground border-2 border-border rounded-lg font-semibold text-base hover:border-primary hover:text-primary transition-all duration-300 shadow-subtle hover:shadow-elevated font-nunito inline-flex items-center space-x-2"
            >
              <span>Explore Franchise</span>
              <Icon name="BuildingStorefrontIcon" size={20} />
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-elevated p-6 lg:p-8">
          <div className="flex items-center justify-between mb-8 overflow-x-auto pb-4">
            {journeySteps.map((step, index) => (
              <button
                key={index}
                onClick={() => handleStepChange(index)}
                className={`flex-shrink-0 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 font-poppins ${
                  isHydrated && activeStep === index
                    ? 'bg-primary text-primary-foreground shadow-subtle'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {step.age}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-subtle">
              <AppImage
                src={journeySteps[isHydrated ? activeStep : 0].image}
                alt={journeySteps[isHydrated ? activeStep : 0].alt}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm mb-2 font-poppins">
                  {journeySteps[isHydrated ? activeStep : 0].age}
                </span>
                <h3 className="text-2xl font-bold text-white font-poppins">
                  {journeySteps[isHydrated ? activeStep : 0].title}
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-foreground font-source leading-relaxed">
                {journeySteps[isHydrated ? activeStep : 0].description}
              </p>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide font-poppins">
                  Key Outcomes
                </h4>
                {journeySteps[isHydrated ? activeStep : 0].outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="CheckIcon" size={16} className="text-accent" />
                    </div>
                    <span className="text-foreground font-source">{outcome}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/preschool-program"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-semibold transition-colors duration-300 font-poppins"
              >
                <span>Explore This Program</span>
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
