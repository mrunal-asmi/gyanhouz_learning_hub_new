'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  inquiryType: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  childAge: string;
  preferredCampus: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

const inquiryTypes = [
  'Campus Tour Booking',
  'Admission Inquiry',
  'Franchise Opportunity',
  'Partnership Proposal',
  'General Inquiry',
];

const cities = ['Bangalore', 'Mumbai', 'Gurgaon', 'Hyderabad', 'Pune', 'Chennai', 'Other'];

const timeSlots = [
  '9:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '2:00 PM - 3:00 PM',
  '3:00 PM - 4:00 PM',
  '4:00 PM - 5:00 PM',
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    inquiryType: '',
    fullName: '',
    email: '',
    phone: '',
    city: '',
    childAge: '',
    preferredCampus: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        inquiryType: '',
        fullName: '',
        email: '',
        phone: '',
        city: '',
        childAge: '',
        preferredCampus: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="PencilSquareIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Get In Touch</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Book Your Campus Visit or Request Information
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and our admissions team will contact you within 2 hours
          </p>
        </div>

        {submitSuccess && (
          <div className="mb-8 p-6 bg-success/10 border border-success rounded-xl flex items-start space-x-4">
            <Icon name="CheckCircleIcon" size={24} className="text-success flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-success mb-1">Request Submitted Successfully!</h3>
              <p className="text-sm text-success/80">
                Thank you for your interest. Our team will contact you shortly at the provided email
                and phone number.
              </p>
            </div>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-2xl shadow-lg p-8 space-y-6"
        >
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Inquiry Type <span className="text-error">*</span>
            </label>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select inquiry type</option>
              {inquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Full Name <span className="text-error">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Email Address <span className="text-error">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Phone Number <span className="text-error">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                City <span className="text-error">*</span>
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select your city</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Child's Age (if applicable)
              </label>
              <input
                type="text"
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                placeholder="e.g., 4 years"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Preferred Campus
              </label>
              <input
                type="text"
                name="preferredCampus"
                value={formData.preferredCampus}
                onChange={handleChange}
                placeholder="e.g., Bangalore - Whitefield"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Preferred Visit Date
              </label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Preferred Time Slot
              </label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select time slot</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Additional Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us more about your requirements or questions..."
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
            <Icon
              name="InformationCircleIcon"
              size={20}
              className="text-primary flex-shrink-0 mt-0.5"
            />
            <p className="text-sm text-muted-foreground">
              By submitting this form, you agree to receive communications from GYANHOUZ regarding
              your inquiry. We respect your privacy and will never share your information with third
              parties.
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-brand-orange text-brand-orange-foreground font-bold text-lg rounded-lg shadow-brand hover:bg-brand-red hover:shadow-xl hover:-translate-y-0.5 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Submit Request</span>
                <Icon name="PaperAirplaneIcon" size={20} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
