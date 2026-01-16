import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface FranchiseStory {
  id: number;
  name: string;
  location: string;
  image: string;
  alt: string;
  yearStarted: string;
  monthlyRevenue: string;
  studentCount: string;
  testimonial: string;
  achievements: string[];
}

const SuccessStoriesSection = () => {
  const franchiseStories: FranchiseStory[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Mumbai, Maharashtra',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_110ce9b39-1763295413245.png',
      alt: 'Indian businessman Rajesh Kumar in formal navy blue suit standing confidently in modern educational facility with students visible in background',
      yearStarted: '2022',
      monthlyRevenue: '₹21 Lakhs',
      studentCount: '180+',
      testimonial:
        'GYANHOUZ transformed my entrepreneurial journey. The multi-revenue model and comprehensive support made achieving profitability faster than expected. My franchise broke even in just 16 months!',
      achievements: [
        'Break-even in 16 months',
        '180+ enrolled students',
        '95% parent satisfaction',
        'Expanded to second location',
      ],
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Bangalore, Karnataka',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c56c88d9-1763296268131.png',
      alt: 'Professional Indian woman Priya Sharma in elegant maroon blazer smiling warmly in bright educational center with colorful learning materials',
      yearStarted: '2021',
      monthlyRevenue: '₹24 Lakhs',
      studentCount: '220+',
      testimonial:
        "As a former educator, I wanted to create real impact. GYANHOUZ's integrated approach resonated with my vision. Today, I'm not just running a business—I'm leading an education revolution in my city.",
      achievements: [
        'First franchise to hit ₹25L monthly',
        '220+ students across all programs',
        'Won Regional Excellence Award',
        'Mentoring 3 new franchisees',
      ],
    },
    {
      id: 3,
      name: 'Amit Patel',
      location: 'Ahmedabad, Gujarat',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c745c1d8-1763296357030.png',
      alt: 'Young Indian entrepreneur Amit Patel in casual smart attire with glasses standing in Science Lab surrounded by robotics equipment and student projects',
      yearStarted: '2023',
      monthlyRevenue: '₹15 Lakhs',
      studentCount: '130+',
      testimonial:
        "Starting a GYANHOUZ franchise was the best decision of my life. The training, marketing support, and proven systems made the launch smooth. I'm already planning my second location!",
      achievements: [
        'Fastest growing franchise',
        '130+ students in 10 months',
        'Strong community partnerships',
        'Featured in local media',
      ],
    },
  ];

  const performanceMetrics = [
    {
      id: 1,
      metric: 'Average Monthly Revenue',
      value: '₹18.5 Lakhs',
      icon: 'CurrencyRupeeIcon',
      color: 'success',
    },
    {
      id: 2,
      metric: 'Average Student Enrollment',
      value: '175+',
      icon: 'UserGroupIcon',
      color: 'primary',
    },
    {
      id: 3,
      metric: 'Parent Satisfaction Rate',
      value: '94%',
      icon: 'StarIcon',
      color: 'warning',
    },
    {
      id: 4,
      metric: 'Franchise Retention Rate',
      value: '98%',
      icon: 'ShieldCheckIcon',
      color: 'secondary',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-warning/10 px-4 py-2 rounded-full mb-4">
            <Icon name="TrophyIcon" size={20} className="text-warning" />
            <span className="text-sm font-semibold text-warning font-nunito">
              Franchise Success Stories
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-poppins">
            Real Franchisees,
            <br />
            <span className="text-warning">Real Success</span>
          </h2>
          <p className="text-lg text-muted-foreground font-source">
            Join a network of successful entrepreneurs who are transforming education while building
            profitable businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {performanceMetrics.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-xl p-6 text-center shadow-subtle hover:shadow-elevated transition-all duration-300 border border-border"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br from-${item.color} to-${item.color}/70 rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <Icon name={item.icon as any} size={32} className="text-white" />
              </div>
              <div className={`text-3xl font-bold text-${item.color} mb-2 font-poppins`}>
                {item.value}
              </div>
              <div className="text-sm text-muted-foreground font-source">{item.metric}</div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {franchiseStories.map((story, index) => (
            <div
              key={story.id}
              className={`bg-card rounded-2xl shadow-elevated overflow-hidden border border-border ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}
            >
              <div className="lg:w-2/5 relative">
                <AppImage
                  src={story.image}
                  alt={story.alt}
                  className="w-full h-64 lg:h-full object-cover"
                />

                <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-lg font-semibold text-sm font-nunito">
                  Since {story.yearStarted}
                </div>
              </div>

              <div className="lg:w-3/5 p-6 lg:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1 font-poppins">
                      {story.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Icon name="MapPinIcon" size={16} />
                      <span className="text-sm font-source">{story.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon
                        key={star}
                        name="StarIcon"
                        size={20}
                        className="text-warning"
                        variant="solid"
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-success/10 rounded-lg p-3">
                    <div className="text-sm text-muted-foreground mb-1 font-source">
                      Monthly Revenue
                    </div>
                    <div className="text-xl font-bold text-success font-poppins">
                      {story.monthlyRevenue}
                    </div>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3">
                    <div className="text-sm text-muted-foreground mb-1 font-source">
                      Students Enrolled
                    </div>
                    <div className="text-xl font-bold text-primary font-poppins">
                      {story.studentCount}
                    </div>
                  </div>
                </div>

                <blockquote className="relative mb-6">
                  <Icon
                    name="ChatBubbleLeftIcon"
                    size={32}
                    className="text-primary/20 absolute -top-2 -left-2"
                  />
                  <p className="text-muted-foreground italic pl-6 font-source leading-relaxed">
                    "{story.testimonial}"
                  </p>
                </blockquote>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground mb-3 font-poppins">
                    Key Achievements:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {story.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Icon
                          name="CheckCircleIcon"
                          size={16}
                          className="text-success flex-shrink-0"
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
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary to-brand-orange rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-poppins">
            Your Success Story Starts Here
          </h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6 font-source">
            Join 50+ successful franchise owners who are building profitable businesses while
            transforming education in their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-white/90 transition-all duration-300 shadow-elevated font-nunito">
              Schedule a Call
            </button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold text-lg hover:bg-white/30 transition-all duration-300 font-nunito">
              Download Franchise Kit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
