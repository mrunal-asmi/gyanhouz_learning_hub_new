'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const primaryNavItems = [
    { label: 'Home', href: '/homepage' },
    { label: 'Learning Programs', href: '/learning-programs-hub' },
    { label: 'Franchise', href: '/franchise-opportunity-center' },
    { label: 'Success Stories', href: '/parent-success-stories' },
  ];

  const secondaryNavItems = [
    { label: 'Career Labs', href: '/career-labs-discovery' },
    { label: 'Science Labs', href: '/science-labs-experience' },
    { label: 'Electronics & Robotics', href: '/electronics-robotics-innovation-center' },
    { label: 'About Us', href: '/about-gyanhouz' },
    { label: 'Contact', href: '/contact-campus-locator' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMoreMenuOpen(false);
  };

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? 'bg-card shadow-md' : 'bg-card/95 backdrop-blur-sm'
      } ${className}`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 lg:px-8">
          {/* Logo */}
          <Link href="/homepage" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-brand-orange to-brand-red rounded-lg shadow-brand transition-smooth group-hover:scale-105">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  d="M20 8L12 14V26L20 32L28 26V14L20 8Z"
                  fill="white"
                  fillOpacity="0.9"
                />
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
              <span className="text-lg font-bold text-foreground leading-none tracking-tight">
                GYANHOUZ
              </span>
              <span className="text-xs text-muted-foreground font-medium">
                Learning Hub
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {primaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-smooth"
              >
                {item.label}
              </Link>
            ))}

            {/* More Menu */}
            <div className="relative">
              <button
                onClick={toggleMoreMenu}
                className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-smooth"
              >
                <span>More</span>
                <Icon
                  name="ChevronDownIcon"
                  size={16}
                  className={`transition-transform ${
                    isMoreMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isMoreMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsMoreMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-lg z-50 py-1">
                    {secondaryNavItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMoreMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-popover-foreground hover:bg-muted transition-smooth"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact-campus-locator"
              className="px-6 py-2.5 bg-brand-orange text-brand-orange-foreground font-semibold text-sm rounded-lg shadow-brand hover:bg-brand-red hover:shadow-lg hover:-translate-y-0.5 transition-smooth"
            >
              Book Free Assessment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-smooth"
            aria-label="Toggle menu"
          >
            <Icon
              name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
              size={24}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-background z-40 overflow-y-auto">
            <nav className="flex flex-col p-4 space-y-2">
              {[...primaryNavItems, ...secondaryNavItems].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-smooth"
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-border">
                <Link
                  href="/contact-campus-locator"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-6 py-3 bg-brand-orange text-brand-orange-foreground font-semibold text-center rounded-lg shadow-brand hover:bg-brand-red transition-smooth"
                >
                  Book Free Assessment
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;