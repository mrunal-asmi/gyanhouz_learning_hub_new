'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Result {
  id: number;
  title: string;
  description: string;
  metric: string;
  icon: string;
  image: string;
  alt: string;
}

const ResultsShowcase = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const miraculousResults: Result[] = [
    {
      id: 1,
      title: 'Ambidextrous Writing',
      description:
        'Children develop the rare ability to write fluently with both hands, enhancing brain development and cognitive flexibility',
      metric: '95% Success Rate',
      icon: 'PencilIcon',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_13bc8dd47-1768066550979.png',
      alt: 'Indian child writing with both hands simultaneously on paper showing ambidextrous skill development',
    },
    {
      id: 2,
      title: 'Multilingual Proficiency',
      description:
        'Students achieve fluency in 3+ languages including English, Hindi, and Sanskrit through immersive learning',
      metric: '3+ Languages',
      icon: 'LanguageIcon',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1feef0ecb-1767159228474.png',
      alt: 'Smiling Indian girl with braids reading multilingual books in colorful classroom library',
    },
    {
      id: 3,
      title: 'Stage Confidence',
      description:
        'Every child develops exceptional public speaking and presentation skills through regular performance opportunities',
      metric: '100% Participation',
      icon: 'MicrophoneIcon',
      image: 'https://images.unsplash.com/photo-1723488829162-93406d95020f',
      alt: 'Confident Indian boy in blue shirt presenting on stage with microphone to audience',
    },
    {
      id: 4,
      title: 'Scientific Thinking',
      description:
        'Practical experiments and hands-on learning develop critical thinking and problem-solving abilities from early age',
      metric: '200+ Experiments',
      icon: 'BeakerIcon',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1710f6f8e-1767813463175.png',
      alt: 'Indian children in lab coats conducting colorful chemistry experiment with test tubes',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-accent/5 to-success/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-6 py-3 rounded-full mb-6">
            <Icon name="TrophyIcon" size={20} className="text-accent" />
            <span className="text-xl font-semibold text-accent font-poppins">
              Miraculous Outcomes
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-poppins">Results That Speak for Themselves</h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-source">
            Our revolutionary approach produces outcomes that seem impossible in conventional
            education systems. See what your child can achieve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {miraculousResults.map((result) => (
            <div
              key={result.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <AppImage
                  src={result.image}
                  alt={result.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Icon name={result.icon as any} size={24} className="text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-lg font-bold text-sm mb-2 font-poppins">
                    {result.metric}
                  </span>
                </div>
              </div>

              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3 font-poppins">
                  {result.title}
                </h3>
                <p className="text-muted-foreground font-source leading-relaxed">
                  {result.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 lg:p-12 shadow-subtle">
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-primary font-poppins">
                10,000+
              </div>
              <p className="text-muted-foreground font-source">Children Transformed</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-secondary font-poppins">98%</div>
              <p className="text-muted-foreground font-source">Parent Satisfaction</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-accent font-poppins">50+</div>
              <p className="text-muted-foreground font-source">Awards & Recognition</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;
