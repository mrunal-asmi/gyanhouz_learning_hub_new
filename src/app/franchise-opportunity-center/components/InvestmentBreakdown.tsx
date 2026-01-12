import Icon from '@/components/ui/AppIcon';

interface InvestmentItem {
  category: string;
  amount: string;
  description: string;
}

const investmentItems: InvestmentItem[] = [
  {
    category: 'Franchise Fee',
    amount: '₹8,00,000',
    description: 'One-time brand licensing and territory rights'
  },
  {
    category: 'Infrastructure Setup',
    amount: '₹12,00,000 - ₹18,00,000',
    description: 'Classroom setup, furniture, learning materials, safety equipment'
  },
  {
    category: 'Technology & Systems',
    amount: '₹2,00,000 - ₹3,00,000',
    description: 'Learning management system, security systems, communication tools'
  },
  {
    category: 'Marketing Launch',
    amount: '₹3,00,000 - ₹5,00,000',
    description: 'Initial marketing campaigns, branding materials, community outreach'
  },
  {
    category: 'Working Capital',
    amount: '₹5,00,000 - ₹8,00,000',
    description: 'Staff salaries, operational expenses for first 6 months'
  }
];

const revenueStreams = [
  { name: 'Preschool Programs', percentage: '55%', amount: '₹25L - ₹36L' },
  { name: 'Innovation Labs', percentage: '20%', amount: '₹9L - ₹13L' },
  { name: 'Career Discovery', percentage: '15%', amount: '₹7L - ₹10L' },
  { name: 'Workshops & Camps', percentage: '10%', amount: '₹4L - ₹6L' }
];

export default function InvestmentBreakdown() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-blue/10 px-4 py-2 rounded-full mb-4">
            <Icon name="CurrencyRupeeIcon" size={20} className="text-brand-blue" />
            <span className="text-sm font-semibold text-brand-blue">Investment Details</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Transparent Investment Structure
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Complete breakdown of initial investment and expected revenue streams for informed decision-making.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-card rounded-xl border border-border p-8 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-foreground">Total Investment</h3>
                <div className="text-3xl font-bold text-brand-orange">₹30L - ₹42L</div>
              </div>
              <div className="space-y-4">
                {investmentItems.map((item, index) => (
                  <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-semibold text-foreground">{item.category}</div>
                      <div className="font-bold text-brand-orange">{item.amount}</div>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-brand-green to-brand-teal text-white rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="TrendingUpIcon" size={32} />
                <div>
                  <div className="text-sm opacity-90">Expected ROI Timeline</div>
                  <div className="text-3xl font-bold">18-24 Months</div>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed">
                Based on average performance of existing franchise partners with 80+ student enrollment within first year.
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Annual Revenue Potential</h3>
              <div className="text-4xl font-bold text-brand-orange mb-8">₹45L - ₹65L</div>
              
              <div className="space-y-6">
                {revenueStreams.map((stream, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-foreground">{stream.name}</span>
                      <span className="text-brand-orange font-bold">{stream.amount}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-brand-orange to-brand-red h-full rounded-full transition-smooth"
                          style={{ width: stream.percentage }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-muted-foreground w-12 text-right">
                        {stream.percentage}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="InformationCircleIcon" size={20} />
                  <span>Revenue projections based on 100-120 student capacity with 85% enrollment rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}