import Icon from '@/components/ui/AppIcon';

interface VisionMissionSectionProps {
  className?: string;
}

const VisionMissionSection = ({ className = '' }: VisionMissionSectionProps) => {
  const visionMissionData = [
    {
      icon: 'EyeIcon',
      title: 'Our Vision',
      description: 'To create India\'s most integrated learning ecosystem where every child becomes a confident innovator, not just a memorizing student. We envision a future where education transcends traditional boundaries and children experience careers before choosing them.',
      color: 'brand-orange',
    },
    {
      icon: 'RocketLaunchIcon',
      title: 'Our Mission',
      description: 'To revolutionize early childhood education by combining experiential learning, career discovery labs, and innovation workshops. We transform passive learning into active discovery, ensuring every child develops real-world skills through hands-on exploration.',
      color: 'brand-teal',
    },
    {
      icon: 'SparklesIcon',
      title: 'Our Philosophy',
      description: 'Education should be visionary yet nurturing, scientific yet playful, premium yet inclusive. We believe in building innovation, not imagining it. Our approach centers on parental pride and child empowerment through research-backed methodologies.',
      color: 'brand-blue',
    },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            The GYANHOUZ <span className="text-brand-orange">Philosophy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Positioned as the "Tesla of Education" - premium, innovative, and future-focused, yet accessible and practical
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {visionMissionData.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-brand transition-smooth"
            >
              <div className={`w-16 h-16 bg-${item.color}/10 rounded-2xl flex items-center justify-center mb-6`}>
                <Icon name={item.icon as any} size={32} className={`text-${item.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;