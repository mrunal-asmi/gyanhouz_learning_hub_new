'use client';

import Icon from '@/components/ui/AppIcon';

const pathways = [
  {
    level: 'Foundation',
    age: '6-8 years',
    duration: '6 months',
    color: 'brand-green',
    icon: 'AcademicCapIcon',
    skills: [
      'Basic circuits & electricity',
      'LED projects & switches',
      'Simple robot assembly',
      'Block-based programming',
    ],
    projects: ['LED traffic light', 'Buzzer alarm', 'Line-following robot'],
  },
  {
    level: 'Intermediate',
    age: '9-11 years',
    duration: '9 months',
    color: 'brand-blue',
    icon: 'CpuChipIcon',
    skills: [
      'Arduino programming (C++)',
      'Sensor integration',
      'Motor control systems',
      'Bluetooth connectivity',
    ],
    projects: ['Obstacle-avoiding robot', 'Smart dustbin', 'Temperature monitor'],
  },
  {
    level: 'Advanced',
    age: '12-14 years',
    duration: '12 months',
    color: 'secondary',
    icon: 'RocketLaunchIcon',
    skills: [
      'Raspberry Pi & Linux',
      'IoT device creation',
      'Python automation',
      'Cloud integration',
    ],
    projects: ['Home automation system', 'Voice-controlled robot', 'Weather station'],
  },
  {
    level: 'Competition',
    age: '13-16 years',
    duration: 'Ongoing',
    color: 'brand-orange',
    icon: 'TrophyIcon',
    skills: [
      'Competition robotics',
      'Advanced algorithms',
      'Team collaboration',
      'Innovation challenges',
    ],
    projects: ['National competitions', 'Innovation hackathons', 'Patent-worthy inventions'],
  },
];

export default function LearningPathwaySection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Age-Progressive <span className="text-brand-blue">Learning Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From basic circuits to national competitions - a structured pathway designed by robotics experts.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-green via-brand-blue via-secondary to-brand-orange transform -translate-x-1/2" />

          {/* Pathway Cards */}
          <div className="space-y-12">
            {pathways?.map((pathway, index) => (
              <div
                key={index}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Card */}
                <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
                  <div className="bg-card rounded-xl p-8 border border-border shadow-lg hover:shadow-xl transition-smooth">
                    {/* Header */}
                    <div className={`flex items-center space-x-3 mb-6 ${
                      index % 2 === 0 ? 'lg:justify-end' : ''
                    }`}>
                      <div className={`w-14 h-14 rounded-lg bg-${pathway?.color}/10 flex items-center justify-center`}>
                        <Icon name={pathway?.icon} size={28} className={`text-${pathway?.color}`} />
                      </div>
                      <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                        <h3 className="text-2xl font-bold text-foreground">{pathway?.level}</h3>
                        <p className="text-sm text-muted-foreground">{pathway?.age} • {pathway?.duration}</p>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-3">
                        Skills Mastered
                      </h4>
                      <div className="space-y-2">
                        {pathway?.skills?.map((skill, idx) => (
                          <div key={idx} className={`flex items-center space-x-2 ${
                            index % 2 === 0 ? 'lg:justify-end' : ''
                          }`}>
                            <Icon name="CheckCircleIcon" size={16} className={`text-${pathway?.color}`} />
                            <span className="text-sm text-foreground">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    <div className={`bg-${pathway?.color}/5 rounded-lg p-4`}>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Signature Projects</h4>
                      <div className="flex flex-wrap gap-2">
                        {pathway?.projects?.map((project, idx) => (
                          <span
                            key={idx}
                            className={`inline-block px-3 py-1 bg-${pathway?.color}/10 text-${pathway?.color} text-xs font-medium rounded-full`}
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className={`w-6 h-6 rounded-full bg-${pathway?.color} border-4 border-background shadow-lg`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center space-y-4 bg-gradient-to-r from-brand-blue/10 to-brand-orange/10 px-8 py-6 rounded-xl border border-brand-blue/20">
            <Icon name="LightBulbIcon" size={32} className="text-brand-orange" />
            <p className="text-lg font-semibold text-foreground">
              Every child progresses at their own pace with personalized mentorship
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}