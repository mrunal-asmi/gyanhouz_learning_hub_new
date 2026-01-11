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
    childAge: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    preferredLocation: '',
    startDate: '',
    additionalInfo: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ageGroups = ['2-3 years', '3-4 years', '4-5 years', '5-6 years'];
  const locations = ['Mumbai Central', 'Andheri West', 'Bandra East', 'Powai', 'Thane West'];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.childName.trim()) newErrors.childName = 'Child name is required';
    if (!formData.childAge) newErrors.childAge = 'Please select age group';
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
    if (!formData.preferredLocation) newErrors.preferredLocation = 'Please select a location';
    if (!formData.startDate) newErrors.startDate = 'Preferred start date is required';

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
              htmlFor="childAge"
              className="block text-sm font-medium text-foreground mb-2 font-source"
            >
              Age Group *
            </label>
            <select
              id="childAge"
              name="childAge"
              value={formData.childAge}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 ${errors.childAge ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 font-source`}
            >
              <option value="">Select age group</option>
              {ageGroups.map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
            {errors.childAge && (
              <p className="text-error text-xs mt-1 font-source">{errors.childAge}</p>
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
              placeholder="9876543210"
            />
            {errors.phone && <p className="text-error text-xs mt-1 font-source">{errors.phone}</p>}
          </div>

          <div>
            <label
              htmlFor="preferredLocation"
              className="block text-sm font-medium text-foreground mb-2 font-source"
            >
              Preferred Location *
            </label>
            <select
              id="preferredLocation"
              name="preferredLocation"
              value={formData.preferredLocation}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 ${errors.preferredLocation ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 font-source`}
            >
              <option value="">Select location</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
            {errors.preferredLocation && (
              <p className="text-error text-xs mt-1 font-source">{errors.preferredLocation}</p>
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
            htmlFor="startDate"
            className="block text-sm font-medium text-foreground mb-2 font-source"
          >
            Preferred Start Date *
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className={`w-full px-4 py-3 border-2 ${errors.startDate ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 font-source`}
          />
          {errors.startDate && (
            <p className="text-error text-xs mt-1 font-source">{errors.startDate}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="additionalInfo"
            className="block text-sm font-medium text-foreground mb-2 font-source"
          >
            Additional Information (Optional)
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 font-source resize-none"
            placeholder="Any special requirements or questions..."
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
