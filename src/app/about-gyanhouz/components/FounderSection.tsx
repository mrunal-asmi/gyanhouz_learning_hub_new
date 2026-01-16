'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface FounderSectionProps {
  className?: string;
}

const FounderSection = ({ className = '' }: FounderSectionProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const founderData = {
    name: 'Dr. Rajesh Sharma',
    title: 'Founder & Chief Education Architect',
    credentials: 'Ph.D. in Child Psychology, IIT Delhi | 15+ Years in Education Innovation',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1597f7110-1765511195445.png',
    alt: 'Middle-aged Indian man with glasses in formal blue suit smiling confidently in modern office',
    quote:
      'Education is not about filling minds with information, but igniting them with curiosity and empowering them with skills to shape their own future.',
    story:
      'After witnessing the limitations of traditional rote-learning systems, Dr. Sharma dedicated his career to creating an education model that prioritizes experiential learning. His research in child cognitive development led to the creation of GYANHOUZ - a revolutionary approach where children learn by doing, not just listening.',
    achievements: [
      "Pioneered India's first integrated career discovery lab for children",
      'Published 20+ research papers on experiential learning methodologies',
      'Trained 500+ educators in innovative teaching techniques',
      'Awarded "Education Innovator of the Year" by National Education Board',
    ],
  };

  return (
    <section
      className={`py-16 lg:py-24 bg-gradient-to-br from-muted/50 to-background ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Meet Our <span className="text-brand-orange">Visionary Founder</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {"The mind behind India's education revolution"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <AppImage
                src={founderData.image}
                alt={founderData.alt}
                className="w-full h-[500px] object-cover"
              />

              {!isVideoPlaying && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-smooth shadow-2xl"
                    aria-label="Play founder introduction video"
                  >
                    <Icon name="PlayIcon" size={32} className="text-brand-orange ml-1" />
                  </button>
                </div>
              )}
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white p-6 rounded-2xl shadow-brand max-w-xs">
              <p className="text-sm font-semibold">Watch Video Introduction</p>
              <p className="text-xs opacity-90 mt-1">Hear the story behind GYANHOUZ</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">{founderData.name}</h3>
              <p className="text-brand-orange font-semibold mb-2">{founderData.title}</p>
              <p className="text-sm text-muted-foreground">{founderData.credentials}</p>
            </div>

            <div className="bg-brand-orange/10 border-l-4 border-brand-orange p-6 rounded-r-xl">
              <Icon name="ChatBubbleLeftRightIcon" size={24} className="text-brand-orange mb-3" />
              <p className="text-foreground italic leading-relaxed">{`"${founderData.quote}"`}</p>
            </div>

            <p className="text-muted-foreground leading-relaxed">{founderData.story}</p>

            <div className="space-y-3">
              <h4 className="text-xl font-bold text-foreground">Key Achievements</h4>
              {founderData.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Icon
                    name="CheckCircleIcon"
                    size={20}
                    className="text-brand-orange mt-1 flex-shrink-0"
                  />
                  <p className="text-muted-foreground">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
