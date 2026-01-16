'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface EnrollmentSectionProps {
  className?: string;
}

interface FormData {
  parentName: string;
  email: string;
  phone: string;
  studentName: string;
  studentAge: string;
  track: string;
  interests: string[];
  message: string;
}

const EnrollmentSection = ({ className = '' }: EnrollmentSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    parentName: '',
    email: '',
    phone: '',
    studentName: '',
    studentAge: '',
    track: '',
    interests: [],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const tracks = [
    {
      value: 'beginner',
      label: 'Beginner Track (Ages 8-10)',
      description: 'Introduction to innovation and basic prototyping',
    },
    {
      value: 'intermediate',
      label: 'Intermediate Track (Ages 11-13)',
      description: 'Advanced projects with electronics and coding',
    },
    {
      value: 'advanced',
      label: 'Advanced Track (Ages 14-16)',
      description: 'Patent-level inventions and commercial development',
    },
  ];

  const interestOptions = [
    'Robotics & Automation',
    'IoT & Smart Devices',
    'Sustainability & Green Tech',
    'Healthcare Technology',
    'AI & Machine Learning',
    'Mobile App Development',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitStatus('success');
    setIsSubmitting(false);

    setTimeout(() => {
      setFormData({
        parentName: '',
        email: '',
        phone: '',
        studentName: '',
        studentAge: '',
        track: '',
        interests: [],
        message: '',
      });
      setSubmitStatus('idle');
    }, 3000);
  };

  if (!isHydrated) {
    return (
      <section id="enrollment" className={`py-16 lg:py-24 bg-background ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-poppins mb-4">
                Enroll in Science Lab
              </h2>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-subtle border border-border animate-pulse">
              <div className="space-y-4">
                <div className="h-12 bg-muted rounded"></div>
                <div className="h-12 bg-muted rounded"></div>
                <div className="h-12 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="enrollment" className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Icon name="RocketLaunchIcon" size={20} className="text-primary" />
              <span className="text-sm font-semibold text-primary font-poppins">
                Start Your Innovation Journey
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-poppins mb-4">
              Enroll in Science Lab
            </h2>
            <p className="text-lg text-muted-foreground font-source">
              Join India's most advanced innovation program and transform your child into tomorrow's
              inventor. Limited seats available for each track.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 lg:p-12 shadow-subtle border border-border">
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="CheckCircleIcon" size={48} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground font-poppins mb-4">
                  Enrollment Request Submitted!
                </h3>
                <p className="text-muted-foreground font-source mb-6">
                  Thank you for your interest in GYANHOUZ Science Lab. Our admissions team will
                  contact you within 24 hours to discuss the next steps.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 font-nunito"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="parentName"
                      className="block text-sm font-semibold text-foreground font-poppins mb-2"
                    >
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-source"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-foreground font-poppins mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-source"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-foreground font-poppins mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-source"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="studentName"
                      className="block text-sm font-semibold text-foreground font-poppins mb-2"
                    >
                      Student Name *
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-source"
                      placeholder="Student's full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="studentAge"
                      className="block text-sm font-semibold text-foreground font-poppins mb-2"
                    >
                      Student Age *
                    </label>
                    <input
                      type="number"
                      id="studentAge"
                      name="studentAge"
                      value={formData.studentAge}
                      onChange={handleInputChange}
                      required
                      min="8"
                      max="16"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-source"
                      placeholder="Age (8-16)"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="track"
                      className="block text-sm font-semibold text-foreground font-poppins mb-2"
                    >
                      Select Track *
                    </label>
                    <select
                      id="track"
                      name="track"
                      value={formData.track}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-source"
                    >
                      <option value="">Choose a track</option>
                      {tracks.map((track) => (
                        <option key={track.value} value={track.value}>
                          {track.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground font-poppins mb-3">
                    Areas of Interest (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {interestOptions.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => handleInterestToggle(interest)}
                        className={`px-4 py-3 rounded-lg border-2 text-left transition-all duration-300 font-source ${
                          formData.interests.includes(interest)
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border bg-background text-foreground hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <div
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                              formData.interests.includes(interest)
                                ? 'border-primary bg-primary'
                                : 'border-border'
                            }`}
                          >
                            {formData.interests.includes(interest) && (
                              <Icon name="CheckIcon" size={14} className="text-white" />
                            )}
                          </div>
                          <span className="text-sm">{interest}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-foreground font-poppins mb-2"
                  >
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-source resize-none"
                    placeholder="Tell us about your child's interests, previous projects, or any questions you have..."
                  ></textarea>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="InformationCircleIcon"
                      size={24}
                      className="text-secondary flex-shrink-0 mt-0.5"
                    />
                    <div className="text-sm text-muted-foreground font-source">
                      <p className="font-semibold text-foreground mb-2">What happens next?</p>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>Our admissions team will review your application within 24 hours</li>
                        <li>You'll receive a call to schedule an orientation session</li>
                        <li>Student assessment and track placement discussion</li>
                        <li>Program enrollment and onboarding process</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-subtle hover:shadow-elevated disabled:opacity-50 disabled:cursor-not-allowed font-nunito flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="ArrowPathIcon" size={24} className="animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Enrollment Request</span>
                      <Icon name="ArrowRightIcon" size={24} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 text-center shadow-subtle border border-border">
              <Icon name="PhoneIcon" size={32} className="text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground font-poppins mb-2">Call Us</h4>
              <p className="text-sm text-muted-foreground font-source">+91 123 456 7890</p>
            </div>
            <div className="bg-card rounded-lg p-6 text-center shadow-subtle border border-border">
              <Icon name="EnvelopeIcon" size={32} className="text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground font-poppins mb-2">Email Us</h4>
              <p className="text-sm text-muted-foreground font-source">innovation@gyanhouz.com</p>
            </div>
            <div className="bg-card rounded-lg p-6 text-center shadow-subtle border border-border">
              <Icon name="MapPinIcon" size={32} className="text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground font-poppins mb-2">Visit Us</h4>
              <p className="text-sm text-muted-foreground font-source">Schedule a lab tour</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentSection;
