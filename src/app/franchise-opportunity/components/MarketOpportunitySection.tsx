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
 const reasons = [
    {
      id: 1,
      title: '7+ Revenue Streams',
      description: 'Multiple income sources ensure year-round profitability and risk diversification',
      icon: 'CurrencyRupeeIcon',
    },
    {
      id: 2,
      title: 'Setup in Just 15 Days',
      description: 'Fastest franchise launch timeline in the education industry',
      icon: 'BoltIcon',
    },
    {
      id: 3,
      title: 'Integrated 2–16 Model',
      description: 'India’s only ecosystem covering early learning to career readiness',
      icon: 'AcademicCapIcon',
    },
    {
      id: 4,
      title: 'End-to-End Support',
      description: 'From setup to marketing, operations, training, and ongoing growth',
      icon: 'LifebuoyIcon',
    },
  ];

  return (
    <>
      {/* ================= WHY GYANHOUZ ================= */}
      <section className="py-16 lg:py-22 bg-gradient-to-br from-brand-trust via-secondary to-brand-blue text-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
           <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-brand-orange to-brand-yellow px-12 py-6 rounded-full mb-8 shadow-2xl transform scale-100">
  <Icon name="SparklesIcon" size={80} className="text-white" />
  <span className="text-4xl lg:text-4xl font-extrabold font-nunito text-white">
    Why GYANHOUZ
  </span>
</div>


            <h2 className="text-3xl lg:text-5xl font-bold font-poppins mb-4">
              Not Just a Franchise,
              <br />
              <span className="text-brand-orange">
                A Complete Education Business
              </span>
            </h2>

            <p className="text-lg text-white/90 font-source">
              GYANHOUZ is built for entrepreneurs who want predictable returns,
              fast setup, and long term setup for 20-25 years, also upgrade to full schools.</p>           </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((item) => (
              <div
                key={item.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-brand-orange to-primary rounded-xl flex items-center justify-center mb-4">
                  <Icon name={item.icon as any} size={28} className="text-white" />
                </div>

                <h3 className="text-lg font-bold font-poppins mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-white/90 font-source">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

         <div className="mt-16 bg-white rounded-3xl p-12 text-center shadow-2xl max-w-4xl mx-auto">
  <div className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-nunito font-semibold">
    The GYANHOUZ Advantage
  </div>
  <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold leading-relaxed tracking-wide">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-orange via-primary to-brand-blue font-cormorant italic">
    GYANHOUZ
  </span>
  <span className="text-foreground font-cormorant italic">
    — where
  </span>{' '}
  <span className="text-brand-orange font-cormorant italic">
    parents
  </span>,{' '}
  <span className="text-brand-blue font-cormorant italic">
    businesses
  </span>, and{' '}
  <span className="text-green-500 font-cormorant italic">
    India’s finest minds
  </span>
  <br />
  <span className="text-muted-foreground font-cormorant italic">
    in science, innovation, arts, music, and artificial intelligence
  </span>
  <br />
  <span className="text-primary font-cormorant italic">
    come together to shape the next generation.
  </span>
</h2>

</div>

        </div>
      </section>

      {/* ================= MARKET OPPORTUNITY (UNCHANGED) ================= */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          {/* ✅ YOUR EXISTING MARKET OPPORTUNITY CODE */}
        
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
    </>
  );


};




export default MarketOpportunitySection;
