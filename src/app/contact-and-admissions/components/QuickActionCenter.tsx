import Icon from '@/components/ui/AppIcon';

interface ActionCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
}

interface QuickActionCenterProps {
  onActionSelect: (actionId: string) => void;
  className?: string;
}

const QuickActionCenter = ({ onActionSelect, className = '' }: QuickActionCenterProps) => {
  const actions: ActionCard[] = [
    {
      id: 'preschool',
      title: 'Preschool Admission',
      description: 'Ages 2-6 | Miraculous early learning foundation',
      icon: 'AcademicCapIcon',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      id: 'career-labs',
      title: 'Career Labs Enrollment',
      description: 'Ages 7-16 | Future-focused career discovery',
      icon: 'BriefcaseIcon',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      id: 'innovation-lab',
      title: 'Science Lab Application',
      description: 'Ages 8-16 | Young inventors ecosystem',
      icon: 'LightBulbIcon',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      id: 'skills-development',
      title: 'Skills Development',
      description: 'All ages | Comprehensive skill-building programs',
      icon: 'SparklesIcon',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
    },
    {
      id: 'franchise',
      title: 'Franchise Inquiry',
      description: 'Business opportunity | Multi-revenue model',
      icon: 'BuildingStorefrontIcon',
      color: 'text-brand-orange',
      bgColor: 'bg-brand-orange/10',
    },
    {
      id: 'business-collaboration',
      title: 'Business Collaboration',
      description: 'Partnerships | Educational institutions & corporations',
      icon: 'UserGroupIcon',
      color: 'text-brand-blue',
      bgColor: 'bg-brand-blue/10',
    },
  ];

  return (
    <section className={`py-16 lg:py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-poppins">
            Choose Your <span className="text-primary">Action Path</span>
          </h2>
          <p className="text-lg text-muted-foreground font-source max-w-2xl mx-auto">
            Select the option that best matches your needs. Our team will guide you through the next
            steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {actions.map((action) => (
            <button
              key={action.id}
              onClick={() => onActionSelect(action.id)}
              className="group bg-card border-2 border-border hover:border-primary rounded-2xl p-6 text-left transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 ${action.bgColor} rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon name={action.icon as any} size={28} className={action.color} />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2 font-poppins group-hover:text-primary transition-colors duration-300">
                {action.title}
              </h3>

              <p className="text-sm text-muted-foreground font-source leading-relaxed">
                {action.description}
              </p>

              <div className="flex items-center space-x-2 mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium font-source">Get Started</span>
                <Icon name="ArrowRightIcon" size={16} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActionCenter;
