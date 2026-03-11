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
      title: 'Cambridge-aligned Early Years',
      description: 'Cambridge preschool syllabus aligned to IB / CBSE / ICSE + NEP 2020',
      icon: 'AcademicCapIcon',
      color: 'bg-primary',
      skills: [
        'Aligned with NEP 2020, NCF-FS 2022, NCF 2023',
        'Global frameworks: OECD 2030 + Harvard Project Zero (inspired)',
        'Strong academic foundation for lifelong success',
        'Thinking-oriented learning (not rote)',
        'Experiential pedagogy for faster concept clarity',
      ],
    },
    {
      title: 'Phonics Based Education',
      description: 'No extra phonics classes needed later — built into daily learning',
      icon: 'LanguageIcon',
      color: 'bg-secondary',
      skills: [
        'Phonics sounds + blending + complex word sounds',
        'Long/short vowels + exception rules',
        'Better reading, spellings and fewer mistakes',
        'Language basics that scale to higher classes',
        'Strong communication confidence',
      ],
    },
    {
      title: 'Games & Toys Based Curriculum',
      description: 'Research-based learning through play and activity design',
      icon: 'PuzzlePieceIcon',
      color: 'bg-accent',
      skills: [
        'Textbooks converted into engaging learning activities',
        'Based on Montessori, Piaget, Vygotsky + Multiple Intelligence',
        'Multi-dimensional brain development through play',
        'Problem-solving, curiosity and scientific thinking',
        'No pressure: joy-first learning culture',
      ],
    },
    {
      title: 'Gurukul Inspired Early Education',
      description: 'Application-led learning that nurtures intelligence and character',
      icon: 'SparklesIcon',
      color: 'bg-brand-orange',
      skills: [
        'Strong basics + strong phonics + practical approach',
        'Sanskrit as a tool for sanskars and language',
        'Character development: respect & responsibility',
        'Leadership-oriented education principles',
        'Confidence & stage presence from early years',
      ],
    },
    {
      title: 'Environment + Physical Development',
      description: 'Open, airy campus + early years sports + holistic growth',
      icon: 'HeartIcon',
      color: 'bg-primary',
      skills: [
        'Playgrounds, sunlight and airflow for healthy growth',
        'Early age sports: cricket, badminton, basketball, football',
        'Yoga, movement and motor skill development',
        'Learning from environment (Zen-inspired design)',
        'Love for school & learning; kids don’t want to go home',
      ],
    },
    {
      title: 'The L.E.A.P Learning Architecture™',
      description: 'A connected framework building thinkers, communicators and creators',
      icon: 'CubeTransparentIcon',
      color: 'bg-secondary',
      skills: [
        'Intelligence: NeuroIQ™, ThinkFast™, WholeMind™',
        'Expression: Phono Logic™, LeadVoice™, Stage Ready™',
        'Creation: FutureMind™, InnoThink™, MakerCore™',
        'Movement: Move360™ + ActiveCore™',
        'Outcomes: clarity, confidence, communication, creativity',
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
            <Icon name="ChatBubbleLeftRightIcon" size={24} className="text-primary" />
            <span className="text-sm font-medium text-foreground font-source">
              For class timings & fees — kindly WhatsApp on the below number (as shared in brochure)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
