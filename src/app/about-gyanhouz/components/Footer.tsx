import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    programs: [
      { label: 'Preschool Foundation', href: '/learning-programs-hub' },
      { label: 'School of Creativity', href: '/learning-programs-hub' },
      { label: 'Science Labs', href: '/learning-programs-hub' },
      { label: 'Career Discovery', href: '/learning-programs-hub' },
    ],
    company: [
      { label: 'About Us', href: '/about-gyanhouz' },
      { label: 'Success Stories', href: '/parent-success-stories' },
      { label: 'Franchise', href: '/franchise-opportunity-center' },
      { label: 'Contact', href: '/contact-campus-locator' },
    ],
    resources: [
      { label: 'Parenting Guides', href: '#' },
      { label: 'Research Papers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'FAQs', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: 'facebook', href: '#', label: 'Facebook' },
    { icon: 'twitter', href: '#', label: 'Twitter' },
    { icon: 'instagram', href: '#', label: 'Instagram' },
    { icon: 'linkedin', href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className={`bg-gradient-to-br from-gray-900 to-gray-800 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/homepage" className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-brand-orange to-brand-red rounded-lg">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
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
                <span className="text-lg font-bold leading-none">GYANHOUZ</span>
                <span className="text-xs opacity-80">Learning Hub</span>
              </div>
            </Link>
            <p className="text-sm text-gray-300 mb-4 max-w-sm">
              {"India's first integrated learning ecosystem transforming education from passive consumption to active discovery."}
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-smooth"
                >
                  <Icon name="ShareIcon" size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Programs</h4>
            <ul className="space-y-2">
              {footerLinks.programs.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-brand-orange transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-brand-orange transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-brand-orange transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} GYANHOUZ Learning Hub. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-brand-orange transition-smooth"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-brand-orange transition-smooth"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-brand-orange transition-smooth"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
