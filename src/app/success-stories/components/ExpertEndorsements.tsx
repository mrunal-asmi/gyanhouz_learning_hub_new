import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Expert {
  id: number;
  name: string;
  title: string;
  organization: string;
  image: string;
  alt: string;
  testimonial: string;
}

interface ExpertEndorsementsProps {
  experts: Expert[];
}

export default function ExpertEndorsements({ experts }: ExpertEndorsementsProps) {
  return (
    <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-xl p-8">
      <div className="flex items-center space-x-3 mb-6">
        <Icon name="AcademicCapIcon" size={28} className="text-secondary" />
        <h2 className="text-2xl font-bold text-foreground font-poppins">Expert Endorsements</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {experts.map((expert) => (
          <div
            key={expert.id}
            className="bg-card rounded-xl p-6 shadow-subtle hover:shadow-elevated transition-all duration-300"
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <AppImage
                  src={expert.image}
                  alt={expert.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground font-poppins">
                  {expert.name}
                </h3>
                <p className="text-sm text-muted-foreground font-source">{expert.title}</p>
                <p className="text-xs text-secondary font-source font-semibold">
                  {expert.organization}
                </p>
              </div>
            </div>
            <div className="relative">
              <Icon
                name="ChatBubbleLeftIcon"
                size={24}
                className="absolute -top-2 -left-2 text-primary/20"
              />
              <p className="text-sm text-foreground font-source italic leading-relaxed pl-6">
                "{expert.testimonial}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
