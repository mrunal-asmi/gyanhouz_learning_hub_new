'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import Image from '@/components/ui/AppImage';

const techCategories = [
{
  id: 'electronics',
  name: 'Electronics Lab',
  icon: 'BoltIcon',
  color: 'brand-orange',
  equipment: [
  'Arduino Uno & Mega boards',
  'Breadboards & jumper wires',
  'LED matrices & displays',
  'Sensors (ultrasonic, IR, temperature)',
  'Motors & servo controllers',
  'Power supplies & multimeters'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_108b8a5cd-1766082087319.png",
  alt: 'Electronics workbench with Arduino boards, breadboards, LED components, and circuit testing equipment'
},
{
  id: 'robotics',
  name: 'Robotics Arena',
  icon: 'CpuChipIcon',
  color: 'brand-blue',
  equipment: [
  'Robotic arm kits',
  'Wheeled robot chassis',
  'Line-following sensors',
  'Bluetooth & WiFi modules',
  'Competition-grade parts',
  '3D-printed custom components'],

  image: "https://images.unsplash.com/photo-1580613904454-091d7e60c051",
  alt: 'Robotics competition arena with autonomous robots, obstacle courses, and programming stations'
},
{
  id: 'iot',
  name: 'IoT & Smart Devices',
  icon: 'SignalIcon',
  color: 'secondary',
  equipment: [
  'Raspberry Pi 4 computers',
  'ESP32 & NodeMCU boards',
  'Cloud connectivity modules',
  'Smart home sensors',
  'Camera & voice modules',
  'Mobile app integration'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_145e10d91-1764670836929.png",
  alt: 'IoT development station with Raspberry Pi, smart sensors, and connected device prototypes'
},
{
  id: 'programming',
  name: 'Programming Studio',
  icon: 'CodeBracketIcon',
  color: 'brand-teal',
  equipment: [
  'Dual-monitor workstations',
  'Arduino IDE & VS Code',
  'Python & C++ environments',
  'GitHub version control',
  'Simulation software',
  'Debugging tools'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bc03479a-1767521811626.png",
  alt: 'Programming workstations with dual monitors showing Arduino code and robot simulation software'
}];


export default function TechnologyStackSection() {
  const [activeTab, setActiveTab] = useState('electronics');
  const activeCategory = techCategories?.find((cat) => cat?.id === activeTab);

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional-Grade <span className="text-brand-blue">Technology Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Industry-standard equipment that schools can't afford. Every student gets personal access.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {techCategories?.map((category) =>
          <button
            key={category?.id}
            onClick={() => setActiveTab(category?.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-smooth ${
            activeTab === category?.id ?
            `bg-${category?.color} text-white shadow-brand` :
            'bg-card text-foreground hover:bg-muted border border-border'}`
            }>

              <Icon name={category?.icon} size={20} />
              <span>{category?.name}</span>
            </button>
          )}
        </div>

        {/* Content Display */}
        {activeCategory &&
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Equipment List */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                What Your Child Will Master
              </h3>
              <div className="grid gap-4">
                {activeCategory?.equipment?.map((item, index) =>
              <div
                key={index}
                className="flex items-start space-x-3 bg-card p-4 rounded-lg border border-border hover:shadow-md transition-smooth">

                    <div className={`w-8 h-8 rounded-full bg-${activeCategory?.color}/10 flex items-center justify-center flex-shrink-0`}>
                      <Icon name="CheckCircleIcon" size={20} className={`text-${activeCategory?.color}`} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item}</p>
                    </div>
                  </div>
              )}
              </div>

              {/* Value Proposition */}
              <div className={`bg-${activeCategory?.color}/10 border-l-4 border-${activeCategory?.color} p-6 rounded-r-lg`}>
                <div className="flex items-start space-x-3">
                  <Icon name="SparklesIcon" size={24} className={`text-${activeCategory?.color} flex-shrink-0`} />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Personal Equipment Access</h4>
                    <p className="text-sm text-muted-foreground">
                      Unlike schools where 30 students share 1 kit, each GYANHOUZ student gets dedicated equipment for uninterrupted learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                src={activeCategory?.image}
                alt={activeCategory?.alt}
                width={600}
                height={400}
                className="w-full h-auto" />

                {/* Overlay Badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                  <div className="text-2xl font-bold text-brand-orange">₹15L+</div>
                  <div className="text-xs text-muted-foreground">Equipment Value</div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </section>);

}