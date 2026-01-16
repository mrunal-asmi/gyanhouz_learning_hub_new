import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Partnership {
  company: string;
  industry: string;
  opportunities: string[];
  logo: string;
  alt: string;
}

interface IndustryPartnershipsSectionProps {
  className?: string;
}

const IndustryPartnershipsSection = ({ className = '' }: IndustryPartnershipsSectionProps) => {
  const partnerships: Partnership[] = [
    {
      company: 'TechCorp India',
      industry: 'Technology',
      opportunities: ['Summer Internships', 'Project Collaborations', 'Mentorship Programs'],
      logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_154f20177-1764661576649.png',
      alt: 'Modern technology company logo with blue and white geometric design on office building',
    },
    {
      company: 'HealthFirst Medical',
      industry: 'Healthcare',
      opportunities: ['Hospital Shadowing', 'Research Projects', 'Medical Workshops'],
      logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_1fd3e6f6e-1764661579531.png',
      alt: 'Healthcare institution logo with medical cross symbol in green and white colors',
    },
    {
      company: 'Creative Studios',
      industry: 'Media & Arts',
      opportunities: ['Design Projects', 'Portfolio Building', 'Industry Exposure'],
      logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ccd10977-1767274418453.png',
      alt: 'Creative agency logo with colorful artistic design elements and modern typography',
    },
    {
      company: 'Engineering Solutions',
      industry: 'Engineering',
      opportunities: ['Technical Training', 'Science Labs', 'Product Development'],
      logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_13d8c2f45-1768066551246.png',
      alt: 'Engineering firm logo with industrial gear design on modern glass building facade',
    },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="BuildingOffice2Icon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary font-source">
              Industry Collaborations
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-poppins">
            Real-World Experience with <span className="text-primary">Leading Companies</span>
          </h2>
          <p className="text-lg text-muted-foreground font-source">
            Our partnerships with top Indian companies provide students with authentic industry
            exposure, internship opportunities, and hands-on project experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {partnerships.map((partnership, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-subtle hover:shadow-elevated transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-muted to-background">
                <AppImage
                  src={partnership.logo}
                  alt={partnership.alt}
                  className="w-full h-full object-cover opacity-20"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2 font-poppins">
                      {partnership.company}
                    </h3>
                    <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-1 rounded-full">
                      <Icon name="TagIcon" size={16} className="text-primary" />
                      <span className="text-sm font-semibold text-primary font-source">
                        {partnership.industry}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4 font-poppins">
                  Available Opportunities
                </h4>
                <div className="space-y-3">
                  {partnership.opportunities.map((opportunity, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                      <Icon
                        name="CheckCircleIcon"
                        size={20}
                        className="text-accent flex-shrink-0"
                      />
                      <span className="text-sm text-foreground font-source">{opportunity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="bg-card rounded-xl p-6 text-center shadow-subtle">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2 font-poppins">50+</div>
            <div className="text-sm text-muted-foreground font-source">Partner Companies</div>
          </div>
          <div className="bg-card rounded-xl p-6 text-center shadow-subtle">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2 font-poppins">
              500+
            </div>
            <div className="text-sm text-muted-foreground font-source">Internship Placements</div>
          </div>
          <div className="bg-card rounded-xl p-6 text-center shadow-subtle">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2 font-poppins">
              1000+
            </div>
            <div className="text-sm text-muted-foreground font-source">Industry Projects</div>
          </div>
          <div className="bg-card rounded-xl p-6 text-center shadow-subtle">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2 font-poppins">92%</div>
            <div className="text-sm text-muted-foreground font-source">Career Placement Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryPartnershipsSection;
