'use client';

import Icon from '@/components/ui/AppIcon';

const differentiators = [
  {
    icon: 'WrenchScrewdriverIcon',
    title: 'Build Real Devices',
    school: 'Watch teacher demonstrations',
    gyanhouz: 'Every child builds working circuits, robots, and IoT devices from scratch',
    color: 'brand-orange',
  },
  {
    icon: 'CodeBracketIcon',
    title: 'Professional Programming',
    school: 'Block-based coding only',
    gyanhouz: 'Arduino C++, Python, Raspberry Pi OS - real industry languages',
    color: 'brand-blue',
  },
  {
    icon: 'CpuChipIcon',
    title: 'Industry Equipment',
    school: 'Toy kits shared among 30 students',
    gyanhouz: 'Personal Arduino, Raspberry Pi, sensors, motors - professional grade',
    color: 'secondary',
  },
  {
    icon: 'UserGroupIcon',
    title: 'Expert Mentors',
    school: 'General teachers with basic knowledge',
    gyanhouz: 'Electronics engineers and robotics specialists with industry experience',
    color: 'brand-teal',
  },
  {
    icon: 'TrophyIcon',
    title: 'Competition Training',
    school: 'No competitive exposure',
    gyanhouz: 'National robotics competitions, hackathons, and innovation challenges',
    color: 'brand-red',
  },
  {
    icon: 'LightBulbIcon',
    title: 'Innovation Projects',
    school: 'Follow fixed curriculum',
    gyanhouz: 'Design your own inventions - home automation, drones, smart devices',
    color: 'brand-green',
  },
];

export default function WhyDifferentSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/10 px-4 py-2 rounded-full mb-6">
            <Icon name="ExclamationTriangleIcon" size={20} className="text-brand-orange" />
            <span className="text-sm font-semibold text-brand-orange">Why Schools Can't Offer This</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Not Another <span className="text-brand-orange">"STEM Activity"</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Schools teach electronics in textbooks. We build engineers who create real technology.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators?.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-smooth"
            >
              <div className={`w-14 h-14 rounded-lg bg-${item?.color}/10 flex items-center justify-center mb-4`}>
                <Icon name={item?.icon} size={28} className={`text-${item?.color}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{item?.title}</h3>
              
              {/* School Approach */}
              <div className="mb-4 pb-4 border-b border-border">
                <div className="flex items-start space-x-2 mb-2">
                  <Icon name="XMarkIcon" size={16} className="text-error mt-1 flex-shrink-0" />
                  <span className="text-xs font-semibold text-muted-foreground uppercase">Traditional Schools</span>
                </div>
                <p className="text-sm text-muted-foreground">{item?.school}</p>
              </div>
              
              {/* GYANHOUZ Approach */}
              <div>
                <div className="flex items-start space-x-2 mb-2">
                  <Icon name="CheckIcon" size={16} className="text-success mt-1 flex-shrink-0" />
                  <span className="text-xs font-semibold text-brand-orange uppercase">GYANHOUZ Method</span>
                </div>
                <p className="text-sm font-medium text-foreground">{item?.gyanhouz}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-red/10 px-6 py-3 rounded-full">
            <Icon name="FireIcon" size={20} className="text-brand-red" />
            <span className="text-sm font-semibold text-brand-red">
              Limited seats: Only 15 students per batch for equipment access
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}