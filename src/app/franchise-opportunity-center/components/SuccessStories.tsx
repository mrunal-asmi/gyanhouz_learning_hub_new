import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Partner {
  name: string;
  location: string;
  image: string;
  alt: string;
  yearJoined: number;
  students: number;
  revenue: string;
  testimonial: string;
}

const partners: Partner[] = [
  {
    name: 'Rajesh Kumar',
    location: 'Bangalore, Karnataka',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d209a74a-1765093178471.png',
    alt: 'Indian businessman Rajesh Kumar in formal blue suit smiling confidently in modern office',
    yearJoined: 2021,
    students: 145,
    revenue: '₹58 Lakhs',
    testimonial:
      'GYANHOUZ transformed my career from corporate professional to education entrepreneur. The support system is exceptional, and seeing children develop confidence through our programs is incredibly rewarding.',
  },
  {
    name: 'Priya Sharma',
    location: 'Pune, Maharashtra',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_115d61d2c-1765988781101.png',
    alt: 'Professional Indian woman Priya Sharma in elegant maroon blazer with warm smile in bright office setting',
    yearJoined: 2022,
    students: 128,
    revenue: '₹52 Lakhs',
    testimonial:
      'As a former teacher, I always dreamed of running my own learning center. GYANHOUZ made it possible with their proven model and continuous training. My center achieved profitability within 16 months.',
  },
  {
    name: 'Amit Patel',
    location: 'Ahmedabad, Gujarat',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_150d1b412-1763295725152.png',
    alt: 'Indian entrepreneur Amit Patel in casual business attire with friendly expression in contemporary workspace',
    yearJoined: 2020,
    students: 162,
    revenue: '₹64 Lakhs',
    testimonial:
      'The franchise model is brilliant—multiple revenue streams, strong brand recognition, and operational excellence. I expanded to a second location within 3 years. Best business decision I ever made.',
  },
];

export default function SuccessStories() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-green/10 px-4 py-2 rounded-full mb-4">
            <Icon name="TrophyIcon" size={20} className="text-brand-green" />
            <span className="text-sm font-semibold text-brand-green">Partner Success Stories</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Real Partners, Real Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet franchise partners who transformed their careers and communities through GYANHOUZ.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-brand transition-smooth"
            >
              <div className="relative h-64 overflow-hidden">
                <AppImage
                  src={partner.image}
                  alt={partner.alt}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{partner.name}</h3>
                  <div className="flex items-center space-x-1 text-sm">
                    <Icon name="MapPinIcon" size={16} />
                    <span>{partner.location}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-orange">{partner.yearJoined}</div>
                    <div className="text-xs text-muted-foreground">Year Joined</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-green">{partner.students}</div>
                    <div className="text-xs text-muted-foreground">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-brand-blue">{partner.revenue}</div>
                    <div className="text-xs text-muted-foreground">Annual Revenue</div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{partner.testimonial}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-brand-orange to-brand-red rounded-xl p-8 lg:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Join 150+ Successful Partners</h3>
            <p className="text-lg text-white/90 mb-8">
              Average partner satisfaction score: 4.8/5.0 | 92% would recommend GYANHOUZ to others
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center space-x-3">
                <Icon name="UserGroupIcon" size={32} />
                <div className="text-left">
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-sm text-white/80">Active Partners</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="BuildingOfficeIcon" size={32} />
                <div className="text-left">
                  <div className="text-3xl font-bold">45</div>
                  <div className="text-sm text-white/80">Cities Covered</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="AcademicCapIcon" size={32} />
                <div className="text-left">
                  <div className="text-3xl font-bold">12,000+</div>
                  <div className="text-sm text-white/80">Students Enrolled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
