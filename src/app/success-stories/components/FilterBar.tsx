'use client';

import Icon from '@/components/ui/AppIcon';

interface FilterBarProps {
  selectedAge: string;
  selectedProgram: string;
  selectedCategory: string;
  onAgeChange: (age: string) => void;
  onProgramChange: (program: string) => void;
  onCategoryChange: (category: string) => void;
}

export default function FilterBar({
  selectedAge,
  selectedProgram,
  selectedCategory,
  onAgeChange,
  onProgramChange,
  onCategoryChange,
}: FilterBarProps) {
  const ageGroups = ['All Ages', '2-4 Years', '5-8 Years', '9-12 Years', '13-16 Years'];
  const programs = [
    'All Programs',
    'Preschool++',
    'Career Labs',
    'Innovation Lab',
    'Skills Development',
  ];
  const categories = [
    'All Achievements',
    'Academic Excellence',
    'Creative Arts',
    'STEM Innovation',
    'Leadership',
    'Sports',
  ];

  return (
    <div className="bg-card rounded-xl shadow-subtle p-6 space-y-4">
      <div className="flex items-center space-x-2 mb-4">
        <Icon name="FunnelIcon" size={24} className="text-primary" />
        <h3 className="text-lg font-semibold text-foreground font-poppins">
          Filter Success Stories
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2 font-source">
            Age Group
          </label>
          <select
            value={selectedAge}
            onChange={(e) => onAgeChange(e.target.value)}
            className="w-full px-4 py-2.5 bg-background border border-input rounded-lg text-foreground font-source focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          >
            {ageGroups.map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2 font-source">
            Program
          </label>
          <select
            value={selectedProgram}
            onChange={(e) => onProgramChange(e.target.value)}
            className="w-full px-4 py-2.5 bg-background border border-input rounded-lg text-foreground font-source focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          >
            {programs.map((program) => (
              <option key={program} value={program}>
                {program}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2 font-source">
            Achievement Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-4 py-2.5 bg-background border border-input rounded-lg text-foreground font-source focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
