'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface FutureVisionProps {
  className?: string;
}

const FutureVisionSection = ({ className = '' }: FutureVisionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const visionGoals = [
    {
      year: '2026',
      title: '50 Centers Nationwide',
      description:
        'Expanding our ecosystem to 50 cities across India, reaching 25,000 children annually.',
      metrics: ['50 Cities', '25K Students', '500 Educators'],
    },
    {
      year: '2028',
      title: 'International Expansion',
      description: 'Taking the GYANHOUZ model to Southeast Asia and Middle East markets.',
      metrics: ['5 Countries', '100 Centers', '50K Students'],
    },
    {
      year: '2030',
      title: 'Digital Ecosystem',
      description: 'Launching comprehensive digital learning platform accessible to millions.',
      metrics: ['1M Users', 'AI-Powered', 'Global Reach'],
    },
    {
      year: '2035',
      title: 'Education Revolution',
      description: 'Transforming Indian education policy through proven outcomes and advocacy.',
      metrics: ['Policy Impact', 'National Model', '10M Lives'],
    },
  ];

  const impactAreas = [
    {
      icon: 'AcademicCapIcon',
      title: 'Student Success',
      description: 'Creating confident, capable learners who excel academically and personally.',
      color: 'primary',
    },
    {
      icon: 'BuildingOfficeIcon',
      title: 'Community Development',
      description:
        'Building strong educational communities that support holistic child development.',
      color: 'secondary',
    },
    {
      icon: 'GlobeAltIcon',
      title: 'Societal Transformation',
      description: 'Driving broader educational reform through demonstrated success and advocacy.',
      color: 'accent',
    },
    {
      icon: 'SparklesIcon',
      title: 'Innovation Leadership',
      description: 'Setting new standards for integrated, practical, and effective education.',
      color: 'brand-orange',
    },
  ];

  if (!isHydrated) {
    return (
      <section className={`py-16 lg:py-24 bg-background ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="h-96 bg-muted/50 rounded-2xl animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 font-poppins">
              Our <span className="text-primary">Future</span> Vision
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-source leading-relaxed">
              A roadmap for transforming Indian education and creating lasting impact across
              generations.
            </p>
          </div>

          <div className="relative mb-16">
            <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden lg:block"></div>
            <div className="space-y-12">
              {visionGoals.map((goal, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-card p-8 rounded-xl shadow-subtle hover:shadow-elevated transition-all duration-300 border border-border">
                      <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-4">
                        <span className="text-2xl font-bold text-primary font-poppins">
                          {goal.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">
                        {goal.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 font-source leading-relaxed">
                        {goal.description}
                      </p>
                      <div className="flex flex-wrap gap-3 justify-start lg:justify-end">
                        {goal.metrics.map((metric, idx) => (
                          <div key={idx} className="px-4 py-2 bg-muted rounded-lg">
                            <span className="text-sm font-semibold text-foreground font-nunito">
                              {metric}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-elevated flex-shrink-0 z-10">
                    <Icon name="RocketLaunchIcon" size={32} className="text-white" />
                  </div>
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {impactAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-card to-muted p-8 rounded-xl shadow-subtle hover:shadow-elevated transition-all duration-300 border border-border"
              >
                <div
                  className={`w-16 h-16 bg-${area.color}/10 rounded-xl flex items-center justify-center mb-6`}
                >
                  <Icon name={area.icon as any} size={32} className={`text-${area.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 font-poppins">
                  {area.title}
                </h3>
                <p className="text-muted-foreground font-source leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-elevated mb-16">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_15b450716-1767514940729.png"
              alt="Futuristic modern educational campus with innovative architecture featuring glass buildings, green spaces, and diverse Indian students collaborating outdoors"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-poppins">
                Building Tomorrow's India, Today
              </h3>
              <p className="text-lg text-white/90 max-w-3xl font-source leading-relaxed">
                Every child we touch, every family we transform, every community we build - it all
                contributes to a larger vision of an India where education truly unlocks infinite
                potential.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-8 lg:p-12 rounded-2xl shadow-subtle text-center">
            <Icon name="HandRaisedIcon" size={48} className="text-primary mx-auto mb-6" />
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 font-poppins">
              Join the Movement
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 font-source leading-relaxed">
              This vision isn't just ours - it belongs to every parent, educator, and community
              member who believes in transforming education. Together, we're not just building
              schools; we're building a movement that will reshape India's educational landscape for
              generations to come.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact-and-admissions"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-subtle hover:shadow-elevated font-nunito"
              >
                Enroll Your Child
              </a>
              <a
                href="/franchise-opportunity"
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-all duration-300 shadow-subtle hover:shadow-elevated font-nunito"
              >
                Become a Partner
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureVisionSection;
