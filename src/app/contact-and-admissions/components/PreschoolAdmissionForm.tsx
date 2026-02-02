'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface PreschoolAdmissionFormProps {
  onClose: () => void;
  className?: string;
}

const PreschoolAdmissionForm = ({ onClose, className = '' }: PreschoolAdmissionFormProps) => {
  const [formData, setFormData] = useState({
    childName: '',
    childDOB: '', // Changed from childAge to childDOB
    parentName: '',
    email: '',
    phone: '',
    address: '',
    programOfInterest: '', // Changed from preferredLocation to programOfInterest
    howDidYouHear: '', // Changed from additionalInfo to howDidYouHear
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const programs = ['Playgroup', 'Nursery', 'Junior KG', 'Senior KG']; // Changed from ageGroups to programs
  const locations = ['Mumbai Central', 'Andheri West', 'Bandra East', 'Powai', 'Thane West'];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.childName.trim()) newErrors.childName = 'Child name is required';
    if (!formData.childDOB) newErrors.childDOB = 'Child\'s Date of Birth is required'; // Updated validation for childDOB
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent name is required';
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
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.programOfInterest) newErrors.programOfInterest = 'Please select a program of interest'; // Updated validation for programOfInterest

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const dataToSend = {
        childName: formData.childName,
        childDOB: formData.childDOB,
        parentName: formData.parentName,
        parentEmail: formData.email,
        parentPhone: formData.phone,
        address: formData.address,
        programOfInterest: formData.programOfInterest,
        howDidYouHear: formData.howDidYouHear,
      };
      console.log('Client-side: Sending data:', dataToSend);

      const response = await fetch('/api/preschool-admissions', { // Updated API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const responseData = await response.json();
      console.log('Client-side: Received response:', responseData);

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert(`Failed to submit application: ${responseData.error || 'Unknown error'}. Please try again later.`);
      }
    } catch (error) {
      console.error('Client-side: Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }

    setIsSubmitting(false);
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
            Application Submitted Successfully!
          </h3>
          <p className="text-muted-foreground font-source mb-6 leading-relaxed">
            Thank you for choosing GYANHOUZ! Our admissions team will contact you within 24 hours to
            schedule an assessment and facility tour.
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
            <h3 className="text-2xl font-bold text-foreground font-poppins">
              Preschool Admission Form
            </h3>
            <p className="text-sm text-muted-foreground font-source mt-1">
              Ages 2-6 | Miraculous early learning foundation
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
                htmlFor="childName"
                className="block text-sm font-medium text-foreground mb-2 font-source"
              >
                Child's Full Name *
              </label>
              <input
                type="text"
                id="childName"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 ${errors.childName ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 font-source`}
                placeholder="Enter child's name"
              />
              {errors.childName && (
                <p className="text-error text-xs mt-1 font-source">{errors.childName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="childDOB"
                className="block text-sm font-medium text-foreground mb-2 font-source"
              >
                Child's Date of Birth *
              </label>
              <input
                type="date"
                id="childDOB"
                name="childDOB"
                value={formData.childDOB}
                onChange={handleChange}
                max={new Date().toISOString().split('T')[0]} // Child's DOB cannot be in the future
                className={`w-full px-4 py-3 border-2 ${errors.childDOB ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 font-source`}
              />
              {errors.childDOB && (
                <p className="text-error text-xs mt-1 font-source">{errors.childDOB}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="parentName"
                className="block text-sm font-medium text-foreground mb-2 font-source"
              >
                Parent/Guardian Name *
              </label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 ${errors.parentName ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 font-source`}
                placeholder="Enter your name"
              />
              {errors.parentName && (
                <p className="text-error text-xs mt-1 font-source">{errors.parentName}</p>
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
                className={`w-full px-4 py-3 border-2 ${errors.phone ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 font-source`}
                placeholder="9272099011"
              />
              {errors.phone && <p className="text-error text-xs mt-1 font-source">{errors.phone}</p>}
            </div>

            <div>
              <label
                htmlFor="programOfInterest"
                className="block text-sm font-medium text-foreground mb-2 font-source"
              >
                Program of Interest *
              </label>
              <select
                id="programOfInterest"
                name="programOfInterest"
                value={formData.programOfInterest}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 ${errors.programOfInterest ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 font-source`}
              >
                <option value="">Select program</option>
                {programs.map((program) => (
                  <option key={program} value={program}>
                    {program}
                  </option>
                ))}
              </select>
              {errors.programOfInterest && (
                <p className="text-error text-xs mt-1 font-source">{errors.programOfInterest}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-foreground mb-2 font-source"
            >
              Residential Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 ${errors.address ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 font-source`}
              placeholder="Enter complete address"
            />
            {errors.address && (
              <p className="text-error text-xs mt-1 font-source">{errors.address}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="howDidYouHear"
              className="block text-sm font-medium text-foreground mb-2 font-source"
            >
              How did you hear about us? (Optional)
            </label>
            <textarea
              id="howDidYouHear"
              name="howDidYouHear"
              value={formData.howDidYouHear}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 font-source resize-none"
              placeholder="e.g., Social media, friend, advertisement..."
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
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-subtle disabled:opacity-50 disabled:cursor-not-allowed font-nunito flex items-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <span>Submit Application</span>
              )}
            </button>
          </div>
        </form>
      </div>
    );
  };

  export default PreschoolAdmissionForm;
