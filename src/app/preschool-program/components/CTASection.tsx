import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section
      className={`py-16 lg:py-24 bg-gradient-to-br from-primary to-brand-orange relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Icon name="ClockIcon" size={20} className="text-white" />
            <span className="text-sm font-semibold text-white font-poppins">
              Limited Seats Available for 2026
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-poppins mb-6">
            Don't Let Your Child Miss Out on This Revolutionary Learning Experience
          </h2>

          <p className="text-lg lg:text-xl text-white/90 font-source mb-8 leading-relaxed">
            Join 500+ families who chose GYANHOUZ and witnessed miraculous transformations. Seats
            are filling fast for the upcoming academic year. Secure your child's future today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact-and-admissions"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold text-base hover:bg-white/90 transition-all duration-300 shadow-elevated hover:shadow-elevated-hover font-nunito"
            >
              Enroll Your Child Now
              <Icon name="ArrowRightIcon" size={20} className="ml-2" />
            </Link>

            <button className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold text-base hover:bg-white hover:text-primary transition-all duration-300 font-nunito">
              <Icon name="CalendarIcon" size={20} className="mr-2" />
              Schedule Campus Tour
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Icon name="CheckBadgeIcon" size={40} className="text-white mx-auto mb-3" />
              <div className="text-2xl font-bold text-white font-poppins mb-1">100%</div>
              <div className="text-sm text-white/80 font-source">Parent Satisfaction</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Icon name="UserGroupIcon" size={40} className="text-white mx-auto mb-3" />
              <div className="text-2xl font-bold text-white font-poppins mb-1">8:1</div>
              <div className="text-sm text-white/80 font-source">Student-Teacher Ratio</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Icon name="TrophyIcon" size={40} className="text-white mx-auto mb-3" />
              <div className="text-2xl font-bold text-white font-poppins mb-1">15+</div>
              <div className="text-sm text-white/80 font-source">Unique Skills Developed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
