'use client';

import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface CareerOutcomesSectionProps {
  onEnrollClick: () => void;
}

interface Outcome {
  metric: string;
  description: string;
  icon: string;
}

interface SuccessStory {
  childName: string;
  age: number;
  discovery: string;
  quote: string;
  image: string;
  alt: string;
}

export default function CareerOutcomesSection({ onEnrollClick }: CareerOutcomesSectionProps) {
  const outcomes: Outcome[] = [
    {
      metric: '95% Career Clarity',
      description: "Students identify 2-3 career paths they're passionate about",
      icon: 'LightBulbIcon',
    },
    {
      metric: '87% Skill Improvement',
      description: 'Measurable growth in technical and soft skills',
      icon: 'ChartBarIcon',
    },
    {
      metric: '92% Parent Satisfaction',
      description: 'Parents see visible confidence and direction in their children',
      icon: 'HeartIcon',
    },
    {
      metric: '100% Industry Exposure',
      description: 'Every student connects with real professionals',
      icon: 'UserGroupIcon',
    },
  ];

  const successStories: SuccessStory[] = [
    {
      childName: 'Aarav Sharma',
      age: 12,
      discovery: 'Discovered passion for Robotics Engineering',
      quote:
        'I always thought I wanted to be a doctor because everyone said so. After trying the engineering zone, I realized I love building robots!',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_176bb8f3e-1767560796413.png',
      alt: 'Smiling 12-year-old Indian boy Aarav holding robot he built in engineering workshop',
    },
    {
      childName: 'Diya Patel',
      age: 14,
      discovery: 'Found calling in Medical Research',
      quote:
        "The medical zone showed me that being a doctor isn't the only way to help people. I want to be a medical researcher now!",
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e1307866-1763296637105.png',
      alt: 'Confident 14-year-old Indian girl Diya in lab coat examining medical research equipment',
    },
    {
      childName: 'Arjun Reddy',
      age: 13,
      discovery: 'Launched first business venture',
      quote:
        'I started a small online business after learning entrepreneurship here. Made ₹15,000 in my first month!',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1acdb78fa-1768036262628.png',
      alt: 'Enthusiastic 13-year-old Indian boy Arjun presenting business plan on laptop',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-green/10 px-4 py-2 rounded-full mb-4">
            <Icon name="TrophyIcon" size={20} className="text-brand-green" />
            <span className="text-sm font-semibold text-brand-green">Proven Results</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Real Outcomes That
            <span className="block text-brand-green">Transform Futures</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our career labs don't just expose children to careers—they create lasting clarity and
            confidence
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-brand-green/30 hover:shadow-lg transition-smooth"
            >
              <Icon name={outcome.icon} size={40} className="text-brand-green mb-4" />
              <div className="text-2xl font-bold text-foreground mb-2">{outcome.metric}</div>
              <p className="text-sm text-muted-foreground">{outcome.description}</p>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-8">
            Real Children, Real Discoveries
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-smooth"
              >
                <div className="relative h-48">
                  <AppImage
                    src={story.image}
                    alt={story.alt}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="text-white font-bold">
                      {story.childName}, {story.age}
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="inline-block bg-brand-green/10 text-brand-green text-xs font-semibold px-3 py-1 rounded-full">
                    {story.discovery}
                  </div>
                  <p className="text-sm text-muted-foreground italic">"{story.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-brand-orange to-brand-red rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-4xl font-bold mb-4">
            Don't Let Your Child Waste Years in the Wrong Path
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            While other children struggle with career confusion in 11th-12th grade, your child will
            already have clarity, skills, and direction
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onEnrollClick}
              className="px-8 py-4 bg-white text-brand-orange font-bold text-lg rounded-lg shadow-xl hover:scale-105 transition-smooth"
            >
              Book Career Assessment Now
            </button>
            <div className="flex items-center space-x-2">
              <Icon name="ClockIcon" size={20} className="animate-pulse" />
              <span className="text-sm font-semibold">Only 23 seats remaining</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
