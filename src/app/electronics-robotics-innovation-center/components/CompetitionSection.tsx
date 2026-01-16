'use client';

import Icon from '@/components/ui/AppIcon';
import Image from '@/components/ui/AppImage';

const competitions = [
  {
    name: 'National Robotics Championship',
    level: 'National',
    achievements: '12 Gold, 8 Silver medals',
    icon: 'TrophyIcon',
    color: 'brand-orange',
  },
  {
    name: 'First Lego League',
    level: 'International',
    achievements: 'State finalists 3 years running',
    icon: 'GlobeAltIcon',
    color: 'brand-blue',
  },
  {
    name: 'Innovation Hackathons',
    level: 'Regional',
    achievements: '25+ winning projects',
    icon: 'LightBulbIcon',
    color: 'brand-green',
  },
  {
    name: 'Arduino Day Challenges',
    level: 'City-wide',
    achievements: 'Best Project Award 2024',
    icon: 'CpuChipIcon',
    color: 'secondary',
  },
];

export default function CompetitionSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-brand-red/10 px-4 py-2 rounded-full mb-6">
                <Icon name="FireIcon" size={20} className="text-brand-red" />
                <span className="text-sm font-semibold text-brand-red">Competition Excellence</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Train Like <span className="text-brand-orange">Champions</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We don't just teach robotics. We prepare students to compete and win at national and
                international levels.
              </p>
            </div>

            {/* Competition Cards */}
            <div className="space-y-4">
              {competitions?.map((comp, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-smooth"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-${comp?.color}/10 flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon name={comp?.icon} size={24} className={`text-${comp?.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-foreground">{comp?.name}</h3>
                        <span
                          className={`px-3 py-1 bg-${comp?.color}/10 text-${comp?.color} text-xs font-semibold rounded-full`}
                        >
                          {comp?.level}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{comp?.achievements}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Training Features */}
            <div className="bg-gradient-to-r from-brand-orange/10 to-brand-red/10 rounded-xl p-6 border border-brand-orange/20">
              <h3 className="font-bold text-foreground mb-4">Competition Training Includes:</h3>
              <div className="grid gap-3">
                {[
                  'Weekly practice sessions with competition scenarios',
                  'Team collaboration and strategy development',
                  'Time-bound challenge solving',
                  'Presentation and documentation skills',
                  'Travel support for national competitions',
                ]?.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <Icon
                      name="CheckCircleIcon"
                      size={16}
                      className="text-brand-orange flex-shrink-0"
                    />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1ca146ccd-1764659973898.png"
                alt="Students celebrating robotics competition victory with trophies and medals at national championship"
                width={700}
                height={800}
                className="w-full h-auto"
              />

              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6 space-y-3">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-brand-orange">50+</div>
                      <div className="text-sm text-muted-foreground">Competition Wins</div>
                    </div>
                    <Icon name="TrophyIcon" size={40} className="text-brand-orange" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Achievement */}
            <div className="absolute -top-6 -right-6 bg-brand-orange text-white rounded-xl p-6 shadow-xl animate-float">
              <Icon name="StarIcon" size={32} className="mb-2" />
              <div className="text-2xl font-bold">Top 3</div>
              <div className="text-sm">Nationally Ranked</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
