import Icon from '@/components/ui/AppIcon';

interface Metric {
  value: string;
  label: string;
  description: string;
  icon: string;
  color: string;
}

interface SuccessMetricsSectionProps {
  className?: string;
}

const SuccessMetricsSection = ({ className = '' }: SuccessMetricsSectionProps) => {
  const metrics: Metric[] = [
    {
      value: '95%',
      label: 'Career Clarity Achievement',
      description: 'Students gain clear understanding of their career interests and goals',
      icon: 'ChartBarIcon',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      value: '87%',
      label: 'Early Career Success',
      description: 'Alumni secure positions in their chosen fields within 2 years',
      icon: 'TrophyIcon',
      color: 'from-amber-500 to-orange-500',
    },
    {
      value: '92%',
      label: 'Parent Satisfaction',
      description: "Parents report significant improvement in child's career awareness",
      icon: 'HeartIcon',
      color: 'from-pink-500 to-rose-500',
    },
    {
      value: '3.5x',
      label: 'Skill Development Rate',
      description: 'Students develop career-relevant skills 3.5x faster than peers',
      icon: 'RocketLaunchIcon',
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="ChartBarSquareIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary font-source">Proven Results</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-poppins">
            Measurable <span className="text-primary">Career Readiness</span> Outcomes
          </h2>
          <p className="text-lg text-muted-foreground font-source">
            Our data-driven approach ensures every child achieves tangible career discovery
            milestones and develops future-ready skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-subtle hover:shadow-elevated transition-all duration-300 p-6 lg:p-8 group"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mb-6 shadow-subtle group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon name={metric.icon as any} size={32} className="text-white" />
              </div>

              <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2 font-poppins">
                {metric.value}
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-3 font-poppins">
                {metric.label}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed font-source">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 bg-gradient-to-br from-secondary to-brand-trust rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-poppins">
                Track Your Child's Career Discovery Journey
              </h3>
              <p className="text-lg text-white/90 mb-6 font-source">
                Our comprehensive tracking system provides real-time insights into your child's
                career exploration progress, skill development, and mentor interactions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircleIcon"
                    size={24}
                    className="text-brand-orange flex-shrink-0"
                  />
                  <span className="text-white font-source">
                    Monthly progress reports with detailed analytics
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircleIcon"
                    size={24}
                    className="text-brand-orange flex-shrink-0"
                  />
                  <span className="text-white font-source">
                    Personalized career pathway recommendations
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircleIcon"
                    size={24}
                    className="text-brand-orange flex-shrink-0"
                  />
                  <span className="text-white font-source">
                    Skill development milestone tracking
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold font-source">Career Exploration</span>
                  <span className="text-white font-bold font-poppins">85%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-brand-orange to-primary h-3 rounded-full"
                    style={{ width: '85%' }}
                  ></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold font-source">Skill Development</span>
                  <span className="text-white font-bold font-poppins">78%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-brand-orange to-primary h-3 rounded-full"
                    style={{ width: '78%' }}
                  ></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold font-source">Mentor Engagement</span>
                  <span className="text-white font-bold font-poppins">92%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-brand-orange to-primary h-3 rounded-full"
                    style={{ width: '92%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessMetricsSection;
