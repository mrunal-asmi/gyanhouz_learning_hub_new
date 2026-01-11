'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  className?: string;
}

const FAQSection = ({ className = '' }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQ[] = [
    {
      question: 'What makes GYANHOUZ different from traditional preschools?',
      answer:
        "GYANHOUZ is India's FIRST integrated learning ecosystem offering a complete 2-16 age journey. Unlike traditional preschools that focus only on basic education, we provide ambidextrous writing training, trilingual fluency (English, Hindi, Sanskrit), stage confidence building, innovation lab access, and practical problem-solving skills - all under one roof. Our anti-rote learning approach emphasizes hands-on experimentation over passive memorization.",
    },
    {
      question: 'How does the ambidextrous writing program work?',
      answer:
        'Our specialized ambidextrous writing program uses scientifically-proven techniques to develop equal proficiency in both hands. Starting from age 3, children engage in structured exercises, games, and activities that strengthen neural pathways in both brain hemispheres. Most children achieve basic both-hand writing within 6-8 months and full proficiency within 12 months. This enhances overall brain development, coordination, and cognitive flexibility.',
    },
    {
      question: 'What is the student-teacher ratio?',
      answer:
        "We maintain a low student-teacher ratio of 8:1 for ages 2-3 and 12:1 for ages 4-6. This ensures personalized attention, individualized learning plans, and close monitoring of each child's development. Additionally, we have specialized instructors for language, arts, physical education, and innovation activities.",
    },
    {
      question: "How do you ensure my child's safety and security?",
      answer:
        'Child safety is our top priority. We have CCTV monitoring throughout the campus, secure entry/exit systems with biometric access, trained security personnel, first-aid certified staff, regular safety drills, child-safe furniture and equipment, and strict pickup protocols. Parents receive real-time updates through our mobile app.',
    },
    {
      question: 'What are the program timings and fees?',
      answer:
        'We offer three program options: Full Day (8 AM - 2 PM), Half Day (8 AM - 12 PM), and Extended Care (8 AM - 5 PM). Fees vary by program and age group. Please contact our admissions team for detailed fee structure, payment plans, and sibling discounts. We also offer flexible payment options and scholarship programs for deserving students.',
    },
    {
      question: 'Can I visit the campus before enrolling?',
      answer:
        'Absolutely! We encourage all parents to visit our campus, observe our teaching methods, meet our faculty, and experience the GYANHOUZ difference firsthand. You can schedule a personalized campus tour through our admissions form or by calling us directly. We also conduct regular open house events where you can interact with current parents and see live demonstrations.',
    },
    {
      question: 'What is the admission process and timeline?',
      answer:
        'The admission process includes: 1) Submit online application form, 2) Schedule campus tour and parent interaction, 3) Child assessment session (age-appropriate activities, not formal testing), 4) Admission confirmation and documentation, 5) Orientation program for parents and child. The entire process typically takes 7-10 days. We have rolling admissions throughout the year, subject to seat availability.',
    },
    {
      question: "How do you track and communicate my child's progress?",
      answer:
        "We use a comprehensive progress tracking system that includes: weekly photo/video updates via mobile app, monthly detailed progress reports covering all development areas, quarterly parent-teacher meetings, daily activity logs and meal tracking, milestone achievement notifications, and portfolio documentation of your child's work. Parents have 24/7 access to their child's learning journey through our parent portal.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="QuestionMarkCircleIcon" size={20} className="text-secondary" />
            <span className="text-sm font-semibold text-secondary font-poppins">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground font-poppins mb-4">
            Got Questions? <span className="text-primary">We've Got Answers</span>
          </h2>

          <p className="text-lg text-muted-foreground font-source">
            Find answers to common questions about our preschool program, admission process, and
            what makes GYANHOUZ unique.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-subtle overflow-hidden transition-all duration-300 hover:shadow-elevated"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors duration-300"
                >
                  <span className="text-base lg:text-lg font-semibold text-foreground font-poppins pr-4">
                    {faq.question}
                  </span>
                  <Icon
                    name="ChevronDownIcon"
                    size={24}
                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-muted-foreground font-source leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-col items-center space-y-4 bg-gradient-to-br from-primary/5 to-secondary/5 px-8 py-6 rounded-xl">
              <p className="text-foreground font-semibold font-poppins">Still have questions?</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+911234567890"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors duration-300 font-nunito"
                >
                  <Icon name="PhoneIcon" size={20} />
                  <span>Call Us: +91 123 456 7890</span>
                </a>
                <a
                  href="mailto:admissions@gyanhouz.com"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-foreground border-2 border-border rounded-lg font-semibold text-sm hover:border-primary hover:text-primary transition-all duration-300 font-nunito"
                >
                  <Icon name="EnvelopeIcon" size={20} />
                  <span>Email Admissions Team</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
