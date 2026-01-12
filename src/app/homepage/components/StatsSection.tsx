import Icon from '@/components/ui/AppIcon';

interface Stat {
  icon: string;
  value: string;
  label: string;
  color: string;
}

export default function StatsSection() {
  const stats: Stat[] = [
    {
      icon: 'AcademicCapIcon',
      value: '15,000+',
      label: 'Happy Students',
      color: 'text-brand-blue'
    },
    {
      icon: 'BuildingOffice2Icon',
      value: '50+',
      label: 'Learning Centers',
      color: 'text-brand-green'
    },
    {
      icon: 'TrophyIcon',
      value: '98%',
      label: 'Parent Satisfaction',
      color: 'text-warning'
    },
    {
      icon: 'SparklesIcon',
      value: '25+',
      label: 'Innovation Labs',
      color: 'text-brand-orange'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-xl shadow-brand hover:shadow-lg hover:-translate-y-1 transition-smooth"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} bg-current/10 rounded-full mb-4`}>
                <Icon name={stat.icon as any} size={32} className={stat.color} variant="solid" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </h3>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}