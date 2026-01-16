import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface FranchiseBenefit {
  icon: string;
  title: string;
  description: string;
}

export default function FranchiseSection() {
  const benefits: FranchiseBenefit[] = [
    {
      icon: 'CurrencyRupeeIcon',
      title: 'High ROI Potential',
      description: '18-24 month breakeven with 35-40% profit margins',
    },
    {
      icon: 'AcademicCapIcon',
      title: 'Proven Model',
      description: '50+ successful centers across India with 98% parent satisfaction',
    },
    {
      icon: 'UserGroupIcon',
      title: 'Complete Support',
      description: 'Training, marketing, operations, and curriculum support',
    },
    {
      icon: 'ChartBarIcon',
      title: 'Growing Market',
      description: '₹5000+ Cr market opportunity in premium education sector',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 via-background to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full mb-6">
              <Icon name="BriefcaseIcon" size={20} variant="solid" />
              <span className="text-sm font-semibold">Investment Opportunity</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Partner with India's Fastest Growing EdTech Brand
            </h2>

            <p className="text-xl text-muted-foreground mb-8">
              Join the education revolution and build a profitable business while transforming
              children's lives
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                      <Icon name={benefit.icon as any} size={24} className="text-brand-orange" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/franchise-opportunity-center"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-brand-orange-foreground font-bold text-lg rounded-lg shadow-brand hover:bg-brand-red hover:shadow-lg hover:-translate-y-1 transition-smooth"
              >
                <Icon name="RocketLaunchIcon" size={24} className="mr-2" />
                Explore Franchise
              </Link>
              <Link
                href="/contact-campus-locator"
                className="inline-flex items-center justify-center px-8 py-4 bg-card text-foreground font-bold text-lg rounded-lg border-2 border-border hover:border-primary hover:text-primary transition-smooth"
              >
                Download Brochure
                <Icon name="ArrowDownTrayIcon" size={24} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-brand">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1eeccc4e0-1765018512135.png"
                alt="Professional business meeting with diverse entrepreneurs reviewing franchise documents and financial charts in modern office"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Stats */}
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-brand-orange">50+</p>
                  <p className="text-xs text-muted-foreground">Centers</p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-success">35%</p>
                  <p className="text-xs text-muted-foreground">Margins</p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary">18M</p>
                  <p className="text-xs text-muted-foreground">Breakeven</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-orange/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
