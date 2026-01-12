'use client';

import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface CareerHeroSectionProps {
  onEnrollClick: () => void;
}

export default function CareerHeroSection({ onEnrollClick }: CareerHeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-brand-blue via-primary to-brand-teal overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Icon name="SparklesIcon" size={20} className="text-yellow-300" />
              <span className="text-sm font-semibold">India's First Career Discovery Lab</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Experience Careers,
              <span className="block text-yellow-300">Don't Guess Them</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              Where children discover their true potential through real-world career simulations and industry mentorship
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">50+</div>
                <div className="text-sm text-white/80">Career Paths</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">200+</div>
                <div className="text-sm text-white/80">Industry Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">95%</div>
                <div className="text-sm text-white/80">Career Clarity</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={onEnrollClick}
                className="px-8 py-4 bg-brand-orange text-white font-bold text-lg rounded-lg shadow-xl hover:bg-brand-red hover:scale-105 transition-smooth">

                Book Career Assessment
              </button>
              <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold text-lg rounded-lg border-2 border-white/40 hover:bg-white/30 transition-smooth">
                Watch Lab Tour
              </button>
            </div>

            {/* Urgency Indicator */}
            <div className="flex items-center space-x-2 bg-brand-red/90 backdrop-blur-sm px-4 py-3 rounded-lg">
              <Icon name="ClockIcon" size={20} className="text-white animate-pulse" />
              <span className="text-sm font-semibold">Only 23 seats left for January 2026 batch</span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1204eff2e-1767704879964.png"
                alt="Children in professional lab coats conducting science experiments and exploring career simulations in modern interactive learning environment"
                className="w-full h-auto" />

              
              {/* Floating Career Cards */}
              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 animate-float">
                <div className="flex items-center space-x-2">
                  <Icon name="BeakerIcon" size={24} className="text-brand-blue" />
                  <div>
                    <div className="text-xs text-muted-foreground">Exploring</div>
                    <div className="text-sm font-bold">Medical Science</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <Icon name="CodeBracketIcon" size={24} className="text-brand-orange" />
                  <div>
                    <div className="text-xs text-muted-foreground">Building</div>
                    <div className="text-sm font-bold">Tech Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}