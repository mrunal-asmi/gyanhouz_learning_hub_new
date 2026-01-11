'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimeSlot {
  time: string;
  activity: string;
  description: string;
  icon: string;
  color: string;
}

interface DayInLifeSectionProps {
  className?: string;
}

const DayInLifeSection = ({ className = '' }: DayInLifeSectionProps) => {
  const [selectedAge, setSelectedAge] = useState<string>('2-3');

  const ageGroups = [
    { value: '2-3', label: '2-3 Years' },
    { value: '3-4', label: '3-4 Years' },
    { value: '4-5', label: '4-5 Years' },
    { value: '5-6', label: '5-6 Years' },
  ];

  const schedules: Record<string, TimeSlot[]> = {
    '2-3': [
      {
        time: '8:00 AM',
        activity: 'Welcome & Circle Time',
        description:
          'Warm greeting, songs, and social bonding activities to start the day with joy',
        icon: 'SunIcon',
        color: 'bg-warning/10 text-warning',
      },
      {
        time: '9:00 AM',
        activity: 'Sensory Play & Exploration',
        description:
          'Hands-on activities with textures, colors, and materials for cognitive development',
        icon: 'HandRaisedIcon',
        color: 'bg-primary/10 text-primary',
      },
      {
        time: '10:00 AM',
        activity: 'Language Introduction',
        description:
          'Storytelling in English and Hindi with visual aids and interactive participation',
        icon: 'BookOpenIcon',
        color: 'bg-secondary/10 text-secondary',
      },
      {
        time: '11:00 AM',
        activity: 'Physical Development',
        description: 'Outdoor play, motor skills activities, and coordination exercises',
        icon: 'HeartIcon',
        color: 'bg-accent/10 text-accent',
      },
      {
        time: '12:00 PM',
        activity: 'Creative Expression',
        description:
          'Art, music, and movement activities to nurture creativity and self-expression',
        icon: 'PaintBrushIcon',
        color: 'bg-primary/10 text-primary',
      },
    ],
    '3-4': [
      {
        time: '8:00 AM',
        activity: 'Morning Assembly & Yoga',
        description: 'Sanskrit shlokas, breathing exercises, and mindfulness practices',
        icon: 'SparklesIcon',
        color: 'bg-warning/10 text-warning',
      },
      {
        time: '9:00 AM',
        activity: 'Ambidextrous Writing Practice',
        description: 'Structured both-hand writing exercises with personalized guidance',
        icon: 'PencilIcon',
        color: 'bg-primary/10 text-primary',
      },
      {
        time: '10:00 AM',
        activity: 'Trilingual Learning',
        description: 'Immersive language sessions in English, Hindi, and Sanskrit',
        icon: 'LanguageIcon',
        color: 'bg-secondary/10 text-secondary',
      },
      {
        time: '11:00 AM',
        activity: 'Science Experiments',
        description: 'Hands-on discovery activities exploring basic scientific concepts',
        icon: 'BeakerIcon',
        color: 'bg-accent/10 text-accent',
      },
      {
        time: '12:00 PM',
        activity: 'Stage Performance Practice',
        description: 'Public speaking, storytelling, and confidence-building activities',
        icon: 'MicrophoneIcon',
        color: 'bg-primary/10 text-primary',
      },
    ],
    '4-5': [
      {
        time: '8:00 AM',
        activity: 'Leadership Circle',
        description: 'Student-led discussions, problem-solving, and decision-making activities',
        icon: 'UserGroupIcon',
        color: 'bg-warning/10 text-warning',
      },
      {
        time: '9:00 AM',
        activity: 'Advanced Writing Skills',
        description: 'Creative writing, both-hand proficiency, and language mastery',
        icon: 'DocumentTextIcon',
        color: 'bg-primary/10 text-primary',
      },
      {
        time: '10:00 AM',
        activity: 'Innovation Lab Time',
        description: 'Building, creating, and experimenting with various materials and concepts',
        icon: 'CubeIcon',
        color: 'bg-secondary/10 text-secondary',
      },
      {
        time: '11:00 AM',
        activity: 'Cultural Integration',
        description: 'Sanskrit literature, Indian heritage, and global awareness activities',
        icon: 'GlobeAltIcon',
        color: 'bg-accent/10 text-accent',
      },
      {
        time: '12:00 PM',
        activity: 'Performance & Presentation',
        description: 'Daily stage time for speeches, performances, and creative showcases',
        icon: 'StarIcon',
        color: 'bg-primary/10 text-primary',
      },
    ],
    '5-6': [
      {
        time: '8:00 AM',
        activity: 'Advanced Leadership Training',
        description: 'Mentoring younger students, project management, and team coordination',
        icon: 'AcademicCapIcon',
        color: 'bg-warning/10 text-warning',
      },
      {
        time: '9:00 AM',
        activity: 'Career Discovery Introduction',
        description: 'Exploring different professions, skills, and future pathways',
        icon: 'BriefcaseIcon',
        color: 'bg-primary/10 text-primary',
      },
      {
        time: '10:00 AM',
        activity: 'Advanced Innovation Projects',
        description: 'Complex problem-solving, robotics basics, and creative engineering',
        icon: 'CogIcon',
        color: 'bg-secondary/10 text-secondary',
      },
      {
        time: '11:00 AM',
        activity: 'Multilingual Mastery',
        description: 'Advanced conversations, presentations, and cultural exchanges',
        icon: 'ChatBubbleLeftRightIcon',
        color: 'bg-accent/10 text-accent',
      },
      {
        time: '12:00 PM',
        activity: 'Public Performance Excellence',
        description: 'Professional-level presentations, debates, and creative performances',
        icon: 'TrophyIcon',
        color: 'bg-primary/10 text-primary',
      },
    ],
  };

  return (
    <section
      className={`py-16 lg:py-24 bg-gradient-to-br from-secondary/5 to-primary/5 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="ClockIcon" size={20} className="text-secondary" />
            <span className="text-sm font-semibold text-secondary font-poppins">
              Daily Experience
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground font-poppins mb-4">
            A Day in the Life at <span className="text-primary">GYANHOUZ</span>
          </h2>

          <p className="text-lg text-muted-foreground font-source">
            Experience how every moment is designed for holistic development, skill building, and
            joyful learning.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {ageGroups.map((group) => (
              <button
                key={group.value}
                onClick={() => setSelectedAge(group.value)}
                className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 font-poppins ${
                  selectedAge === group.value
                    ? 'bg-primary text-primary-foreground shadow-elevated'
                    : 'bg-white text-foreground hover:bg-muted border border-border'
                }`}
              >
                {group.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-elevated p-6 lg:p-8">
            <div className="space-y-6">
              {schedules[selectedAge].map((slot, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${slot.color}`}
                    >
                      <Icon name={slot.icon as any} size={24} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground font-poppins">
                        {slot.activity}
                      </h4>
                      <span className="text-sm font-medium text-muted-foreground font-source">
                        {slot.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-source leading-relaxed">
                      {slot.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Icon name="InformationCircleIcon" size={24} className="text-primary" />
                  <span className="text-sm text-muted-foreground font-source">
                    Schedule includes snack time, rest periods, and flexible learning moments
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DayInLifeSection;
