'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import QuickActionCenter from './QuickActionCenter';
import PreschoolAdmissionForm from './PreschoolAdmissionForm';
import CareerLabsForm from './CareerLabsForm';
import FranchiseInquiryForm from './FranchiseInquiryForm';

interface ContactInteractiveProps {
  className?: string;
}

const ContactInteractive = ({ className = '' }: ContactInteractiveProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsHydrated(true);
    const type = searchParams.get('type');
    if (type) {
      setSelectedAction(type);
    }
  }, [searchParams]);

  if (!isHydrated) {
    return (
      <div className={className}>
        <div className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleActionSelect = (actionId: string) => {
    setSelectedAction(actionId);
  };

  const handleCloseForm = () => {
    setSelectedAction(null);
  };

  const renderForm = () => {
    switch (selectedAction) {
      case 'preschool':
        return <PreschoolAdmissionForm onClose={handleCloseForm} />;
      case 'career-labs':
        return <CareerLabsForm onClose={handleCloseForm} />;
      case 'franchise':
        return <FranchiseInquiryForm onClose={handleCloseForm} />;
      case 'dance':
      case 'music':
      case 'science-lab':
      case 'innovation-lab':
      case 'skills-development':
      case 'business-collaboration':
        return (
          <div className="bg-card rounded-2xl p-8 shadow-elevated text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">Coming Soon</h3>
            <p className="text-muted-foreground font-source mb-6">
              This form is currently under development. Please contact us directly for inquiries.
            </p>
            <button
              onClick={handleCloseForm}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-subtle font-nunito"
            >
              Back to Options
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={className}>
      {!selectedAction ? (
        <QuickActionCenter onActionSelect={handleActionSelect} />
      ) : (
        <div className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">{renderForm()}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactInteractive;
