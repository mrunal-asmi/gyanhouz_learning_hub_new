import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections: FooterSection[] = [
    {
      title: 'Programs',
      links: [
        { label: 'Preschool Foundation', href: '/learning-programs-hub' },
        { label: 'School of Creativity', href: '/learning-programs-hub' },
        { label: 'Science Labs', href: '/learning-programs-hub' },
        { label: 'Career Discovery', href: '/learning-programs-hub' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about-gyanhouz' },
        { label: 'Success Stories', href: '/parent-success-stories' },
        { label: 'Franchise', href: '/franchise-opportunity-center' },
        { label: 'Contact', href: '/contact-campus-locator' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Parenting Guides', href: '/about-gyanhouz' },
        { label: 'Educational Research', href: '/about-gyanhouz' },
        { label: 'Activity Downloads', href: '/about-gyanhouz' },
        { label: 'Blog', href: '/about-gyanhouz' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'ShareIcon', href: '#' },
    { name: 'Twitter', icon: 'ChatBubbleLeftIcon', href: '#' },
    { name: 'Instagram', icon: 'CameraIcon', href: '#' },
    { name: 'LinkedIn', icon: 'BriefcaseIcon', href: '#' },
    { name: 'YouTube', icon: 'PlayIcon', href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/homepage" className="flex items-center space-x-2 mb-6">
              <div className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-brand-orange to-brand-red rounded-lg shadow-brand">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                >
                  <path d="M20 8L12 14V26L20 32L28 26V14L20 8Z" fill="white" fillOpacity="0.9" />
                  <circle cx="20" cy="20" r="4" fill="white" />
                  <path
                    d="M20 12V16M20 24V28M12 18L16 20M24 20L28 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold leading-none tracking-tight">GYANHOUZ</span>
                <span className="text-sm text-white/70 font-medium">Learning Hub</span>
              </div>
            </Link>

            <p className="text-white/70 mb-6 leading-relaxed">
              India's first integrated learning ecosystem transforming education from passive
              consumption to active discovery. Building confident innovators, not memorizers.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-orange hover:scale-110 transition-smooth"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-brand-orange transition-smooth"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <Icon name="PhoneIcon" size={24} className="text-brand-orange flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Call Us</p>
                <p className="text-white/70 text-sm">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Icon name="EnvelopeIcon" size={24} className="text-brand-orange flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Email Us</p>
                <p className="text-white/70 text-sm">hello@gyanhouz.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Icon name="MapPinIcon" size={24} className="text-brand-orange flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Visit Us</p>
                <p className="text-white/70 text-sm">50+ Centers Across India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/70 text-sm">
            © {currentYear} GYANHOUZ Learning Hub. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-white/70 hover:text-brand-orange transition-smooth">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/70 hover:text-brand-orange transition-smooth">
              Terms of Service
            </Link>
            <Link href="#" className="text-white/70 hover:text-brand-orange transition-smooth">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
