'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

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
      title: 'Innovation Lab',
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
      link: '/robotics-electronics-lab',
      ageRange: '7-16 Years',
    },
    {
      id: 'science',
      title: 'Science Lab',
      description:
        'Practical vs theoretical learning with real experiments and scientific thinking development',
      icon: 'BeakerIcon',
      color: 'from-brand-blue to-secondary',
      link: '/science-labs',
      ageRange: '5-16 Years',
    },
    {
      id: 'skills',
      title: 'Skills Development',
      description:
        'Comprehensive skill-building programs for art, dance, music, digital marketing, communication, leadership, and creative expression',
      icon: 'StarIcon',
      color: 'from-success to-accent',
      link: '/professional-classes',
      ageRange: '10-60 Years',
    },
    {
      id: 'business',
      title: 'Business Network',
      description:
        'Connect your local business through local networking, and enhance practical business skills from an early age',
      icon: 'UserGroupIcon',
      color: 'from-success to-accent',
      link: '/business-clubs',
      ageRange: 'above 20 Years',
    },
    {
      id: 'corporate',
      title: 'Corporate Training',
      description:
        'Upskill your employees with our specialized corporate training programs designed to enhance productivity, leadership, and innovation within your organization.',
      icon: 'PresentationChartBarIcon',
      color: 'from-success to-accent',
      link: '/professional-classes',
      ageRange: 'above 20 Years',
    },
    {
      id: 'personal-development',
      title: 'Personal Development',
      description:
        'At every step Gyanhouz Unleash many opportunities for growth and potential discovery for every child. Explore opportunity.',
      icon: 'UserIcon',
      color: 'from-success to-accent',
      link: '/success-stories',
      ageRange: 'above 20 Years',
    },
  ];

  const handleNodeClick = (nodeId: string) => {
    if (isHydrated) {
      setSelectedNode(selectedNode === nodeId ? null : nodeId);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background"  style={{
          backgroundImage: "url('/assets/images/bgome2.jpg')",
        }}>
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

        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-sky-100 border-2 border-primary/20 px-10 py-10 rounded-[3rem] shadow-elevated hover:shadow-2xl transition-all duration-500 group relative max-w-5xl mx-auto overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            
            <div className="relative w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl animate-ping group-hover:animate-none"></div>
              <Icon name="ShareIcon" size={48} className="text-primary relative z-10" />
            </div>
            
            <div className="relative text-center sm:text-left">
              <h4 className="text-2xl md:text-3xl font-bold text-foreground font-poppins mb-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Seamless Integration
                </span>
              </h4>
              <p className="text-muted-foreground font-source text-xl leading-relaxed">
                Each program connects to create a <span className="text-foreground font-bold">comprehensive learning journey</span>, 
                ensuring skills build upon each other naturally and effectively.
              </p>
              <div className="mt-8">
                <AppImage
                  src="/assets/images/seemless.jpeg"
                  alt="Seamless Integration"
                  width={800}
                  height={450}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemMap;
