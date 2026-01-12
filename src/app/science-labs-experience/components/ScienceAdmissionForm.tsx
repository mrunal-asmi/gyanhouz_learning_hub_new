'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ScienceAdmissionFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  parentName: string;
  email: string;
  phone: string;
  studentName: string;
  grade: string;
  city: string;
  subject: string;
  currentScore: string;
  preferredDate: string;
  message: string;
}

export default function ScienceAdmissionForm({ isOpen, onClose }: ScienceAdmissionFormProps) {
  const [formData, setFormData] = useState<FormData>({
    parentName: '',
    email: '',
    phone: '',
    studentName: '',
    grade: '',
    city: '',
    subject: '',
    currentScore: '',
    preferredDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const subjects = [
    'Physics',
    'Chemistry',
    'Biology',
    'All Sciences',
    'Environmental Science'
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
        studentName: '',
        grade: '',
        city: '',
        subject: '',
        currentScore: '',
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
        <div className="sticky top-0 bg-gradient-to-r from-brand-green to-brand-teal p-6 text-white flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">Science Labs Admission</h3>
            <p className="text-sm text-white/90">Book your first lab session</p>
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
                Student Name *
              </label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                placeholder="Student's full name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Current Grade *
              </label>
              <select
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
              >
                <option value="">Select grade</option>
                <option value="8th">8th Grade</option>
                <option value="9th">9th Grade</option>
                <option value="10th">10th Grade</option>
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

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Subject Focus *
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
              >
                <option value="">Select subject</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Current Science Score
              </label>
              <input
                type="text"
                name="currentScore"
                value={formData.currentScore}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                placeholder="e.g., 75% or B grade"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Preferred Lab Session Date
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
              placeholder="Any specific topics or concerns?"
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
              className="px-8 py-3 bg-brand-green text-white font-bold rounded-lg shadow-brand hover:bg-brand-teal hover:shadow-lg transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}