'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/homepage' },
    { label: 'Preschool Program', href: '/preschool-program' },
    { label: 'Career Labs', href: '/career-labs' },
    { label: 'Science Lab', href: '/innovation-lab' },
  ];

  const opportunities = [
    { label: 'Franchise Opportunity', href: '/franchise-opportunity' },
    { label: 'Success Stories', href: '/success-stories' },
    { label: 'About the Movement', href: '/about-the-movement' },
    { label: 'Contact & Admissions', href: '/contact-and-admissions' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'ShareIcon', href: '#' },
    { name: 'Twitter', icon: 'ShareIcon', href: '#' },
    { name: 'Instagram', icon: 'ShareIcon', href: '#' },
    { name: 'LinkedIn', icon: 'ShareIcon', href: '#' },
    { name: 'YouTube', icon: 'PlayIcon', href: '#' },
  ];

  return (
    <footer className={`bg-brand-trust text-white ${className}`}>
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Link href="/homepage" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-brand-orange rounded-lg flex items-center justify-center shadow-subtle">
                <span className="text-white font-bold text-2xl font-poppins">G</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-poppins leading-tight">GYANHOUZ</span>
                <span className="text-sm text-white/80 font-source">Learning Hub</span>
              </div>
            </Link>
            <p className="text-sm text-white/80 font-source leading-relaxed">
              India's FIRST Integrated Learning Ecosystem transforming education from age 2-16
              through innovative programs and holistic development.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-300 font-source"
                  >
                    <Icon name="ChevronRightIcon" size={16} className="mr-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Opportunities</h3>
            <ul className="space-y-3">
              {opportunities.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-300 font-source"
                  >
                    <Icon name="ChevronRightIcon" size={16} className="mr-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Icon name="MapPinIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/80 font-source">
                  123 Education Street, Learning District, Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Icon name="PhoneIcon" size={20} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-sm text-white/80 hover:text-white transition-colors duration-300 font-source"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Icon name="EnvelopeIcon" size={20} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:info@gyanhouz.com"
                  className="text-sm text-white/80 hover:text-white transition-colors duration-300 font-source"
                >
                  info@gyanhouz.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/60 font-source text-center md:text-left">
              © {currentYear} GYANHOUZ Learning Hub. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-source"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-source"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-source"
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
