'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface VideoTestimonial {
  id: number;
  parentName: string;
  childName: string;
  childAge: number;
  program: string;
  thumbnail: string;
  thumbnailAlt: string;
  videoUrl: string;
  duration: string;
  testimonialPreview: string;
  achievement: string;
  location: string;
}

interface VideoTestimonialCardProps {
  testimonial: VideoTestimonial;
}

const VideoTestimonialCard = ({ testimonial }: VideoTestimonialCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="bg-card rounded-xl shadow-brand overflow-hidden hover:shadow-lg transition-smooth group">
      {/* Video Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        {!isPlaying ? (
          <>
            <AppImage
              src={testimonial.thumbnail}
              alt={testimonial.thumbnailAlt}
              className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-smooth" />
            <button
              onClick={handlePlayClick}
              className="absolute inset-0 flex items-center justify-center"
              aria-label={`Play video testimonial from ${testimonial.parentName}`}
            >
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-smooth">
                <Icon name="PlayIcon" size={28} className="text-white ml-1" variant="solid" />
              </div>
            </button>
            <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 rounded text-white text-xs font-medium">
              {testimonial.duration}
            </div>
          </>
        ) : (
          <iframe
            src={testimonial.videoUrl}
            title={`Video testimonial from ${testimonial.parentName}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-1">{testimonial.childName}</h3>
            <p className="text-sm text-muted-foreground">
              {testimonial.childAge} years old • {testimonial.program}
            </p>
          </div>
          <div className="flex items-center space-x-1 text-brand-orange">
            <Icon name="StarIcon" size={16} variant="solid" />
            <Icon name="StarIcon" size={16} variant="solid" />
            <Icon name="StarIcon" size={16} variant="solid" />
            <Icon name="StarIcon" size={16} variant="solid" />
            <Icon name="StarIcon" size={16} variant="solid" />
          </div>
        </div>

        <p className="text-sm text-foreground mb-4 line-clamp-3">
          {testimonial.testimonialPreview}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-2">
            <Icon name="TrophyIcon" size={18} className="text-brand-orange" />
            <span className="text-xs font-medium text-foreground">{testimonial.achievement}</span>
          </div>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Icon name="MapPinIcon" size={14} />
            <span className="text-xs">{testimonial.location}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">{testimonial.parentName}</span> • Parent
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonialCard;
