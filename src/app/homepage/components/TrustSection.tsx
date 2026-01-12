
import Icon from '@/components/ui/AppIcon';

interface TrustIndicator {
  icon: string;
  title: string;
  description: string;
}

interface Award {
  title: string;
  organization: string;
  year: string;
}

export default function TrustSection() {
  const trustIndicators: TrustIndicator[] = [
    {
      icon: 'ShieldCheckIcon',
      title: 'CBSE Affiliated',
      description: 'Recognized curriculum aligned with national standards'
    },
    {
      icon: 'AcademicCapIcon',
      title: 'ISO Certified',
      description: 'International quality management certification'
    },
    {
      icon: 'StarIcon',
      title: 'Award Winning',
      description: 'Best Innovation in Education 2024'
    },
    {
      icon: 'UserGroupIcon',
      title: 'Expert Faculty',
      description: 'Trained educators with child psychology expertise'
    }
  ];

  const awards: Award[] = [
    {
      title: 'Best EdTech Innovation',
      organization: 'Education Excellence Awards',
      year: '2024'
    },
    {
      title: 'Top Preschool Chain',
      organization: 'India Education Summit',
      year: '2024'
    },
    {
      title: 'Excellence in STEM',
      organization: 'National Innovation Council',
      year: '2023'
    }
  ];

  const mediaLogos = [
    { name: 'The Times of India', width: 120 },
    { name: 'Economic Times', width: 100 },
    { name: 'Hindustan Times', width: 110 },
    { name: 'NDTV', width: 90 },
    { name: 'India Today', width: 100 }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by 15,000+ Families Across India
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Certified excellence, proven results, and recognized leadership in education innovation
          </p>
        </div>

        {/* Trust Indicators Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustIndicators.map((indicator, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl hover:shadow-brand transition-smooth"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name={indicator.icon as any} size={32} className="text-primary" variant="solid" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{indicator.title}</h3>
              <p className="text-sm text-muted-foreground">{indicator.description}</p>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="bg-gradient-to-br from-warning/10 via-background to-success/10 rounded-2xl p-8 lg:p-12 mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Award-Winning Excellence
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-brand text-center"
              >
                <Icon name="TrophyIcon" size={48} className="text-warning mx-auto mb-4" variant="solid" />
                <h4 className="font-bold text-foreground mb-2">{award.title}</h4>
                <p className="text-sm text-muted-foreground mb-1">{award.organization}</p>
                <p className="text-xs text-muted-foreground font-semibold">{award.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Media Coverage */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6 font-semibold">As Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {mediaLogos.map((logo, index) => (
              <div
                key={index}
                className="h-12 flex items-center justify-center px-4 text-muted-foreground font-bold text-sm"
                style={{ width: `${logo.width}px` }}
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}