import Icon from '@/components/ui/AppIcon';

interface SupportCategory {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const SupportSection = () => {
  const supportCategories: SupportCategory[] = [
    {
      id: 1,
      title: 'Comprehensive Training',
      description: 'Complete onboarding and ongoing skill development',
      icon: 'AcademicCapIcon',
      features: [
        '2-week intensive training program',
        'Curriculum and teaching methodology',
        'Business operations and management',
        'Technology platform training',
        'Staff recruitment and training support',
      ],
    },
    {
      id: 2,
      title: 'Marketing Support',
      description: 'Full-spectrum marketing and brand building assistance',
      icon: 'MegaphoneIcon',
      features: [
        'Pre-launch marketing campaigns',
        'Social media content and management',
        'Local advertising strategies',
        'Parent engagement programs',
        'Community event planning',
      ],
    },
    {
      id: 3,
      title: 'Curriculum Development',
      description: 'Continuously updated educational content and materials',
      icon: 'BookOpenIcon',
      features: [
        'Age-appropriate curriculum updates',
        'Innovative teaching materials',
        'Assessment and progress tracking tools',
        'Parent communication templates',
        'Activity and project resources',
      ],
    },
    {
      id: 4,
      title: 'Technology Platform',
      description: 'Integrated management and communication systems',
      icon: 'ComputerDesktopIcon',
      features: [
        'Student management system',
        'Parent communication app',
        'Financial and billing software',
        'Attendance and progress tracking',
        'Analytics and reporting dashboard',
      ],
    },
    {
      id: 5,
      title: 'Business Development',
      description: 'Strategic guidance for growth and expansion',
      icon: 'ChartBarIcon',
      features: [
        'Monthly business review calls',
        'Performance optimization strategies',
        'Revenue enhancement programs',
        'Expansion planning support',
        'Best practices sharing network',
      ],
    },
    {
      id: 6,
      title: 'Operational Support',
      description: 'Day-to-day operational assistance and troubleshooting',
      icon: 'Cog6ToothIcon',
      features: [
        'Dedicated franchise support manager',
        '24/7 helpdesk access',
        'Regular site visits and audits',
        'Quality assurance programs',
        'Crisis management support',
      ],
    },
  ];

  const ongoingBenefits = [
    {
      id: 1,
      title: 'National Brand Recognition',
      description: "Leverage GYANHOUZ\'s growing brand reputation",
      icon: 'BuildingStorefrontIcon',
    },
    {
      id: 2,
      title: 'Bulk Purchasing Power',
      description: 'Reduced costs through centralized procurement',
      icon: 'ShoppingCartIcon',
    },
    {
      id: 3,
      title: 'Innovation Access',
      description: 'First access to new programs and technologies',
      icon: 'LightBulbIcon',
    },
    {
      id: 4,
      title: 'Peer Network',
      description: 'Connect with fellow franchise owners nationwide',
      icon: 'UserGroupIcon',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Icon name="HandRaisedIcon" size={20} className="text-accent" />
            <span className="text-sm font-semibold text-accent font-nunito">
              Comprehensive Support
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-poppins">
            You're Never Alone
            <br />
            <span className="text-accent">in Your Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground font-source">
            From day one through every milestone, our dedicated support team ensures your franchise
            success with comprehensive training, marketing, and operational assistance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {supportCategories.map((category) => (
            <div
              key={category.id}
              className="bg-card rounded-xl p-6 shadow-subtle hover:shadow-elevated transition-all duration-300 border border-border group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-success rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name={category.icon as any} size={28} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2 font-poppins">
                {category.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 font-source">
                {category.description}
              </p>

              <ul className="space-y-2">
                {category.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon
                      name="CheckIcon"
                      size={16}
                      className="text-success flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-muted-foreground font-source">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-muted to-background rounded-2xl p-8 lg:p-12 mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center font-poppins">
            Ongoing Benefits & Resources
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ongoingBenefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-card rounded-xl p-6 text-center shadow-subtle hover:shadow-elevated transition-all duration-300 border border-border"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon as any} size={32} className="text-white" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2 font-poppins">
                  {benefit.title}
                </h4>
                <p className="text-sm text-muted-foreground font-source">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-elevated border border-border">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 font-poppins">
                Your Dedicated Support Team
              </h3>
              <p className="text-muted-foreground mb-6 font-source leading-relaxed">
                Every GYANHOUZ franchise is assigned a dedicated Franchise Support Manager who
                serves as your primary point of contact. They work closely with you to ensure smooth
                operations, address challenges, and identify growth opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="PhoneIcon" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 font-poppins">
                      24/7 Helpdesk
                    </h4>
                    <p className="text-sm text-muted-foreground font-source">
                      Round-the-clock support for urgent issues and queries
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="VideoCameraIcon" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 font-poppins">
                      Monthly Video Calls
                    </h4>
                    <p className="text-sm text-muted-foreground font-source">
                      Regular check-ins to review performance and plan strategies
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapIcon" size={20} className="text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 font-poppins">
                      Quarterly Site Visits
                    </h4>
                    <p className="text-sm text-muted-foreground font-source">
                      On-ground support and quality assurance audits
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-success/10 rounded-xl p-8">
              <div className="text-center mb-6">
                <Icon name="ShieldCheckIcon" size={64} className="text-accent mx-auto mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-2 font-poppins">
                  98% Franchise Retention Rate
                </h4>
                <p className="text-sm text-muted-foreground font-source">
                  Our comprehensive support system ensures long-term success
                </p>
              </div>
              <div className="space-y-3">
                <div className="bg-card rounded-lg p-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground font-source">
                    Training Satisfaction
                  </span>
                  <span className="text-lg font-bold text-success font-poppins">96%</span>
                </div>
                <div className="bg-card rounded-lg p-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground font-source">
                    Support Response Time
                  </span>
                  <span className="text-lg font-bold text-primary font-poppins">&lt;2 hrs</span>
                </div>
                <div className="bg-card rounded-lg p-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground font-source">
                    Franchisee Referrals
                  </span>
                  <span className="text-lg font-bold text-secondary font-poppins">85%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
