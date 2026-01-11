'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface StudentInventionsProps {
  className?: string;
}

interface Invention {
  id: number;
  title: string;
  studentName: string;
  age: number;
  category: string;
  description: string;
  image: string;
  alt: string;
  achievements: string[];
  status: string;
}

const StudentInventions = ({ className = '' }: StudentInventionsProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const inventions: Invention[] = [
    {
      id: 1,
      title: 'Smart Water Conservation System',
      studentName: 'Aarav Sharma',
      age: 14,
      category: 'Sustainability',
      description:
        'IoT-based system that monitors water usage in homes and automatically detects leaks, saving up to 30% water consumption.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cd8964b7-1764670595959.png',
      alt: 'Young Indian student demonstrating smart water monitoring device with digital display and sensors on wooden table',
      achievements: [
        'National Science Fair Winner 2025',
        'Patent application filed',
        'Featured in Times of India',
      ],

      status: 'Patent Pending',
    },
    {
      id: 2,
      title: 'AI-Powered Study Assistant',
      studentName: 'Diya Patel',
      age: 13,
      category: 'Technology',
      description:
        'Machine learning application that adapts to individual learning styles and provides personalized study recommendations.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c16e8df9-1765118713877.png',
      alt: 'Indian teenage girl with laptop showing AI interface with colorful graphs and learning analytics in bright study room',
      achievements: [
        'State Innovation Award 2025',
        'Used by 500+ students',
        'Startup incubation offer',
      ],

      status: 'Commercial Launch',
    },
    {
      id: 3,
      title: 'Solar-Powered Mobile Charger',
      studentName: 'Rohan Gupta',
      age: 12,
      category: 'Green Energy',
      description:
        'Portable solar charging device with battery storage, designed for rural areas without reliable electricity access.',
      image: 'https://images.unsplash.com/photo-1491543061776-55ca2c53c674',
      alt: 'Young boy holding compact solar panel device with USB ports and battery indicator in outdoor setting with sunlight',
      achievements: [
        'District Science Exhibition Gold',
        'NGO partnership for distribution',
        'Featured in local news',
      ],

      status: 'Prototype Testing',
    },
    {
      id: 4,
      title: 'Automated Plant Care Robot',
      studentName: 'Ananya Singh',
      age: 15,
      category: 'Robotics',
      description:
        'Arduino-based robot that monitors soil moisture, temperature, and automatically waters plants based on their specific needs.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1105619ca-1764765512284.png',
      alt: 'Indian teenage girl with small wheeled robot next to potted plants showing automated watering system with sensors',
      achievements: [
        'International Robotics Competition Finalist',
        'School agriculture program adoption',
        'Patent application in progress',
      ],

      status: 'Patent Pending',
    },
    {
      id: 5,
      title: 'Smart Traffic Signal System',
      studentName: 'Kabir Reddy',
      age: 14,
      category: 'Technology',
      description:
        'AI-powered traffic management system that adjusts signal timing based on real-time traffic density to reduce congestion.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b89964b5-1767724872753.png',
      alt: 'Young Indian student presenting traffic simulation model with LED lights and sensors on display board',
      achievements: [
        'Smart City Challenge Winner',
        'Municipal corporation interest',
        'Media coverage in 5+ outlets',
      ],

      status: 'Pilot Implementation',
    },
    {
      id: 6,
      title: 'Biodegradable Packaging Material',
      studentName: 'Ishita Joshi',
      age: 13,
      category: 'Sustainability',
      description:
        'Eco-friendly packaging material made from agricultural waste that decomposes within 45 days, replacing plastic packaging.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_163dcd1d1-1768066551987.png',
      alt: 'Indian teenage girl in lab coat holding biodegradable packaging samples with plants and compost in background',
      achievements: [
        'National Environment Award',
        'Local business partnerships',
        'Research paper published',
      ],

      status: 'Commercial Production',
    },
  ];

  const categories = ['All', 'Technology', 'Sustainability', 'Robotics', 'Green Energy'];

  const filteredInventions =
    isHydrated && selectedCategory !== 'All'
      ? inventions.filter((inv) => inv.category === selectedCategory)
      : inventions;

  if (!isHydrated) {
    return (
      <section className={`py-16 lg:py-24 bg-muted ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-poppins mb-4">
              Student Innovation Showcase
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-card rounded-xl overflow-hidden shadow-subtle h-96 animate-pulse"
              >
                <div className="h-48 bg-muted"></div>
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 lg:py-24 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Icon name="LightBulbIcon" size={20} className="text-accent" />
            <span className="text-sm font-semibold text-accent font-poppins">
              Real Inventions, Real Impact
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-poppins mb-4">
            Student Innovation Showcase
          </h2>
          <p className="text-lg text-muted-foreground font-source">
            Discover groundbreaking inventions created by our young innovators—from patent
            applications to commercial launches, these are real solutions to real problems.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 font-nunito ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-subtle'
                  : 'bg-card text-foreground border border-border hover:border-primary hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInventions.map((invention) => (
            <div
              key={invention.id}
              className="bg-card rounded-xl overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300 border border-border group"
            >
              <div className="relative h-56 overflow-hidden">
                <AppImage
                  src={invention.image}
                  alt={invention.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold font-nunito">
                  {invention.status}
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-foreground font-poppins">
                  {invention.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground font-poppins mb-2">
                  {invention.title}
                </h3>
                <div className="flex items-center space-x-2 mb-3">
                  <Icon name="UserIcon" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground font-source">
                    {invention.studentName}, Age {invention.age}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-source mb-4 line-clamp-3">
                  {invention.description}
                </p>

                <div className="space-y-2 mb-4">
                  {invention.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon
                        name="TrophyIcon"
                        size={16}
                        className="text-accent flex-shrink-0 mt-0.5"
                      />
                      <span className="text-xs text-foreground font-source">{achievement}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full px-4 py-2.5 bg-primary/10 text-primary rounded-lg font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-nunito">
                  View Full Project
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#enrollment"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-base hover:bg-primary/90 transition-all duration-300 shadow-subtle hover:shadow-elevated font-nunito"
          >
            Start Your Innovation Journey
            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StudentInventions;
