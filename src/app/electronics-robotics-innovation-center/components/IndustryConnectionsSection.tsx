'use client';

import Icon from '@/components/ui/AppIcon';

const industryBenefits = [
  {
    icon: 'BuildingOfficeIcon',
    title: 'Tech Company Visits',
    description: 'Quarterly visits to robotics companies, startups, and innovation labs',
    color: 'brand-blue',
  },
  {
    icon: 'UserGroupIcon',
    title: 'Industry Mentors',
    description: 'Direct mentorship from working engineers and robotics professionals',
    color: 'brand-orange',
  },
  {
    icon: 'DocumentTextIcon',
    title: 'Certification Programs',
    description: 'Arduino, Raspberry Pi, and IoT certifications recognized by industry',
    color: 'secondary',
  },
  {
    icon: 'BriefcaseIcon',
    title: 'Internship Pathways',
    description: 'Early exposure to real-world projects and startup collaborations',
    color: 'brand-green',
  },
];

const careerPaths = [
  'Robotics Engineer',
  'IoT Developer',
  'Embedded Systems Designer',
  'Automation Specialist',
  'AI/ML Engineer',
  'Hardware Designer',
];

export default function IndustryConnectionsSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Beyond Lab: <span className="text-brand-blue">Industry Connections</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We connect students with the real technology industry, not just teach them about it.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {industryBenefits?.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-smooth text-center"
            >
              <div className={`w-16 h-16 rounded-full bg-${benefit?.color}/10 flex items-center justify-center mx-auto mb-4`}>
                <Icon name={benefit?.icon} size={32} className={`text-${benefit?.color}`} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{benefit?.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit?.description}</p>
            </div>
          ))}
        </div>

        {/* Career Pathways */}
        <div className="bg-gradient-to-br from-brand-blue/10 to-secondary/10 rounded-2xl p-8 lg:p-12 border border-brand-blue/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Future Career Pathways
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Skills learned in our Electronics & Robotics Lab directly prepare students for high-demand technology careers.
              </p>
              
              {/* Career Tags */}
              <div className="flex flex-wrap gap-3">
                {careerPaths?.map((career, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white border border-brand-blue/30 text-foreground font-medium rounded-lg hover:bg-brand-blue/10 transition-smooth"
                  >
                    {career}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Stat Cards */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <Icon name="CurrencyRupeeIcon" size={32} className="text-brand-green" />
                  <span className="text-xs font-semibold text-brand-green uppercase">Salary Potential</span>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">₹8-15 LPA</div>
                <p className="text-sm text-muted-foreground">Starting salary for robotics engineers in India</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <Icon name="ChartBarIcon" size={32} className="text-brand-blue" />
                  <span className="text-xs font-semibold text-brand-blue uppercase">Industry Growth</span>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">45% CAGR</div>
                <p className="text-sm text-muted-foreground">Robotics & IoT market growth in India (2024-2030)</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <Icon name="BriefcaseIcon" size={32} className="text-brand-orange" />
                  <span className="text-xs font-semibold text-brand-orange uppercase">Job Demand</span>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">2M+ Jobs</div>
                <p className="text-sm text-muted-foreground">Expected robotics jobs by 2030 in India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}