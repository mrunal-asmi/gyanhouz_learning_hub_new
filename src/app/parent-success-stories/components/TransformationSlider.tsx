'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Transformation {
  id: number;
  childName: string;
  age: number;
  program: string;
  beforeImage: string;
  beforeImageAlt: string;
  afterImage: string;
  afterImageAlt: string;
  beforeDescription: string;
  afterDescription: string;
  timeframe: string;
  keyImprovements: string[];
}

interface TransformationSliderProps {
  transformation: Transformation;
}

const TransformationSlider = ({ transformation }: TransformationSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  return (
    <div className="bg-card rounded-xl shadow-brand overflow-hidden">
      {/* Slider Container */}
      <div
        className="relative aspect-video overflow-hidden cursor-ew-resize select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* Before Image */}
        <div className="absolute inset-0">
          <AppImage
            src={transformation.beforeImage}
            alt={transformation.beforeImageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-error/90 rounded-lg text-white text-sm font-semibold">
            Before
          </div>
        </div>

        {/* After Image */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <AppImage
            src={transformation.afterImage}
            alt={transformation.afterImageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-success/90 rounded-lg text-white text-sm font-semibold">
            After
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <Icon name="ChevronLeftIcon" size={16} className="text-foreground -ml-1" />
            <Icon name="ChevronRightIcon" size={16} className="text-foreground -mr-1" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">{transformation.childName}</h3>
            <p className="text-sm text-muted-foreground">
              {transformation.age} years old • {transformation.program}
            </p>
          </div>
          <div className="px-3 py-1 bg-brand-orange/10 rounded-lg">
            <p className="text-xs font-semibold text-brand-orange">{transformation.timeframe}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-error/5 rounded-lg border border-error/20">
            <p className="text-xs font-semibold text-error mb-2">Before Journey</p>
            <p className="text-sm text-foreground">{transformation.beforeDescription}</p>
          </div>
          <div className="p-4 bg-success/5 rounded-lg border border-success/20">
            <p className="text-xs font-semibold text-success mb-2">After Transformation</p>
            <p className="text-sm text-foreground">{transformation.afterDescription}</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground mb-2">Key Improvements:</p>
          <div className="flex flex-wrap gap-2">
            {transformation.keyImprovements.map((improvement, index) => (
              <div
                key={index}
                className="flex items-center space-x-1 px-3 py-1.5 bg-muted rounded-lg"
              >
                <Icon name="CheckCircleIcon" size={16} className="text-success" variant="solid" />
                <span className="text-xs font-medium text-foreground">{improvement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformationSlider;
