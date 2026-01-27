import Icon from '@/components/ui/AppIcon';

interface RevenueStream {
  id: number;
  title: string;
  description: string;
  icon: string;
  monthlyRevenue: string;
  yearlyRevenue: string;
  growthPotential: string;
  age: string;
}

const RevenueStreamsSection = () => {
  const revenueStreams: RevenueStream[] = [
    {
      id: 1,
      title: 'Preschool Programs',
      description:
        'Core revenue from age 1.5-6 preschool education with unique teaching methodologies',
      icon: 'AcademicCapIcon',
      monthlyRevenue: '₹3-4 Lakhs',
      yearlyRevenue: '₹40-50 Lakhs',
      growthPotential: 'Very High',
      age: '1.5 - 6 Years',
    },
    {
      id: 2,
      title: 'Career Labs',
      description: 'Career discovery and guidance programs for age 10-16 students',
      icon: 'BriefcaseIcon',
      monthlyRevenue: '₹1 Lakhs',
      yearlyRevenue: '₹10-12 Lakhs', 
      growthPotential: 'Very High',
      age: '10 - 16 Years',
    },
    {
      id: 3,
      title: 'Science Lab',
      description: 'Project-based learning and innovation programs with mentor network',
      icon: 'LightBulbIcon',
      monthlyRevenue: '₹1.5-3 Lakhs', 
      yearlyRevenue: '₹18-36 Lakhs',
      growthPotential: 'Very High',
      age: '7 - 14 Years',
    },
    {
      id: 4,
      title: 'Science Lab Programs',
      description: 'Hands-on practical science education replacing theoretical learning',
      icon: 'BeakerIcon',
      monthlyRevenue: '₹1-2 Lakhs',
      yearlyRevenue: '₹12-24 Lakhs',
      growthPotential: 'High',
      age: '7 - 14 Years',
    },
    {
      id: 5,
      title: 'Electronics & Robotics',
      description: 'STEM education with global best practices in robotics and electronics',
      icon: 'CpuChipIcon',
      monthlyRevenue: '₹1-1.5 Lakhs',
      yearlyRevenue: '₹12-15 Lakhs',
      growthPotential: 'Very High', 
      age: '8 - 15 Years',
    },
    {
      id: 6,
      title: 'Skills Development',
      description: 'Comprehensive skill-building courses for holistic child development',
      icon: 'StarIcon',
      monthlyRevenue: '₹1-2 Lakhs',
      yearlyRevenue: '₹12-24 Lakhs',
      growthPotential: 'Medium',
      age: '10 - 15 Years',
    },
    {
      id: 7,
      title: 'Community Events',
      description: 'Workshops, competitions, and events generating additional revenue',
      icon: 'UserGroupIcon',
      monthlyRevenue: '₹50K-1 Lakh',
      yearlyRevenue: '₹6-12 Lakhs',
      growthPotential: 'Medium',
      age: 'All Ages',
    },
    {
      id: 8,
      title: 'Business Collaborations',
      description: 'B2B partnerships with schools and institutions for program delivery',
      icon: 'BuildingOfficeIcon',
      monthlyRevenue: '₹1-3 Lakhs',
      yearlyRevenue: '₹12-36 Lakhs',
      growthPotential: 'High',
      age: 'B2B / Schools',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="CurrencyRupeeIcon" size={40} className="text-primary" />
            <span className="text-lg font-semibold text-primary font-nunito">
              Multiple Revenue Streams
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-poppins">
            7+ Income Sources,
            <br />
            <span className="text-primary">One Powerful Ecosystem</span>
          </h2>
          <p className="text-lg text-muted-foreground font-source">
            Unlike traditional single-revenue education models, GYANHOUZ franchises benefit from
            diversified income streams ensuring year-round profitability and sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {revenueStreams.map((stream) => (
            <div
              key={stream.id}
              className="bg-card rounded-xl p-6 shadow-subtle hover:shadow-elevated transition-all duration-300 border border-border group hover:border-primary"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-brand-orange rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name={stream.icon as any} size={28} className="text-white" />
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-foreground font-poppins">{stream.title}</h3>
               
              </div>

              <p className="text-sm text-muted-foreground mb-4 font-source leading-relaxed">
                {stream.description}
              </p>

              <div className="space-y-2 pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-source">Student Age</span>
                   <span className="text-[14px] font-bold bg-primary/14 text-primary px-2 py-1 rounded-full uppercase tracking-wider">
                  {stream.age}
                </span>
                </div>
                  <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-source">Monthly Revenue</span>
                  <span className="text-sm font-semibold text-success font-nunito">
                    {stream.monthlyRevenue}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-source">Yearly Revenue</span>
                  <span className="text-sm font-semibold text-success font-nunito">
                    {stream.yearlyRevenue}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-source">
                    Growth Potential
                  </span>
                  <span
                    className={`text-sm font-semibold font-nunito ${
                      stream.growthPotential === 'Very High'
                        ? 'text-success'
                        : stream.growthPotential === 'High'
                          ? 'text-primary'
                          : 'text-warning'
                    }`}
                  >
                    {stream.growthPotential}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

       <div className="mt-12 bg-gradient-to-r from-primary/10 to-brand-orange/10 rounded-3xl p-12 text-center">
  <div className="max-w-3xl mx-auto space-y-6">
    <h3 className="text-3xl lg:text-4xl font-bold text-foreground font-poppins">
      Fastest Setup & ROI in the Industry
    </h3>

    {/* 15 Days Highlight – BIG */}
    <div className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary text-white font-extrabold text-4xl lg:text-5xl font-poppins shadow-xl">
      🚀 Setup in Just 15 Days
    </div>

    <h3 className="text-2xl lg:text-3xl font-semibold text-foreground font-poppins">
      Total Yearly Revenue Potential
    </h3>

    <div className="text-6xl lg:text-7xl font-bold text-primary font-poppins">
      ₹1–1.2 Crore
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default RevenueStreamsSection;
