import Icon from '@/components/ui/AppIcon';

interface ContactHeroProps {
  onScrollToForm: () => void;
}

export default function ContactHero({ onScrollToForm }: ContactHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-brand-orange via-brand-red to-brand-orange overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Icon name="MapPinIcon" size={20} className="text-white" />
              <span className="text-sm font-semibold">Find Your Nearest Campus</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Visit India's Most Innovative Learning Ecosystem
            </h1>
            
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              Experience hands-on learning environments where children don't just study concepts—they build, experiment, and innovate. Book your campus tour today.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={onScrollToForm}
                className="px-8 py-4 bg-white text-brand-orange font-bold text-lg rounded-lg shadow-brand hover:shadow-xl hover:-translate-y-1 transition-smooth flex items-center space-x-2"
              >
                <span>Book Campus Tour</span>
                <Icon name="ArrowRightIcon" size={20} />
              </button>
              
              <button
                onClick={onScrollToForm}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-lg border-2 border-white/30 hover:bg-white/20 transition-smooth"
              >
                Request Callback
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold">12+</div>
                <div className="text-sm text-white/80">Active Campuses</div>
              </div>
              <div>
                <div className="text-3xl font-bold">5000+</div>
                <div className="text-sm text-white/80">Happy Families</div>
              </div>
              <div>
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm text-white/80">Satisfaction Rate</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-blue rounded-lg flex items-center justify-center">
                  <Icon name="PhoneIcon" size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Call Us Anytime</div>
                  <div className="text-xl font-bold text-foreground">1800-123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-brand-teal rounded-lg flex items-center justify-center">
                  <Icon name="EnvelopeIcon" size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email Support</div>
                  <div className="text-lg font-semibold text-foreground">admissions@gyanhouz.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-red rounded-lg flex items-center justify-center">
                  <Icon name="ClockIcon" size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Working Hours</div>
                  <div className="text-lg font-semibold text-foreground">Mon-Sat: 9:00 AM - 6:00 PM</div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Average Response Time</span>
                  <span className="font-bold text-success">&lt; 2 Hours</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Icon name="ChatBubbleLeftRightIcon" size={48} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}