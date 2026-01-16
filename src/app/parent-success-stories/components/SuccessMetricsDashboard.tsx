import Icon from '@/components/ui/AppIcon';

interface Metric {
  id: number;
  label: string;
  value: string;
  icon: string;
  color: string;
  bgColor: string;
}

interface SuccessMetricsDashboardProps {
  metrics: Metric[];
}

const SuccessMetricsDashboard = ({ metrics }: SuccessMetricsDashboardProps) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <div
          key={metric.id}
          className="bg-card rounded-xl shadow-brand p-6 hover:shadow-lg transition-smooth"
        >
          <div
            className={`w-12 h-12 ${metric.bgColor} rounded-lg flex items-center justify-center mb-4`}
          >
            <Icon name={metric.icon as any} size={24} className={metric.color} variant="solid" />
          </div>
          <p className="text-3xl font-bold text-foreground mb-1">{metric.value}</p>
          <p className="text-sm text-muted-foreground">{metric.label}</p>
        </div>
      ))}
    </div>
  );
};

export default SuccessMetricsDashboard;
