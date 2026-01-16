'use client';

import { useRef } from 'react';
import ContactHero from './ContactHero';
import CampusLocator from './CampusLocator';
import ContactForm from './ContactForm';
import QuickContact from './QuickContact';
import Testimonials from './Testimonials';

export default function ContactInteractive() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <ContactHero onScrollToForm={scrollToForm} />
      <CampusLocator />
      <div ref={formRef}>
        <ContactForm />
      </div>
      <QuickContact />
      <Testimonials />
    </>
  );
}
