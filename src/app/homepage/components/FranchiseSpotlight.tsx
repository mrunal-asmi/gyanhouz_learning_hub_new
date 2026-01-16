'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface RevenueStream {
  id: number;
  title: string;
  description: string;
  icon: string;
  potential: string;
}

const FranchiseSpotlight = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const revenueStreams: RevenueStream[] = [
    {
      id: 1,
      title: 'Preschool Programs',
      description: 'Year-round enrollment with premium pricing for revolutionary outcomes',
      icon: 'AcademicCapIcon',
      potential: '₹40-60L/year',
    },
    {
      id: 2,
      title: 'Career Labs',
      description: 'High-value career discovery programs for teenagers',
      icon: 'BriefcaseIcon',
      potential: '₹25-35L/year',
    },
    {
      id: 3,
      title: 'Science Labs',
      description: 'STEM programs with robotics, electronics, and science',
      icon: 'CpuChipIcon',
      potential: '₹30-45L/year',
    },
    {
      id: 4,
      title: 'Skills Workshops',
      description: 'Weekend and holiday programs for skill development',
      icon: 'StarIcon',
      potential: '₹15-25L/year',
    },
    {
      id: 5,
      title: 'Summer Camps',
      description: 'Intensive seasonal programs with premium pricing',
      icon: 'SunIcon',
      potential: '₹10-15L/season',
    },
    {
      id: 6,
      title: 'Corporate Partnerships',
      description: 'B2B collaborations and sponsored programs',
      icon: 'BuildingOfficeIcon',
      potential: '₹20-30L/year',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-blue/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 bg-secondary/10 px-6 py-3 rounded-full mb-6">
              <Icon name="BuildingStorefrontIcon" size={20} className="text-secondary" />
              <span className="text-lg font-semibold text-secondary font-poppins">
                Franchise Opportunity
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-poppins">
              Build a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-brand-blue">
                Multi-Crore Education Empire
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 font-source leading-relaxed">
              Join India's fastest-growing education revolution with a proven business model that
              generates multiple revenue streams throughout the year. No seasonal fluctuations, just
              consistent growth.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="CheckCircleIcon" size={20} className="text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 font-poppins">
                    Proven Business Model
                  </h4>
                  <p className="text-sm text-muted-foreground font-source">
                    Tested and refined across multiple locations with consistent success
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="CheckCircleIcon" size={20} className="text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 font-poppins">
                    Complete Support System
                  </h4>
                  <p className="text-sm text-muted-foreground font-source">
                    Training, marketing, operations, and ongoing mentorship included
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="CheckCircleIcon" size={20} className="text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 font-poppins">
                    Exclusive Territory Rights
                  </h4>
                  <p className="text-sm text-muted-foreground font-source">
                    Protected market area with no competition from other franchises
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/franchise-opportunity"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-bold text-base hover:bg-secondary/90 transition-all duration-300 shadow-elevated hover:shadow-lg hover:scale-105 font-nunito"
            >
              <span>Explore Franchise Details</span>
              <Icon name="ArrowRightIcon" size={20} />
            </Link>
          </div>

          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-elevated">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1abdc0f87-1767521790771.png"
                alt="Business professional analyzing financial growth charts and revenue projections on laptop in modern office"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-white mb-2 font-poppins">₹1.5-2.5 Cr</div>
                  <p className="text-white/90 font-source">Annual Revenue Potential</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-elevated p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center font-poppins">
            Multiple Revenue Streams Throughout the Year
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {revenueStreams.map((stream) => (
              <div
                key={stream.id}
                className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-6 hover:shadow-subtle transition-all duration-300"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={stream.icon as any} size={24} className="text-secondary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2 font-poppins">
                  {stream.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 font-source">
                  {stream.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide font-source">
                    Potential
                  </span>
                  <span className="text-lg font-bold text-success font-poppins">
                    {stream.potential}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-success/10 to-accent/10 rounded-xl p-6 border border-success/20">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <Icon name="ChartBarIcon" size={32} className="text-success" />
                <div>
                  <div className="text-2xl font-bold text-foreground font-poppins">
                    ₹1.5-2.5 Crore
                  </div>
                  <p className="text-sm text-muted-foreground font-source">
                    Total Annual Revenue Potential
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-accent font-poppins">18-24 Months</div>
                <p className="text-sm text-muted-foreground font-source">Break-even Period</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSpotlight;
