import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  icon: string;
  title: string;
  details: string[];
  color: string;
  bgColor: string;
}

interface ContactInfoProps {
  className?: string;
}

const ContactInfo = ({ className = '' }: ContactInfoProps) => {
  const contactMethods: ContactMethod[] = [
    {
      icon: 'PhoneIcon',
      title: 'Call Us',
      details: ['+91 123 456 7890', '+91 987 654 3210'],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: 'EnvelopeIcon',
      title: 'Email Us',
      details: ['admissions@gyanhouz.com', 'franchise@gyanhouz.com'],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: 'MapPinIcon',
      title: 'Visit Us',
      details: ['123 Education Street', 'Mumbai, Maharashtra 400001'],
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: 'ClockIcon',
      title: 'Office Hours',
      details: ['Mon-Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      color: 'text-warning',
      bgColor: 'bg-warning/10',
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'ShareIcon', href: '#', color: 'hover:text-[#1877F2]' },
    { name: 'Twitter', icon: 'ShareIcon', href: '#', color: 'hover:text-[#1DA1F2]' },
    { name: 'Instagram', icon: 'ShareIcon', href: '#', color: 'hover:text-[#E4405F]' },
    { name: 'LinkedIn', icon: 'ShareIcon', href: '#', color: 'hover:text-[#0A66C2]' },
    { name: 'YouTube', icon: 'PlayIcon', href: '#', color: 'hover:text-[#FF0000]' },
    { name: 'WhatsApp', icon: 'ChatBubbleLeftRightIcon', href: '#', color: 'hover:text-[#25D366]' },
  ];

  return (
    <section className={`py-16 lg:py-20 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-poppins">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground font-source max-w-2xl mx-auto">
            Multiple ways to connect with us. Choose what works best for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-card border-2 border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-elevated"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 ${method.bgColor} rounded-xl mb-4`}
              >
                <Icon name={method.icon as any} size={28} className={method.color} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 font-poppins">
                {method.title}
              </h3>
              {method.details.map((detail, idx) => (
                <p key={idx} className="text-sm text-muted-foreground font-source mb-1">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="bg-card border-2 border-border rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">
                Connect on Social Media
              </h3>
              <p className="text-muted-foreground font-source mb-6 leading-relaxed">
                Follow us on social media for the latest updates, success stories, and educational
                insights from the GYANHOUZ community.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-12 h-12 bg-muted hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon
                      name={social.icon as any}
                      size={20}
                      className="text-foreground hover:text-white transition-colors duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">
                Visit Our Campus
              </h3>
              <p className="text-muted-foreground font-source mb-6 leading-relaxed">
                Experience our state-of-the-art facilities firsthand. Schedule a campus tour to see
                our innovative learning spaces, labs, and meet our expert team.
              </p>
              <div className="w-full h-64 rounded-xl overflow-hidden border-2 border-border">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="GYANHOUZ Learning Hub Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=19.0760,72.8777&z=14&output=embed"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
