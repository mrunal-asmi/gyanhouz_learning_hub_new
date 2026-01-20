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
        'Early exposure to diverse career fields through our integrated Career Labs, helping children identify their passions before they even reach high school.',
      icon: 'BriefcaseIcon',
      color: 'bg-primary',
    },
    {
      title: 'Innovation & Entrepreneurship',
      description:
        'Access to our Science and Robotics labs where children learn to build, create, and think like entrepreneurs from a young age.',
      icon: 'LightBulbIcon',
      color: 'bg-secondary',
    },
    {
      title: 'Global Communication Mastery',
      description:
        'Trilingual proficiency (English, Hindi, Sanskrit) opens doors to global opportunities and cultural leadership in an interconnected world.',
      icon: 'GlobeAltIcon',
      color: 'bg-accent',
    },
    {
      title: 'Leadership & Stage Presence',
      description:
        'Developing the confidence to lead and speak in front of large audiences, a critical skill for future CEOs, politicians, and thought leaders.',
      icon: 'UserGroupIcon',
      color: 'bg-brand-orange',
    },
    {
      title: 'Advanced Cognitive Edge',
      description:
        'Ambidextrous writing and IQ development modules provide a permanent cognitive advantage in academic and professional pursuits.',
      icon: 'CpuChipIcon',
      color: 'bg-primary',
    },
    {
      title: 'Ecosystem Networking',
      description:
        'Being part of the GYANHOUZ ecosystem connects families to a network of innovators, mentors, and like-minded achievers.',
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
            We don't just prepare children for school; we create pathways for lifelong success and
            leadership through our unique ecosystem.
          </p>
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
