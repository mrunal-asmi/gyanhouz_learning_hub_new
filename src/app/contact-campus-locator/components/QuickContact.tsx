import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  icon: string;
  title: string;
  description: string;
  action: string;
  color: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: 'PhoneIcon',
    title: 'Call Us',
    description: 'Speak with our admissions team',
    action: '1800-123-4567 (Toll Free)',
    color: 'from-brand-blue to-brand-teal'
  },
  {
    icon: 'EnvelopeIcon',
    title: 'Email Us',
    description: 'Get detailed information via email',
    action: 'admissions@gyanhouz.com',
    color: 'from-brand-green to-brand-teal'
  },
  {
    icon: 'ChatBubbleLeftRightIcon',
    title: 'Live Chat',
    description: 'Chat with us in real-time',
    action: 'Start Chat Now',
    color: 'from-brand-orange to-brand-red'
  },
  {
    icon: 'VideoCameraIcon',
    title: 'Virtual Tour',
    description: 'Experience campus from home',
    action: 'Book Virtual Tour',
    color: 'from-secondary to-primary'
  }
];

export default function QuickContact() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-red/10 px-4 py-2 rounded-full mb-4">
            <Icon name="BoltIcon" size={20} className="text-brand-red" />
            <span className="text-sm font-semibold text-brand-red">Quick Connect</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Multiple Ways to Reach Us
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred method of communication and we'll respond within 2 hours
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-smooth group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                <Icon name={method.icon as any} size={32} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
              
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-semibold text-primary">{method.action}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="text-white/90 mb-6">
                Our admissions counselors are available Monday to Saturday, 9:00 AM to 6:00 PM. For urgent inquiries outside business hours, leave us a message and we'll get back to you first thing in the morning.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-white text-primary font-bold rounded-lg shadow-brand hover:shadow-xl hover:-translate-y-0.5 transition-smooth">
                  Request Callback
                </button>
                <button className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-smooth">
                  View FAQs
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="ClockIcon" size={24} />
                  <h4 className="font-bold text-lg">Business Hours</h4>
                </div>
                <p className="text-white/90">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p className="text-white/90">Sunday: Closed</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="MapPinIcon" size={24} />
                  <h4 className="font-bold text-lg">Head Office</h4>
                </div>
                <p className="text-white/90">
                  GYANHOUZ Learning Hub Pvt. Ltd.\nKoramangala, Bangalore - 560034
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}