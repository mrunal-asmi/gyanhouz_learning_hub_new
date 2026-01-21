import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Opportunity {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const FutureOpportunitiesSection = () => {
  const opportunities: Opportunity[] = [
    {
      title: 'Career Discovery Pathways',
      description:
        'No Gyanhouz kids is left behind during the future years for their career discovery.',
      icon: 'BriefcaseIcon',
      color: 'bg-primary',
    },
    {
      title: 'Innovation & Entrepreneurship',
      description:
        'Access to our Innovation labs where when they think, we enable their journey to innovation with right guidance, funding and unique innovation lab ecosystem across India.',
      icon: 'LightBulbIcon',
      color: 'bg-secondary',
    },
    {
      title: 'First access to our other programs',
      description:
        'We give first access to our all other program, as the top priority goes to kids that start their journey with Gyanhouz at the small ages itself.',
      icon: 'GlobeAltIcon',
      color: 'bg-accent',
    },
    {
      title: 'Talent door',
      description:
        'When Gyanhouz kids leads across the areas, we support their journey to be India’s best.',
      icon: 'UserGroupIcon',
      color: 'bg-brand-orange',
    },
    {
      title: 'Science and Industry doors',
      description:
        'We get priority seats to all of our science and industry driven programs for our Gyanhouz preschoolers.',
      icon: 'CpuChipIcon',
      color: 'bg-primary',
    },
    {
      title: 'Ecosystem Networking',
      description:
        'When your child grows, he gets complete Gyanhouz ecosystem of innovators, talent gurus, other gurus and like-minded achievers.',
      icon: 'ShareIcon',
      color: 'bg-secondary',
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AppImage
          src="/assets/images/bgnew.jpg"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-4 bg-accent/10 px-6 md:px-8 py-3 md:py-4 rounded-full mb-8">
            <Icon name="RocketLaunchIcon" size={40} className="text-accent scale-75 md:scale-100" />
            <span className="text-2xl md:text-5xl font-semibold text-accent font-poppins whitespace-nowrap">
              Beyond Preschool
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground font-poppins mb-4">
            Future <span className="text-accent">Opportunities</span> We Create
          </h2>

          <p className="text-lg text-muted-foreground font-source">
            Our unique ecosystem spanning across multiple areas, ensures that our kids have unique educational doors that other preschools cannot provide. 


          </p>
          <p className="text-lg text-muted-foreground font-source">Gyanhouz preschoolers have the best future too !!</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opp, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl border border-muted hover:border-accent/30 hover:shadow-elevated transition-all duration-300 group"
            >
              <div
                className={`w-14 h-14 ${opp.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-subtle`}
              >
                <Icon name={opp.icon as any} size={28} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-foreground font-poppins mb-3 group-hover:text-accent transition-colors">
                {opp.title}
              </h3>

              <p className="text-muted-foreground font-source leading-relaxed">{opp.description}</p>

              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Icon name={opp.icon as any} size={64} className="text-foreground" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold font-poppins mb-4">
            Ready to give your child a head start on their future?
          </h3>
          <p className="text-white/90 font-source text-lg mb-8 max-w-2xl mx-auto">
            Join the GYANHOUZ movement and witness the miraculous transformation in your child's
            development and future prospects.
          </p>
          <button className="px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Book a Discovery Session
          </button>
        </div>
      </div>
    </section>
  );
};

export default FutureOpportunitiesSection;
