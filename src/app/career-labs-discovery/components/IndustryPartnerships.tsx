'use client';

import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Partner {
  name: string;
  industry: string;
  logo: string;
  alt: string;
}

export default function IndustryPartnerships() {
  const partners: Partner[] = [
    {
      name: 'Tech Innovators',
      industry: 'Technology',
      logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_1894b4f0f-1767962916598.png',
      alt: 'Technology company logo representing tech industry partnership',
    },
    {
      name: 'Healthcare Leaders',
      industry: 'Medical',
      logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_16b98c6b6-1767962916628.png',
      alt: 'Healthcare organization logo representing medical industry partnership',
    },
    {
      name: 'Business Ventures',
      industry: 'Business',
      logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_18bb47308-1768036260471.png',
      alt: 'Business corporation logo representing entrepreneurship partnership',
    },
    {
      name: 'Creative Studios',
      industry: 'Media & Arts',
      logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_1bca1b469-1768036260775.png',
      alt: 'Creative agency logo representing arts and media partnership',
    },
    {
      name: 'Engineering Firms',
      industry: 'Engineering',
      logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cc7aee3a-1768036260943.png',
      alt: 'Engineering company logo representing technical industry partnership',
    },
    {
      name: 'Culinary Institute',
      industry: 'Hospitality',
      logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b2376d14-1768036260739.png',
      alt: 'Culinary school logo representing hospitality industry partnership',
    },
  ];

  const mentorStats = [
    { icon: 'UserGroupIcon', value: '200+', label: 'Industry Mentors' },
    { icon: 'BuildingOfficeIcon', value: '50+', label: 'Partner Companies' },
    { icon: 'VideoCameraIcon', value: '500+', label: 'Virtual Sessions/Year' },
    { icon: 'MapPinIcon', value: '15+', label: 'Site Visits/Month' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="BuildingOffice2Icon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Industry Network</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Connected to India's
            <span className="block text-primary">Leading Industry Professionals</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our extensive network of industry partners provides real-world insights, mentorship, and
            opportunities that no school can match
          </p>
        </div>

        {/* Mentor Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mentorStats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary/5 to-brand-blue/5 rounded-xl p-6 text-center border border-primary/10"
            >
              <Icon name={stat.icon} size={40} className="text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div>
          <h3 className="text-xl font-bold text-foreground text-center mb-8">
            Trusted by Leading Organizations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-6 border border-border hover:border-primary/30 transition-smooth hover:shadow-lg"
              >
                <AppImage
                  src={partner.logo}
                  alt={partner.alt}
                  className="w-full h-16 object-contain mb-3"
                />

                <div className="text-center">
                  <div className="text-sm font-semibold text-foreground">{partner.name}</div>
                  <div className="text-xs text-muted-foreground">{partner.industry}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mentor Benefits */}
        <div className="mt-16 bg-gradient-to-br from-brand-teal/10 to-brand-blue/10 rounded-2xl p-8 lg:p-12 border border-brand-teal/20">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-8">
            What Your Child Gets from Our Mentor Network
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-brand-teal rounded-lg flex items-center justify-center">
                <Icon name="ChatBubbleLeftRightIcon" size={24} className="text-white" />
              </div>
              <h4 className="font-bold text-foreground">One-on-One Sessions</h4>
              <p className="text-sm text-muted-foreground">
                Personal guidance from professionals in fields of interest
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center">
                <Icon name="BriefcaseIcon" size={24} className="text-white" />
              </div>
              <h4 className="font-bold text-foreground">Real Project Experience</h4>
              <p className="text-sm text-muted-foreground">
                Work on actual industry projects with mentor supervision
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center">
                <Icon name="AcademicCapIcon" size={24} className="text-white" />
              </div>
              <h4 className="font-bold text-foreground">Skill Certification</h4>
              <p className="text-sm text-muted-foreground">
                Industry-recognized certificates for completed programs
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center">
                <Icon name="MapIcon" size={24} className="text-white" />
              </div>
              <h4 className="font-bold text-foreground">Career Roadmap</h4>
              <p className="text-sm text-muted-foreground">
                Personalized pathway planning for future success
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
