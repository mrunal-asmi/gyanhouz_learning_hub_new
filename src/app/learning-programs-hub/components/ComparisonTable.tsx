'use client';

import Icon from '@/components/ui/AppIcon';

interface ComparisonFeature {
  feature: string;
  oldSchool: string;
  gyanhouz: string;
}

interface ComparisonTableProps {
  features: ComparisonFeature[];
}

export default function ComparisonTable({ features }: ComparisonTableProps) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-brand">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted">
              <th className="px-6 py-4 text-left text-sm font-bold text-foreground">
                Learning Aspect
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-error">
                Traditional Schools
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-brand-green">
                GYANHOUZ Approach
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((item, index) => (
              <tr
                key={index}
                className={`border-t border-border ${
                  index % 2 === 0 ? 'bg-background' : 'bg-card'
                }`}
              >
                <td className="px-6 py-4 text-sm font-semibold text-foreground">
                  {item.feature}
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">
                  <div className="flex items-start space-x-2">
                    <Icon
                      name="XMarkIcon"
                      size={18}
                      className="text-error mt-0.5 flex-shrink-0"
                      variant="solid"
                    />
                    <span>{item.oldSchool}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-foreground">
                  <div className="flex items-start space-x-2">
                    <Icon
                      name="CheckCircleIcon"
                      size={18}
                      className="text-brand-green mt-0.5 flex-shrink-0"
                      variant="solid"
                    />
                    <span>{item.gyanhouz}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}