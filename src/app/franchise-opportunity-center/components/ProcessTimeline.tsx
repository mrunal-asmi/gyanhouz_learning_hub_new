import Icon from '@/components/ui/AppIcon';

interface Step {
  number: number;
  title: string;
  description: string;
  duration: string;
  icon: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Initial Inquiry',
    description:
      'Submit your franchise application and schedule a discovery call with our partnership team',
    duration: '1-2 Days',
    icon: 'DocumentTextIcon',
  },
  {
    number: 2,
    title: 'Business Evaluation',
    description:
      'Detailed discussion about investment, territory selection, and business expectations',
    duration: '3-5 Days',
    icon: 'ChartBarIcon',
  },
  {
    number: 3,
    title: 'Site Selection',
    description: 'Territory finalization, location scouting assistance, and demographic analysis',
    duration: '2-3 Weeks',
    icon: 'MapPinIcon',
  },
  {
    number: 4,
    title: 'Agreement Signing',
    description:
      'Legal documentation, franchise agreement execution, and initial payment processing',
    duration: '1 Week',
    icon: 'DocumentCheckIcon',
  },
  {
    number: 5,
    title: 'Training Program',
    description:
      'Comprehensive 6-week training covering operations, curriculum, marketing, and management',
    duration: '6 Weeks',
    icon: 'AcademicCapIcon',
  },
  {
    number: 6,
    title: 'Center Setup',
    description:
      'Infrastructure development, branding installation, technology setup, and staff recruitment',
    duration: '8-12 Weeks',
    icon: 'BuildingOfficeIcon',
  },
  {
    number: 7,
    title: 'Pre-Launch Marketing',
    description: 'Local marketing campaigns, community outreach, and enrollment drive initiation',
    duration: '4 Weeks',
    icon: 'MegaphoneIcon',
  },
  {
    number: 8,
    title: 'Grand Opening',
    description: 'Official launch with ongoing support, quality monitoring, and growth assistance',
    duration: 'Ongoing',
    icon: 'RocketLaunchIcon',
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-teal/10 px-4 py-2 rounded-full mb-4">
            <Icon name="ClipboardDocumentListIcon" size={20} className="text-brand-teal" />
            <span className="text-sm font-semibold text-brand-teal">Partnership Process</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Your Journey to Ownership
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A structured 4-6 month process from inquiry to launch with dedicated support at every
            step.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-orange via-brand-red to-brand-orange transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-card rounded-xl border border-border p-6 hover:shadow-brand transition-smooth">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-red rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={step.icon as any} size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-sm font-bold text-brand-orange">
                            Step {step.number}
                          </span>
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                            {step.duration}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-red rounded-full items-center justify-center shadow-brand z-10">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>

                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-muted/50 rounded-xl p-8 text-center">
          <Icon name="ClockIcon" size={48} className="text-brand-orange mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-3">Total Timeline: 4-6 Months</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From initial inquiry to grand opening, we ensure a smooth transition with comprehensive
            support, training, and guidance throughout your franchise journey.
          </p>
        </div>
      </div>
    </section>
  );
}
