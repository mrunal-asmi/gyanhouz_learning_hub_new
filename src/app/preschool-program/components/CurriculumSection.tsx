import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface CurriculumArea {
  title: string;
  description: string;
  icon: string;
  color: string;
  skills: string[];
}

interface CurriculumSectionProps {
  className?: string;
}

const CurriculumSection = ({ className = '' }: CurriculumSectionProps) => {
  const curriculumAreas: CurriculumArea[] = [
    {
      title: 'Gurukul (Language & Life Skills)',
      description: 'Trilingual mastery and essential life skills integration',
      icon: 'ChatBubbleLeftRightIcon',
      color: 'bg-primary',
      skills: [
        'Small kids speak in multiple languages',
        'English, Hindi, and Sanskrit fluency',
        'Integrating children with basic life skills',
        'Public speaking and presentation skills',
        'Storytelling and creative expression',
      ],
    },
    {
      title: 'IQ Development Module',
      description: 'Strong game-based module for proven IQ results',
      icon: 'LightBulbIcon',
      color: 'bg-secondary',
      skills: [
        'Proven results with IQ development',
        'Analytical skills development',
        'Ambidextrous writing proficiency',
        'Problem-solving and critical thinking',
        'Memory enhancement techniques',
      ],
    },
    {
      title: 'Physical & Practical Growth',
      description: 'Education becomes practical through games and toys',
      icon: 'HeartIcon',
      color: 'bg-accent',
      skills: [
        'Basics of maths taught through games and toys',
        'Learning conducted through games and toys',
        'Fine and gross motor skill development',
        'Yoga and mindfulness practices',
        'Robust physical growth activities',
      ],
    },
    {
      title: 'Creative Arts',
      description: 'Nurturing artistic expression and creativity',
      icon: 'PaintBrushIcon',
      color: 'bg-brand-orange',
      skills: [
        'Visual arts and crafts',
        'Music and rhythm activities',
        'Dance and movement expression',
        'Drama and role-playing',
        'Creative project work',
      ],
    },
    {
      title: 'Socio-Emotional Module',
      description: 'Building confidence and making children ready to face the world',
      icon: 'UserGroupIcon',
      color: 'bg-primary',
      skills: [
        'Stage-confidence and speaking in crowd',
        'Performance in front of small and large groups',
        'Responsible and self-aware kids',
        'Teamwork and Leadership skills',
        'Emotional intelligence development',
      ],
    },
    {
      title: 'Innovation & Discovery',
      description: 'Hands-on learning and scientific thinking',
      icon: 'BeakerIcon',
      color: 'bg-secondary',
      skills: [
        'Science experiments and exploration',
        'Building and construction activities',
        'Technology introduction',
        'Nature study and environmental awareness',
        'Innovation mindset development',
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
          <div className="inline-flex items-center space-x-4 bg-primary/10 px-6 md:px-8 py-3 md:py-4 rounded-full mb-8">
            <Icon name="AcademicCapIcon" size={40} className="text-primary scale-75 md:scale-100" />
            <span className="text-2xl md:text-5xl font-semibold text-primary font-poppins whitespace-nowrap">
              Comprehensive Curriculum
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground font-poppins mb-4">
            Holistic Development <span className="text-primary">Framework</span>
          </h2>

          <p className="text-lg text-muted-foreground font-source">
            Our integrated curriculum covers every aspect of child development, ensuring no skill is
            left behind.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {curriculumAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-subtle hover:shadow-elevated transition-all duration-300 group"
            >
              <div
                className={`w-14 h-14 ${area.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon name={area.icon as any} size={28} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-foreground font-poppins mb-2">{area.title}</h3>

              <p className="text-sm text-muted-foreground font-source mb-4">{area.description}</p>

              <div className="space-y-2">
                {area.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-start space-x-2">
                    <Icon
                      name="CheckCircleIcon"
                      size={16}
                      className="text-accent flex-shrink-0 mt-0.5"
                    />
                    <span className="text-xs text-muted-foreground font-source">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-4 rounded-xl shadow-subtle">
            <Icon name="DocumentTextIcon" size={24} className="text-primary" />
            <span className="text-sm font-medium text-foreground font-source">
              Download detailed curriculum guide for your child's age group
            </span>
            <button className="ml-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors duration-300 font-nunito">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
