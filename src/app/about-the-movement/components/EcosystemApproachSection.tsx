import Icon from '@/components/ui/AppIcon';

interface EcosystemApproachProps {
  className?: string;
}

const EcosystemApproachSection = ({ className = '' }: EcosystemApproachProps) => {
  const ecosystemComponents = [
    {
      icon: 'AcademicCapIcon',
      title: 'Preschool Foundation',
      age: 'Ages 2-6',
      description:
        'Miraculous early learning with ambidextrous writing, multilingual proficiency, and stage confidence.',
      color: 'primary',
    },
    {
      icon: 'BeakerIcon',
      title: 'Science & Innovation Labs',
      age: 'Ages 6-12',
      description:
        'Hands-on experimentation, practical learning, and scientific thinking development.',
      color: 'secondary',
    },
    {
      icon: 'CpuChipIcon',
      title: 'Electronics & Robotics',
      age: 'Ages 8-14',
      description: 'STEM innovation with global best practices, coding, and technology mastery.',
      color: 'accent',
    },
    {
      icon: 'BriefcaseIcon',
      title: 'Career Discovery Labs',
      age: 'Ages 12-16',
      description:
        'Future-focused career exploration, skill development, and professional readiness.',
      color: 'brand-orange',
    },
  ];

  const interconnections = [
    {
      from: 'Preschool',
      to: 'Science Labs',
      benefit: 'Early curiosity transforms into scientific inquiry',
    },
    {
      from: 'Science Labs',
      to: 'Robotics',
      benefit: 'Practical knowledge enables technological innovation',
    },
    {
      from: 'Robotics',
      to: 'Career Labs',
      benefit: 'Technical skills guide career pathway selection',
    },
    {
      from: 'All Programs',
      to: 'Holistic Growth',
      benefit: 'Integrated learning creates well-rounded individuals',
    },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 font-poppins">
              The <span className="text-primary">Ecosystem</span> Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-source leading-relaxed">
              Unlike fragmented educational services, GYANHOUZ offers an interconnected learning
              journey where each program builds upon and enhances the others.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {ecosystemComponents.map((component, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-subtle hover:shadow-elevated transition-all duration-300 border border-border group"
              >
                <div
                  className={`w-16 h-16 bg-${component.color}/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    name={component.icon as any}
                    size={32}
                    className={`text-${component.color}`}
                  />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground font-poppins">
                    {component.title}
                  </h3>
                  <span
                    className={`px-3 py-1 bg-${component.color}/10 text-${component.color} rounded-full text-xs font-semibold font-nunito`}
                  >
                    {component.age}
                  </span>
                </div>
                <p className="text-muted-foreground font-source leading-relaxed">
                  {component.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-8 lg:p-12 rounded-2xl shadow-subtle mb-16">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center font-poppins">
              How Programs Interconnect
            </h3>
            <div className="space-y-6">
              {interconnections.map((connection, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-subtle flex items-center space-x-6 hover:shadow-elevated transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="px-4 py-2 bg-primary/10 rounded-lg">
                      <span className="text-sm font-semibold text-primary font-nunito">
                        {connection.from}
                      </span>
                    </div>
                    <Icon
                      name="ArrowRightIcon"
                      size={24}
                      className="text-muted-foreground flex-shrink-0"
                    />
                    <div className="px-4 py-2 bg-secondary/10 rounded-lg">
                      <span className="text-sm font-semibold text-secondary font-nunito">
                        {connection.to}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-muted-foreground font-source">{connection.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card p-8 lg:p-12 rounded-2xl shadow-elevated border-2 border-primary/20">
            <div className="text-center">
              <Icon name="LightBulbIcon" size={48} className="text-primary mx-auto mb-6" />
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 font-poppins">
                The Ecosystem Advantage
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 font-source leading-relaxed">
                When children experience our complete ecosystem, they don't just learn subjects
                - they develop interconnected skills, discover their passions, and build confidence
                that carries through their entire educational journey.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-muted/50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2 font-poppins">3x</div>
                  <div className="text-sm text-muted-foreground font-source">
                    Faster Skill Development
                  </div>
                </div>
                <div className="bg-muted/50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-secondary mb-2 font-poppins">95%</div>
                  <div className="text-sm text-muted-foreground font-source">
                    Parent Satisfaction Rate
                  </div>
                </div>
                <div className="bg-muted/50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-accent mb-2 font-poppins">100%</div>
                  <div className="text-sm text-muted-foreground font-source">
                    Career Clarity by Age 16
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemApproachSection;
