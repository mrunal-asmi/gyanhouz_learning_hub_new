'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface StoryFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  ageGroup: string;
  programType: string;
  searchQuery: string;
}

const StoryFilters = ({ onFilterChange }: StoryFiltersProps) => {
  const [filters, setFilters] = useState<FilterState>({
    ageGroup: 'all',
    programType: 'all',
    searchQuery: '',
  });

  const ageGroups = [
    { value: 'all', label: 'All Ages' },
    { value: '2-4', label: '2-4 Years' },
    { value: '4-6', label: '4-6 Years' },
    { value: '6-10', label: '6-10 Years' },
  ];

  const programTypes = [
    { value: 'all', label: 'All Programs' },
    { value: 'preschool', label: 'Preschool Foundation' },
    { value: 'creativity', label: 'School of Creativity' },
    { value: 'innovation', label: 'Innovation Labs' },
    { value: 'career', label: 'Career Discovery' },
  ];

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const resetFilters = { ageGroup: 'all', programType: 'all', searchQuery: '' };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-card rounded-xl shadow-brand p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search Input */}
          <div className="relative">
            <Icon
              name="MagnifyingGlassIcon"
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search stories..."
              value={filters.searchQuery}
              onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-sm"
            />
          </div>

          {/* Age Group Filter */}
          <select
            value={filters.ageGroup}
            onChange={(e) => handleFilterChange('ageGroup', e.target.value)}
            className="px-4 py-2.5 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-sm bg-background"
          >
            {ageGroups.map((group) => (
              <option key={group.value} value={group.value}>
                {group.label}
              </option>
            ))}
          </select>

          {/* Program Type Filter */}
          <select
            value={filters.programType}
            onChange={(e) => handleFilterChange('programType', e.target.value)}
            className="px-4 py-2.5 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-sm bg-background"
          >
            {programTypes.map((program) => (
              <option key={program.value} value={program.value}>
                {program.label}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Filters Button */}
        {(filters.ageGroup !== 'all' || filters.programType !== 'all' || filters.searchQuery) && (
          <button
            onClick={clearFilters}
            className="flex items-center space-x-2 px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground border border-input rounded-lg hover:bg-muted transition-smooth"
          >
            <Icon name="XMarkIcon" size={16} />
            <span>Clear Filters</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default StoryFilters;