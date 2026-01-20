'use client';

import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface ScienceHeroSectionProps {
  onEnrollClick: () => void;
}

export default function ScienceHeroSection({ onEnrollClick }: ScienceHeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AppImage
          src="/assets/images/bgnew.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/80 via-brand-teal/80 to-brand-blue/80 z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Icon name="BeakerIcon" size={20} className="text-yellow-300" />
              <span className="text-sm font-semibold">India's Most Advanced Science Labs</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              From Theory to
              <span className="block text-yellow-300">Tangible Discovery</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              Where science comes alive through real experiments, not textbook memorization
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">500+</div>
                <div className="text-sm text-white/80">Experiments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">100%</div>
                <div className="text-sm text-white/80">Hands-On</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">40%</div>
                <div className="text-sm text-white/80">Better Scores</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={onEnrollClick}
                className="px-8 py-4 bg-brand-orange text-white font-bold text-lg rounded-lg shadow-xl hover:bg-brand-red hover:scale-105 transition-smooth"
              >
                Book Lab Session
              </button>
              <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold text-lg rounded-lg border-2 border-white/40 hover:bg-white/30 transition-smooth">
                Virtual Lab Tour
              </button>
            </div>

            {/* Urgency Indicator */}
            <div className="flex items-center space-x-2 bg-brand-red/90 backdrop-blur-sm px-4 py-3 rounded-lg">
              <Icon name="FireIcon" size={20} className="text-white animate-pulse" />
              <span className="text-sm font-semibold">
                Board exam students: Limited slots for 8th-10th grade
              </span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_10bad85e5-1767130132132.png"
                alt="Students in safety goggles conducting chemistry experiments with colorful liquids in modern science laboratory"
                className="w-full h-auto"
              />

              {/* Floating Experiment Cards */}
              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 animate-float">
                <div className="flex items-center space-x-2">
                  <Icon name="BeakerIcon" size={24} className="text-brand-green" />
                  <div>
                    <div className="text-xs text-muted-foreground">Conducting</div>
                    <div className="text-sm font-bold">Chemistry Reaction</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 animate-float"
                style={{ animationDelay: '1s' }}
              >
                <div className="flex items-center space-x-2">
                  <Icon name="BoltIcon" size={24} className="text-brand-orange" />
                  <div>
                    <div className="text-xs text-muted-foreground">Exploring</div>
                    <div className="text-sm font-bold">Physics Laws</div>
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
