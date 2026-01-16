'use client';

import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Experiment {
  title: string;
  subject: string;
  description: string;
  learningOutcome: string;
  image: string;
  alt: string;
  icon: string;
  color: string;
}

export default function ExperimentShowcase() {
  const experiments: Experiment[] = [
    {
      title: 'Electromagnetism in Action',
      subject: 'Physics',
      description: 'Build working electromagnets and explore magnetic field interactions',
      learningOutcome: 'Understand electromagnetic induction and its real-world applications',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e41cbc9f-1765197993096.png',
      alt: 'Student demonstrating electromagnetic experiment with copper coils and batteries',
      icon: 'BoltIcon',
      color: 'brand-blue',
    },
    {
      title: 'Chemical Reaction Kinetics',
      subject: 'Chemistry',
      description: 'Observe reaction rates and factors affecting chemical equilibrium',
      learningOutcome: 'Master concepts of catalysts, temperature effects, and concentration',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_136e1c01f-1764689217558.png',
      alt: 'Colorful chemical reaction creating foam in laboratory beaker with student observing',
      icon: 'BeakerIcon',
      color: 'brand-green',
    },
    {
      title: 'DNA Extraction from Fruits',
      subject: 'Biology',
      description: 'Extract visible DNA strands using household materials and lab techniques',
      learningOutcome: 'Understand genetic material structure and extraction processes',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e5b0a89b-1767324991956.png',
      alt: 'Students extracting DNA from strawberries in test tubes showing white strands',
      icon: 'EyeIcon',
      color: 'brand-teal',
    },
    {
      title: 'Solar Energy Conversion',
      subject: 'Environmental Science',
      description: 'Build solar panels and measure energy conversion efficiency',
      learningOutcome: 'Learn renewable energy principles and sustainability concepts',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_11b9c3108-1768036264613.png',
      alt: 'Children assembling small solar panels and testing energy output with meters',
      icon: 'SunIcon',
      color: 'brand-orange',
    },
    {
      title: 'Microscopic World Exploration',
      subject: 'Biology',
      description: 'Prepare slides and observe cells, bacteria, and microorganisms',
      learningOutcome: 'Develop microscopy skills and understand cellular structures',
      image: 'https://images.unsplash.com/flagged/photo-1586703252585-8da4639b096c',
      alt: 'Student looking through digital microscope at magnified cell structures on screen',
      icon: 'MagnifyingGlassIcon',
      color: 'brand-teal',
    },
    {
      title: 'Acid-Base Titration',
      subject: 'Chemistry',
      description: 'Perform precise titrations and calculate unknown concentrations',
      learningOutcome: 'Master analytical chemistry techniques and pH concepts',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_137cf56d1-1765262472151.png',
      alt: 'Student carefully performing titration experiment with burette and conical flask',
      icon: 'AdjustmentsHorizontalIcon',
      color: 'brand-green',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="SparklesIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Signature Experiments</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Real Experiments That
            <span className="block text-primary">Transform Understanding</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every experiment is designed to make abstract concepts tangible and memorable
          </p>
        </div>

        {/* Experiments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiments.map((experiment, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-smooth hover:-translate-y-1"
            >
              {/* Experiment Image */}
              <div className="relative h-48">
                <AppImage
                  src={experiment.image}
                  alt={experiment.alt}
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-2">
                    <Icon name={experiment.icon} size={16} className={`text-${experiment.color}`} />
                    <span className="text-xs font-semibold text-foreground">
                      {experiment.subject}
                    </span>
                  </div>
                </div>
              </div>

              {/* Experiment Details */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-foreground">{experiment.title}</h3>

                <p className="text-sm text-muted-foreground">{experiment.description}</p>

                <div className="pt-3 border-t border-border">
                  <div className="flex items-start space-x-2">
                    <Icon
                      name="AcademicCapIcon"
                      size={20}
                      className={`text-${experiment.color} mt-0.5 flex-shrink-0`}
                    />
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                        Learning Outcome
                      </div>
                      <p className="text-sm text-foreground font-medium">
                        {experiment.learningOutcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Comparison */}
        <div className="mt-16 bg-gradient-to-r from-brand-red to-brand-orange rounded-2xl p-8 lg:p-12 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8">
            Why School Labs Can't Match This Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h4 className="text-xl font-bold flex items-center space-x-2">
                <Icon name="XMarkIcon" size={24} />
                <span>Traditional School Labs</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Teacher demonstrations only (students watch)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Limited equipment shared among 40+ students</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Outdated apparatus from decades ago</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Rushed sessions to cover syllabus</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Focus on exam questions, not understanding</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold flex items-center space-x-2">
                <Icon name="CheckCircleIcon" size={24} className="text-yellow-300" />
                <span>GYANHOUZ Science Labs</span>
              </h4>
              <ul className="space-y-2 text-sm font-semibold">
                <li className="flex items-start space-x-2">
                  <Icon name="CheckIcon" size={16} className="text-yellow-300 mt-0.5" />
                  <span>Every student performs experiments hands-on</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="CheckIcon" size={16} className="text-yellow-300 mt-0.5" />
                  <span>2:1 student-equipment ratio (max 2 per apparatus)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="CheckIcon" size={16} className="text-yellow-300 mt-0.5" />
                  <span>Research-grade digital equipment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="CheckIcon" size={16} className="text-yellow-300 mt-0.5" />
                  <span>Dedicated 3-hour sessions for deep exploration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="CheckIcon" size={16} className="text-yellow-300 mt-0.5" />
                  <span>Concept mastery through repeated practice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
