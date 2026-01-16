'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface ActionCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  link: string;
  cta: string;
}

const QuickActionCenter = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const actionCards: ActionCard[] = [
    {
      id: 'preschool',
      title: 'Preschool Admission',
      description:
        'Enroll your child (Age 2-6) in our revolutionary preschool program with miraculous outcomes',
      icon: 'AcademicCapIcon',
      color: 'from-primary to-brand-orange',
      link: '/contact-and-admissions',
      cta: 'Apply for Preschool',
    },
    {
      id: 'career',
      title: 'Career Labs Enrollment',
      description:
        'Register your teenager (Age 13-16) for future-focused career discovery programs',
      icon: 'BriefcaseIcon',
      color: 'from-secondary to-brand-blue',
      link: '/contact-and-admissions',
      cta: 'Enroll in Career Labs',
    },
    {
      id: 'innovation',
      title: 'Innovation Programs',
      description: 'Join STEM labs, robotics, and innovation programs for ages 7-16',
      icon: 'LightBulbIcon',
      color: 'from-accent to-success',
      link: '/contact-and-admissions',
      cta: 'Join Science Lab',
    },
    {
      id: 'franchise',
      title: 'Franchise Inquiry',
      description: 'Become a franchise partner and build your education empire with proven model',
      icon: 'BuildingStorefrontIcon',
      color: 'from-warning to-conversion',
      link: '/franchise-opportunity',
      cta: 'Explore Franchise',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-conversion/10 px-6 py-3 rounded-full mb-6">
            <Icon name="RocketLaunchIcon" size={20} className="text-conversion" />
            <span className="text-lg font-semibold text-conversion font-poppins">
              Take Action Now
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-poppins">
            Start Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Transformation Journey
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-source">
            Choose your path to educational excellence. Every journey begins with a single step
            towards your child's extraordinary future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {actionCards.map((card) => (
            <div
              key={card.id}
              className="group bg-white rounded-2xl p-8 shadow-subtle hover:shadow-elevated transition-all duration-300 hover:scale-105"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-subtle`}
              >
                <Icon name={card.icon as any} size={32} className="text-white" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3 font-poppins">{card.title}</h3>

              <p className="text-muted-foreground mb-6 font-source leading-relaxed">
                {card.description}
              </p>

              <Link
                href={card.link}
                className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${card.color} text-white rounded-lg font-semibold text-sm hover:shadow-elevated transition-all duration-300 font-nunito`}
              >
                <span>{card.cta}</span>
                <Icon
                  name="ArrowRightIcon"
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-elevated p-8 lg:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Icon name="PhoneIcon" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3 font-poppins">
              Need Help Choosing?
            </h3>
            <p className="text-muted-foreground font-source">
              Our education counselors are here to guide you through the perfect program for your
              child's age and aspirations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="PhoneIcon" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-1 font-poppins">Call Us</h4>
              <a
                href="tel:+911234567890"
                className="text-sm text-primary hover:text-primary/80 transition-colors duration-300 font-source"
              >
                +91 123 456 7890
              </a>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="EnvelopeIcon" size={24} className="text-secondary" />
              </div>
              <h4 className="font-semibold text-foreground mb-1 font-poppins">Email Us</h4>
              <a
                href="mailto:admissions@gyanhouz.com"
                className="text-sm text-secondary hover:text-secondary/80 transition-colors duration-300 font-source"
              >
                admissions@gyanhouz.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="MapPinIcon" size={24} className="text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-1 font-poppins">Visit Us</h4>
              <p className="text-sm text-muted-foreground font-source">Schedule a campus tour</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickActionCenter;
