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

interface AdmissionFormProps {
  className?: string;
}

const AdmissionForm = ({ className = '' }: AdmissionFormProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    preferredProgram: '',
    preferredStartDate: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const ageGroups = [
    { value: '2-3', label: '2-3 Years' },
    { value: '3-4', label: '3-4 Years' },
    { value: '4-5', label: '4-5 Years' },
    { value: '5-6', label: '5-6 Years' },
  ];

  const programs = [
    { value: 'full-day', label: 'Full Day Program (8 AM - 2 PM)' },
    { value: 'half-day', label: 'Half Day Program (8 AM - 12 PM)' },
    { value: 'extended', label: 'Extended Care (8 AM - 5 PM)' },
  ];

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
        preferredProgram: '',
        preferredStartDate: '',
        message: '',
      });
    }, 3000);
  };

  if (!isHydrated) {
    return (
      <section
        className={`py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5 ${className}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-elevated p-8 lg:p-12">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="space-y-3 pt-6">
                <div className="h-12 bg-muted rounded"></div>
                <div className="h-12 bg-muted rounded"></div>
                <div className="h-12 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5 ${className}`}
    >
      <div className="w-full px-4 lg:px-12">
        <div className="text-center max-w-full mx-auto mb-16">
          <div className="inline-flex items-center space-x-4 bg-primary/10 px-6 md:px-8 py-3 md:py-4 rounded-full mb-8">
            <Icon name="DocumentTextIcon" size={40} className="text-primary scale-75 md:scale-100" />
            <span className="text-2xl md:text-5xl font-semibold text-primary font-poppins whitespace-nowrap">
              Secure Your Child's Future
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-foreground font-poppins mb-8">
            Start Your Child's <span className="text-primary">Transformation</span> Today
          </h2>

          <p className="text-xl lg:text-2xl text-muted-foreground font-source max-w-4xl mx-auto">
            Limited seats available. Fill out the form below and our admissions team will contact
            you within 24 hours.
          </p>
        </div>

        <div className="max-w-full mx-auto">
          <div className="bg-white rounded-2xl shadow-elevated p-8 lg:p-16">
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="CheckCircleIcon" size={48} className="text-success" />
                </div>
                <h3 className="text-4xl font-bold text-foreground font-poppins mb-6">
                  Application Submitted Successfully!
                </h3>
                <p className="text-xl text-muted-foreground font-source mb-8">
                  Thank you for your interest in GYANHOUZ. Our admissions team will contact you
                  within 24 hours to schedule a campus tour and discuss the next steps.
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
                      className="block text-lg font-semibold text-foreground font-poppins mb-2"
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
                      className="w-full px-4 py-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-source text-lg"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-semibold text-foreground font-poppins mb-2"
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
                      className="w-full px-4 py-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-source text-lg"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-lg font-semibold text-foreground font-poppins mb-2"
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
                      className="w-full px-4 py-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-source text-lg"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="childName"
                      className="block text-lg font-semibold text-foreground font-poppins mb-2"
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
                      className="w-full px-4 py-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-source text-lg"
                      placeholder="Enter child's full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="childAge"
                      className="block text-lg font-semibold text-foreground font-poppins mb-2"
                    >
                      Child's Age Group *
                    </label>
                    <select
                      id="childAge"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-source text-lg"
                    >
                      <option value="">Select age group</option>
                      {ageGroups.map((group) => (
                        <option key={group.value} value={group.value}>
                          {group.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="preferredProgram"
                      className="block text-lg font-semibold text-foreground font-poppins mb-2"
                    >
                      Preferred Program *
                    </label>
                    <select
                      id="preferredProgram"
                      name="preferredProgram"
                      value={formData.preferredProgram}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-source text-lg"
                    >
                      <option value="">Select program</option>
                      {programs.map((program) => (
                        <option key={program.value} value={program.value}>
                          {program.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="preferredStartDate"
                      className="block text-lg font-semibold text-foreground font-poppins mb-2"
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
                      className="w-full px-4 py-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-source text-lg"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-lg font-semibold text-foreground font-poppins mb-2"
                    >
                      Additional Information (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-source resize-none text-lg"
                      placeholder="Any specific requirements or questions?"
                    />
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-primary/5 rounded-lg">
                  <Icon
                    name="InformationCircleIcon"
                    size={24}
                    className="text-primary flex-shrink-0 mt-0.5"
                  />
                  <p className="text-lg text-muted-foreground font-source">
                    By submitting this form, you agree to be contacted by GYANHOUZ regarding
                    admission details and campus tours. We respect your privacy and will never share
                    your information with third parties.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-10 py-6 bg-primary text-primary-foreground rounded-lg font-bold text-2xl hover:bg-primary/90 transition-all duration-300 shadow-elevated hover:shadow-elevated-hover disabled:opacity-50 disabled:cursor-not-allowed font-nunito flex items-center justify-center space-x-3"
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Admission Application</span>
                      <Icon name="ArrowRightIcon" size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionForm;
