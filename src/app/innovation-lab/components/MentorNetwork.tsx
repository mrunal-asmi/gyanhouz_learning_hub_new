import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface MentorNetworkProps {
  className?: string;
}

interface Mentor {
  id: number;
  name: string;
  title: string;
  expertise: string;
  image: string;
  alt: string;
  achievements: string[];
  specialization: string;
}

const MentorNetwork = ({ className = '' }: MentorNetworkProps) => {
  const mentors: Mentor[] = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      title: 'Chief Innovation Mentor',
      expertise: 'Robotics & AI',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_12c863552-1763294002377.png',
      alt: 'Professional Indian man in his 40s with glasses wearing blue shirt smiling confidently in modern office setting',
      achievements: ['15+ patents in robotics', 'Former IIT professor', 'Founded 3 tech startups'],

      specialization: 'Guiding students in AI-powered robotics projects',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      title: 'Electronics Innovation Lead',
      expertise: 'IoT & Circuit Design',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f953953d-1763294126115.png',
      alt: 'Professional Indian woman in her 30s with long dark hair wearing white blazer smiling warmly in bright office environment',
      achievements: [
        '20+ IoT product launches',
        'TEDx speaker on innovation',
        'National award winner',
      ],

      specialization: 'Mentoring smart device and IoT innovations',
    },
    {
      id: 3,
      name: 'Arjun Mehta',
      title: 'Sustainability Innovation Expert',
      expertise: 'Green Technology',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1517d7869-1763294003686.png',
      alt: 'Young Indian entrepreneur in his 30s with beard wearing casual gray shirt standing in modern workspace with plants',
      achievements: ['Founded eco-tech company', 'UN sustainability award', 'Published researcher'],

      specialization: 'Environmental innovation and sustainable solutions',
    },
    {
      id: 4,
      name: 'Dr. Meera Patel',
      title: 'Biomedical Innovation Mentor',
      expertise: 'Healthcare Technology',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_17f8f3366-1763293591953.png',
      alt: 'Indian woman doctor in her 40s wearing white coat with stethoscope smiling professionally in medical facility',
      achievements: [
        'Medical device inventor',
        'Healthcare startup founder',
        'International patents holder',
      ],

      specialization: 'Guiding health-tech and biomedical innovations',
    },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="UserGroupIcon" size={20} className="text-secondary" />
            <span className="text-sm font-semibold text-secondary font-poppins">
              India-Wide Expert Network
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-poppins mb-4">
            Learn from India's Top Innovators
          </h2>
          <p className="text-lg text-muted-foreground font-source">
            Our mentor network connects your child with successful inventors, entrepreneurs, and
            industry innovators who provide personalized guidance and real-world insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-card rounded-xl overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300 border border-border group"
            >
              <div className="relative h-64 overflow-hidden">
                <AppImage
                  src={mentor.image}
                  alt={mentor.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold font-poppins">{mentor.name}</h3>
                  <p className="text-sm font-source opacity-90">{mentor.title}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Icon name="SparklesIcon" size={18} className="text-primary" />
                  <span className="text-sm font-semibold text-primary font-poppins">
                    {mentor.expertise}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  {mentor.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon
                        name="CheckCircleIcon"
                        size={16}
                        className="text-accent flex-shrink-0 mt-0.5"
                      />
                      <span className="text-xs text-muted-foreground font-source">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-foreground font-source italic border-t border-border pt-4">
                  "{mentor.specialization}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="AcademicCapIcon" size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground font-poppins mb-2">
              100+ Expert Mentors
            </h3>
            <p className="text-muted-foreground font-source">
              Access to India's largest network of innovation mentors across diverse fields
            </p>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="VideoCameraIcon" size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground font-poppins mb-2">
              Monthly Masterclasses
            </h3>
            <p className="text-muted-foreground font-source">
              Regular sessions with industry leaders sharing cutting-edge innovation insights
            </p>
          </div>

          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="ChatBubbleLeftRightIcon" size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground font-poppins mb-2">1-on-1 Guidance</h3>
            <p className="text-muted-foreground font-source">
              Personalized mentorship sessions tailored to each student's innovation journey
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorNetwork;
