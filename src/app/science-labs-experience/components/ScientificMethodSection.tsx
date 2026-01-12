'use client';

import Icon from '@/components/ui/AppIcon';

interface MethodStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  activities: string[];
}

export default function ScientificMethodSection() {
  const methodSteps: MethodStep[] = [
    {
      step: 1,
      title: 'Ask Questions',
      description: 'Develop curiosity and formulate testable hypotheses',
      icon: 'QuestionMarkCircleIcon',
      activities: ['Observation skills', 'Problem identification', 'Hypothesis formation']
    },
    {
      step: 2,
      title: 'Design Experiments',
      description: 'Plan procedures and identify variables',
      icon: 'PencilSquareIcon',
      activities: ['Variable control', 'Procedure planning', 'Safety protocols']
    },
    {
      step: 3,
      title: 'Conduct Research',
      description: 'Perform experiments with precision and care',
      icon: 'BeakerIcon',
      activities: ['Hands-on execution', 'Data collection', 'Observation recording']
    },
    {
      step: 4,
      title: 'Analyze Data',
      description: 'Interpret results and identify patterns',
      icon: 'ChartBarIcon',
      activities: ['Data analysis', 'Graph creation', 'Pattern recognition']
    },
    {
      step: 5,
      title: 'Draw Conclusions',
      description: 'Validate hypotheses and communicate findings',
      icon: 'LightBulbIcon',
      activities: ['Result interpretation', 'Conclusion writing', 'Presentation skills']
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="AcademicCapIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Scientific Method Mastery</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Learn to Think Like
            <span className="block text-primary">Real Scientists</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every experiment follows the scientific method, building critical thinking and analytical skills
          </p>
        </div>

        {/* Method Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-brand-teal to-brand-green transform -translate-y-1/2" />

          {/* Steps */}
          <div className="grid lg:grid-cols-5 gap-8 relative">
            {methodSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-background rounded-xl shadow-lg border border-border p-6 hover:shadow-xl transition-smooth hover:-translate-y-1">
                  {/* Step Number Circle */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-brand-teal rounded-full flex items-center justify-center mx-auto mb-4 shadow-brand">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-3">
                    <Icon name={step.icon} size={32} className="text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground text-center mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    {step.description}
                  </p>

                  {/* Activities */}
                  <div className="space-y-2">
                    {step.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex items-start space-x-2">
                        <Icon name="CheckIcon" size={16} className="text-brand-green mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-foreground">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow (desktop only) */}
                {index < methodSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <Icon name="ChevronRightIcon" size={24} className="text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Development */}
        <div className="mt-16 bg-gradient-to-br from-primary/5 to-brand-teal/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-8">
            Skills Your Child Develops Beyond Science
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Icon name="BrainIcon" size={32} className="text-white" />
              </div>
              <h4 className="font-bold text-foreground">Critical Thinking</h4>
              <p className="text-sm text-muted-foreground">Analyze problems systematically and logically</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-brand-teal rounded-full flex items-center justify-center mx-auto">
                <Icon name="PuzzlePieceIcon" size={32} className="text-white" />
              </div>
              <h4 className="font-bold text-foreground">Problem Solving</h4>
              <p className="text-sm text-muted-foreground">Approach challenges with structured methodology</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto">
                <Icon name="DocumentTextIcon" size={32} className="text-white" />
              </div>
              <h4 className="font-bold text-foreground">Documentation</h4>
              <p className="text-sm text-muted-foreground">Record observations and communicate findings</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto">
                <Icon name="UserGroupIcon" size={32} className="text-white" />
              </div>
              <h4 className="font-bold text-foreground">Collaboration</h4>
              <p className="text-sm text-muted-foreground">Work effectively in research teams</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}