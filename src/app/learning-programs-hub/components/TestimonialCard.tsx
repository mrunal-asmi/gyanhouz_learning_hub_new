'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TestimonialCardProps {
  parentName: string;
  childName: string;
  childAge: number;
  program: string;
  testimonial: string;
  image: string;
  alt: string;
  rating: number;
}

export default function TestimonialCard({
  parentName,
  childName,
  childAge,
  program,
  testimonial,
  image,
  alt,
  rating,
}: TestimonialCardProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="bg-card border border-border rounded-xl p-6 shadow-brand">
        <div className="flex items-start space-x-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-muted" />
          <div className="flex-1">
            <div className="h-5 bg-muted rounded w-32 mb-2" />
            <div className="h-4 bg-muted rounded w-24" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded w-full" />
          <div className="h-4 bg-muted rounded w-full" />
          <div className="h-4 bg-muted rounded w-3/4" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-brand hover:shadow-lg transition-smooth">
      <div className="flex items-start space-x-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <AppImage src={image} alt={alt} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-foreground">{parentName}</h4>
          <p className="text-sm text-muted-foreground">
            Parent of {childName}, {childAge} years
          </p>
          <p className="text-xs text-primary font-medium mt-1">{program}</p>
        </div>
      </div>

      <div className="flex items-center space-x-1 mb-3">
        {[...Array(5)].map((_, index) => (
          <Icon
            key={index}
            name="StarIcon"
            size={16}
            variant={index < rating ? 'solid' : 'outline'}
            className={index < rating ? 'text-accent' : 'text-muted'}
          />
        ))}
      </div>

      <p className="text-sm text-foreground leading-relaxed">{testimonial}</p>
    </div>
  );
}
