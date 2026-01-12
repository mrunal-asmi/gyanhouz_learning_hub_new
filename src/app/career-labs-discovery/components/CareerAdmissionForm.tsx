'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CareerAdmissionFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  childAge: string;
  city: string;
  careerInterest: string;
  preferredDate: string;
  message: string;
}

export default function CareerAdmissionForm({ isOpen, onClose }: CareerAdmissionFormProps) {
  const [formData, setFormData] = useState<FormData>({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    city: '',
    careerInterest: '',
    preferredDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const careerInterests = [
    'Medical & Healthcare',
    'Engineering & Technology',
    'Business & Entrepreneurship',
    'Creative Arts & Media',
    'Culinary & Hospitality',
    'Law & Governance',
    'Not Sure - Need Assessment'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        parentName: '',
        email: '',
        phone: '',
        childName: '',
        childAge: '',
        city: '',
        careerInterest: '',
        preferredDate: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitSuccess(false);
        onClose();
      }, 3000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-brand-blue to-primary p-6 text-white flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">Career Labs Admission</h3>
            <p className="text-sm text-white/90">Book your free career assessment</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-smooth"
          >
            <Icon name="XMarkIcon" size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {submitSuccess && (
            <div className="bg-brand-green/10 border border-brand-green/20 rounded-lg p-4 flex items-center space-x-3">
              <Icon name="CheckCircleIcon" size={24} className="text-brand-green" />
              <div>
                <div className="font-semibold text-brand-green">Application Submitted!</div>
                <div className="text-sm text-muted-foreground">Our team will contact you within 2 hours</div>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
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
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                placeholder="Your full name"
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
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
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
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                placeholder="+91 98765 43210"
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
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                placeholder="Child's full name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Child's Age *
              </label>
              <select
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
              >
                <option value="">Select age</option>
                {[8, 9, 10, 11, 12, 13, 14, 15, 16].map(age => (
                  <option key={age} value={age}>{age} years</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                City *
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                placeholder="Your city"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Career Interest Area *
              </label>
              <select
                name="careerInterest"
                value={formData.careerInterest}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
              >
                <option value="">Select career interest</option>
                {careerInterests.map(interest => (
                  <option key={interest} value={interest}>{interest}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Preferred Assessment Date
              </label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Additional Information
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
              placeholder="Any specific questions or requirements?"
            />
          </div>

          <div className="flex items-center justify-between pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 text-foreground hover:bg-muted rounded-lg transition-smooth"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-brand-orange text-white font-bold rounded-lg shadow-brand hover:bg-brand-red hover:shadow-lg transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}