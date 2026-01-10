import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface ComparisonItem {
  category: string;
  oldSchool: string;
  newSchool: string;
}

export default function ComparisonSection() {
  const comparisons: ComparisonItem[] = [
    {
      category: 'Learning Approach',
      oldSchool: 'Rote memorization and textbook-based',
      newSchool: 'Hands-on experimentation and discovery'
    },
    {
      category: 'Skill Development',
      oldSchool: 'Focus on exam scores only',
      newSchool: 'Critical thinking, creativity, problem-solving'
    },
    {
      category: 'Career Preparation',
      oldSchool: 'Guess careers from books',
      newSchool: 'Experience real careers through simulations'
    },
    {
      category: 'Innovation',
      oldSchool: 'Imagine concepts theoretically',
      newSchool: 'Build robots, circuits, and experiments'
    },
    {
      category: 'Assessment',
      oldSchool: 'Written tests measure memory',
      newSchool: 'Project-based evaluation of understanding'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-warning/10 text-warning px-4 py-2 rounded-full mb-4">
            <Icon name="LightBulbIcon" size={20} variant="solid" />
            <span className="text-sm font-semibold">The GYANHOUZ Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Old School vs New School
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Why traditional education is failing our children and how we're revolutionizing learning
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-card rounded-2xl shadow-brand overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-error/10 via-warning/10 to-success/10 border-b border-border">
            <div className="font-bold text-foreground">Category</div>
            <div className="flex items-center space-x-2">
              <Icon name="XCircleIcon" size={24} className="text-error" variant="solid" />
              <span className="font-bold text-error">Old School</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircleIcon" size={24} className="text-success" variant="solid" />
              <span className="font-bold text-success">GYANHOUZ Way</span>
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisons.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 gap-4 p-6 ${
                index !== comparisons.length - 1 ? 'border-b border-border' : ''
              } hover:bg-muted/30 transition-smooth`}
            >
              <div className="font-semibold text-foreground">{item.category}</div>
              <div className="text-muted-foreground">{item.oldSchool}</div>
              <div className="text-foreground font-medium">{item.newSchool}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Don't let your child fall behind with outdated education methods
          </p>
          <Link
            href="/contact-campus-locator"
            className="inline-flex items-center px-8 py-4 bg-brand-orange text-brand-orange-foreground font-bold text-lg rounded-lg shadow-brand hover:bg-brand-red hover:shadow-lg hover:-translate-y-1 transition-smooth"
          >
            <Icon name="RocketLaunchIcon" size={24} className="mr-2" />
            Start Your Child's Transformation
          </Link>
        </div>
      </div>
    </section>
  );
}