import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface FacilitiesShowcaseProps {
  className?: string;
}

interface Facility {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
  icon: string;
}

const FacilitiesShowcase = ({ className = '' }: FacilitiesShowcaseProps) => {
  const facilities: Facility[] = [
    {
      id: 1,
      title: '3D Printing & Prototyping Station',
      description:
        'State-of-the-art 3D printers and rapid prototyping tools that transform digital designs into physical inventions within hours.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_11a5d4cca-1767208481891.png',
      alt: 'Modern 3D printer creating colorful prototype with students observing the printing process in bright innovation lab',
      features: [
        'Multiple 3D printer models',
        'CAD software training',
        'Material variety (PLA, ABS, flexible)',
        'Professional finishing tools',
      ],

      icon: 'CubeIcon',
    },
    {
      id: 2,
      title: 'Electronics Prototyping Lab',
      description:
        'Comprehensive electronics workstations with Arduino, Raspberry Pi, sensors, and components for building smart devices.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_108b8a5cd-1766082087319.png',
      alt: 'Electronics workbench with circuit boards, Arduino kits, colorful wires, and soldering equipment in organized workspace',
      features: [
        'Arduino & Raspberry Pi kits',
        'Sensor library (100+ types)',
        'Soldering stations',
        'Circuit testing equipment',
      ],

      icon: 'BoltIcon',
    },
    {
      id: 3,
      title: 'Collaborative Innovation Spaces',
      description:
        'Flexible workspace designed for team collaboration, brainstorming sessions, and project development with modern furniture.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f1b065c6-1764633634351.png',
      alt: 'Bright collaborative workspace with modular furniture, whiteboards, colorful bean bags, and students working together on projects',
      features: [
        'Modular furniture setup',
        'Digital whiteboards',
        'Project display areas',
        'Comfortable seating zones',
      ],

      icon: 'UserGroupIcon',
    },
    {
      id: 4,
      title: 'Digital Fabrication Tools',
      description:
        'Laser cutters, CNC machines, and precision tools for creating professional-grade prototypes and finished products.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_13b976dd7-1766754864872.png',
      alt: 'Laser cutting machine creating precise patterns on wood material with safety equipment and ventilation system visible',
      features: [
        'Laser cutting machine',
        'CNC router',
        'Precision measurement tools',
        'Safety equipment',
      ],

      icon: 'WrenchScrewdriverIcon',
    },
    {
      id: 5,
      title: 'IoT & Smart Device Lab',
      description:
        'Dedicated space for Internet of Things projects with cloud connectivity, sensors, and smart home automation components.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f6c2206b-1764642435778.png',
      alt: 'IoT lab setup with smart devices, sensors, wireless modules, and computer screens showing real-time data monitoring',
      features: [
        'Cloud platform access',
        'Wireless communication modules',
        'Smart home components',
        'Data visualization tools',
      ],

      icon: 'SignalIcon',
    },
    {
      id: 6,
      title: 'Testing & Quality Lab',
      description:
        'Professional testing equipment to validate inventions, measure performance, and ensure quality standards before launch.',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_104c459b7-1767780938372.png',
      alt: 'Quality testing lab with measurement instruments, oscilloscopes, multimeters, and students conducting product tests',
      features: [
        'Measurement instruments',
        'Performance testing tools',
        'Quality assurance protocols',
        'Documentation systems',
      ],

      icon: 'BeakerIcon',
    },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="BuildingOffice2Icon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary font-poppins">
              World-Class Infrastructure
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-poppins mb-4">
            State-of-the-Art Innovation Facilities
          </h2>
          <p className="text-lg text-muted-foreground font-source">
            Our innovation lab features cutting-edge equipment and tools that rival professional
            innovation centers, giving students access to technology that transforms ideas into
            reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-card rounded-xl overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300 border border-border group"
            >
              <div className="relative h-56 overflow-hidden">
                <AppImage
                  src={facility.image}
                  alt={facility.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name={facility.icon as any} size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-poppins">{facility.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-muted-foreground font-source mb-4">
                  {facility.description}
                </p>

                <div className="space-y-2">
                  {facility.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon
                        name="CheckCircleIcon"
                        size={16}
                        className="text-accent flex-shrink-0 mt-0.5"
                      />
                      <span className="text-xs text-foreground font-source">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary to-accent rounded-xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold font-poppins mb-4">
                Experience Our Innovation Lab
              </h3>
              <p className="text-lg opacity-90 font-source mb-6">
                Schedule a virtual or in-person tour to see our world-class facilities in action.
                Watch students create, innovate, and transform their ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#virtual-tour"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-subtle font-nunito"
                >
                  <Icon name="PlayIcon" size={20} className="mr-2" />
                  Virtual Tour
                </a>
                <a
                  href="#enrollment"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 font-nunito"
                >
                  Schedule Visit
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold font-poppins mb-2">₹50L+</div>
                <div className="text-sm opacity-90 font-source">Equipment Investment</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold font-poppins mb-2">2000+</div>
                <div className="text-sm opacity-90 font-source">Sq Ft Lab Space</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold font-poppins mb-2">24/7</div>
                <div className="text-sm opacity-90 font-source">Access for Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold font-poppins mb-2">100%</div>
                <div className="text-sm opacity-90 font-source">Safety Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesShowcase;
