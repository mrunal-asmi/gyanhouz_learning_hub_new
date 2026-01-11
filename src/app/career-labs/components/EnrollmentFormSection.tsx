'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  childAge: string;
  careerInterest: string;
  preferredProgram: string;
  message: string;
}

interface EnrollmentFormSectionProps {
  className?: string;
}

const EnrollmentFormSection = ({ className = '' }: EnrollmentFormSectionProps) => {
  const [formData, setFormData] = useState<FormData>({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    careerInterest: '',
    preferredProgram: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        parentName: '',
        email: '',
        phone: '',
        childName: '',
        childAge: '',
        careerInterest: '',
        preferredProgram: '',
        message: '',
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section className={`py-16 lg:py-24 bg-background ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-card rounded-2xl shadow-elevated p-8 lg:p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-accent to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircleIcon" size={48} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4 font-poppins">
              Enrollment Request Submitted!
            </h3>
            <p className="text-lg text-muted-foreground mb-6 font-source">
              Thank you for your interest in GYANHOUZ Career Labs. Our admissions team will contact
              you within 24 hours to discuss the next steps.
            </p>
            <div className="bg-muted rounded-xl p-6">
              <p className="text-sm text-foreground font-source">
                <strong>What happens next?</strong>
                <br />
                1. Our career counselor will call you to understand your child's interests
                <br />
                2. We'll schedule a free career assessment session
                <br />
                3. You'll receive a personalized program recommendation
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Icon name="PencilSquareIcon" size={20} className="text-primary" />
              <span className="text-sm font-semibold text-primary font-source">
                Start Your Journey
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-poppins">
              Enroll in <span className="text-primary">Career Labs</span> Today
            </h2>
            <p className="text-lg text-muted-foreground font-source">
              Fill out the form below and our career counseling team will guide you through the
              enrollment process
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-elevated p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="parentName"
                    className="block text-sm font-semibold text-foreground mb-2 font-source"
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
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 font-source"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-foreground mb-2 font-source"
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
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 font-source"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-foreground mb-2 font-source"
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
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 font-source"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label
                    htmlFor="childName"
                    className="block text-sm font-semibold text-foreground mb-2 font-source"
                  >
                    Child's Name *
                  </label>
                  <input
                    type="text"
                    id="childName"
                    name="childName"
                    value={formData.childName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 font-source"
                    placeholder="Enter child's name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="childAge"
                    className="block text-sm font-semibold text-foreground mb-2 font-source"
                  >
                    Child's Age *
                  </label>
                  <select
                    id="childAge"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 font-source"
                  >
                    <option value="">Select age group</option>
                    <option value="2-5">2-5 Years</option>
                    <option value="6-8">6-8 Years</option>
                    <option value="9-11">9-11 Years</option>
                    <option value="12-16">12-16 Years</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="careerInterest"
                    className="block text-sm font-semibold text-foreground mb-2 font-source"
                  >
                    Career Interest Area
                  </label>
                  <select
                    id="careerInterest"
                    name="careerInterest"
                    value={formData.careerInterest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 font-source"
                  >
                    <option value="">Select interest area</option>
                    <option value="technology">Technology & Innovation</option>
                    <option value="healthcare">Healthcare & Life Sciences</option>
                    <option value="business">Business & Entrepreneurship</option>
                    <option value="creative">Creative Arts & Design</option>
                    <option value="engineering">Engineering & Manufacturing</option>
                    <option value="media">Media & Communication</option>
                    <option value="undecided">Not Sure Yet</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="preferredProgram"
                  className="block text-sm font-semibold text-foreground mb-2 font-source"
                >
                  Preferred Program *
                </label>
                <select
                  id="preferredProgram"
                  name="preferredProgram"
                  value={formData.preferredProgram}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 font-source"
                >
                  <option value="">Select program</option>
                  <option value="awareness">Career Awareness Foundation (2-5 Years)</option>
                  <option value="exploration">Career Exploration Basics (6-8 Years)</option>
                  <option value="discovery">Career Discovery Labs (9-11 Years)</option>
                  <option value="preparation">Career Preparation Academy (12-16 Years)</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-foreground mb-2 font-source"
                >
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 font-source resize-none"
                  placeholder="Tell us about your child's interests, goals, or any specific questions you have..."
                ></textarea>
              </div>

              <div className="bg-muted rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="InformationCircleIcon"
                    size={24}
                    className="text-primary flex-shrink-0 mt-0.5"
                  />
                  <div className="text-sm text-foreground font-source">
                    <strong>What to expect after enrollment:</strong>
                    <br />
                    • Free career assessment session within 48 hours
                    <br />
                    • Personalized learning pathway recommendation
                    <br />
                    • Access to mentor network and industry resources
                    <br />• Monthly progress tracking and parent consultations
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-white rounded-lg font-semibold text-base hover:bg-primary/90 transition-all duration-300 shadow-subtle hover:shadow-elevated flex items-center justify-center space-x-2 font-nunito"
              >
                <Icon name="PaperAirplaneIcon" size={20} />
                <span>Submit Enrollment Request</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentFormSection;
