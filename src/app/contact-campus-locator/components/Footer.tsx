import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    programs: [
      { label: 'Preschool Foundation', href: '/learning-programs-hub' },
      { label: 'School of Creativity', href: '/learning-programs-hub' },
      { label: 'Science Labs', href: '/learning-programs-hub' },
      { label: 'Industry Club', href: '/learning-programs-hub' },
    ],
    company: [
      { label: 'About GYANHOUZ', href: '/about-gyanhouz' },
      { label: 'Success Stories', href: '/parent-success-stories' },
      { label: 'Franchise Opportunities', href: '/franchise-opportunity-center' },
      { label: 'Contact Us', href: '/contact-campus-locator' },
    ],
    support: [
      { label: 'Admission Process', href: '/homepage' },
      { label: 'Fee Structure', href: '/homepage' },
      { label: 'Campus Locations', href: '/contact-campus-locator' },
      { label: 'FAQs', href: '/homepage' },
    ],
  };

  const socialLinks = [
    { icon: 'facebook', href: '#', label: 'Facebook' },
    { icon: 'twitter', href: '#', label: 'Twitter' },
    { icon: 'instagram', href: '#', label: 'Instagram' },
    { icon: 'linkedin', href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
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
                <span className="text-xs text-white/70">Learning Hub</span>
              </div>
            </Link>

            <p className="text-white/70 mb-6 leading-relaxed">
              India's first integrated learning ecosystem transforming education through
              experiential learning, Science Labs, and career discovery programs.
            </p>

            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.icon}
                  href={social?.href}
                  aria-label={social?.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-orange transition-smooth"
                >
                  <Icon name="ShareIcon" size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Programs</h3>
            <ul className="space-y-2">
              {footerLinks?.programs?.map((link) => (
                <li key={link?.href}>
                  <Link
                    href={link?.href}
                    className="text-white/70 hover:text-white transition-smooth"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks?.company?.map((link) => (
                <li key={link?.href}>
                  <Link
                    href={link?.href}
                    className="text-white/70 hover:text-white transition-smooth"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks?.support?.map((link) => (
                <li key={link?.href}>
                  <Link
                    href={link?.href}
                    className="text-white/70 hover:text-white transition-smooth"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm">
              &copy; {currentYear} GYANHOUZ Learning Hub. All rights reserved.
            </p>

            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-white/70 hover:text-white transition-smooth">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-smooth">
                Terms of Service
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-smooth">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
