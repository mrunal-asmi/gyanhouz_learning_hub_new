'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CareerLabsFormProps {
  onClose: () => void;
  className?: string;
}

const CareerLabsForm = ({ onClose, className = '' }: CareerLabsFormProps) => {
  const [formData, setFormData] = useState({
    studentName: '',
    age: '',
    currentGrade: '',
    parentName: '',
    email: '',
    phone: '',
    interestAreas: [] as string[],
    careerGoals: '',
    previousExperience: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ageGroups = ['7-9 years', '10-12 years', '13-16 years'];
  const grades = [
    'Grade 2',
    'Grade 3',
    'Grade 4',
    'Grade 5',
    'Grade 6',
    'Grade 7',
    'Grade 8',
    'Grade 9',
    'Grade 10',
  ];
  const interestOptions = [
    'Technology & Coding',
    'Science & Research',
    'Arts & Design',
    'Business & Entrepreneurship',
    'Healthcare & Medicine',
    'Engineering & Robotics',
    'Media & Communication',
    'Sports & Fitness',
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.studentName.trim()) newErrors.studentName = 'Student name is required';
    if (!formData.age) newErrors.age = 'Please select age group';
    if (!formData.currentGrade) newErrors.currentGrade = 'Please select current grade';
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
    if (formData.interestAreas.length === 0) {
      newErrors.interestAreas = 'Please select at least one interest area';
    }

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

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interestAreas: prev.interestAreas.includes(interest)
        ? prev.interestAreas.filter((i) => i !== interest)
        : [...prev.interestAreas, interest],
    }));
    if (errors.interestAreas) {
      setErrors((prev) => ({ ...prev, interestAreas: '' }));
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
            Enrollment Request Submitted!
          </h3>
          <p className="text-muted-foreground font-source mb-6 leading-relaxed">
            Thank you for your interest in Career Labs! Our career counselors will contact you
            within 24 hours to discuss the program and schedule a discovery session.
          </p>
          <button
            onClick={onClose}
            className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-all duration-300 shadow-subtle font-nunito"
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
            Career Labs Enrollment Form
          </h3>
          <p className="text-sm text-muted-foreground font-source mt-1">
            Ages 7-16 | Future-focused career discovery
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
              htmlFor="studentName"
              className="block text-sm font-medium text-foreground mb-2 font-source"
            >
              Student's Full Name *
            </label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 ${errors.studentName ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-secondary transition-colors duration-300 font-source`}
              placeholder="Enter student's name"
            />
            {errors.studentName && (
              <p className="text-error text-xs mt-1 font-source">{errors.studentName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-foreground mb-2 font-source"
            >
              Age Group *
            </label>
            <select
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 ${errors.age ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-secondary transition-colors duration-300 font-source`}
            >
              <option value="">Select age group</option>
              {ageGroups.map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
            {errors.age && <p className="text-error text-xs mt-1 font-source">{errors.age}</p>}
          </div>

          <div>
            <label
              htmlFor="currentGrade"
              className="block text-sm font-medium text-foreground mb-2 font-source"
            >
              Current Grade *
            </label>
            <select
              id="currentGrade"
              name="currentGrade"
              value={formData.currentGrade}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 ${errors.currentGrade ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-secondary transition-colors duration-300 font-source`}
            >
              <option value="">Select grade</option>
              {grades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
            {errors.currentGrade && (
              <p className="text-error text-xs mt-1 font-source">{errors.currentGrade}</p>
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
              className={`w-full px-4 py-3 border-2 ${errors.parentName ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-secondary transition-colors duration-300 font-source`}
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
              className={`w-full px-4 py-3 border-2 ${errors.email ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-secondary transition-colors duration-300 font-source`}
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
              className={`w-full px-4 py-3 border-2 ${errors.phone ? 'border-error' : 'border-border'} rounded-lg focus:outline-none focus:border-secondary transition-colors duration-300 font-source`}
              placeholder="9876543210"
            />
            {errors.phone && <p className="text-error text-xs mt-1 font-source">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-3 font-source">
            Interest Areas * (Select all that apply)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {interestOptions.map((interest) => (
              <button
                key={interest}
                type="button"
                onClick={() => handleInterestToggle(interest)}
                className={`px-4 py-3 border-2 rounded-lg text-left transition-all duration-300 font-source ${
                  formData.interestAreas.includes(interest)
                    ? 'border-secondary bg-secondary/10 text-secondary'
                    : 'border-border hover:border-secondary/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{interest}</span>
                  {formData.interestAreas.includes(interest) && (
                    <Icon name="CheckCircleIcon" size={20} className="text-secondary" />
                  )}
                </div>
              </button>
            ))}
          </div>
          {errors.interestAreas && (
            <p className="text-error text-xs mt-2 font-source">{errors.interestAreas}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="careerGoals"
            className="block text-sm font-medium text-foreground mb-2 font-source"
          >
            Career Goals & Aspirations (Optional)
          </label>
          <textarea
            id="careerGoals"
            name="careerGoals"
            value={formData.careerGoals}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-secondary transition-colors duration-300 font-source resize-none"
            placeholder="What does your child aspire to become?"
          />
        </div>

        <div>
          <label
            htmlFor="previousExperience"
            className="block text-sm font-medium text-foreground mb-2 font-source"
          >
            Previous Experience or Skills (Optional)
          </label>
          <textarea
            id="previousExperience"
            name="previousExperience"
            value={formData.previousExperience}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-secondary transition-colors duration-300 font-source resize-none"
            placeholder="Any relevant experience, courses, or skills..."
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
            className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-all duration-300 shadow-subtle disabled:opacity-50 disabled:cursor-not-allowed font-nunito flex items-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <span>Submit Enrollment</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CareerLabsForm;
