'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FranchiseInquiryFormProps {
  onClose: () => void;
  className?: string;
}

const FranchiseInquiryForm = ({ onClose, className = '' }: FranchiseInquiryFormProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    businessExperience: '',
    investmentCapacity: '',
    preferredTerritory: '',
    currentOccupation: '',
    whyFranchise: '',
    timeline: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const investmentRanges = ['₹10-20 Lakhs', '₹20-30 Lakhs', '₹30-50 Lakhs', '₹50 Lakhs+'];

  const experienceLevels = [
    'No business experience',
    '1-3 years',
    '3-5 years',
    '5-10 years',
    '10+ years',
  ];

  const timelines = [
    'Immediate (1-3 months)',
    'Short-term (3-6 months)',
    'Medium-term (6-12 months)',
    'Long-term (12+ months)',
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid Indian phone number';
    }
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.businessExperience)
      newErrors.businessExperience = 'Please select business experience';
    if (!formData.investmentCapacity)
      newErrors.investmentCapacity = 'Please select investment capacity';
    if (!formData.timeline) newErrors.timeline = 'Please select timeline';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className={`bg-card rounded-2xl p-8 shadow-elevated ${className}`}>
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-success/10 rounded-full mb-6">
            <Icon name="CheckCircleIcon" size={48} className="text-success" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">
            Franchise Inquiry Submitted!
          </h3>
          <p className="text-muted-foreground font-source mb-6 leading-relaxed">
            Thank you for your interest in GYANHOUZ franchise opportunity! Our franchise development
            team will contact you within 48 hours to discuss the multi-revenue business model and
            next steps.
          </p>
          <button
            onClick={onClose}
            className="px-8 py-3 bg-brand-orange text-white rounded-lg font-semibold hover:bg-brand-orange/90 transition-all duration-300 shadow-subtle font-nunito"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-card rounded-2xl p-6 lg:p-8 shadow-elevated ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-foreground font-poppins">
            Franchise Inquiry Form
          </h3>
          <p className="text-sm text-muted-foreground font-source mt-1">
            Business opportunity | Multi-revenue model
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-muted rounded-lg transition-colors duration-300"
          aria-label="Close form"
        >
          <Icon name="XMarkIcon" size={24} className="text-muted-foreground" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-foreground mb-2 font-source"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 ${errors.fullName ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-brand-orange transition-colors duration-300 font-source`}
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-error text-xs mt-1 font-source">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-2 font-source"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 ${errors.email ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-brand-orange transition-colors duration-300 font-source`}
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="text-error text-xs mt-1 font-source">{errors.email}</p>}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-foreground mb-2 font-source"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 ${errors.phone ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-brand-orange transition-colors duration-300 font-source`}
              placeholder="9876543210"
            />
            {errors.phone && <p className="text-error text-xs mt-1 font-source">{errors.phone}</p>}
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-foreground mb-2 font-source"
            >
              City *
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 ${errors.city ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-brand-orange transition-colors duration-300 font-source`}
              placeholder="Enter your city"
            />
            {errors.city && <p className="text-error text-xs mt-1 font-source">{errors.city}</p>}
          </div>

          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-foreground mb-2 font-source"
            >
              State *
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 ${errors.state ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-brand-orange transition-colors duration-300 font-source`}
              placeholder="Enter your state"
            />
            {errors.state && <p className="text-error text-xs mt-1 font-source">{errors.state}</p>}
          </div>

          <div>
            <label
              htmlFor="businessExperience"
              className="block text-sm font-medium text-foreground mb-2 font-source"
            >
              Business Experience *
            </label>
            <select
              id="businessExperience"
              name="businessExperience"
              value={formData.businessExperience}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 ${errors.businessExperience ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-brand-orange transition-colors duration-300 font-source`}
            >
              <option value="">Select experience level</option>
              {experienceLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
            {errors.businessExperience && (
              <p className="text-error text-xs mt-1 font-source">{errors.businessExperience}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="investmentCapacity"
              className="block text-sm font-medium text-foreground mb-2 font-source"
            >
              Investment Capacity *
            </label>
            <select
              id="investmentCapacity"
              name="investmentCapacity"
              value={formData.investmentCapacity}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 ${errors.investmentCapacity ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-brand-orange transition-colors duration-300 font-source`}
            >
              <option value="">Select investment range</option>
              {investmentRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
            {errors.investmentCapacity && (
              <p className="text-error text-xs mt-1 font-source">{errors.investmentCapacity}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="timeline"
              className="block text-sm font-medium text-foreground mb-2 font-source"
            >
              Expected Timeline *
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 ${errors.timeline ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-brand-orange transition-colors duration-300 font-source`}
            >
              <option value="">Select timeline</option>
              {timelines.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {errors.timeline && (
              <p className="text-error text-xs mt-1 font-source">{errors.timeline}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="preferredTerritory"
            className="block text-sm font-medium text-foreground mb-2 font-source"
          >
            Preferred Territory/Location (Optional)
          </label>
          <input
            type="text"
            id="preferredTerritory"
            name="preferredTerritory"
            value={formData.preferredTerritory}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-brand-orange transition-colors duration-300 font-source"
            placeholder="Specific area or region you're interested in"
          />
        </div>

        <div>
          <label
            htmlFor="currentOccupation"
            className="block text-sm font-medium text-foreground mb-2 font-source"
          >
            Current Occupation (Optional)
          </label>
          <input
            type="text"
            id="currentOccupation"
            name="currentOccupation"
            value={formData.currentOccupation}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-brand-orange transition-colors duration-300 font-source"
            placeholder="Your current profession or business"
          />
        </div>

        <div>
          <label
            htmlFor="whyFranchise"
            className="block text-sm font-medium text-foreground mb-2 font-source"
          >
            Why GYANHOUZ Franchise? (Optional)
          </label>
          <textarea
            id="whyFranchise"
            name="whyFranchise"
            value={formData.whyFranchise}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-brand-orange transition-colors duration-300 font-source resize-none"
            placeholder="What interests you about GYANHOUZ franchise opportunity?"
          />
        </div>

        <div className="flex items-center justify-between pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 border-2 border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-all duration-300 font-nunito"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-brand-orange text-white rounded-lg font-semibold hover:bg-brand-orange/90 transition-all duration-300 shadow-subtle disabled:opacity-50 disabled:cursor-not-allowed font-nunito flex items-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <span>Submit Inquiry</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FranchiseInquiryForm;
