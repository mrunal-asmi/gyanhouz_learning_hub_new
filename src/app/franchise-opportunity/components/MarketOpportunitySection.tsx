import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface MarketStat {
  id: number;
  value: string;
  label: string;
  icon: string;
}

const MarketOpportunitySection = () => {
  const marketStats: MarketStat[] = [
    {
      id: 1,
      value: '₹1.5 Lakh Cr',
      label: 'Indian Education Market Size',
      icon: 'ChartBarIcon',
    },
    {
      id: 2,
      value: '15% CAGR',
      label: 'Annual Market Growth Rate',
      icon: 'ArrowTrendingUpIcon',
    },
    {
      id: 3,
      value: '260M+',
      label: 'School-Age Children in India',
      icon: 'UserGroupIcon',
    },
    {
      id: 4,
      value: '70%',
      label: 'Parents Seeking Quality Education',
      icon: 'AcademicCapIcon',
    },
  ];

  const uniqueAdvantages = [
    {
      id: 1,
      title: 'First-Mover Advantage',
      description: "India's ONLY integrated 2-16 age learning ecosystem under one roof",
      icon: 'RocketLaunchIcon',
    },
    {
      id: 2,
      title: 'Untapped Market Segment',
      description: 'Bridging the gap between traditional preschools and coaching centers',
      icon: 'MapIcon',
    },
    {
      id: 3,
      title: 'Premium Positioning',
      description: 'Targeting affluent parents willing to invest in comprehensive education',
      icon: 'StarIcon',
    },
    {
      id: 4,
      title: 'Scalable Model',
      description: 'Proven systems and processes ready for rapid expansion across India',
      icon: 'ArrowsPointingOutIcon',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="GlobeAltIcon" size={20} className="text-secondary" />
            <span className="text-sm font-semibold text-secondary font-nunito">
              Market Opportunity
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-poppins">
            Massive Market,
            <br />
            <span className="text-secondary">Minimal Competition</span>
          </h2>
          <p className="text-lg text-muted-foreground font-source">
            Enter a rapidly growing education sector with a unique positioning that sets you apart
            from traditional players.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketStats.map((stat) => (
            <div
              key={stat.id}
              className="bg-card rounded-xl p-6 text-center shadow-subtle hover:shadow-elevated transition-all duration-300 border border-border"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon as any} size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-secondary mb-2 font-poppins">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-source">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-elevated">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_1cd8964b7-1764670595959.png"
              alt="Indian parents and children in modern educational setting with interactive learning displays and technology-enabled classrooms showing future of education"
              className="w-full h-[400px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-brand-trust/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-primary mb-1 font-poppins">₹50,000+</div>
                <div className="text-sm text-foreground font-source">
                  Average annual spend per child on quality education
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground font-poppins">
              Your Unique Competitive Advantages
            </h3>

            {uniqueAdvantages.map((advantage) => (
              <div
                key={advantage.id}
                className="flex items-start space-x-4 bg-card rounded-lg p-4 shadow-subtle hover:shadow-elevated transition-all duration-300 border border-border"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-success rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={advantage.icon as any} size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1 font-poppins">
                    {advantage.title}
                  </h4>
                  <p className="text-sm text-muted-foreground font-source">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-secondary to-brand-blue rounded-2xl p-8 lg:p-12 text-white text-center">
          <Icon name="TrophyIcon" size={48} className="mx-auto mb-4 text-brand-orange" />
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-poppins">
            Be Part of India's Education Revolution
          </h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6 font-source">
            Join the movement that's transforming how India educates its children. With GYANHOUZ,
            you're not just starting a business—you're building a legacy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-2xl font-bold font-poppins">50+</div>
              <div className="text-sm text-white/80 font-source">Cities Covered</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-2xl font-bold font-poppins">10,000+</div>
              <div className="text-sm text-white/80 font-source">Students Impacted</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-2xl font-bold font-poppins">95%</div>
              <div className="text-sm text-white/80 font-source">Parent Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunitySection;
