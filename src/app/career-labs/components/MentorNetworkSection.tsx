import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Mentor {
  name: string;
  expertise: string;
  company: string;
  experience: string;
  image: string;
  alt: string;
  achievements: string[];
}

interface MentorNetworkSectionProps {
  className?: string;
}

const MentorNetworkSection = ({ className = '' }: MentorNetworkSectionProps) => {
  const mentors: Mentor[] = [
    {
      name: 'Dr. Priya Sharma',
      expertise: 'AI & Machine Learning',
      company: 'Tech Innovations Ltd',
      experience: '15+ years',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_124bbe54a-1763295891998.png',
      alt: 'Professional Indian woman in business attire with glasses smiling confidently in modern tech office',
      achievements: ['IIT Delhi Alumni', 'Published 50+ Research Papers', 'AI Product Leader'],
    },
    {
      name: 'Rajesh Kumar',
      expertise: 'Robotics & Automation',
      company: 'Future Robotics Inc',
      experience: '12+ years',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1805d4b9e-1763296904805.png',
      alt: 'Indian male engineer in blue shirt working with robotic equipment in advanced technology lab',
      achievements: ['Robotics Innovator', 'TEDx Speaker', 'Startup Founder'],
    },
    {
      name: 'Ananya Desai',
      expertise: 'Healthcare Innovation',
      company: 'MedTech Solutions',
      experience: '10+ years',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cd20c43b-1766579806805.png',
      alt: 'Indian female doctor in white coat with stethoscope standing in modern hospital corridor',
      achievements: ['Medical Researcher', 'Healthcare Entrepreneur', 'Award Winner'],
    },
    {
      name: 'Vikram Patel',
      expertise: 'Business Strategy',
      company: 'Global Consulting Group',
      experience: '18+ years',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_15d131d9d-1763295813046.png',
      alt: 'Professional Indian businessman in navy suit presenting business strategy in corporate boardroom',
      achievements: ['MBA Harvard', 'Fortune 500 Advisor', 'Business Author'],
    },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="UserGroupIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary font-source">
              Expert Mentorship
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-poppins">
            Learn from <span className="text-primary">200+ Industry Experts</span> Across India
          </h2>
          <p className="text-lg text-muted-foreground font-source">
            Our India-wide mentor network connects your child with accomplished professionals who
            provide personalized guidance, real-world insights, and career inspiration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-subtle hover:shadow-elevated transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <AppImage
                  src={mentor.image}
                  alt={mentor.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white mb-1 font-poppins">{mentor.name}</h3>
                  <p className="text-sm text-white/90 font-source">{mentor.expertise}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Icon name="BuildingOfficeIcon" size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground font-source">
                    {mentor.company}
                  </span>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <Icon name="ClockIcon" size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground font-source">
                    {mentor.experience}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  {mentor.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <Icon
                        name="CheckBadgeIcon"
                        size={16}
                        className="text-accent flex-shrink-0 mt-0.5"
                      />
                      <span className="text-xs text-foreground font-source">{achievement}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full px-4 py-2 bg-muted hover:bg-primary hover:text-white rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 font-nunito">
                  <Icon name="VideoCameraIcon" size={16} />
                  <span>Schedule Meet</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary to-brand-orange rounded-2xl p-8 lg:p-12 text-center shadow-elevated">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-poppins">
            Connect with Your Perfect Mentor Today
          </h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto font-source">
            Our personalized matching system connects your child with mentors who align with their
            interests, goals, and learning style.
          </p>
          <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold text-base hover:bg-white/90 transition-all duration-300 shadow-subtle inline-flex items-center space-x-2 font-nunito">
            <Icon name="UserPlusIcon" size={20} />
            <span>Find Your Mentor</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MentorNetworkSection;
