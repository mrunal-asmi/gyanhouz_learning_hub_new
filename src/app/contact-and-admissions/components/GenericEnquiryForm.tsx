'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface GenericEnquiryFormProps {
  onClose: () => void;
  formType: string;
  title: string;
  description: string;
  className?: string;
}

const GenericEnquiryForm = ({
  onClose,
  formType,
  title,
  description,
  className = '',
}: GenericEnquiryFormProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: formType,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('Failed to submit enquiry. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
            Enquiry Submitted Successfully!
          </h3>
          <p className="text-muted-foreground font-source mb-6 leading-relaxed">
            Thank you for your interest! Our team will contact you within 24 hours to discuss your enquiry.
          </p>
          <button
            onClick={onClose}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-subtle font-nunito"
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
          <h3 className="text-2xl font-bold text-foreground font-poppins">{title}</h3>
          <p className="text-sm text-muted-foreground font-source mt-1">{description}</p>
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
              className={`w-full px-4 py-3 border-2 ${errors.fullName ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 font-source`}
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
              className={`w-full px-4 py-3 border-2 ${errors.email ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 font-source`}
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="text-error text-xs mt-1 font-source">{errors.email}</p>}
          </div>

          <div className="md:col-span-2">
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
              className={`w-full px-4 py-3 border-2 ${errors.phone ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 font-source`}
              placeholder="9272099011"
            />
            {errors.phone && <p className="text-error text-xs mt-1 font-source">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground mb-2 font-source"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`w-full px-4 py-3 border-2 ${errors.message ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 font-source resize-none`}
            placeholder="How can we help you?"
          />
          {errors.message && (
            <p className="text-error text-xs mt-1 font-source">{errors.message}</p>
          )}
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
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-subtle disabled:opacity-50 disabled:cursor-not-allowed font-nunito flex items-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <span>Submit Enquiry</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GenericEnquiryForm;
