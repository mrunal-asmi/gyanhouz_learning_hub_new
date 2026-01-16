'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-orange to-brand-red rounded-lg flex items-center justify-center">
                <Icon name="CpuChipIcon" size={24} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">GYANHOUZ</div>
                <div className="text-xs text-white/70">Electronics & Robotics</div>
              </div>
            </div>
            <p className="text-sm text-white/70">
              India's most advanced electronics and robotics innovation center for children.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/learning-programs-hub"
                  className="text-white/70 hover:text-brand-orange transition-smooth"
                >
                  All Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/franchise-opportunity-center"
                  className="text-white/70 hover:text-brand-orange transition-smooth"
                >
                  Franchise
                </Link>
              </li>
              <li>
                <Link
                  href="/parent-success-stories"
                  className="text-white/70 hover:text-brand-orange transition-smooth"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-campus-locator"
                  className="text-white/70 hover:text-brand-orange transition-smooth"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Labs */}
          <div>
            <h3 className="font-semibold mb-4">Other Labs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/career-labs-discovery"
                  className="text-white/70 hover:text-brand-orange transition-smooth"
                >
                  Career Labs
                </Link>
              </li>
              <li>
                <Link
                  href="/science-labs-experience"
                  className="text-white/70 hover:text-brand-orange transition-smooth"
                >
                  Science Labs
                </Link>
              </li>
              <li>
                <Link
                  href="/learning-programs-hub"
                  className="text-white/70 hover:text-brand-orange transition-smooth"
                >
                  Science Labs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="PhoneIcon" size={16} className="text-brand-orange" />
                <span className="text-white/70">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="EnvelopeIcon" size={16} className="text-brand-orange" />
                <span className="text-white/70">robotics@gyanhouz.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPinIcon" size={16} className="text-brand-orange" />
                <span className="text-white/70">Multiple Locations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-white/70">
            © 2026 GYANHOUZ Learning Hub. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="#" className="text-white/70 hover:text-brand-orange transition-smooth">
              <Icon name="GlobeAltIcon" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
