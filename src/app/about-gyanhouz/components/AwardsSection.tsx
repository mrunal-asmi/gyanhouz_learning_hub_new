import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface AwardsSectionProps {
  className?: string;
}

interface Award {
  title: string;
  organization: string;
  year: string;
  image: string;
  alt: string;
  description: string;
}

const AwardsSection = ({ className = '' }: AwardsSectionProps) => {
  const awards: Award[] = [
    {
      title: 'Education Innovator of the Year',
      organization: 'National Education Board',
      year: '2023',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_10ea757d7-1764677057503.png',
      alt: 'Golden trophy award on wooden pedestal with spotlight in dark background',
      description: 'Recognized for pioneering experiential learning methodologies',
    },
    {
      title: 'Best Preschool Chain',
      organization: 'India Education Awards',
      year: '2022',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_186b59429-1764758362471.png',
      alt: 'Silver medal award with blue ribbon on white surface',
      description: 'Excellence in early childhood education delivery',
    },
    {
      title: 'Innovation in Curriculum Design',
      organization: 'EdTech India Summit',
      year: '2021',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cfe38887-1765221180214.png',
      alt: 'Bronze star-shaped award trophy on black stand',
      description: 'Revolutionary career discovery lab implementation',
    },
    {
      title: 'Parent Choice Award',
      organization: 'Education World',
      year: '2023',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_18ea66d5b-1764666200613.png',
      alt: 'Crystal glass award with engraved text on marble base',
      description: 'Highest parent satisfaction ratings nationwide',
    },
  ];

  const certifications = [
    { name: 'ISO 9001:2015 Certified', icon: 'ShieldCheckIcon' },
    { name: 'NCERT Curriculum Aligned', icon: 'DocumentCheckIcon' },
    { name: 'Child Safety Certified', icon: 'HeartIcon' },
    { name: 'Green Campus Initiative', icon: 'GlobeAltIcon' },
  ];

  return (
    <section
      className={`py-16 lg:py-24 bg-gradient-to-br from-muted/30 to-background ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Awards & <span className="text-brand-orange">Recognition</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Celebrating excellence in educational innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-brand transition-smooth group"
            >
              <div className="relative h-48 overflow-hidden">
                <AppImage
                  src={award.image}
                  alt={award.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />

                <div className="absolute top-4 right-4 bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-bold">
                  {award.year}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{award.title}</h3>
                <p className="text-sm text-brand-orange font-semibold mb-2">{award.organization}</p>
                <p className="text-sm text-muted-foreground">{award.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Certifications & Accreditations
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-3 p-4 hover:bg-muted rounded-xl transition-smooth"
              >
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center">
                  <Icon name={cert.icon as any} size={32} className="text-brand-orange" />
                </div>
                <p className="text-sm font-semibold text-foreground">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
