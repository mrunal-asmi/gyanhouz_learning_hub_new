import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TeamSectionProps {
  className?: string;
}

interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  image: string;
  alt: string;
  expertise: string[];
}

const TeamSection = ({ className = '' }: TeamSectionProps) => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Dr. Priya Mehta',
      role: 'Chief Academic Officer',
      credentials: 'Ph.D. in Early Childhood Education, Cambridge',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_14172f3b5-1763301352044.png',
      alt: 'Professional Indian woman with long black hair in maroon blazer smiling in office',
      expertise: ['Curriculum Design', 'Child Psychology', 'Teacher Training'],
    },
    {
      name: 'Amit Patel',
      role: 'Head of Science Labs',
      credentials: 'M.Tech Robotics, IIT Bombay',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b5ea51b0-1763293852695.png',
      alt: 'Young Indian man with short hair in casual blue shirt smiling outdoors',
      expertise: ['STEM Education', 'Robotics', 'Electronics'],
    },
    {
      name: 'Sneha Reddy',
      role: 'Director of Career Labs',
      credentials: 'MBA, Industry Experience 12+ Years',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ac8807bd-1763300925594.png',
      alt: 'Indian woman with glasses in professional attire smiling in modern office',
      expertise: ['Career Guidance', 'Industry Partnerships', 'Skill Development'],
    },
    {
      name: 'Vikram Singh',
      role: 'Head of Franchise Operations',
      credentials: 'MBA Operations, XLRI',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ef263e4b-1763295388574.png',
      alt: 'Indian man in formal grey suit with tie smiling confidently',
      expertise: ['Business Development', 'Quality Assurance', 'Partner Success'],
    },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Meet Our <span className="text-brand-orange">Leadership Team</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experts dedicated to revolutionizing education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-brand transition-smooth group"
            >
              <div className="relative h-64 overflow-hidden">
                <AppImage
                  src={member.image}
                  alt={member.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm opacity-90">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-brand-orange font-semibold mb-4">{member.credentials}</p>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Expertise
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-muted text-foreground text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-brand-orange to-brand-red text-white rounded-2xl p-8 text-center">
          <Icon name="UserGroupIcon" size={48} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Join Our Team</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            {
              "We're always looking for passionate educators and innovators to join our mission of transforming education in India"
            }
          </p>
          <button className="px-8 py-3 bg-white text-brand-orange font-semibold rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-smooth">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
