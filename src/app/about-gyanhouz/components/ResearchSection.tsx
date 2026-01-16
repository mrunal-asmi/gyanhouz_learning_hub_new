import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ResearchSectionProps {
  className?: string;
}

interface ResearchPartner {
  name: string;
  logo: string;
  alt: string;
  collaboration: string;
}

interface ResearchStat {
  value: string;
  label: string;
  icon: string;
}

const ResearchSection = ({ className = '' }: ResearchSectionProps) => {
  const researchPartners: ResearchPartner[] = [
    {
      name: 'IIT Delhi',
      logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_145f7a36b-1765477774898.png',
      alt: 'Modern university building with glass facade and students walking',
      collaboration: 'Child cognitive development research',
    },
    {
      name: 'NIMHANS',
      logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_1556785fe-1764697614634.png',
      alt: 'Medical research facility with modern equipment and white walls',
      collaboration: 'Early childhood psychology studies',
    },
    {
      name: 'NCERT',
      logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_106319e80-1766060462539.png',
      alt: 'Educational institution building with red brick exterior and green lawn',
      collaboration: 'Curriculum development partnership',
    },
  ];

  const researchStats: ResearchStat[] = [
    { value: '20+', label: 'Published Research Papers', icon: 'DocumentTextIcon' },
    { value: '15+', label: 'Academic Partnerships', icon: 'AcademicCapIcon' },
    { value: '98%', label: 'Parent Satisfaction Rate', icon: 'HeartIcon' },
    { value: '5000+', label: 'Children Studied', icon: 'UserGroupIcon' },
  ];

  return (
    <section
      className={`py-16 lg:py-24 bg-gradient-to-br from-brand-blue/5 to-background ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Research-Backed <span className="text-brand-orange">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our methodologies are grounded in rigorous academic research and validated by leading
            educational institutions
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {researchStats.map((stat, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-brand transition-smooth"
            >
              <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon as any} size={24} className="text-brand-orange" />
              </div>
              <p className="text-3xl font-bold text-brand-orange mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Our Research Partners
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {researchPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-brand transition-smooth"
              >
                <div className="relative h-48">
                  <AppImage
                    src={partner.logo}
                    alt={partner.alt}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-xl font-bold text-white">{partner.name}</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">{partner.collaboration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-brand-orange/10 border border-brand-orange/20 rounded-2xl p-8">
          <div className="flex items-start space-x-4">
            <Icon name="LightBulbIcon" size={32} className="text-brand-orange flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-xl font-bold text-foreground mb-3">
                Evidence-Based Learning Approach
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every aspect of our curriculum is designed based on peer-reviewed research in child
                psychology, cognitive development, and educational neuroscience. Our methods have
                been validated through longitudinal studies tracking child development outcomes over
                5+ years.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <Icon
                    name="CheckCircleIcon"
                    size={20}
                    className="text-brand-orange mt-0.5 flex-shrink-0"
                  />
                  <span className="text-muted-foreground">
                    Scientifically validated teaching methodologies
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon
                    name="CheckCircleIcon"
                    size={20}
                    className="text-brand-orange mt-0.5 flex-shrink-0"
                  />
                  <span className="text-muted-foreground">
                    Continuous assessment and improvement protocols
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon
                    name="CheckCircleIcon"
                    size={20}
                    className="text-brand-orange mt-0.5 flex-shrink-0"
                  />
                  <span className="text-muted-foreground">
                    Regular publication of findings in academic journals
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
