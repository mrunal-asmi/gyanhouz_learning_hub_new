import Icon from '@/components/ui/AppIcon';

interface ComparisonItem {
  traditional: string;
  gyanhouz: string;
}

interface ComparisonSectionProps {
  className?: string;
}

const ComparisonSection = ({ className = '' }: ComparisonSectionProps) => {
  const comparisons: ComparisonItem[] = [
    {
      traditional: 'Rote memorization and passive learning',
      gyanhouz: 'Active experimentation and hands-on discovery',
    },
    {
      traditional: 'Single language focus with limited exposure',
      gyanhouz: 'Trilingual mastery (English, Hindi, Sanskrit)',
    },
    {
      traditional: 'Theoretical concepts without practical application',
      gyanhouz: 'Real-world problem solving and innovation',
    },
    {
      traditional: 'Limited creative expression opportunities',
      gyanhouz: 'Daily stage performances and confidence building',
    },
    {
      traditional: 'One-hand writing development only',
      gyanhouz: 'Ambidextrous writing for enhanced brain development',
    },
    {
      traditional: 'Isolated skill development approach',
      gyanhouz: 'Integrated ecosystem connecting all learning areas',
    },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-warning/10 px-4 py-2 rounded-full mb-4">
            <Icon name="ExclamationTriangleIcon" size={20} className="text-warning" />
            <span className="text-sm font-semibold text-warning font-poppins">
              What Your Child is Missing
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground font-poppins mb-4">
            Old School vs <span className="text-primary">New School</span>
          </h2>

          <p className="text-lg text-muted-foreground font-source">
            See the stark difference between traditional preschools and GYANHOUZ's revolutionary
            approach. Your child deserves better than outdated methods.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white rounded-xl p-6 shadow-subtle border-2 border-error/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-error/10 rounded-lg flex items-center justify-center">
                  <Icon name="XMarkIcon" size={24} className="text-error" />
                </div>
                <h3 className="text-xl font-bold text-foreground font-poppins">
                  Traditional Preschools
                </h3>
              </div>

              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-error/5 rounded-lg">
                    <Icon
                      name="XCircleIcon"
                      size={20}
                      className="text-error flex-shrink-0 mt-0.5"
                    />
                    <p className="text-sm text-muted-foreground font-source">{item.traditional}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-elevated border-2 border-accent">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name="CheckIcon" size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground font-poppins">
                  GYANHOUZ Preschool++
                </h3>
              </div>

              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-accent/5 rounded-lg"
                  >
                    <Icon
                      name="CheckCircleIcon"
                      size={20}
                      className="text-accent flex-shrink-0 mt-0.5"
                    />
                    <p className="text-sm text-foreground font-source font-medium">
                      {item.gyanhouz}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full">
              <Icon name="LightBulbIcon" size={20} className="text-primary" />
              <span className="text-sm font-semibold text-primary font-poppins">
                The choice is clear. Don't let your child fall behind.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
