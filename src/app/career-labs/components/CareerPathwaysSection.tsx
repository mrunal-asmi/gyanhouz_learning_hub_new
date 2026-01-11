import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CareerPathway {
  category: string;
  careers: string[];
  image: string;
  alt: string;
  color: string;
}

interface CareerPathwaysSectionProps {
  className?: string;
}

const CareerPathwaysSection = ({ className = '' }: CareerPathwaysSectionProps) => {
  const pathways: CareerPathway[] = [
    {
      category: 'Technology & Innovation',
      careers: [
        'Software Developer',
        'AI Engineer',
        'Robotics Specialist',
        'Cybersecurity Expert',
        'Data Scientist',
      ],
      image: 'https://images.unsplash.com/photo-1714976326342-cf51796acad6',
      alt: 'Young Indian student with glasses working on laptop with code on screen in modern tech workspace',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Healthcare & Life Sciences',
      careers: [
        'Doctor',
        'Biotechnologist',
        'Pharmacist',
        'Medical Researcher',
        'Healthcare Administrator',
      ],
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cd949ee5-1766416775050.png',
      alt: 'Indian medical student in white coat examining medical charts and equipment in hospital setting',
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: 'Business & Entrepreneurship',
      careers: [
        'Entrepreneur',
        'Marketing Manager',
        'Financial Analyst',
        'Business Consultant',
        'Product Manager',
      ],
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_124f9248d-1763299078489.png',
      alt: 'Young Indian professional in formal attire presenting business strategy on whiteboard in modern office',
      color: 'from-orange-500 to-amber-500',
    },
    {
      category: 'Creative Arts & Design',
      careers: ['Graphic Designer', 'Animator', 'Fashion Designer', 'Architect', 'Content Creator'],
      image: 'https://images.unsplash.com/photo-1726143947135-8fb529227001',
      alt: 'Indian artist with colorful paint palette working on creative design project in bright studio',
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Engineering & Manufacturing',
      careers: [
        'Mechanical Engineer',
        'Civil Engineer',
        'Aerospace Engineer',
        'Industrial Designer',
        'Quality Engineer',
      ],
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1af001435-1767810673702.png',
      alt: 'Indian engineering student in safety helmet examining blueprints and machinery in manufacturing facility',
      color: 'from-gray-600 to-gray-800',
    },
    {
      category: 'Media & Communication',
      careers: [
        'Journalist',
        'Digital Marketer',
        'Public Relations Specialist',
        'Video Producer',
        'Social Media Manager',
      ],
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f6f0a584-1767874740148.png',
      alt: 'Young Indian journalist with microphone conducting interview with professional camera crew in background',
      color: 'from-red-500 to-rose-500',
    },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="MapIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary font-source">
              Career Exploration
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-poppins">
            Explore <span className="text-primary">50+ Career Pathways</span> Across Industries
          </h2>
          <p className="text-lg text-muted-foreground font-source">
            From technology to healthcare, business to creative arts - discover diverse career
            opportunities through hands-on exploration and expert mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pathways.map((pathway, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-subtle hover:shadow-elevated transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <AppImage
                  src={pathway.image}
                  alt={pathway.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t ${pathway.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}
                ></div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Icon name="BriefcaseIcon" size={20} className="text-foreground" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4 font-poppins group-hover:text-primary transition-colors duration-300">
                  {pathway.category}
                </h3>

                <div className="space-y-2">
                  {pathway.careers.map((career, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${pathway.color}`}
                      ></div>
                      <span className="text-sm text-muted-foreground font-source">{career}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-6 w-full px-6 py-3 bg-muted hover:bg-primary hover:text-white rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 font-nunito">
                  <span>Explore Careers</span>
                  <Icon name="ArrowRightIcon" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerPathwaysSection;
