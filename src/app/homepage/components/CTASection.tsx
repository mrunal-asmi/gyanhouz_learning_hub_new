import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-orange via-brand-red to-error relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Urgency Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6 animate-pulse">
          <Icon name="ClockIcon" size={24} variant="solid" />
          <span className="font-bold text-lg">Limited Seats Available - Act Now!</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Don't Let Your Child Fall Behind
        </h2>

        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join 15,000+ families who chose innovation over tradition. Book your free assessment today
          and see the GYANHOUZ difference.
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-3xl font-bold text-white mb-1">127</p>
            <p className="text-white/80 text-sm">Seats Left</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-3xl font-bold text-white mb-1">15 Days</p>
            <p className="text-white/80 text-sm">Until Deadline</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-3xl font-bold text-white mb-1">₹0</p>
            <p className="text-white/80 text-sm">Assessment Fee</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact-campus-locator"
            className="inline-flex items-center px-10 py-5 bg-white text-brand-orange font-bold text-xl rounded-lg shadow-brand hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 transition-smooth"
          >
            <Icon name="CalendarIcon" size={28} className="mr-3" />
            Book Free Assessment Now
          </Link>
          <Link
            href="/learning-programs-hub"
            className="inline-flex items-center px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold text-xl rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-smooth"
          >
            View Programs
            <Icon name="ArrowRightIcon" size={28} className="ml-3" />
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-white/80">
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircleIcon" size={20} variant="solid" />
            <span className="text-sm">No Hidden Fees</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircleIcon" size={20} variant="solid" />
            <span className="text-sm">Flexible Timings</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircleIcon" size={20} variant="solid" />
            <span className="text-sm">Expert Counseling</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircleIcon" size={20} variant="solid" />
            <span className="text-sm">Campus Tour Included</span>
          </div>
        </div>
      </div>
    </section>
  );
}
