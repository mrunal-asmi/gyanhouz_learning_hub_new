import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  onInquiryClick: () => void;
}

const HeroSection = ({ onInquiryClick }: HeroSectionProps) => {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-trust via-secondary to-brand-blue z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Icon name="SparklesIcon" size={20} className="text-brand-orange" />
              <span className="text-sm font-semibold font-nunito">
                India&apos;s First Integrated Learning Franchise
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-poppins leading-tight">
              Transform Education,
              <br />
              <span className="text-brand-orange">Build Wealth</span>
            </h1>

            <p className="text-lg lg:text-xl text-white/90 font-source leading-relaxed">
              Join India&apos;s revolutionary education ecosystem with 7+ revenue streams,
              proven ROI, and comprehensive support. Be part of the movement redefining
              learning from age 1.5–16.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onInquiryClick}
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold text-lg shadow-elevated hover:shadow-xl transition-all duration-300 font-nunito flex items-center justify-center space-x-2"
              >
                <span>Start Your Franchise Journey</span>
                <Icon name="ArrowRightIcon" size={20} />
              </button>

              {/* <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold text-lg transition-all duration-300 font-nunito flex items-center justify-center space-x-2">
                <Icon name="PlayIcon" size={20} />
                <span>Watch Success Stories</span>
              </button> */}
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-brand-orange font-poppins">
                  50+
                </div>
                <div className="text-sm text-white/80 font-source">
                  Successful Franchises
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-brand-orange font-poppins">
                  7+
                </div>
                <div className="text-sm text-white/80 font-source">
                  Revenue Streams
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-brand-orange font-poppins">
                 10,000+
                </div>
                <div className="text-sm text-white/80 font-source">
                 Children transformed
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_169e6338a-1763296707579.png"
                alt="Modern educational facility"
                className="w-full h-[500px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brand-trust/80 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                {[
                  'Proven Business Model',
                  'Comprehensive Training',
                  'Ongoing Support',
                ].map((text) => (
                  <div key={text} className="flex items-center space-x-2">
                    <Icon name="CheckCircleIcon" size={22} className="text-success" />
                    <span className="font-semibold font-poppins">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
