'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import Image from '@/components/ui/AppImage';

const projects = [
  {
    title: 'Smart Home Automation',
    student: 'Aarav, 13 years',
    description:
      'Voice-controlled home system using Raspberry Pi, controlling lights, fans, and security',
    tech: ['Raspberry Pi', 'Python', 'Google Assistant', 'Relay Modules'],
    image: 'https://images.unsplash.com/photo-1652084824353-a9f939f43555',
    alt: 'Smart home automation system with Raspberry Pi controlling lights and appliances via voice commands',
    outcome: 'Won district-level innovation competition',
  },
  {
    title: 'Line-Following Delivery Robot',
    student: 'Priya, 11 years',
    description: 'Autonomous robot that follows black lines and delivers items between stations',
    tech: ['Arduino Uno', 'IR Sensors', 'Motor Drivers', 'C++'],
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1047622c9-1766999598496.png',
    alt: 'Autonomous line-following robot with IR sensors navigating a track and delivering packages',
    outcome: 'Selected for state robotics championship',
  },
  {
    title: 'Weather Monitoring Station',
    student: 'Rohan, 14 years',
    description: 'IoT device measuring temperature, humidity, air quality with cloud data logging',
    tech: ['ESP32', 'DHT22 Sensor', 'ThingSpeak', 'Mobile App'],
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1aab171e7-1765111116318.png',
    alt: 'IoT weather station with multiple sensors displaying real-time environmental data on mobile app',
    outcome: 'Data used by school for environmental study',
  },
  {
    title: 'Gesture-Controlled Robotic Arm',
    student: 'Ananya, 12 years',
    description: 'Robotic arm controlled by hand gestures using accelerometer and servo motors',
    tech: ['Arduino Mega', 'MPU6050', 'Servo Motors', 'Wireless'],
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1748ecd86-1768036262102.png',
    alt: 'Robotic arm with multiple servo motors controlled by hand gesture recognition system',
    outcome: 'Featured in national innovation magazine',
  },
];

export default function ProjectShowcaseSection() {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-brand-blue/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/10 px-4 py-2 rounded-full mb-6">
            <Icon name="SparklesIcon" size={20} className="text-brand-orange" />
            <span className="text-sm font-semibold text-brand-orange">Student Innovations</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real Projects, <span className="text-brand-orange">Real Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            These aren't school science fair models. These are working inventions built by GYANHOUZ
            students.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Project Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={projects?.[selectedProject]?.image}
                alt={projects?.[selectedProject]?.alt}
                width={500}
                height={350}
                className="w-full h-auto"
              />

              {/* Tech Stack Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex flex-wrap gap-2">
                  {projects?.[selectedProject]?.tech?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">
                {projects?.[selectedProject]?.title}
              </h3>
              <p className="text-brand-orange font-semibold">
                {projects?.[selectedProject]?.student}
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {projects?.[selectedProject]?.description}
            </p>

            {/* Outcome Badge */}
            <div className="bg-success/10 border-l-4 border-success p-4 rounded-r-lg">
              <div className="flex items-start space-x-3">
                <Icon name="TrophyIcon" size={24} className="text-success flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground mb-1">Achievement</h4>
                  <p className="text-sm text-muted-foreground">
                    {projects?.[selectedProject]?.outcome}
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-blue">100%</div>
                <div className="text-xs text-muted-foreground">Functional</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-orange">3-6</div>
                <div className="text-xs text-muted-foreground">Months Build</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-green">Real</div>
                <div className="text-xs text-muted-foreground">World Use</div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Selector */}
        <div className="grid md:grid-cols-4 gap-4">
          {projects?.map((project, index) => (
            <button
              key={index}
              onClick={() => setSelectedProject(index)}
              className={`text-left p-4 rounded-lg border-2 transition-smooth ${
                selectedProject === index
                  ? 'border-brand-orange bg-brand-orange/5'
                  : 'border-border bg-card hover:border-brand-orange/50'
              }`}
            >
              <h4 className="font-semibold text-foreground mb-1 text-sm">{project?.title}</h4>
              <p className="text-xs text-muted-foreground">{project?.student}</p>
            </button>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-orange mb-2">500+</div>
            <p className="text-sm text-muted-foreground">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-blue mb-2">50+</div>
            <p className="text-sm text-muted-foreground">Competition Wins</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">15+</div>
            <p className="text-sm text-muted-foreground">Patent Applications</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-green mb-2">100%</div>
            <p className="text-sm text-muted-foreground">Portfolio Ready</p>
          </div>
        </div>
      </div>
    </section>
  );
}
