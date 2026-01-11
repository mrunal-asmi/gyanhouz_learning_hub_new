import Icon from '@/components/ui/AppIcon';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface AdmissionProcessProps {
  className?: string;
}

const AdmissionProcess = ({ className = '' }: AdmissionProcessProps) => {
  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Submit Application',
      description:
        'Fill out the appropriate form based on your program interest. Our team reviews all applications within 24 hours.',
      icon: 'DocumentTextIcon',
      color: 'from-primary to-brand-orange',
    },
    {
      number: '02',
      title: 'Initial Consultation',
      description:
        "Schedule a call with our admissions counselor to discuss your child's needs, interests, and program options.",
      icon: 'PhoneIcon',
      color: 'from-secondary to-brand-blue',
    },
    {
      number: '03',
      title: 'Campus Visit & Assessment',
      description:
        "Visit our facility for a guided tour and age-appropriate assessment to understand your child's current level.",
      icon: 'BuildingOfficeIcon',
      color: 'from-accent to-success',
    },
    {
      number: '04',
      title: 'Program Recommendation',
      description:
        "Receive personalized program recommendations based on assessment results and your child's unique potential.",
      icon: 'LightBulbIcon',
      color: 'from-warning to-brand-orange',
    },
    {
      number: '05',
      title: 'Enrollment & Onboarding',
      description:
        'Complete enrollment formalities and attend orientation session to understand our ecosystem and learning approach.',
      icon: 'CheckCircleIcon',
      color: 'from-success to-accent',
    },
  ];

  return (
    <section className={`py-16 lg:py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-poppins">
            Simple <span className="text-primary">Admission Process</span>
          </h2>
          <p className="text-lg text-muted-foreground font-source max-w-2xl mx-auto">
            From application to enrollment, we make the journey smooth and transparent.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group bg-card border-2 border-border rounded-2xl p-6 lg:p-8 hover:border-primary transition-all duration-300 hover:shadow-elevated"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  <div
                    className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-subtle group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon name={step.icon as any} size={32} className="text-white" />
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-4xl font-bold text-primary/20 font-poppins">
                        {step.number}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground font-poppins">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground font-source leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block flex-shrink-0">
                      <Icon
                        name="ArrowRightIcon"
                        size={24}
                        className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 lg:p-12 border-2 border-primary/20">
          <div className="text-center">
            <Icon name="InformationCircleIcon" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">
              Required Documents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                "Child's Birth Certificate",
                'Recent Passport-size Photos',
                "Parent's ID Proof (Aadhar/PAN)",
                'Address Proof',
                'Previous School Records (if applicable)',
                'Medical Records & Immunization',
              ].map((doc, index) => (
                <div key={index} className="flex items-center space-x-2 text-left">
                  <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0" />
                  <span className="text-sm text-foreground font-source">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
