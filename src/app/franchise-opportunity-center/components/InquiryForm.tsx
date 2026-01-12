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
  preferredTerritory: string;
  message: string;
}

interface InquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryForm({ isOpen, onClose }: InquiryFormProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    investmentCapacity: '',
    experience: '',
    preferredTerritory: '',
    message: ''
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

  if (!isHydrated || !isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
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
          preferredTerritory: '',
          message: ''
        });
      }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-card rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-brand-orange to-brand-red text-white p-6 rounded-t-xl z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-1">Franchise Inquiry</h2>
              <p className="text-white/90 text-sm">Start your journey with GYANHOUZ today</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-smooth"
            >
              <Icon name="XMarkIcon" size={24} />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Full Name <span className="text-error">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange transition-smooth"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Email Address <span className="text-error">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange transition-smooth"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Phone Number <span className="text-error">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange transition-smooth"
                placeholder="10-digit mobile number"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                City <span className="text-error">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange transition-smooth"
                placeholder="Your city"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                State <span className="text-error">*</span>
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange transition-smooth"
                placeholder="Your state"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Investment Capacity <span className="text-error">*</span>
              </label>
              <select
                name="investmentCapacity"
                value={formData.investmentCapacity}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange transition-smooth"
              >
                <option value="">Select range</option>
                <option value="30-35L">₹30-35 Lakhs</option>
                <option value="35-40L">₹35-40 Lakhs</option>
                <option value="40-45L">₹40-45 Lakhs</option>
                <option value="45L+">₹45 Lakhs+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Business Experience
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange transition-smooth"
              >
                <option value="">Select experience</option>
                <option value="none">No business experience</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5+">5+ years</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Preferred Territory
              </label>
              <input
                type="text"
                name="preferredTerritory"
                value={formData.preferredTerritory}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange transition-smooth"
                placeholder="City or area preference"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Additional Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange transition-smooth resize-none"
              placeholder="Tell us about your background and why you're interested in GYANHOUZ franchise..."
            ></textarea>
          </div>

          {submitSuccess ? (
            <div className="bg-brand-green/10 border border-brand-green rounded-lg p-4 flex items-center space-x-3">
              <Icon name="CheckCircleIcon" size={24} className="text-brand-green" />
              <div>
                <div className="font-semibold text-brand-green">Application Submitted!</div>
                <div className="text-sm text-muted-foreground">Our team will contact you within 24 hours.</div>
              </div>
            </div>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-gradient-to-r from-brand-orange to-brand-red text-white font-bold text-lg rounded-lg shadow-brand hover:shadow-xl hover:-translate-y-1 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center space-x-2">
                  <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                  <span>Submitting...</span>
                </span>
              ) : (
                'Submit Inquiry'
              )}
            </button>
          )}

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to our Terms of Service and Privacy Policy. We'll use your information to process your franchise inquiry and contact you with relevant details.
          </p>
        </form>
      </div>
    </div>
  );
}