import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  const ctaOptions = [
    {
      title: 'Book Campus Tour',
      description: 'Experience our innovative learning environment firsthand',
      icon: 'BuildingLibraryIcon',
      href: '/contact-campus-locator',
      color: 'brand-orange',
      buttonText: 'Schedule Visit',
    },
    {
      title: 'Explore Programs',
      description: 'Discover our comprehensive learning ecosystem',
      icon: 'AcademicCapIcon',
      href: '/learning-programs-hub',
      color: 'brand-teal',
      buttonText: 'View Programs',
    },
    {
      title: 'Franchise Opportunity',
      description: 'Partner with us to bring innovation to your community',
      icon: 'BuildingStorefrontIcon',
      href: '/franchise-opportunity-center',
      color: 'brand-blue',
      buttonText: 'Learn More',
    },
  ];

  return (
    <section
      className={`py-16 lg:py-24 bg-gradient-to-br from-brand-orange/10 via-background to-brand-teal/10 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Join the <span className="text-brand-orange">Revolution?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {
              "Take the next step in transforming your child's education or becoming part of India's most innovative learning ecosystem"
            }
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ctaOptions.map((option, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-brand transition-smooth text-center"
            >
              <div
                className={`w-16 h-16 bg-${option.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-6`}
              >
                <Icon name={option.icon as any} size={32} className={`text-${option.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{option.title}</h3>
              <p className="text-muted-foreground mb-6">{option.description}</p>
              <Link
                href={option.href}
                className={`inline-block px-6 py-3 bg-${option.color} text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-smooth`}
              >
                {option.buttonText}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card border border-border rounded-2xl p-8 text-center">
          <Icon
            name="ChatBubbleLeftRightIcon"
            size={48}
            className="text-brand-orange mx-auto mb-4"
          />
          <h3 className="text-2xl font-bold text-foreground mb-3">Have Questions?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {
              "Our team is here to help you understand how GYANHOUZ can transform your child's learning journey"
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-campus-locator"
              className="px-6 py-3 bg-brand-orange text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-smooth"
            >
              Contact Us
            </Link>
            <button className="px-6 py-3 bg-muted text-foreground font-semibold rounded-xl hover:bg-muted/80 transition-smooth">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
