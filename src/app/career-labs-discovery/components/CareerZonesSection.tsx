'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface CareerZone {
  id: string;
  title: string;
  icon: string;
  description: string;
  careers: string[];
  image: string;
  alt: string;
  color: string;
}

export default function CareerZonesSection() {
  const [activeZone, setActiveZone] = useState('medical');

  const careerZones: CareerZone[] = [
  {
    id: 'medical',
    title: 'Medical & Healthcare',
    icon: 'HeartIcon',
    description: 'Experience life-saving professions through realistic medical simulations and healthcare scenarios',
    careers: ['Doctor', 'Surgeon', 'Nurse', 'Pharmacist', 'Physiotherapist', 'Medical Researcher'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cc8f9eea-1767475599288.png",
    alt: 'Children in white lab coats examining medical equipment and practicing healthcare procedures in realistic medical simulation lab',
    color: 'brand-red'
  },
  {
    id: 'engineering',
    title: 'Engineering & Technology',
    icon: 'CogIcon',
    description: 'Build, design, and innovate with hands-on engineering projects and tech workshops',
    careers: ['Software Engineer', 'Mechanical Engineer', 'Robotics Engineer', 'Architect', 'Civil Engineer', 'Data Scientist'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1022ee919-1764656197344.png",
    alt: 'Young students building robots and working on engineering projects with tools and technology in modern workshop environment',
    color: 'brand-blue'
  },
  {
    id: 'business',
    title: 'Business & Entrepreneurship',
    icon: 'BriefcaseIcon',
    description: 'Launch mini-businesses, understand markets, and develop entrepreneurial thinking',
    careers: ['Entrepreneur', 'Marketing Manager', 'Financial Analyst', 'Business Consultant', 'Product Manager', 'Sales Leader'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_171fc5bf2-1767732102092.png",
    alt: 'Children presenting business ideas on whiteboard and working together on entrepreneurship projects in collaborative workspace',
    color: 'brand-orange'
  },
  {
    id: 'creative',
    title: 'Creative Arts & Media',
    icon: 'PaintBrushIcon',
    description: 'Express creativity through design, media production, and artistic exploration',
    careers: ['Graphic Designer', 'Filmmaker', 'Animator', 'Content Creator', 'Fashion Designer', 'Photographer'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b8ca0517-1764738513182.png",
    alt: 'Students creating digital art and filming videos with professional cameras in vibrant creative studio space',
    color: 'brand-teal'
  },
  {
    id: 'culinary',
    title: 'Culinary & Hospitality',
    icon: 'CakeIcon',
    description: 'Master culinary skills and hospitality management in professional kitchen settings',
    careers: ['Chef', 'Pastry Chef', 'Food Scientist', 'Restaurant Manager', 'Nutritionist', 'Sommelier'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f92e6c90-1767973862228.png",
    alt: 'Young chefs in aprons preparing food and learning cooking techniques in professional culinary training kitchen',
    color: 'brand-green'
  },
  {
    id: 'legal',
    title: 'Law & Governance',
    icon: 'ScaleIcon',
    description: 'Understand justice systems through mock trials and legal case simulations',
    careers: ['Lawyer', 'Judge', 'Legal Advisor', 'Policy Maker', 'Human Rights Advocate', 'Diplomat'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bf737a3d-1767191656427.png",
    alt: 'Children participating in mock courtroom trial wearing formal attire and learning about legal procedures',
    color: 'primary'
  }];


  const activeZoneData = careerZones.find((zone) => zone.id === activeZone) || careerZones[0];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="BuildingOfficeIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Career Simulation Zones</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Explore 6 Industry-Specific
            <span className="block text-primary">Career Discovery Zones</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Each zone is designed with real industry equipment, professional mentors, and hands-on projects that mirror actual workplace scenarios
          </p>
        </div>

        {/* Zone Selector */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {careerZones.map((zone) =>
          <button
            key={zone.id}
            onClick={() => setActiveZone(zone.id)}
            className={`p-4 rounded-xl border-2 transition-smooth text-center ${
            activeZone === zone.id ?
            `border-${zone.color} bg-${zone.color}/10` :
            'border-border bg-card hover:border-primary/30'}`
            }>

              <Icon name={zone.icon} size={32} className={`mx-auto mb-2 ${activeZone === zone.id ? `text-${zone.color}` : 'text-muted-foreground'}`} />
              <div className={`text-sm font-semibold ${activeZone === zone.id ? 'text-foreground' : 'text-muted-foreground'}`}>
                {zone.title}
              </div>
            </button>
          )}
        </div>

        {/* Active Zone Display */}
        <div className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Zone Image */}
            <div className="relative h-64 lg:h-auto">
              <AppImage
                src={activeZoneData.image}
                alt={activeZoneData.alt}
                className="w-full h-full object-cover" />

              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name={activeZoneData.icon} size={24} className={`text-${activeZoneData.color}`} />
                  <span className="font-bold text-foreground">{activeZoneData.title}</span>
                </div>
              </div>
            </div>

            {/* Zone Details */}
            <div className="p-8 lg:p-12 space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                {activeZoneData.title} Zone
              </h3>
              
              <p className="text-lg text-muted-foreground">
                {activeZoneData.description}
              </p>

              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Career Paths You'll Explore
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {activeZoneData.careers.map((career, index) =>
                  <div key={index} className="flex items-center space-x-2">
                      <Icon name="CheckCircleIcon" size={20} className={`text-${activeZoneData.color}`} />
                      <span className="text-sm font-medium text-foreground">{career}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4">
                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Age Group</span>
                    <span className="text-sm font-bold text-primary">8-16 years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Session Duration</span>
                    <span className="text-sm font-bold text-primary">2 hours/week</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Program Length</span>
                    <span className="text-sm font-bold text-primary">6 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}