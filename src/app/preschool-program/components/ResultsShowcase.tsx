'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Result {
  id: number;
  title: string;
  description: string;
  metric: string;
  icon: string;
  image: string;
  alt: string;
  achievements: string[];
}

interface ResultsShowcaseProps {
  className?: string;
}

const ResultsShowcase = ({ className = '' }: ResultsShowcaseProps) => {
  const [activeResult, setActiveResult] = useState<number>(0);

  const results: Result[] = [
    {
      id: 1,
      title: 'Ambidextrous Writing Mastery',
      description:
        'Children develop equal proficiency in both hands, enhancing brain connectivity and cognitive flexibility from age 3.',
      metric: '95% Success Rate',
      icon: 'PencilIcon',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_19dcd8c00-1768066553920.png',
      alt: 'Young Indian child writing confidently with both hands simultaneously on paper at desk',
      achievements: [
        'Both-hand writing by age 4',
        'Enhanced brain development',
        'Improved focus and coordination',
        'Unique competitive advantage',
      ],
    },
    {
      id: 2,
      title: 'Trilingual Fluency',
      description:
        'Master English, Hindi, and Sanskrit through immersive daily practice, storytelling, and cultural integration.',
      metric: '3 Languages by Age 5',
      icon: 'LanguageIcon',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1feef0ecb-1767159228474.png',
      alt: 'Diverse group of preschool children engaged in multilingual storytelling session with colorful picture books',
      achievements: [
        'Conversational fluency in 3 languages',
        'Cultural awareness and appreciation',
        'Enhanced cognitive abilities',
        'Global communication readiness',
      ],
    },
    {
      id: 3,
      title: 'Stage Confidence & Public Speaking',
      description:
        'Daily performances, presentations, and creative expression build unshakeable confidence and communication skills.',
      metric: '100% Stage Ready',
      icon: 'MicrophoneIcon',
      image: 'https://images.unsplash.com/photo-1731067356475-7c66a928c9ef',
      alt: 'Confident Indian preschool child performing on stage with microphone in front of audience',
      achievements: [
        'Fearless public speaking',
        'Creative self-expression',
        'Leadership qualities',
        'Performance excellence',
      ],
    },
    {
      id: 4,
      title: 'Practical Problem Solving',
      description:
        'Hands-on experiments, real-world challenges, and innovation projects develop critical thinking from day one.',
      metric: 'Daily Innovation',
      icon: 'LightBulbIcon',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_12cbad64e-1767145416114.png',
      alt: 'Young children working together on colorful building blocks and STEM activity in modern classroom',
      achievements: [
        'Scientific thinking approach',
        'Creative problem solving',
        'Collaborative teamwork',
        'Innovation mindset',
      ],
    },
  ];

  return (
    <section className={`relative py-16 lg:py-24 overflow-hidden ${className}`}>
      <div className="absolute inset-0 z-0">
        <AppImage
          src="/assets/images/bgnew.jpg"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-4 bg-accent/10 px-6 md:px-8 py-3 md:py-4 rounded-full mb-8">
            <Icon name="TrophyIcon" size={40} className="text-accent scale-75 md:scale-100" />
            <span className="text-2xl md:text-5xl font-semibold text-accent font-poppins whitespace-nowrap">
              Miraculous Outcomes
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground font-poppins mb-4">
            Results That Speak for Themselves
          </h2>

          <p className="text-lg text-muted-foreground font-source">
            Quantified, measurable outcomes that traditional preschools can only dream of achieving.
            See what your child will accomplish.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {results.map((result, index) => (
              <button
                key={result.id}
                onClick={() => setActiveResult(index)}
                className={`p-4 rounded-xl transition-all duration-300 text-left ${
                  activeResult === index
                    ? 'bg-primary text-primary-foreground shadow-elevated'
                    : 'bg-white hover:bg-muted border border-border'
                }`}
              >
                <Icon
                  name={result.icon as any}
                  size={32}
                  className={`mb-3 ${activeResult === index ? 'text-white' : 'text-primary'}`}
                />

                <div
                  className={`text-sm font-semibold font-poppins ${activeResult === index ? 'text-white' : 'text-foreground'}`}
                >
                  {result.title}
                </div>
                <div
                  className={`text-xs mt-1 font-source ${activeResult === index ? 'text-white/90' : 'text-muted-foreground'}`}
                >
                  {result.metric}
                </div>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-elevated overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <AppImage
                  src={results[activeResult].image}
                  alt={results[activeResult].alt}
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full font-semibold text-sm font-poppins shadow-elevated">
                  {results[activeResult].metric}
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground font-poppins mb-4">
                  {results[activeResult].title}
                </h3>

                <p className="text-muted-foreground font-source mb-6 leading-relaxed">
                  {results[activeResult].description}
                </p>

                <div className="space-y-3">
                  <div className="font-semibold text-foreground font-poppins mb-3">
                    Key Achievements:
                  </div>
                  {results[activeResult].achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon
                        name="CheckCircleIcon"
                        size={20}
                        className="text-accent flex-shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-muted-foreground font-source">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;
