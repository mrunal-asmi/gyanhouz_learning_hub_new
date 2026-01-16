'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface LabFacility {
  id: string;
  title: string;
  icon: string;
  description: string;
  equipment: string[];
  image: string;
  alt: string;
  color: string;
}

export default function LabFacilitiesSection() {
  const [activeLab, setActiveLab] = useState('physics');

  const labFacilities: LabFacility[] = [
    {
      id: 'physics',
      title: 'Physics Discovery Lab',
      icon: 'BoltIcon',
      description:
        'Explore mechanics, electricity, magnetism, optics, and modern physics through interactive experiments',
      equipment: [
        'Digital oscilloscopes',
        'Force sensors',
        'Motion trackers',
        'Laser optics kits',
        'Electromagnetic apparatus',
        'Wave demonstration tools',
      ],
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1edbc92a7-1764693659634.png',
      alt: 'Students experimenting with physics equipment including magnets and electrical circuits in well-equipped laboratory',
      color: 'brand-blue',
    },
    {
      id: 'chemistry',
      title: 'Chemistry Exploration Center',
      icon: 'BeakerIcon',
      description:
        'Conduct safe chemical reactions and understand molecular structures through hands-on synthesis',
      equipment: [
        'Fume hoods',
        'pH meters',
        'Spectrophotometers',
        'Distillation apparatus',
        'Molecular model kits',
        'Safety equipment',
      ],
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cca58289-1766578481803.png',
      alt: 'Children in lab coats mixing colorful chemical solutions in beakers with proper safety equipment',
      color: 'brand-green',
    },
    {
      id: 'biology',
      title: 'Biology Investigation Station',
      icon: 'EyeIcon',
      description:
        'Study living organisms, cells, genetics, and ecosystems through microscopy and dissection',
      equipment: [
        'Digital microscopes',
        'Specimen collection',
        'Dissection kits',
        'DNA extraction tools',
        'Plant growth chambers',
        'Aquatic ecosystems',
      ],
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a872ab93-1767703623380.png',
      alt: 'Students examining biological specimens under microscopes in modern biology laboratory',
      color: 'brand-teal',
    },
    {
      id: 'environmental',
      title: 'Environmental Science Lab',
      icon: 'GlobeAltIcon',
      description:
        'Investigate environmental issues, sustainability, and ecological systems through field studies',
      equipment: [
        'Water quality testers',
        'Soil analysis kits',
        'Weather stations',
        'Air quality monitors',
        'Renewable energy models',
        'Composting systems',
      ],
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_158fe49fe-1764785658326.png',
      alt: 'Young scientists testing water quality and studying environmental samples in outdoor laboratory setting',
      color: 'brand-orange',
    },
  ];

  const activeLabData = labFacilities.find((lab) => lab.id === activeLab) || labFacilities[0];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="BuildingLibraryIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary">State-of-the-Art Facilities</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            4 Specialized Labs for
            <span className="block text-primary">Complete Scientific Exploration</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Research-grade equipment and professional lab environments that schools simply cannot
            afford
          </p>
        </div>

        {/* Lab Selector */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {labFacilities.map((lab) => (
            <button
              key={lab.id}
              onClick={() => setActiveLab(lab.id)}
              className={`p-6 rounded-xl border-2 transition-smooth text-center ${
                activeLab === lab.id
                  ? `border-${lab.color} bg-${lab.color}/10`
                  : 'border-border bg-card hover:border-primary/30'
              }`}
            >
              <Icon
                name={lab.icon}
                size={32}
                className={`mx-auto mb-2 ${activeLab === lab.id ? `text-${lab.color}` : 'text-muted-foreground'}`}
              />
              <div
                className={`text-sm font-semibold ${activeLab === lab.id ? 'text-foreground' : 'text-muted-foreground'}`}
              >
                {lab.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Lab Display */}
        <div className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Lab Image */}
            <div className="relative h-64 lg:h-auto">
              <AppImage
                src={activeLabData.image}
                alt={activeLabData.alt}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon
                    name={activeLabData.icon}
                    size={24}
                    className={`text-${activeLabData.color}`}
                  />
                  <span className="font-bold text-foreground">{activeLabData.title}</span>
                </div>
              </div>
            </div>

            {/* Lab Details */}
            <div className="p-8 lg:p-12 space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                {activeLabData.title}
              </h3>

              <p className="text-lg text-muted-foreground">{activeLabData.description}</p>

              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Professional Equipment Available
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {activeLabData.equipment.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon
                        name="CheckCircleIcon"
                        size={20}
                        className={`text-${activeLabData.color}`}
                      />
                      <span className="text-sm font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Grade Levels</span>
                    <span className="text-sm font-bold text-primary">8th - 10th</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Lab Sessions</span>
                    <span className="text-sm font-bold text-primary">3 hours/week</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      Student-Equipment Ratio
                    </span>
                    <span className="text-sm font-bold text-primary">2:1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
