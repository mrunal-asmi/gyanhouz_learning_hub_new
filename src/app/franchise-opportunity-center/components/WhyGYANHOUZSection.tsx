import Icon from '@/components/ui/AppIcon';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: 'AcademicCapIcon',
    title: 'Proven Education Model',
    description: 'Research-backed curriculum with documented child development outcomes and parent satisfaction rates above 95%'
  },
  {
    icon: 'ChartBarIcon',
    title: 'Strong Revenue Streams',
    description: 'Multiple income channels: Preschool programs, innovation labs, career discovery, workshops, and seasonal camps'
  },
  {
    icon: 'UserGroupIcon',
    title: 'Comprehensive Training',
    description: '6-week intensive training program covering operations, curriculum delivery, marketing, and team management'
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Brand Recognition',
    description: 'Leverage established brand reputation with national media coverage and industry awards'
  },
  {
    icon: 'CogIcon',
    title: 'Operational Support',
    description: 'End-to-end assistance with setup, recruitment, marketing campaigns, and ongoing operational guidance'
  },
  {
    icon: 'GlobeAltIcon',
    title: 'Territory Protection',
    description: 'Exclusive geographic rights ensuring no competition from other GYANHOUZ centers in your area'
  }
];

export default function WhyGYANHOUZSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/10 px-4 py-2 rounded-full mb-4">
            <Icon name="StarIcon" size={20} className="text-brand-orange" />
            <span className="text-sm font-semibold text-brand-orange">Why Partner With Us</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Built for Success, Designed for Growth
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            GYANHOUZ offers more than a franchise—it's a complete business ecosystem with proven systems, ongoing support, and a brand parents trust.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:shadow-brand hover:-translate-y-1 transition-smooth"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-brand-orange to-brand-red rounded-lg flex items-center justify-center mb-6">
                <Icon name={benefit.icon as any} size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}