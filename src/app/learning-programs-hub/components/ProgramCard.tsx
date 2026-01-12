'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ProgramFeature {
  icon: string;
  text: string;
}

interface ProgramCardProps {
  title: string;
  ageRange: string;
  description: string;
  image: string;
  alt: string;
  features: ProgramFeature[];
  price: string;
  seatsLeft: number;
  onEnroll: () => void;
}

export default function ProgramCard({
  title,
  ageRange,
  description,
  image,
  alt,
  features,
  price,
  seatsLeft,
  onEnroll,
}: ProgramCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-brand hover:shadow-lg transition-smooth group">
      <div className="relative h-56 overflow-hidden">
        <AppImage
          src={image}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute top-4 right-4 bg-brand-orange text-brand-orange-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          {ageRange}
        </div>
        {seatsLeft <= 10 && (
          <div className="absolute bottom-4 left-4 bg-error text-error-foreground px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center space-x-1">
            <Icon name="ExclamationTriangleIcon" size={14} variant="solid" />
            <span>Only {seatsLeft} seats left!</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="space-y-3 mb-4">
          {features.slice(0, isExpanded ? features.length : 3).map((feature, index) => (
            <div key={index} className="flex items-start space-x-2">
              <Icon
                name={feature.icon as any}
                size={18}
                className="text-brand-green mt-0.5 flex-shrink-0"
                variant="solid"
              />
              <span className="text-sm text-foreground">{feature.text}</span>
            </div>
          ))}
        </div>

        {features.length > 3 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary text-sm font-medium hover:underline mb-4 flex items-center space-x-1"
          >
            <span>{isExpanded ? 'Show Less' : 'Show More Features'}</span>
            <Icon
              name="ChevronDownIcon"
              size={16}
              className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            />
          </button>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="text-2xl font-bold text-foreground">{price}</p>
          </div>
          <button
            onClick={onEnroll}
            className="px-6 py-2.5 bg-brand-orange text-brand-orange-foreground font-semibold rounded-lg shadow-brand hover:bg-brand-red hover:shadow-lg hover:-translate-y-0.5 transition-smooth"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}