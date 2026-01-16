import Icon from '@/components/ui/AppIcon';

interface InnovationApproachProps {
  className?: string;
}

interface ApproachStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  sanskritPrinciple: string;
  modernApplication: string;
}

const InnovationApproach = ({ className = '' }: InnovationApproachProps) => {
  const approachSteps: ApproachStep[] = [
    {
      id: 1,
      title: 'Discover & Question',
      description:
        'Students identify real-world problems through observation and develop curiosity-driven questions.',
      icon: 'MagnifyingGlassIcon',
      sanskritPrinciple: 'Jijñāsā (जिज्ञासा) - Desire to Know',
      modernApplication: 'Design thinking workshops and problem identification sessions',
    },
    {
      id: 2,
      title: 'Research & Learn',
      description:
        'Deep dive into existing solutions, scientific principles, and technological possibilities.',
      icon: 'BookOpenIcon',
      sanskritPrinciple: 'Adhyayana (अध्ययन) - Study & Research',
      modernApplication:
        'Access to research databases, expert consultations, and literature reviews',
    },
    {
      id: 3,
      title: 'Ideate & Design',
      description:
        'Brainstorm multiple solutions, sketch designs, and create detailed project plans.',
      icon: 'LightBulbIcon',
      sanskritPrinciple: 'Kalpanā (कल्पना) - Creative Imagination',
      modernApplication: 'CAD software training, design thinking tools, and collaborative ideation',
    },
    {
      id: 4,
      title: 'Prototype & Build',
      description:
        'Transform ideas into tangible prototypes using our state-of-the-art fabrication tools.',
      icon: 'WrenchScrewdriverIcon',
      sanskritPrinciple: 'Nirmāṇa (निर्माण) - Construction',
      modernApplication: '3D printing, electronics assembly, and hands-on building experience',
    },
    {
      id: 5,
      title: 'Test & Iterate',
      description:
        'Rigorous testing, data collection, and continuous improvement based on results.',
      icon: 'ArrowPathIcon',
      sanskritPrinciple: 'Parīkṣā (परीक्षा) - Testing & Validation',
      modernApplication:
        'Scientific testing protocols, performance metrics, and iterative refinement',
    },
    {
      id: 6,
      title: 'Present & Launch',
      description:
        'Showcase inventions to experts, apply for patents, and explore commercial opportunities.',
      icon: 'RocketLaunchIcon',
      sanskritPrinciple: 'Prakāśana (प्रकाशन) - Revelation',
      modernApplication: 'Pitch presentations, patent applications, and startup incubation support',
    },
  ];

  return (
    <section
      className={`py-16 lg:py-24 bg-gradient-to-br from-secondary/5 via-background to-accent/5 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Icon name="SparklesIcon" size={20} className="text-accent" />
            <span className="text-sm font-semibold text-accent font-poppins">
              Ancient Wisdom Meets Modern Innovation
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-poppins mb-4">
            Gyanhouz Curiosity-Driven Module
          </h2>
          <p className="text-lg text-muted-foreground font-source">
            A structured, science-backed program that turns everyday moments into powerful learning
            experiences. It teaches children to observe, question, think, and explain — instead of
            memorizing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {approachSteps.map((step, index) => (
            <div
              key={step.id}
              className="bg-card rounded-xl p-8 shadow-subtle hover:shadow-elevated transition-all duration-300 border border-border relative group"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl font-poppins shadow-subtle">
                {step.id}
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={step.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground font-poppins">{step.title}</h3>
              </div>

              <p className="text-muted-foreground font-source mb-4">{step.description}</p>

              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex items-start space-x-2">
                  <Icon name="BookOpenIcon" size={16} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-semibold text-accent font-poppins mb-1">
                      Sanskrit Principle
                    </div>
                    <div className="text-sm text-foreground font-source">
                      {step.sanskritPrinciple}
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon
                    name="CpuChipIcon"
                    size={16}
                    className="text-secondary flex-shrink-0 mt-1"
                  />
                  <div>
                    <div className="text-xs font-semibold text-secondary font-poppins mb-1">
                      Modern Application
                    </div>
                    <div className="text-sm text-foreground font-source">
                      {step.modernApplication}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-xl p-8 lg:p-12 shadow-subtle border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground font-poppins mb-4">
                Why Our Approach Works
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="CheckCircleIcon"
                    size={24}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <div className="font-semibold text-foreground font-poppins mb-1">
                      Real-World Problem Solving
                    </div>
                    <div className="text-sm text-muted-foreground font-source">
                      Solving real-world problems with design thinking and innovation-first
                      pedagogy.
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="CheckCircleIcon"
                    size={24}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <div className="font-semibold text-foreground font-poppins mb-1">
                      Practical Application
                    </div>
                    <div className="text-sm text-muted-foreground font-source">
                      Every step involves hands-on work with real tools and technologies
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="CheckCircleIcon"
                    size={24}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <div className="font-semibold text-foreground font-poppins mb-1">
                      Cultural Grounding
                    </div>
                    <div className="text-sm text-muted-foreground font-source">
                      Sanskrit principles provide timeless wisdom for modern innovation challenges
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="CheckCircleIcon"
                    size={24}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <div className="font-semibold text-foreground font-poppins mb-1">
                      Iterative Learning
                    </div>
                    <div className="text-sm text-muted-foreground font-source">
                      Failure is embraced as a learning opportunity, building resilience
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8">
              <h4 className="text-xl font-bold text-foreground font-poppins mb-6 text-center">
                Innovation Journey Timeline
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg font-poppins">1-2</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground font-poppins">Weeks</div>
                    <div className="text-sm text-muted-foreground font-source">
                      Problem discovery & research phase
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg font-poppins">2-4</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground font-poppins">Weeks</div>
                    <div className="text-sm text-muted-foreground font-source">
                      Design, prototyping & building
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg font-poppins">1-2</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground font-poppins">Weeks</div>
                    <div className="text-sm text-muted-foreground font-source">
                      Testing, iteration & refinement
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-brand-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg font-poppins">1</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground font-poppins">Week</div>
                    <div className="text-sm text-muted-foreground font-source">
                      Presentation & launch preparation
                    </div>
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

export default InnovationApproach;
