'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  investmentCapacity: string;
  experience: string;
  preferredLocation: string;
  message: string;
}

interface FranchiseInquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const FranchiseInquiryForm = ({ isOpen, onClose }: FranchiseInquiryFormProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    investmentCapacity: '',
    experience: '',
    preferredLocation: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isOpen && isHydrated) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isHydrated]);

  if (!isHydrated) {
    return null;
  }

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      setTimeout(() => {
        setSubmitSuccess(false);
        onClose();
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          city: '',
          state: '',
          investmentCapacity: '',
          experience: '',
          preferredLocation: '',
          message: '',
        });
      }, 2000);
    }, 1500);
  };

  const investmentOptions = ['₹30-40 Lakhs', '₹40-50 Lakhs', '₹50-60 Lakhs', '₹60+ Lakhs'];

  const experienceOptions = ['No Business Experience', '1-3 Years', '3-5 Years', '5+ Years'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-card rounded-2xl shadow-elevated max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-primary to-brand-orange p-6 flex items-center justify-between z-10">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white font-poppins">
              Start Your Franchise Journey
            </h2>
            <p className="text-white/90 text-sm font-source mt-1">
              Fill out the form below and our team will contact you within 24 hours
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors duration-300"
            aria-label="Close form"
          >
            <Icon name="XMarkIcon" size={24} className="text-white" />
          </button>
        </div>

        {submitSuccess ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircleIcon" size={48} className="text-success" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3 font-poppins">
              Thank You for Your Interest!
            </h3>
            <p className="text-muted-foreground font-source">
              Your franchise inquiry has been submitted successfully. Our team will review your
              application and contact you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 lg:p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-foreground mb-2 font-poppins"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 font-source"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-foreground mb-2 font-poppins"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 font-source"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-foreground mb-2 font-poppins"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 font-source"
                  placeholder="10-digit mobile number"
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-semibold text-foreground mb-2 font-poppins"
                >
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 font-source"
                  placeholder="Your city"
                />
              </div>

              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-semibold text-foreground mb-2 font-poppins"
                >
                  State *
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 font-source"
                  placeholder="Your state"
                />
              </div>

              <div>
                <label
                  htmlFor="investmentCapacity"
                  className="block text-sm font-semibold text-foreground mb-2 font-poppins"
                >
                  Investment Capacity *
                </label>
                <select
                  id="investmentCapacity"
                  name="investmentCapacity"
                  value={formData.investmentCapacity}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 font-source"
                >
                  <option value="">Select investment range</option>
                  {investmentOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="experience"
                  className="block text-sm font-semibold text-foreground mb-2 font-poppins"
                >
                  Business Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 font-source"
                >
                  <option value="">Select experience level</option>
                  {experienceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="preferredLocation"
                  className="block text-sm font-semibold text-foreground mb-2 font-poppins"
                >
                  Preferred Franchise Location
                </label>
                <input
                  type="text"
                  id="preferredLocation"
                  name="preferredLocation"
                  value={formData.preferredLocation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 font-source"
                  placeholder="Specific area or locality"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-foreground mb-2 font-poppins"
              >
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none font-source"
                placeholder="Tell us about your background, why you're interested in GYANHOUZ franchise, or any questions you have..."
              ></textarea>
            </div>

            <div className="bg-muted rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <Icon
                  name="InformationCircleIcon"
                  size={20}
                  className="text-primary flex-shrink-0 mt-0.5"
                />
                <p className="text-sm text-muted-foreground font-source">
                  By submitting this form, you agree to be contacted by GYANHOUZ regarding franchise
                  opportunities. Your information will be kept confidential and used solely for
                  franchise evaluation purposes.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold text-lg shadow-elevated hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-nunito flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Icon name="PaperAirplaneIcon" size={20} />
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-8 py-4 bg-muted hover:bg-muted/70 text-foreground rounded-lg font-semibold text-lg transition-all duration-300 font-nunito"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default FranchiseInquiryForm;
