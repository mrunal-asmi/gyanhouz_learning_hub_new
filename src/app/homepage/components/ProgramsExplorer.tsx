'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Program {
  id: number;
  title: string;
  ageRange: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
  color: string;
}

export default function ProgramsExplorer() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedAge, setSelectedAge] = useState<string>('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const programs: Program[] = [
  {
    id: 1,
    title: 'Preschool Foundation',
    ageRange: '2-6 years',
    description: 'Building cognitive foundations through play-based experiential learning',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15a2086be-1764670235699.png",
    alt: 'Smiling toddler in yellow shirt playing with colorful building blocks on classroom floor',
    features: ['Sensory Learning', 'Social Skills', 'Creative Expression', 'Motor Development'],
    color: 'brand-blue'
  },
  {
    id: 2,
    title: 'School of Creativity',
    ageRange: '6-10 years',
    description: 'Developing critical thinking and problem-solving through project-based learning',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1854c4ade-1764910375527.png",
    alt: 'Children in colorful classroom working together on art project with paints and brushes',
    features: ['STEM Projects', 'Arts Integration', 'Team Collaboration', 'Design Thinking'],
    color: 'brand-green'
  },
  {
    id: 3,
    title: 'Innovation Labs',
    ageRange: '8-14 years',
    description: 'Hands-on robotics, electronics, and advanced science experimentation',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b65783f9-1764871168168.png",
    alt: 'Young boy in glasses assembling blue robot with electronic circuits on workbench',
    features: ['Robotics', 'Electronics', 'Coding', 'Science Labs'],
    color: 'brand-orange'
  },
  {
    id: 4,
    title: 'Career Discovery Club',
    ageRange: '10-16 years',
    description: 'Experience real-world careers through industry simulations and mentorship',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b09f2e4f-1764678093560.png",
    alt: 'Teenage students in professional attire participating in business simulation with laptops',
    features: ['Industry Exposure', 'Skill Workshops', 'Mentorship', 'Career Guidance'],
    color: 'secondary'
  }];


  const ageFilters = [
  { label: 'All Ages', value: 'all' },
  { label: '2-6 Years', value: '2-6' },
  { label: '6-10 Years', value: '6-10' },
  { label: '8-14 Years', value: '8-14' },
  { label: '10-16 Years', value: '10-16' }];


  const filteredPrograms = selectedAge === 'all' ?
  programs :
  programs.filter((p) => p.ageRange === selectedAge + ' years');

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            India's Most Integrated Learning Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From preschool to career discovery - a complete educational journey under one roof
          </p>
        </div>

        {/* Age Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {ageFilters.map((filter) =>
          <button
            key={filter.value}
            onClick={() => setSelectedAge(filter.value)}
            className={`px-6 py-3 rounded-lg font-semibold transition-smooth ${
            selectedAge === filter.value ?
            'bg-primary text-primary-foreground shadow-brand' :
            'bg-muted text-muted-foreground hover:bg-muted/80'}`
            }>

              {filter.label}
            </button>
          )}
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredPrograms.map((program) =>
          <div
            key={program.id}
            className="group bg-card rounded-2xl overflow-hidden shadow-brand hover:shadow-lg transition-smooth">

              <div className="relative h-64 overflow-hidden">
                <AppImage
                src={program.image}
                alt={program.alt}
                fill
                className="object-cover group-hover:scale-110 transition-smooth duration-500" />

                <div className={`absolute top-4 right-4 px-4 py-2 bg-${program.color} text-white rounded-full font-semibold text-sm shadow-lg`}>
                  {program.ageRange}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {program.description}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {program.features.map((feature, idx) =>
                <div key={idx} className="flex items-center space-x-2">
                      <Icon name="CheckCircleIcon" size={20} className="text-success" variant="solid" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                )}
                </div>

                <Link
                href="/learning-programs-hub"
                className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-smooth">

                  Learn More
                  <Icon name="ArrowRightIcon" size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            href="/learning-programs-hub"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-lg shadow-brand hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1 transition-smooth">

            Explore All Programs
            <Icon name="ArrowRightIcon" size={24} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>);

}