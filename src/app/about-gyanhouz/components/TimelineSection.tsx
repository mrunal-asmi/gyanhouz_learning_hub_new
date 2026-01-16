import Icon from '@/components/ui/AppIcon';

interface TimelineSectionProps {
  className?: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const TimelineSection = ({ className = '' }: TimelineSectionProps) => {
  const timelineEvents: TimelineEvent[] = [
    {
      year: '2014',
      title: 'The Beginning',
      description:
        'GYANHOUZ founded with first campus in Bangalore, introducing experiential learning methodology to 50 pioneering families.',
      icon: 'SparklesIcon',
      color: 'brand-orange',
    },
    {
      year: '2016',
      title: 'Science Labs Launch',
      description:
        "Introduced India's first career discovery labs for children, allowing hands-on exploration of 20+ professions.",
      icon: 'BeakerIcon',
      color: 'brand-teal',
    },
    {
      year: '2018',
      title: 'National Expansion',
      description:
        'Expanded to 10 cities across India, transforming education for 2000+ students with research-backed methodologies.',
      icon: 'MapIcon',
      color: 'brand-blue',
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description:
        'Launched hybrid learning model during pandemic, ensuring uninterrupted experiential education through innovative virtual labs.',
      icon: 'ComputerDesktopIcon',
      color: 'brand-green',
    },
    {
      year: '2022',
      title: 'Franchise Model',
      description:
        'Introduced franchise opportunities, enabling education entrepreneurs to bring GYANHOUZ methodology to their communities.',
      icon: 'BuildingStorefrontIcon',
      color: 'brand-red',
    },
    {
      year: '2024',
      title: 'Industry Partnerships',
      description:
        'Partnered with 50+ corporations for authentic career labs, giving children real-world exposure to future professions.',
      icon: 'UserGroupIcon',
      color: 'brand-orange',
    },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-brand-orange">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A decade of transforming education in India
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-brand transition-smooth">
                    <div className="flex items-center space-x-4 mb-4">
                      <div
                        className={`w-12 h-12 bg-${event.color}/10 rounded-full flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon
                          name={event.icon as any}
                          size={24}
                          className={`text-${event.color}`}
                        />
                      </div>
                      <div>
                        <p className={`text-2xl font-bold text-${event.color}`}>{event.year}</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                </div>

                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-card border-4 border-border rounded-full items-center justify-center z-10">
                  <div className={`w-8 h-8 bg-${event.color} rounded-full`} />
                </div>

                <div className="hidden lg:block w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
