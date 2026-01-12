'use client';

interface AgeGroup {
  id: string;
  label: string;
  ageRange: string;
}

interface AgeFilterTabsProps {
  ageGroups: AgeGroup[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export default function AgeFilterTabs({
  ageGroups,
  activeTab,
  onTabChange,
}: AgeFilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {ageGroups.map((group) => (
        <button
          key={group.id}
          onClick={() => onTabChange(group.id)}
          className={`px-6 py-3 rounded-lg font-semibold text-sm transition-smooth ${
            activeTab === group.id
              ? 'bg-brand-orange text-brand-orange-foreground shadow-brand'
              : 'bg-muted text-muted-foreground hover:bg-border'
          }`}
        >
          <div className="flex flex-col items-center">
            <span>{group.label}</span>
            <span className="text-xs opacity-80">{group.ageRange}</span>
          </div>
        </button>
      ))}
    </div>
  );
}