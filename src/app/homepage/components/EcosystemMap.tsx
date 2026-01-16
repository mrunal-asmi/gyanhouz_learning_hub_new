'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface EcosystemNode {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  link: string;
  ageRange: string;
}

const EcosystemMap = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const ecosystemNodes: EcosystemNode[] = [
    {
      id: 'preschool',
      title: 'Preschool++',
      description:
        'Miraculous early development with ambidextrous writing, multilingual proficiency, and stage confidence',
      icon: 'AcademicCapIcon',
      color: 'from-primary to-brand-orange',
      link: '/preschool-program',
      ageRange: '2-6 Years',
    },
    {
      id: 'career',
      title: 'Career Labs',
      description:
        'Future-focused career discovery with industry mentors and real-world project experience',
      icon: 'BriefcaseIcon',
      color: 'from-secondary to-brand-blue',
      link: '/career-labs',
      ageRange: '12-20 Years',
    },
    {
      id: 'innovation',
      title: 'Science Lab',
      description:
        'Young inventors ecosystem with mentor network and cutting-edge technology access',
      icon: 'LightBulbIcon',
      color: 'from-accent to-success',
      link: '/innovation-lab',
      ageRange: '!0-16 Years',
    },
    {
      id: 'robotics',
      title: 'Robotics & Electronics',
      description:
        'STEM excellence through hands-on robotics, electronics, and engineering projects',
      icon: 'CpuChipIcon',
      color: 'from-warning to-conversion',
      link: '/innovation-lab',
      ageRange: '7-16 Years',
    },
    {
      id: 'science',
      title: 'Science Lab',
      description:
        'Practical vs theoretical learning with real experiments and scientific thinking development',
      icon: 'BeakerIcon',
      color: 'from-brand-blue to-secondary',
      link: '/innovation-lab',
      ageRange: '5-16 Years',
    },
    {
      id: 'skills',
      title: 'Skills Development',
      description:
        'Comprehensive skill-building programs for art, dance, music, digital marketing, communication, leadership, and creative expression',
      icon: 'StarIcon',
      color: 'from-success to-accent',
      link: '/preschool-program',
      ageRange: '10-60 Years',
    },
    {
      id: 'business',
      title: 'Business Network',
      description:
        'Connect your local business through local networking clubs, and enhance practical business skills from an early age',
      icon: 'UserGroupIcon',
      color: 'from-success to-accent',
      link: '/preschool-program',
      ageRange: 'above 20 Years',
    },
    {
      id: 'corporate',
      title: 'Corporate Training',
      description:
        'Upskill your employees with our specialized corporate training programs designed to enhance productivity, leadership, and innovation within your organization.',
      icon: 'PresentationChartBarIcon',
      color: 'from-success to-accent',
      link: '/preschool-program',
      ageRange: 'above 20 Years',
    },
    {
      id: 'personal-development',
      title: 'Personal Development',
      description:
        'Empower yourself with our personal development courses that focus on building confidence, communication skills, and emotional intelligence for lifelong success.',
      icon: 'UserIcon',
      color: 'from-success to-accent',
      link: '/preschool-program',
      ageRange: 'above 20 Years',
    },
  ];

  const handleNodeClick = (nodeId: string) => {
    if (isHydrated) {
      setSelectedNode(selectedNode === nodeId ? null : nodeId);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 px-6 py-3 rounded-full mb-6">
            <Icon name="MapIcon" size={24} className="text-secondary" />
            <span className="text-2xl font-bold text-secondary font-poppins">
              Complete Learning Ecosystem
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-poppins">
            One Journey,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Infinite Possibilities
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-source">
            Discover how our interconnected programs create a seamless educational journey from
            toddler to teenager, ensuring no skill is left undeveloped.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ecosystemNodes.map((node) => (
            <div
              key={node.id}
              className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-subtle hover:shadow-elevated transition-all duration-300 cursor-pointer"
              onClick={() => handleNodeClick(node.id)}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${node.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-subtle`}
              >
                <Icon name={node.icon as any} size={32} className="text-white" />
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground font-poppins">{node.title}</h3>
                  <span className="text-xs font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full font-source">
                    {node.ageRange}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-source leading-relaxed">
                  {node.description}
                </p>
              </div>

              <Link
                href={node.link}
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-semibold text-sm transition-colors duration-300 font-poppins"
              >
                <span>Learn More</span>
                <Icon
                  name="ArrowRightIcon"
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>

              {isHydrated && selectedNode === node.id && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border-2 border-primary pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 px-8 py-6 rounded-2xl">
            <Icon name="InformationCircleIcon" size={32} className="text-primary flex-shrink-0" />
            <p className="text-foreground font-source text-center sm:text-left">
              <span className="font-semibold">Seamless Integration:</span> Each program connects to
              create a comprehensive learning journey, ensuring skills build upon each other
              naturally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemMap;
