'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  programName: string;
}

export default function EnrollmentModal({
  isOpen,
  onClose,
  programName,
}: EnrollmentModalProps) {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Enrollment request submitted for ${programName}!\n\nParent: ${formData.parentName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nChild: ${formData.childName}, ${formData.childAge} years\n\nOur team will contact you within 24 hours.`);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-card rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-foreground">
            Enroll in {programName}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-smooth"
          >
            <Icon name="XMarkIcon" size={24} className="text-muted-foreground" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Parent/Guardian Name *
            </label>
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              className="w-full px-4 py-2.5 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
              placeholder="10-digit mobile number"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Child's Name *
            </label>
            <input
              type="text"
              name="childName"
              value={formData.childName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
              placeholder="Enter child's name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Child's Age *
            </label>
            <input
              type="number"
              name="childAge"
              value={formData.childAge}
              onChange={handleChange}
              required
              min="2"
              max="10"
              className="w-full px-4 py-2.5 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
              placeholder="Age in years"
            />
          </div>

          <div className="bg-muted rounded-lg p-4 space-y-2">
            <div className="flex items-center space-x-2">
              <Icon
                name="CheckCircleIcon"
                size={18}
                className="text-brand-green"
                variant="solid"
              />
              <span className="text-sm text-foreground">
                Free assessment included
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon
                name="CheckCircleIcon"
                size={18}
                className="text-brand-green"
                variant="solid"
              />
              <span className="text-sm text-foreground">
                Campus tour available
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon
                name="CheckCircleIcon"
                size={18}
                className="text-brand-green"
                variant="solid"
              />
              <span className="text-sm text-foreground">
                24-hour response guarantee
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-brand-orange text-brand-orange-foreground font-bold rounded-lg shadow-brand hover:bg-brand-red hover:shadow-lg hover:-translate-y-0.5 transition-smooth"
          >
            Submit Enrollment Request
          </button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting, you agree to our terms and privacy policy
          </p>
        </form>
      </div>
    </div>
  );
}