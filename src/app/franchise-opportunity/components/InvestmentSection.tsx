import Icon from '@/components/ui/AppIcon';

interface InvestmentRequirement {
  id: number;
  category: string;
  amount: string;
  description: string;
  icon: string;
}

interface Qualification {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const InvestmentSection = () => {
  const investmentRequirements: InvestmentRequirement[] = [
    {
      id: 1,
      category: 'Franchise Fee',
      amount: '₹15 Lakhs',
      description: 'One-time fee for brand rights, training, and initial setup support',
      icon: 'DocumentTextIcon',
    },
    {
      id: 2,
      category: 'Infrastructure',
      amount: '₹20 Lakhs',
      description: 'Facility setup, interior design, and classroom equipment',
      icon: 'BuildingOfficeIcon',
    },
    {
      id: 3,
      category: 'Equipment & Materials',
      amount: '₹8 Lakhs',
      description: 'Lab equipment, learning materials, furniture, and technology',
      icon: 'CubeIcon',
    },
    {
      id: 4,
      category: 'Marketing & Launch',
      amount: '₹4 Lakhs',
      description: 'Pre-launch campaigns, branding materials, and opening events',
      icon: 'MegaphoneIcon',
    },
    {
      id: 5,
      category: 'Working Capital',
      amount: '₹3 Lakhs',
      description: 'Initial operational expenses for first 3-6 months',
      icon: 'BanknotesIcon',
    },
  ];

  const qualifications: Qualification[] = [
    {
      id: 1,
      title: 'Financial Capability',
      description: 'Minimum net worth of ₹75 lakhs with liquid capital of ₹50 lakhs',
      icon: 'CurrencyRupeeIcon',
    },
    {
      id: 2,
      title: 'Space Requirements',
      description: '2,500-3,500 sq ft commercial space in prime residential area',
      icon: 'HomeModernIcon',
    },
    {
      id: 3,
      title: 'Educational Passion',
      description: 'Genuine interest in education and child development',
      icon: 'HeartIcon',
    },
    {
      id: 4,
      title: 'Business Acumen',
      description: 'Prior business experience or strong management skills',
      icon: 'BriefcaseIcon',
    },
    {
      id: 5,
      title: 'Community Connection',
      description: 'Strong local network and community engagement ability',
      icon: 'UserGroupIcon',
    },
    {
      id: 6,
      title: 'Full-Time Commitment',
      description: 'Dedicated focus on franchise operations and growth',
      icon: 'ClockIcon',
    },
  ];

  const ongoingFees = [
    {
      id: 1,
      fee: 'Royalty Fee',
      amount: '8% of monthly revenue',
      description: 'Ongoing brand support and system improvements',
    },
    {
      id: 2,
      fee: 'Marketing Fee',
      amount: '2% of monthly revenue',
      description: 'National marketing campaigns and brand building',
    },
    {
      id: 3,
      fee: 'Technology Fee',
      amount: '₹5,000/month',
      description: 'Platform maintenance and software updates',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="CurrencyRupeeIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary font-nunito">
              Investment Details
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-poppins">
            Transparent Investment
            <br />
            <span className="text-primary">Requirements</span>
          </h2>
          <p className="text-lg text-muted-foreground font-source">
            Clear breakdown of initial investment and ongoing fees with no hidden costs or
            surprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-subtle border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6 font-poppins flex items-center space-x-2">
                <Icon name="CalculatorIcon" size={24} className="text-primary" />
                <span>Initial Investment Breakdown</span>
              </h3>
              <div className="space-y-4">
                {investmentRequirements.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start space-x-4 p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-brand-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-foreground font-poppins">{item.category}</h4>
                        <span className="text-lg font-bold text-primary font-poppins">
                          {item.amount}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground font-source">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t-2 border-primary">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-foreground font-poppins">
                      Total Investment
                    </span>
                    <span className="text-3xl font-bold text-primary font-poppins">₹50 Lakhs</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-subtle border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6 font-poppins flex items-center space-x-2">
                <Icon name="ArrowPathIcon" size={24} className="text-secondary" />
                <span>Ongoing Fees</span>
              </h3>
              <div className="space-y-4">
                {ongoingFees.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start justify-between p-4 bg-muted rounded-lg"
                  >
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground mb-1 font-poppins">{item.fee}</h4>
                      <p className="text-sm text-muted-foreground font-source">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-lg font-bold text-secondary ml-4 font-poppins">
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
                <p className="text-sm text-muted-foreground font-source">
                  <Icon
                    name="InformationCircleIcon"
                    size={16}
                    className="inline mr-1 text-secondary"
                  />
                  All ongoing fees are calculated on actual revenue, ensuring alignment with your
                  success
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-subtle border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6 font-poppins flex items-center space-x-2">
                <Icon name="CheckBadgeIcon" size={24} className="text-accent" />
                <span>Franchise Qualifications</span>
              </h3>
              <div className="space-y-4">
                {qualifications.map((qual) => (
                  <div
                    key={qual.id}
                    className="flex items-start space-x-3 p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-accent to-success rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={qual.icon as any} size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1 font-poppins">{qual.title}</h4>
                      <p className="text-sm text-muted-foreground font-source">
                        {qual.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-success/10 to-accent/10 rounded-xl p-6 border border-success/20">
              <div className="flex items-start space-x-4 mb-4">
                <Icon name="LightBulbIcon" size={32} className="text-success flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2 font-poppins">
                    Financing Options Available
                  </h4>
                  <p className="text-sm text-muted-foreground font-source mb-4">
                    We have partnerships with leading banks and financial institutions to help
                    qualified candidates secure franchise financing.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 text-sm text-muted-foreground font-source">
                      <Icon name="CheckCircleIcon" size={16} className="text-success" />
                      <span>Up to 70% financing available</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm text-muted-foreground font-source">
                      <Icon name="CheckCircleIcon" size={16} className="text-success" />
                      <span>Competitive interest rates</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm text-muted-foreground font-source">
                      <Icon name="CheckCircleIcon" size={16} className="text-success" />
                      <span>Flexible repayment terms</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-elevated border border-border text-center">
          <Icon name="ShieldCheckIcon" size={48} className="text-primary mx-auto mb-4" />
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 font-poppins">
            Protected Territory Rights
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6 font-source">
            Each franchise receives exclusive territorial rights within a defined geographic area,
            ensuring no competition from other GYANHOUZ franchises in your zone.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-muted rounded-lg p-4">
              <div className="text-2xl font-bold text-primary mb-1 font-poppins">3-5 km</div>
              <div className="text-sm text-muted-foreground font-source">Protected Radius</div>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <div className="text-2xl font-bold text-primary mb-1 font-poppins">50,000+</div>
              <div className="text-sm text-muted-foreground font-source">Target Population</div>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <div className="text-2xl font-bold text-primary mb-1 font-poppins">Lifetime</div>
              <div className="text-sm text-muted-foreground font-source">Territory Rights</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
