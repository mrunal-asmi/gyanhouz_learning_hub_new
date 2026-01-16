import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface BrandStoryProps {
  className?: string;
}

const BrandStorySection = ({ className = '' }: BrandStoryProps) => {
  const brandPillars = [
    {
      icon: 'SparklesIcon',
      title: 'Confident Pioneer',
      description:
        "Leading India's educational transformation with innovative, integrated learning approaches that challenge traditional boundaries.",
    },
    {
      icon: 'HeartIcon',
      title: 'Nurturing Innovator',
      description:
        'Creating safe, supportive environments where children explore, experiment, and develop their unique talents and passions.',
    },
    {
      icon: 'TrophyIcon',
      title: 'Results-Driven Visionary',
      description:
        'Delivering measurable outcomes through practical learning experiences that prepare children for real-world success.',
    },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 font-poppins">
              Our Brand <span className="text-primary">Identity</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-source leading-relaxed">
              Being the first preschooling, schooling, classes and academic partner... That teaches
              the best !! Opens the future possibilities for kids!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-elevated">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_165847a84-1767465550059.png"
                alt="Diverse group of Indian children aged 2-16 collaborating on innovative science project in modern bright classroom with colorful learning materials"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white text-lg font-semibold font-poppins">
                  {"\"Not just education, it's a movement\""}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl shadow-subtle border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3 font-poppins">
                  Emotional Territory
                </h3>
                <p className="text-muted-foreground font-source leading-relaxed">
                  We tap into parental pride, child empowerment, future readiness, and community
                  belonging - creating deep emotional connections that drive lasting engagement.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-subtle border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3 font-poppins">
                  Unique Position
                </h3>
                <p className="text-muted-foreground font-source leading-relaxed">
                  The ONLY brand offering seamless 2-16 age journey with preschool + skills +
                  innovation + career discovery under one roof - no fragmentation, just integrated
                  excellence.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-subtle border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3 font-poppins">
                  Cultural Resonance
                </h3>
                <p className="text-muted-foreground font-source leading-relaxed">
                  {"Modern Indian parents' aspirations meeting ancient Indian wisdom through Sanskrit integration, holistic development, and values-based learning."}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandPillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-card to-muted p-8 rounded-xl shadow-subtle hover:shadow-elevated transition-all duration-300 border border-border"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name={pillar.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 font-poppins">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground font-source leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
