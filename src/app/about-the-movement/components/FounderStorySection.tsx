import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface FounderStoryProps {
  className?: string;
}

const FounderStorySection = ({ className = '' }: FounderStoryProps) => {
  const founderQuotes = [
    {
      text: "I witnessed firsthand how India's education system prioritizes memorization over understanding, theory over practice. GYANHOUZ was born from a deep desire to change this narrative.",
      context: 'On the inspiration',
    },
    {
      text: "Every child possesses infinite potential. Our role isn't to fill their minds with facts, but to unlock their natural curiosity, creativity, and capability.",
      context: 'On educational philosophy',
    },
    {
      text: "We're not building a school or coaching center. We're building an ecosystem where children from age 2 to 16 can discover themselves, their passions, and their purpose.",
      context: 'On the vision',
    },
  ];

  const milestones = [
    {
      year: '2018',
      event: 'Vision Conceived',
      description: 'Identified the gap in integrated learning',
    },
    {
      year: '2020',
      event: 'GYANHOUZ Founded',
      description: 'Launched first integrated learning center',
    },
    {
      year: '2022',
      event: 'Ecosystem Expansion',
      description: 'Added Career Labs and Innovation Lab',
    },
    {
      year: '2024',
      event: 'Franchise Model',
      description: 'Scaled movement across multiple cities',
    },
    {
      year: '2026',
      event: 'National Impact',
      description: '5000+ lives transformed, 50+ locations',
    },
  ];

  return (
    <section
      className={`py-16 lg:py-24 bg-gradient-to-br from-muted/30 to-background ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 font-poppins">
              The <span className="text-primary">Founder's</span> Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-source leading-relaxed">
              A personal commitment to transforming children's futures through revolutionary
              educational approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="bg-card p-8 rounded-xl shadow-subtle border-l-4 border-primary">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">
                  Dr. Rajesh Kumar Sharma
                </h3>
                <p className="text-muted-foreground mb-4 font-source leading-relaxed">
                  Founder & Chief Visionary Officer
                </p>
                <p className="text-foreground font-source leading-relaxed">
                  With 20+ years in education innovation and child development, Dr. Sharma has
                  dedicated his life to reimagining how Indian children learn, grow, and prepare for
                  the future. His vision combines ancient Indian wisdom with cutting-edge
                  pedagogical approaches.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-6 rounded-xl shadow-subtle text-center">
                  <div className="text-3xl font-bold text-primary mb-2 font-poppins">20+</div>
                  <div className="text-sm text-muted-foreground font-source">Years Experience</div>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-subtle text-center">
                  <div className="text-3xl font-bold text-secondary mb-2 font-poppins">50+</div>
                  <div className="text-sm text-muted-foreground font-source">Awards Received</div>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-subtle text-center">
                  <div className="text-3xl font-bold text-accent mb-2 font-poppins">5000+</div>
                  <div className="text-sm text-muted-foreground font-source">Lives Impacted</div>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-subtle text-center">
                  <div className="text-3xl font-bold text-brand-orange mb-2 font-poppins">15+</div>
                  <div className="text-sm text-muted-foreground font-source">Research Papers</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-elevated">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_11c2d59fb-1763296549267.png"
                alt="Professional portrait of Indian education innovator Dr. Rajesh Kumar Sharma in formal attire standing confidently in modern educational facility"
                className="w-full h-full object-cover"
              />

              <div className="absolute top-6 right-6 bg-card/95 backdrop-blur-sm px-6 py-3 rounded-lg shadow-elevated">
                <div className="flex items-center space-x-2">
                  <Icon name="AcademicCapIcon" size={24} className="text-primary" />
                  <span className="text-sm font-semibold text-foreground font-nunito">
                    Ph.D. in Education Innovation
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center font-poppins">
              Founder's Philosophy
            </h3>
            <div className="space-y-6">
              {founderQuotes.map((quote, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-xl shadow-subtle border-l-4 border-primary hover:shadow-elevated transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <Icon
                      name="ChatBubbleLeftRightIcon"
                      size={32}
                      className="text-primary flex-shrink-0 mt-1"
                    />
                    <div>
                      <p className="text-lg text-foreground mb-3 font-source leading-relaxed italic">
                        "{quote.text}"
                      </p>
                      <p className="text-sm text-muted-foreground font-source">— {quote.context}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center font-poppins">
              Movement Timeline
            </h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden lg:block"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="bg-card p-6 rounded-xl shadow-subtle hover:shadow-elevated transition-all duration-300 border border-border">
                        <div className="text-3xl font-bold text-primary mb-2 font-poppins">
                          {milestone.year}
                        </div>
                        <h4 className="text-xl font-bold text-foreground mb-2 font-poppins">
                          {milestone.event}
                        </h4>
                        <p className="text-muted-foreground font-source">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-elevated flex-shrink-0 z-10">
                      <Icon name="CheckCircleIcon" size={32} className="text-white" />
                    </div>
                    <div className="flex-1 hidden lg:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStorySection;
