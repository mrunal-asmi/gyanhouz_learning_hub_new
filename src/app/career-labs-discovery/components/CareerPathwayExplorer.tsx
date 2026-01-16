'use client';

import Icon from '@/components/ui/AppIcon';

interface PathwayStage {
  stage: string;
  title: string;
  description: string;
  icon: string;
  activities: string[];
}

export default function CareerPathwayExplorer() {
  const pathwayStages: PathwayStage[] = [
    {
      stage: 'Stage 1',
      title: 'Career Exploration',
      description: 'Discover interests through exposure to multiple career fields',
      icon: 'MagnifyingGlassIcon',
      activities: [
        'Career aptitude assessment',
        'Interest mapping workshops',
        'Industry overview sessions',
        'Professional video calls',
      ],
    },
    {
      stage: 'Stage 2',
      title: 'Hands-On Experience',
      description: 'Engage in realistic simulations and role-playing activities',
      icon: 'HandRaisedIcon',
      activities: [
        'Real-world project simulations',
        'Role-playing scenarios',
        'Equipment handling training',
        'Team collaboration projects',
      ],
    },
    {
      stage: 'Stage 3',
      title: 'Skill Development',
      description: 'Build foundational skills specific to chosen career paths',
      icon: 'AcademicCapIcon',
      activities: [
        'Technical skill workshops',
        'Soft skills training',
        'Problem-solving challenges',
        'Communication development',
      ],
    },
    {
      stage: 'Stage 4',
      title: 'Industry Mentorship',
      description: 'Connect with professionals and gain insider perspectives',
      icon: 'UserGroupIcon',
      activities: [
        'One-on-one mentor sessions',
        'Industry site visits',
        'Professional networking',
        'Career guidance counseling',
      ],
    },
    {
      stage: 'Stage 5',
      title: 'Career Clarity',
      description: 'Make informed decisions with comprehensive career roadmaps',
      icon: 'MapIcon',
      activities: [
        'Personalized career roadmap',
        'Educational pathway planning',
        'Goal setting workshops',
        'Future planning sessions',
      ],
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="MapIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Career Discovery Journey</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Your Child's Journey from
            <span className="block text-primary">Confusion to Career Clarity</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our structured 5-stage pathway ensures every child discovers their true calling through
            systematic exploration and hands-on experience
          </p>
        </div>

        {/* Pathway Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-brand-blue to-brand-teal transform -translate-y-1/2" />

          {/* Stages */}
          <div className="grid lg:grid-cols-5 gap-8 relative">
            {pathwayStages.map((stage, index) => (
              <div key={index} className="relative">
                {/* Stage Card */}
                <div className="bg-card rounded-xl shadow-lg border border-border p-6 hover:shadow-xl transition-smooth hover:-translate-y-1">
                  {/* Icon Circle */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-brand">
                    <Icon name={stage.icon} size={28} className="text-white" />
                  </div>

                  {/* Stage Number */}
                  <div className="text-center mb-3">
                    <span className="text-xs font-bold text-primary uppercase tracking-wide">
                      {stage.stage}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground text-center mb-2">
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    {stage.description}
                  </p>

                  {/* Activities */}
                  <div className="space-y-2">
                    {stage.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex items-start space-x-2">
                        <Icon
                          name="CheckIcon"
                          size={16}
                          className="text-brand-green mt-0.5 flex-shrink-0"
                        />
                        <span className="text-xs text-foreground">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow (desktop only) */}
                {index < pathwayStages.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <Icon name="ChevronRightIcon" size={24} className="text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-orange to-brand-red rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Why Schools Can't Offer This Level of Career Discovery
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="space-y-2">
                <Icon name="XMarkIcon" size={32} className="mx-auto text-white/80" />
                <p className="text-sm font-semibold">Schools: Theory-based career talks</p>
              </div>
              <div className="space-y-2">
                <Icon name="XMarkIcon" size={32} className="mx-auto text-white/80" />
                <p className="text-sm font-semibold">Schools: Limited to textbook knowledge</p>
              </div>
              <div className="space-y-2">
                <Icon name="XMarkIcon" size={32} className="mx-auto text-white/80" />
                <p className="text-sm font-semibold">Schools: No industry connections</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="space-y-2">
                  <Icon name="CheckCircleIcon" size={32} className="mx-auto text-yellow-300" />
                  <p className="text-sm font-bold">GYANHOUZ: Real equipment & simulations</p>
                </div>
                <div className="space-y-2">
                  <Icon name="CheckCircleIcon" size={32} className="mx-auto text-yellow-300" />
                  <p className="text-sm font-bold">GYANHOUZ: Hands-on practical experience</p>
                </div>
                <div className="space-y-2">
                  <Icon name="CheckCircleIcon" size={32} className="mx-auto text-yellow-300" />
                  <p className="text-sm font-bold">GYANHOUZ: 200+ industry mentors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
