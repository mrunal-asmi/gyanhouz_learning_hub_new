'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface SuccessStoryCardProps {
  story: {
    id: number;
    studentName: string;
    age: number;
    program: string;
    achievement: string;
    beforeDescription: string;
    afterDescription: string;
    image: string;
    alt: string;
    parentName: string;
    parentTestimonial: string;
    metrics: {
      label: string;
      value: string;
    }[];
    videoUrl?: string;
  };
}

export default function SuccessStoryCard({ story }: SuccessStoryCardProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card rounded-xl shadow-elevated overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <AppImage src={story.image} alt={story.alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white font-poppins mb-1">{story.studentName}</h3>
          <p className="text-sm text-white/90 font-source">
            Age {story.age} • {story.program}
          </p>
        </div>
        {story.videoUrl && (
          <button
            onClick={() => setShowVideo(true)}
            className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            aria-label="Play video testimonial"
          >
            <Icon name="PlayIcon" size={24} className="text-white ml-1" />
          </button>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold font-nunito">
          {story.achievement}
        </div>

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground mb-1 font-poppins">
              Before GYANHOUZ:
            </h4>
            <p className="text-sm text-foreground font-source leading-relaxed">
              {story.beforeDescription}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-primary mb-1 font-poppins">
              After GYANHOUZ:
            </h4>
            <p className="text-sm text-foreground font-source leading-relaxed">
              {story.afterDescription}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border">
          {story.metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl font-bold text-primary font-poppins">{metric.value}</p>
              <p className="text-xs text-muted-foreground font-source">{metric.label}</p>
            </div>
          ))}
        </div>

        {isExpanded && (
          <div className="pt-4 border-t border-border space-y-3">
            <div className="flex items-start space-x-3">
              <Icon name="UserCircleIcon" size={40} className="text-primary flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground font-poppins">
                  {story.parentName}
                </p>
                <p className="text-sm text-muted-foreground font-source italic leading-relaxed mt-1">
                  "{story.parentTestimonial}"
                </p>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-300 font-nunito flex items-center justify-center space-x-1"
        >
          <span>{isExpanded ? 'Show Less' : 'Read Parent Testimonial'}</span>
          <Icon
            name="ChevronDownIcon"
            size={16}
            className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {showVideo && story.videoUrl && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-card rounded-xl overflow-hidden">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Close video"
            >
              <Icon name="XMarkIcon" size={24} className="text-white" />
            </button>
            <div className="aspect-video">
              <iframe
                src={story.videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`Video testimonial for ${story.studentName}`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
