'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CalculatorInputs {
  studentCapacity: number;
  enrollmentRate: number;
  avgFeePerStudent: number;
  additionalRevenue: number;
}

export default function ROICalculator() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [inputs, setInputs] = useState<CalculatorInputs>({
    studentCapacity: 100,
    enrollmentRate: 85,
    avgFeePerStudent: 45000,
    additionalRevenue: 800000
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-xl border border-border p-8">
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-muted rounded w-1/3"></div>
              <div className="h-4 bg-muted rounded w-2/3"></div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="h-32 bg-muted rounded"></div>
                <div className="h-32 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const calculateResults = () => {
    const enrolledStudents = Math.round((inputs.studentCapacity * inputs.enrollmentRate) / 100);
    const annualTuitionRevenue = enrolledStudents * inputs.avgFeePerStudent;
    const totalAnnualRevenue = annualTuitionRevenue + inputs.additionalRevenue;
    const estimatedCosts = totalAnnualRevenue * 0.65;
    const netProfit = totalAnnualRevenue - estimatedCosts;
    const avgInvestment = 3600000;
    const roiMonths = Math.round((avgInvestment / netProfit) * 12);

    return {
      enrolledStudents,
      annualTuitionRevenue,
      totalAnnualRevenue,
      netProfit,
      roiMonths
    };
  };

  const results = calculateResults();

  const handleInputChange = (field: keyof CalculatorInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-teal/10 px-4 py-2 rounded-full mb-4">
            <Icon name="CalculatorIcon" size={20} className="text-brand-teal" />
            <span className="text-sm font-semibold text-brand-teal">Interactive Tool</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Calculate Your ROI
          </h2>
          <p className="text-lg text-muted-foreground">
            Customize parameters to see your potential returns
          </p>
        </div>

        <div className="bg-card rounded-xl border border-border p-8 shadow-brand">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Student Capacity
              </label>
              <input
                type="range"
                min="50"
                max="200"
                value={inputs.studentCapacity}
                onChange={(e) => handleInputChange('studentCapacity', parseInt(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-brand-orange"
              />
              <div className="flex justify-between mt-2">
                <span className="text-sm text-muted-foreground">50</span>
                <span className="text-lg font-bold text-brand-orange">{inputs.studentCapacity}</span>
                <span className="text-sm text-muted-foreground">200</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Enrollment Rate (%)
              </label>
              <input
                type="range"
                min="60"
                max="100"
                value={inputs.enrollmentRate}
                onChange={(e) => handleInputChange('enrollmentRate', parseInt(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-brand-orange"
              />
              <div className="flex justify-between mt-2">
                <span className="text-sm text-muted-foreground">60%</span>
                <span className="text-lg font-bold text-brand-orange">{inputs.enrollmentRate}%</span>
                <span className="text-sm text-muted-foreground">100%</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Avg Fee Per Student (Annual)
              </label>
              <input
                type="range"
                min="30000"
                max="80000"
                step="5000"
                value={inputs.avgFeePerStudent}
                onChange={(e) => handleInputChange('avgFeePerStudent', parseInt(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-brand-orange"
              />
              <div className="flex justify-between mt-2">
                <span className="text-sm text-muted-foreground">₹30,000</span>
                <span className="text-lg font-bold text-brand-orange">{formatCurrency(inputs.avgFeePerStudent)}</span>
                <span className="text-sm text-muted-foreground">₹80,000</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Additional Revenue (Labs, Workshops)
              </label>
              <input
                type="range"
                min="500000"
                max="2000000"
                step="100000"
                value={inputs.additionalRevenue}
                onChange={(e) => handleInputChange('additionalRevenue', parseInt(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-brand-orange"
              />
              <div className="flex justify-between mt-2">
                <span className="text-sm text-muted-foreground">₹5L</span>
                <span className="text-lg font-bold text-brand-orange">{formatCurrency(inputs.additionalRevenue)}</span>
                <span className="text-sm text-muted-foreground">₹20L</span>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Your Projected Results</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-muted/50 rounded-lg p-6">
                <div className="text-sm text-muted-foreground mb-2">Enrolled Students</div>
                <div className="text-3xl font-bold text-brand-orange">{results.enrolledStudents}</div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-6">
                <div className="text-sm text-muted-foreground mb-2">Annual Revenue</div>
                <div className="text-2xl font-bold text-brand-green">{formatCurrency(results.totalAnnualRevenue)}</div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-6">
                <div className="text-sm text-muted-foreground mb-2">Net Profit</div>
                <div className="text-2xl font-bold text-brand-blue">{formatCurrency(results.netProfit)}</div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-orange to-brand-red text-white rounded-lg p-6">
                <div className="text-sm opacity-90 mb-2">ROI Timeline</div>
                <div className="text-3xl font-bold">{results.roiMonths} Months</div>
              </div>
            </div>
            
            <div className="mt-6 flex items-start space-x-2 text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg">
              <Icon name="InformationCircleIcon" size={20} className="flex-shrink-0 mt-0.5" />
              <p>
                Calculations assume 65% operational costs including staff salaries, rent, utilities, marketing, and administrative expenses. Actual results may vary based on location, management efficiency, and market conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}