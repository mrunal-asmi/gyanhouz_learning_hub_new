'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface PhilosophyComparisonSectionProps {
  className?: string;
}

interface ComparisonItem {
  category: string;
  traditional: string;
  gyanhouz: string;
}

const PhilosophyComparisonSection = ({ className = '' }: PhilosophyComparisonSectionProps) => {
  const [activeTab, setActiveTab] = useState<'learning' | 'assessment' | 'environment'>('learning');

  const comparisonData: Record<string, ComparisonItem[]> = {
    learning: [
      {
        category: 'Teaching Method',
        traditional: 'Rote memorization and textbook-based learning',
        gyanhouz: 'Hands-on experiential learning through real-world projects',
      },
      {
        category: 'Curriculum Focus',
        traditional: 'Theory-heavy with limited practical application',
        gyanhouz: 'Skill-building through innovation labs and career discovery',
      },
      {
        category: 'Student Role',
        traditional: 'Passive listener absorbing information',
        gyanhouz: 'Active explorer creating and experimenting',
      },
    ],
    assessment: [
      {
        category: 'Evaluation Method',
        traditional: 'Written exams testing memory recall',
        gyanhouz: 'Project-based assessments measuring real skills',
      },
      {
        category: 'Success Metrics',
        traditional: 'Grades and marks as primary indicators',
        gyanhouz: 'Holistic development tracking across multiple dimensions',
      },
      {
        category: 'Feedback System',
        traditional: 'Periodic report cards with numerical scores',
        gyanhouz: 'Continuous progress tracking with detailed insights',
      },
    ],
    environment: [
      {
        category: 'Classroom Setup',
        traditional: 'Rows of desks facing blackboard',
        gyanhouz: 'Collaborative spaces with innovation stations',
      },
      {
        category: 'Learning Resources',
        traditional: 'Limited to textbooks and notebooks',
        gyanhouz: 'Robotics kits, science labs, career simulation tools',
      },
      {
        category: 'Teacher Role',
        traditional: 'Knowledge dispenser and authority figure',
        gyanhouz: 'Facilitator and mentor guiding exploration',
      },
    ],
  };

  const tabs = [
    { key: 'learning' as const, label: 'Learning Approach', icon: 'AcademicCapIcon' },
    { key: 'assessment' as const, label: 'Assessment', icon: 'ClipboardDocumentCheckIcon' },
    { key: 'environment' as const, label: 'Environment', icon: 'BuildingLibraryIcon' },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Old School vs <span className="text-brand-orange">New School</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how GYANHOUZ revolutionizes traditional education
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-smooth ${
                activeTab === tab.key
                  ? 'bg-brand-orange text-white shadow-brand'
                  : 'bg-card text-muted-foreground hover:bg-muted border border-border'
              }`}
            >
              <Icon name={tab.icon as any} size={20} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {comparisonData[activeTab].map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-brand transition-smooth"
            >
              <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                <div className="p-6 bg-muted/30">
                  <h4 className="text-lg font-bold text-foreground mb-2">{item.category}</h4>
                </div>
                <div className="p-6">
                  <div className="flex items-start space-x-3">
                    <Icon name="XMarkIcon" size={20} className="text-error flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Traditional Approach</p>
                      <p className="text-foreground">{item.traditional}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-brand-orange/5">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircleIcon" size={20} className="text-brand-orange flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-brand-orange mb-1">GYANHOUZ Approach</p>
                      <p className="text-foreground">{item.gyanhouz}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-brand-orange to-brand-red text-white px-8 py-4 rounded-2xl shadow-brand">
            <p className="text-lg font-bold mb-1">Experience the Difference</p>
            <p className="text-sm opacity-90">Book a free campus tour to see our methodology in action</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyComparisonSection;