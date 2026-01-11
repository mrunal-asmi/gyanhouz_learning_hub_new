'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface InvestmentBreakdown {
  category: string;
  amount: string;
  percentage: number;
}

const ROISection = () => {
  const [selectedCity, setSelectedCity] = useState<'tier1' | 'tier2' | 'tier3'>('tier1');

  const investmentBreakdown: InvestmentBreakdown[] = [
    { category: 'Franchise Fee', amount: '₹15 Lakhs', percentage: 30 },
    { category: 'Infrastructure Setup', amount: '₹20 Lakhs', percentage: 40 },
    { category: 'Equipment & Materials', amount: '₹8 Lakhs', percentage: 16 },
    { category: 'Marketing & Launch', amount: '₹4 Lakhs', percentage: 8 },
    { category: 'Working Capital', amount: '₹3 Lakhs', percentage: 6 },
  ];

  const revenueProjection = [
    { month: 'Month 1-3', revenue: 2.5, expenses: 3.5, profit: -1 },
    { month: 'Month 4-6', revenue: 5.5, expenses: 4, profit: 1.5 },
    { month: 'Month 7-9', revenue: 9, expenses: 4.5, profit: 4.5 },
    { month: 'Month 10-12', revenue: 13, expenses: 5, profit: 8 },
    { month: 'Year 2', revenue: 18, expenses: 6, profit: 12 },
    { month: 'Year 3', revenue: 24, expenses: 7, profit: 17 },
  ];

  const breakEvenAnalysis = [
    { period: 'Q1', cumulative: -8 },
    { period: 'Q2', cumulative: -4 },
    { period: 'Q3', cumulative: 2 },
    { period: 'Q4', cumulative: 10 },
    { period: 'Year 2', cumulative: 34 },
    { period: 'Year 3', cumulative: 68 },
  ];

  const cityTierData = {
    tier1: {
      investment: '₹50 Lakhs',
      monthlyRevenue: '₹18-22 Lakhs',
      breakEven: '18-20 Months',
      roi: '45-55%',
    },
    tier2: {
      investment: '₹40 Lakhs',
      monthlyRevenue: '₹14-18 Lakhs',
      breakEven: '16-18 Months',
      roi: '50-60%',
    },
    tier3: {
      investment: '₹30 Lakhs',
      monthlyRevenue: '₹10-14 Lakhs',
      breakEven: '14-16 Months',
      roi: '55-65%',
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full mb-4">
            <Icon name="ChartBarIcon" size={20} className="text-success" />
            <span className="text-sm font-semibold text-success font-nunito">
              Financial Projections
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-poppins">
            Clear Path to
            <br />
            <span className="text-success">Profitable Returns</span>
          </h2>
          <p className="text-lg text-muted-foreground font-source">
            Transparent financial modeling based on real data from 50+ successful franchise
            locations across India.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {(['tier1', 'tier2', 'tier3'] as const).map((tier) => (
            <button
              key={tier}
              onClick={() => setSelectedCity(tier)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                selectedCity === tier
                  ? 'border-success bg-success/5 shadow-elevated'
                  : 'border-border bg-card hover:border-success/50'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground font-poppins">
                  {tier === 'tier1'
                    ? 'Tier 1 Cities'
                    : tier === 'tier2'
                      ? 'Tier 2 Cities'
                      : 'Tier 3 Cities'}
                </h3>
                {selectedCity === tier && (
                  <Icon name="CheckCircleIcon" size={24} className="text-success" />
                )}
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground font-source">Investment</span>
                  <span className="text-sm font-semibold text-foreground font-nunito">
                    {cityTierData[tier].investment}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground font-source">Monthly Revenue</span>
                  <span className="text-sm font-semibold text-success font-nunito">
                    {cityTierData[tier].monthlyRevenue}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground font-source">Break-Even</span>
                  <span className="text-sm font-semibold text-primary font-nunito">
                    {cityTierData[tier].breakEven}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground font-source">Annual ROI</span>
                  <span className="text-sm font-semibold text-success font-nunito">
                    {cityTierData[tier].roi}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-xl p-6 shadow-subtle border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6 font-poppins flex items-center space-x-2">
              <Icon name="CurrencyRupeeIcon" size={24} className="text-primary" />
              <span>Investment Breakdown</span>
            </h3>
            <div className="space-y-4">
              {investmentBreakdown.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground font-source">
                      {item.category}
                    </span>
                    <span className="text-sm font-bold text-primary font-nunito">
                      {item.amount}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-brand-orange h-2 rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-foreground font-poppins">
                    Total Investment
                  </span>
                  <span className="text-2xl font-bold text-primary font-poppins">₹50 Lakhs</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-subtle border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6 font-poppins flex items-center space-x-2">
              <Icon name="ChartBarIcon" size={24} className="text-success" />
              <span>Revenue Projection (Lakhs)</span>
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueProjection}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                  <XAxis dataKey="month" tick={{ fill: '#616161', fontSize: 12 }} />
                  <YAxis tick={{ fill: '#616161', fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E0E0E0',
                      borderRadius: '8px',
                      fontSize: '12px',
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Bar dataKey="revenue" fill="#2E7D32" name="Revenue" />
                  <Bar dataKey="expenses" fill="#F57C00" name="Expenses" />
                  <Bar dataKey="profit" fill="#1565C0" name="Profit" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 lg:p-8 shadow-subtle border border-border">
          <h3 className="text-xl font-bold text-foreground mb-6 font-poppins flex items-center space-x-2">
            <Icon name="ArrowTrendingUpIcon" size={24} className="text-success" />
            <span>Break-Even Analysis (Cumulative Profit in Lakhs)</span>
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={breakEvenAnalysis}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                <XAxis dataKey="period" tick={{ fill: '#616161', fontSize: 12 }} />
                <YAxis tick={{ fill: '#616161', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E0E0E0',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Line
                  type="monotone"
                  dataKey="cumulative"
                  stroke="#2E7D32"
                  strokeWidth={3}
                  name="Cumulative Profit"
                  dot={{ fill: '#2E7D32', r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-success/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-success mb-1 font-poppins">18-24</div>
              <div className="text-sm text-muted-foreground font-source">Months to Break-Even</div>
            </div>
            <div className="bg-primary/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1 font-poppins">₹68 Lakhs</div>
              <div className="text-sm text-muted-foreground font-source">
                3-Year Cumulative Profit
              </div>
            </div>
            <div className="bg-secondary/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-secondary mb-1 font-poppins">45-55%</div>
              <div className="text-sm text-muted-foreground font-source">
                Annual ROI After Year 2
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
