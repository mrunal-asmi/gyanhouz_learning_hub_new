'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  childAge: string;
  preferredProgram: string;
  preferredStartDate: string;
  message: string;
}

interface ProgramAdmissionFormProps {
  programName: string;
  className?: string;
}

const ProgramAdmissionForm = ({ programName, className = '' }: ProgramAdmissionFormProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    preferredProgram: programName,
    preferredStartDate: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');

    setTimeout(() => {
      setSubmitStatus('idle');
      setFormData({
        parentName: '',
        email: '',
        phone: '',
        childName: '',
        childAge: '',
        preferredProgram: programName,
        preferredStartDate: '',
        message: '',
      });
    }, 3000);
  };

  if (!isHydrated) {
    return (
      <div className="animate-pulse space-y-4 p-8 bg-white rounded-2xl shadow-elevated">
        <div className="h-8 bg-muted rounded w-3/4"></div>
        <div className="h-4 bg-muted rounded w-1/2"></div>
        <div className="space-y-3 pt-6">
          <div className="h-12 bg-muted rounded"></div>
          <div className="h-12 bg-muted rounded"></div>
          <div className="h-12 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl shadow-elevated p-8 lg:p-12 ${className}`}>
      {submitStatus === 'success' ? (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="CheckCircleIcon" size={48} className="text-success" />
          </div>
          <h3 className="text-3xl font-bold text-foreground font-poppins mb-4">
            Application Received!
          </h3>
          <p className="text-lg text-muted-foreground font-source mb-8">
            Thank you for applying to our {programName}. Our admissions team will contact you
            within 24 hours.
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 font-nunito"
          >
            Submit Another Application
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="parentName"
                className="block text-sm font-semibold text-foreground font-poppins mb-2"
              >
                Parent/Guardian Name *
              </label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-source"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-foreground font-poppins mb-2"
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
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-source"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-foreground font-poppins mb-2"
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
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-source"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label
                htmlFor="childName"
                className="block text-sm font-semibold text-foreground font-poppins mb-2"
              >
                Child's Name *
              </label>
              <input
                type="text"
                id="childName"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-source"
                placeholder="Enter child's full name"
              />
            </div>

            <div>
              <label
                htmlFor="childAge"
                className="block text-sm font-semibold text-foreground font-poppins mb-2"
              >
                Child's Age *
              </label>
              <input
                type="text"
                id="childAge"
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-source"
                placeholder="e.g. 3 years"
              />
            </div>

            <div>
              <label
                htmlFor="preferredProgram"
                className="block text-sm font-semibold text-foreground font-poppins mb-2"
              >
                Program
              </label>
              <input
                type="text"
                id="preferredProgram"
                name="preferredProgram"
                value={formData.preferredProgram}
                readOnly
                className="w-full px-4 py-3 border border-border rounded-lg bg-muted font-source"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="preferredStartDate"
                className="block text-sm font-semibold text-foreground font-poppins mb-2"
              >
                Preferred Start Date *
              </label>
              <input
                type="date"
                id="preferredStartDate"
                name="preferredStartDate"
                value={formData.preferredStartDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-source"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-foreground font-poppins mb-2"
              >
                Additional Information (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-source resize-none"
                placeholder="Any specific requirements or questions?"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary/90 transition-all duration-300 shadow-subtle disabled:opacity-50 disabled:cursor-not-allowed font-nunito flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Apply for {programName}</span>
                <Icon name="ArrowRightIcon" size={20} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ProgramAdmissionForm;
