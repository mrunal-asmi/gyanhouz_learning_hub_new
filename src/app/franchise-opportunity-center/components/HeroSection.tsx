import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  onInquiryClick: () => void;
}

export default function HeroSection({ onInquiryClick }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-brand-orange via-brand-red to-brand-orange overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Icon name="SparklesIcon" size={20} className="text-white" />
              <span className="text-sm font-semibold">
                India's Most Integrated Learning Ecosystem
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Transform Education.
              <br />
              Build Wealth.
            </h1>

            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              Join India's fastest-growing education revolution. Partner with GYANHOUZ and own a
              premium learning ecosystem that generates consistent revenue while transforming young
              minds.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Icon name="CurrencyRupeeIcon" size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">₹45L - ₹65L</div>
                  <div className="text-sm text-white/80">Annual Revenue Potential</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Icon name="ChartBarIcon" size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">18-24 Months</div>
                  <div className="text-sm text-white/80">ROI Timeline</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <button
                onClick={onInquiryClick}
                className="px-8 py-4 bg-white text-brand-orange font-bold text-lg rounded-lg shadow-brand hover:shadow-xl hover:-translate-y-1 transition-smooth"
              >
                Start Your Journey
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-lg border-2 border-white/30 hover:bg-white/20 transition-smooth">
                Download Brochure
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1ccb67141-1764910375532.png"
                alt="Modern GYANHOUZ franchise classroom with children engaged in hands-on learning activities with colorful educational materials"
                className="w-full h-[500px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-2xl font-bold mb-2">150+ Successful Partners</div>
                <div className="text-white/90">Across 45 cities in India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
