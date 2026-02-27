'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ComparisonItem {
  category: string;
  traditional: string;
  gyanhouz: string;
  impact: string;
}

const FOMOGenerator = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const comparisons: ComparisonItem[] = [
    {
      category: 'Writing Skills',
      traditional: 'Single-hand writing only',
      gyanhouz: 'Ambidextrous writing mastery',
      impact: 'Enhanced brain development & cognitive flexibility',
    },
    {
      category: 'Language Learning',
      traditional: '1-2 languages maximum',
      gyanhouz: '3+ languages including Sanskrit',
      impact: 'Global communication & cultural awareness',
    },
    {
      category: 'Confidence Building',
      traditional: 'Limited public speaking',
      gyanhouz: 'Regular stage performances',
      impact: 'Exceptional presentation & leadership skills',
    },
    {
      category: 'Learning Approach',
      traditional: 'Theory-based rote learning',
      gyanhouz: 'Hands-on practical experiments',
      impact: 'Deep understanding & problem-solving ability',
    },
    {
      category: 'Career Preparation',
      traditional: 'No career guidance until college',
      gyanhouz: 'Career discovery from age 13',
      impact: 'Clear career path & industry readiness',
    },
    {
      category: 'Innovation Skills',
      traditional: 'Limited STEM exposure',
      gyanhouz: 'Robotics, electronics & Science Labs',
      impact: 'Future-ready technical expertise',
    },
  ];
 const teachingPhilosophy = [
    {
      principle: 'Practical Over Theoretical',
      description:
        'Children learn by doing, not just listening. Every concept is reinforced through hands-on experience.',
    },
    {
      principle: 'Curiosity-Driven Learning',
      description:
        'We nurture natural curiosity rather than forcing information, making learning a joyful exploration.',
    },
    {
      principle: 'Mistake-Friendly Environment',
      description:
        'Failures are celebrated as learning opportunities, building resilience and growth mindset.',
    },
    {
      principle: 'Real-World Connections',
      description:
        'Every lesson connects to real-life applications, making learning relevant and meaningful.',
    },
  ];
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-section-peach/50 via-background to-section-pink/30">
      <div className="container mx-auto px-4">
         <div className="bg-card p-8 lg:p-12 rounded-2xl shadow-elevated border-l-4 border-primary mb-16">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 font-poppins">
              Our Teaching Philosophy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teachingPhilosophy.map((item, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm font-poppins">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2 font-poppins">
                        {item.principle}
                      </h4>
                      <p className="text-muted-foreground font-source leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-warning/10 px-6 py-3 rounded-full mb-6">
            <Icon name="ExclamationTriangleIcon" size={24} className="text-warning" />
            <span className="text-2xl font-bold text-warning font-poppins">
              Don't Let Your Child Miss Out
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-poppins">
            What Your Child is{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-error to-warning">
              Missing Right Now
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-source">
            See the stark difference between traditional education and the GYANHOUZ revolution.
            Every day without our ecosystem is a missed opportunity.
          </p>
        </div>

        <div className="bg-card text-card-foreground rounded-2xl shadow-elevated overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-muted to-muted/50">
                  <th className="px-6 py-4 text-left text-sm font-bold text-foreground font-poppins">
                    Learning Aspect
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-muted-foreground font-poppins">
                    Traditional Schools
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-primary font-poppins">
                    GYANHOUZ Ecosystem
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-accent font-poppins">
                    Long-term Impact
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-border hover:bg-muted/30 transition-colors duration-200"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="AcademicCapIcon" size={20} className="text-primary" />
                        </div>
                        <span className="font-semibold text-foreground font-poppins">
                          {item.category}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-start space-x-2">
                        <Icon
                          name="XMarkIcon"
                          size={16}
                          className="text-error flex-shrink-0 mt-1"
                        />
                        <span className="text-sm text-muted-foreground font-source">
                          {item.traditional}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-start space-x-2">
                        <Icon
                          name="CheckIcon"
                          size={16}
                          className="text-primary flex-shrink-0 mt-1"
                        />
                        <span className="text-sm text-foreground font-semibold font-source">
                          {item.gyanhouz}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-start space-x-2">
                        <Icon
                          name="SparklesIcon"
                          size={16}
                          className="text-accent flex-shrink-0 mt-1"
                        />
                        <span className="text-sm text-muted-foreground font-source">
                          {item.impact}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-section-peach/60 via-section-pink/40 to-section-lavender/40 rounded-2xl p-8 lg:p-12 border-2 border-warning/20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-warning rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="ClockIcon" size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2 font-poppins">
                  Time is Running Out
                </h3>
                <p className="text-muted-foreground font-source">
                  Every month your child spends in traditional education is a month of missed
                  miraculous development. The earlier you start, the more extraordinary the results.
                </p>
              </div>
            </div>
            <a
              href="/contact-and-admissions"
              className="flex-shrink-0 px-8 py-4 bg-warning text-warning-foreground rounded-lg font-bold text-base hover:bg-warning/90 transition-all duration-300 shadow-elevated hover:shadow-lg hover:scale-105 font-nunito inline-flex items-center space-x-2"
            >
              <span>Enroll Now</span>
              <Icon name="ArrowRightIcon" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FOMOGenerator;
