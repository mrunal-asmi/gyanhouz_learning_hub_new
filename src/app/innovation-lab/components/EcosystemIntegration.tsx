import Icon from '@/components/ui/AppIcon';

interface EcosystemIntegrationProps {
  className?: string;
}

interface IntegrationPoint {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  benefits: string[];
}

const EcosystemIntegration = ({ className = '' }: EcosystemIntegrationProps) => {
  const integrations: IntegrationPoint[] = [
    {
      id: 1,
      title: 'Career Labs Connection',
      description:
        'Innovation projects directly inform career exploration, helping students discover their passion through hands-on invention.',
      icon: 'BriefcaseIcon',
      color: 'bg-secondary',
      benefits: [
        'Real-world career exposure through projects',
        'Industry mentor connections',
        'Portfolio building for future opportunities',
      ],
    },
    {
      id: 2,
      title: 'Science Lab Integration',
      description:
        'Scientific principles come alive through practical innovation, transforming theoretical knowledge into tangible inventions.',
      icon: 'BeakerIcon',
      color: 'bg-accent',
      benefits: [
        'Practical application of scientific concepts',
        'Experiment-driven learning',
        'Research methodology development',
      ],
    },
    {
      id: 3,
      title: 'Electronics & Robotics Synergy',
      description:
        'Advanced electronics and robotics capabilities power innovation projects, providing cutting-edge tools for young inventors.',
      icon: 'CpuChipIcon',
      color: 'bg-primary',
      benefits: [
        'Access to 3D printing and prototyping',
        'Circuit design and programming skills',
        'IoT and automation expertise',
      ],
    },
    {
      id: 4,
      title: 'Preschool Foundation',
      description:
        'Early creative thinking and problem-solving skills from preschool years create natural innovators ready for advanced challenges.',
      icon: 'AcademicCapIcon',
      color: 'bg-brand-orange',
      benefits: [
        'Continuous learning journey from age 2',
        'Creative confidence building',
        'Natural curiosity preservation',
      ],
    },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="LinkIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary font-poppins">
              Seamless Ecosystem Integration
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-poppins mb-4">
            Innovation Connected to Everything
          </h2>
          <p className="text-lg text-muted-foreground font-source">
            Unlike isolated innovation programs, our lab is deeply integrated with every aspect of
            GYANHOUZ's learning ecosystem, creating unmatched synergies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {integrations.map((integration) => (
            <div
              key={integration.id}
              className="bg-card rounded-xl p-8 shadow-subtle hover:shadow-elevated transition-all duration-300 border border-border"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div
                  className={`${integration.color} w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0`}
                >
                  <Icon name={integration.icon as any} size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground font-poppins mb-2">
                    {integration.title}
                  </h3>
                  <p className="text-muted-foreground font-source">{integration.description}</p>
                </div>
              </div>

              <div className="space-y-3 pl-18">
                {integration.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon
                      name="CheckCircleIcon"
                      size={20}
                      className="text-accent flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-foreground font-source">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground font-poppins mb-4">
            The Power of Integration
          </h3>
          <p className="text-lg text-muted-foreground font-source max-w-3xl mx-auto mb-6">
            When innovation connects with career discovery, scientific exploration, and advanced
            technology, children don't just learn—they transform into confident creators ready for
            tomorrow's challenges.
          </p>
          <a
            href="#enrollment"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-subtle font-nunito"
          >
            Experience the Ecosystem
            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EcosystemIntegration;
