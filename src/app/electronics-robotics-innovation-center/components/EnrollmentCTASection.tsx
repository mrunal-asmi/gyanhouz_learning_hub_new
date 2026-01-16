'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  parentName: string;
  childName: string;
  childAge: string;
  phone: string;
  email: string;
  level: string;
  message: string;
}

export default function EnrollmentCTASection() {
  const [formData, setFormData] = useState<FormData>({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    email: '',
    level: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        parentName: '',
        childName: '',
        childAge: '',
        phone: '',
        email: '',
        level: '',
        message: '',
      });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-brand-blue via-primary to-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-orange rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-brand-red/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-pulse">
                <Icon name="FireIcon" size={20} />
                <span className="text-sm font-semibold">Limited Seats Available</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Enroll in Electronics & Robotics Lab
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Join India's most advanced technology learning center. Transform your child from
                consumer to creator.
              </p>
            </div>

            {/* Urgency Elements */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Icon name="ClockIcon" size={24} className="text-brand-orange flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Next Batch Starts: January 15, 2026</h3>
                  <p className="text-sm text-white/80">
                    Only 15 seats per batch for equipment access
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Icon name="UserGroupIcon" size={24} className="text-brand-teal flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">8 Seats Already Filled</h3>
                  <p className="text-sm text-white/80">
                    High demand for advanced technology programs
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Icon name="GiftIcon" size={24} className="text-brand-green flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Early Bird Offer: 20% Off</h3>
                  <p className="text-sm text-white/80">
                    Valid only for enrollments before January 10
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-brand-orange">1200+</div>
                <div className="text-sm text-white/80">Students Trained</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-teal">50+</div>
                <div className="text-sm text-white/80">Competition Wins</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-green">4.9/5</div>
                <div className="text-sm text-white/80">Parent Rating</div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">Reserve Your Seat Now</h3>

            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircleIcon" size={32} className="text-success" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  Enrollment Request Received!
                </h4>
                <p className="text-muted-foreground mb-6">
                  Our team will contact you within 24 hours to confirm your seat.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="text-brand-blue font-semibold hover:underline"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Parent Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-smooth"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Child Name *
                    </label>
                    <input
                      type="text"
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-smooth"
                      placeholder="Child's name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Child Age *
                    </label>
                    <input
                      type="number"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      required
                      min="6"
                      max="16"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-smooth"
                      placeholder="Age"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-smooth"
                      placeholder="10-digit mobile"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-smooth"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preferred Level *
                  </label>
                  <select
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-smooth"
                  >
                    <option value="">Select level</option>
                    <option value="foundation">Foundation (6-8 years)</option>
                    <option value="intermediate">Intermediate (9-11 years)</option>
                    <option value="advanced">Advanced (12-14 years)</option>
                    <option value="competition">Competition (13-16 years)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-smooth resize-none"
                    placeholder="Any specific questions or requirements?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-brand-orange text-white font-semibold rounded-lg shadow-brand hover:bg-brand-red hover:shadow-lg hover:-translate-y-0.5 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Icon name="RocketLaunchIcon" size={20} />
                      <span>Reserve My Seat</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to receive communication from GYANHOUZ
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
