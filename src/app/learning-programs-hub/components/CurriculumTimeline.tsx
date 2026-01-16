'use client';

import Icon from '@/components/ui/AppIcon';

interface Milestone {
  age: string;
  title: string;
  description: string;
  skills: string[];
}

interface CurriculumTimelineProps {
  milestones: Milestone[];
}

export default function CurriculumTimeline({ milestones }: CurriculumTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <div key={index} className="relative flex items-start space-x-6">
            <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-brand-orange text-brand-orange-foreground font-bold text-lg shadow-brand flex-shrink-0 z-10">
              {milestone.age}
            </div>

            <div className="flex-1 bg-card border border-border rounded-xl p-6 shadow-brand hover:shadow-lg transition-smooth">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-1">{milestone.title}</h4>
                  <p className="text-sm text-muted-foreground md:hidden">Age: {milestone.age}</p>
                </div>
                <Icon name="AcademicCapIcon" size={24} className="text-primary" variant="solid" />
              </div>

              <p className="text-sm text-foreground mb-4">{milestone.description}</p>

              <div className="flex flex-wrap gap-2">
                {milestone.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-muted text-foreground text-xs font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
