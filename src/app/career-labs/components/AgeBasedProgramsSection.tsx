import Icon from '@/components/ui/AppIcon';

interface Program {
  ageGroup: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

interface AgeBasedProgramsSectionProps {
  className?: string;
}

const AgeBasedProgramsSection = ({ className = '' }: AgeBasedProgramsSectionProps) => {
  const programs: Program[] = [
    {
      ageGroup: '2-5 Years',
      title: 'Career Awareness Foundation',
      description:
        'Introduction to diverse professions through play-based learning and role-play activities.',
      icon: 'SparklesIcon',
      color: 'from-pink-500 to-rose-500',
      features: [
        'Community helper role-play sessions',
        'Career-themed storytelling and activities',
        'Basic skill introduction through games',
        'Parent-child career exploration workshops',
      ],
    },
    {
      ageGroup: '6-8 Years',
      title: 'Career Exploration Basics',
      description:
        'Hands-on introduction to various career fields through interactive workshops and projects.',
      icon: 'MagnifyingGlassIcon',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Monthly career field workshops',
        'Basic coding and robotics introduction',
        'Art, music, and sports exploration',
        'Science experiment sessions',
      ],
    },
    {
      ageGroup: '9-11 Years',
      title: 'Career Discovery Labs',
      description:
        'Deep-dive into career interests with mentor guidance and real-world project exposure.',
      icon: 'BeakerIcon',
      color: 'from-purple-500 to-indigo-500',
      features: [
        'Personalized career assessment tools',
        'Industry mentor meet-and-greets',
        'Project-based learning in chosen fields',
        'Skill development workshops',
      ],
    },
    {
      ageGroup: '12-16 Years',
      title: 'Career Preparation Academy',
      description:
        'Advanced career preparation with internships, industry projects, and specialized training.',
      icon: 'BriefcaseIcon',
      color: 'from-orange-500 to-amber-500',
      features: [
        'Real industry internship opportunities',
        'Advanced skill certification programs',
        'Portfolio building and career planning',
        'College and career counseling',
      ],
    },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="AcademicCapIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary font-source">
              Age-Appropriate Programs
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-poppins">
            Career Discovery Journey from <span className="text-primary">2 to 16</span>
          </h2>
          <p className="text-lg text-muted-foreground font-source">
            Our structured career exploration programs are designed to match your child's
            developmental stage, ensuring age-appropriate learning and maximum engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-subtle hover:shadow-elevated transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
              <div className="p-6 lg:p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-subtle group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon name={program.icon as any} size={28} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary mb-1 font-source">
                      {program.ageGroup}
                    </div>
                    <h3 className="text-xl font-bold text-foreground font-poppins">
                      {program.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 font-source leading-relaxed">
                  {program.description}
                </p>

                <div className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Icon
                        name="CheckCircleIcon"
                        size={20}
                        className="text-accent flex-shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-foreground font-source">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-6 w-full px-6 py-3 bg-muted hover:bg-primary hover:text-white rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 font-nunito">
                  <span>Learn More</span>
                  <Icon name="ArrowRightIcon" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgeBasedProgramsSection;
