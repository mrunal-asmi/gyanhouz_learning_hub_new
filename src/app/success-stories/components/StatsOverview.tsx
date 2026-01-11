import Icon from '@/components/ui/AppIcon';

interface Stat {
  icon: string;
  value: string;
  label: string;
  description: string;
}

interface StatsOverviewProps {
  stats: Stat[];
}

export default function StatsOverview({ stats }: StatsOverviewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-card rounded-xl shadow-subtle p-6 hover:shadow-elevated transition-all duration-300 border border-border"
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name={stat.icon as any} size={24} className="text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-3xl font-bold text-primary font-poppins mb-1">{stat.value}</p>
              <p className="text-sm font-semibold text-foreground font-poppins mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-muted-foreground font-source leading-relaxed">
                {stat.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
