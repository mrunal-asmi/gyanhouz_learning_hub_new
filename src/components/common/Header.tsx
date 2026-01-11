'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '/homepage' },
    { label: 'Preschool Program', href: '/preschool-program' },
    {
      label: 'Practical Labs',
      href: '/career-labs',
      submenu: [
        { label: 'Career Labs', href: '/career-labs' },
        { label: 'Science Labs', href: '/science-labs' },
        { label: 'Innovation Lab', href: '/innovation-lab' },
        { label: 'School of Creativity', href: '/school-of-creativity' },
        { label: 'Robotics & Electronics Lab', href: '/robotics-electronics-lab' },
        { label: 'Business Clubs', href: '/business-clubs' },
        { label: 'Professional Classes', href: '/professional-classes' },
      ],
    },
    { label: 'Franchise', href: '/franchise-opportunity' },
    { label: 'Collaboration', href: '/collaboration' },
    {
      label: 'Success Stories',
      href: '/success-stories',
      submenu: [
        { label: 'Success Stories', href: '/success-stories' },
        { label: 'Awards & Scholarships', href: '/awards-scholarships' },
        { label: 'Competitions', href: '/competitions' },
      ],
    },
    { label: 'About', href: '/about-the-movement' },
    {
      label: 'Enquiry',
      href: '/contact-and-admissions',
      submenu: [
        { label: 'General Enquiry', href: '/contact-and-admissions' },
        { label: 'Dance Class Enquiry', href: '/contact-and-admissions?type=dance' },
        { label: 'Music Class Enquiry', href: '/contact-and-admissions?type=music' },
        { label: 'Science Lab Enquiry', href: '/contact-and-admissions?type=science-lab' },
      ],
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-card shadow-md ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/homepage" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary to-brand-orange rounded-lg flex items-center justify-center shadow-subtle">
              <span className="text-white font-bold text-xl lg:text-2xl font-poppins">G</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold text-foreground font-poppins leading-tight">
                GYANHOUZ
              </span>
              <span className="text-xs text-muted-foreground font-source hidden sm:block">
                Learning Hub
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <>
                    <button className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 font-poppins flex items-center space-x-1">
                      <span>{item.label}</span>
                      <Icon
                        name="ChevronDownIcon"
                        size={16}
                        className="transition-transform duration-300 group-hover:rotate-180"
                      />
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-56 bg-card shadow-elevated rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors duration-200 font-source"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 font-poppins"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact-and-admissions"
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all duration-300 shadow-subtle hover:shadow-elevated font-nunito"
            >
              Enroll Now
            </Link>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <div className="space-y-1">
                    <div className="px-4 py-3 text-sm font-semibold text-foreground font-poppins">
                      {item.label}
                    </div>
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors duration-200 font-source"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors duration-200 font-poppins"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-border">
              <Link
                href="/contact-and-admissions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-6 py-3 bg-primary text-primary-foreground text-center rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all duration-300 shadow-subtle font-nunito"
              >
                Enroll Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
