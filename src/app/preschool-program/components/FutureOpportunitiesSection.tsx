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
      title: 'Talent & Scholarship Door',
      description:
        'Tie-ups with national music & dance academies and platforms. Talent scholarships from ₹5,000 to ₹2 Crore + special coaching & stage exposure.',
      icon: 'TrophyIcon',
      color: 'bg-brand-orange',
    },
    {
      title: 'Industry Door',
      description:
        'Tie-ups with 100+ industries. Priority access to industry-linked programs, mentors, internships, real work exposure and even recommendation letters.',
      icon: 'BriefcaseIcon',
      color: 'bg-primary',
    },
    {
      title: 'Innovation & Technology Door',
      description:
        'Robotics, electronics and innovation labs. Scholarships from ₹5,000 to ₹1 Crore for innovations + engineering mindset through curiosity-to-creation learning.',
      icon: 'CpuChipIcon',
      color: 'bg-secondary',
    },
    {
      title: 'Lifetime Mentorship & Network Door',
      description:
        'A national mentorship community: experts guiding your child, industry connections for future internships, and a powerful peer network for life.',
      icon: 'UserGroupIcon',
      color: 'bg-accent',
    },
    {
      title: 'One Campus, Lifetime of Possibilities',
      description:
        'Preschool → Creativity → Career → Science → Robotics → Innovation → Startup. A connected ecosystem supporting the student journey beyond early years.',
      icon: 'RocketLaunchIcon',
      color: 'bg-primary',
    },
    {
      title: 'Gates of Opportunity',
      description:
        'You don’t just choose a preschool — you choose real-world exposure, scholarships, mentors and opportunities that most kids never get.',
      icon: 'KeyIcon',
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
            BIG <span className="text-accent">‘Beyond Opportunity Doors’</span>
          </h2>

          <p className="text-lg text-muted-foreground font-source">
            Most preschools end at “class”. GYANHOUZ opens doors that connect your child to the real
            world: scholarships, industries, innovation labs, mentors and a lifetime network.
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
            The admission decision that changes everything
          </h3>
          <p className="text-white/90 font-source text-lg mb-8 max-w-2xl mx-auto">
            “Mumma… Papa… why didn’t you admit me where my friends explored more, achieved more and
            got the opportunities I never did?” Don’t choose a preschool — choose your child’s
            ecosystem.
          </p>
          <button className="px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Enquire on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default FutureOpportunitiesSection;
