import Icon from '@/components/ui/AppIcon';

interface ValuesSectionProps {
  className?: string;
}

const ValuesSection = ({ className = '' }: ValuesSectionProps) => {
  const coreValues = [
    {
      icon: 'SparklesIcon',
      title: 'Innovation First',
      description:
        'We constantly challenge traditional methods and embrace cutting-edge pedagogical approaches that truly work.',
      principles: [
        'Question everything',
        'Experiment fearlessly',
        'Learn from failures',
        'Celebrate breakthroughs',
      ],
    },
    {
      icon: 'UserGroupIcon',
      title: 'Child-Centric',
      description:
        "Every decision, every program, every innovation starts with one question: What's best for the child?",
      principles: [
        'Individual attention',
        'Personalized learning paths',
        'Respect for uniqueness',
        'Nurture natural talents',
      ],
    },
    {
      icon: 'ChartBarIcon',
      title: 'Results-Driven',
      description:
        'We measure success through tangible outcomes - skills developed, confidence gained, futures transformed.',
      principles: [
        'Measurable outcomes',
        'Continuous assessment',
        'Transparent reporting',
        'Accountability at all levels',
      ],
    },
    {
      icon: 'HeartIcon',
      title: 'Holistic Development',
      description:
        'Academic excellence is just one piece. We nurture emotional, social, physical, and creative growth equally.',
      principles: [
        'Mind-body-spirit balance',
        'Emotional intelligence',
        'Social responsibility',
        'Creative expression',
      ],
    },
    {
      icon: 'GlobeAltIcon',
      title: 'Cultural Integration',
      description:
        'We honor Indian wisdom while embracing global best practices, creating a unique blend of tradition and innovation.',
      principles: [
        'Sanskrit integration',
        'Value-based learning',
        'Global perspectives',
        'Cultural pride',
      ],
    },
    {
      icon: 'HandRaisedIcon',
      title: 'Community Impact',
      description:
        'Education transformation extends beyond individual success to creating positive societal change.',
      principles: [
        'Parent partnerships',
        'Community engagement',
        'Social responsibility',
        'Movement building',
      ],
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
    <section
      className={`py-16 lg:py-24 bg-gradient-to-br from-muted/30 to-background ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 font-poppins">
              Our <span className="text-primary">Values</span> & Philosophy
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-source leading-relaxed">
              The principles that guide every decision, every program, and every interaction at
              GYANHOUZ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-subtle hover:shadow-elevated transition-all duration-300 border border-border group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={value.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 font-poppins">
                  {value.title}
                </h3>
                <p className="text-muted-foreground mb-6 font-source leading-relaxed">
                  {value.description}
                </p>
                <div className="space-y-2">
                  {value.principles.map((principle, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Icon
                        name="CheckCircleIcon"
                        size={16}
                        className="text-accent flex-shrink-0"
                      />
                      <span className="text-sm text-muted-foreground font-source">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

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

          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-8 lg:p-12 rounded-2xl shadow-subtle text-center">
            <Icon name="BookOpenIcon" size={48} className="text-primary mx-auto mb-6" />
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 font-poppins">
              Commitment to Excellence
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 font-source leading-relaxed">
              We don't just promise transformation - we deliver it through rigorous quality
              standards, continuous innovation, and unwavering dedication to every child's success.
              Our commitment extends beyond academic achievement to nurturing confident, capable,
              and compassionate individuals ready to lead India's future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-card rounded-lg shadow-subtle">
                <span className="text-sm font-semibold text-foreground font-nunito">
                  ISO Certified Programs
                </span>
              </div>
              <div className="px-6 py-3 bg-card rounded-lg shadow-subtle">
                <span className="text-sm font-semibold text-foreground font-nunito">
                  Research-Backed Methods
                </span>
              </div>
              <div className="px-6 py-3 bg-card rounded-lg shadow-subtle">
                <span className="text-sm font-semibold text-foreground font-nunito">
                  Continuous Innovation
                </span>
              </div>
              <div className="px-6 py-3 bg-card rounded-lg shadow-subtle">
                <span className="text-sm font-semibold text-foreground font-nunito">
                  Parent Partnership
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
