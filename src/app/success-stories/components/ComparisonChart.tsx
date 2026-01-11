'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface ComparisonChartProps {
  data: {
    category: string;
    gyanhouz: number;
    traditional: number;
  }[];
}

export default function ComparisonChart({ data }: ComparisonChartProps) {
  return (
    <div className="bg-card rounded-xl shadow-subtle p-8">
      <h2 className="text-2xl font-bold text-foreground font-poppins mb-6">
        GYANHOUZ vs Traditional Education Outcomes
      </h2>
      <div
        className="w-full h-80"
        aria-label="Comparison chart showing GYANHOUZ students outperforming traditional education"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
            <XAxis
              dataKey="category"
              tick={{ fill: '#616161', fontSize: 12 }}
              axisLine={{ stroke: '#E0E0E0' }}
            />
            <YAxis
              tick={{ fill: '#616161', fontSize: 12 }}
              axisLine={{ stroke: '#E0E0E0' }}
              label={{
                value: 'Performance Score',
                angle: -90,
                position: 'insideLeft',
                fill: '#616161',
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E0E0E0',
                borderRadius: '8px',
                fontSize: '14px',
              }}
            />
            <Legend wrapperStyle={{ fontSize: '14px', fontWeight: 600 }} iconType="circle" />
            <Bar dataKey="gyanhouz" fill="#E65100" name="GYANHOUZ Students" radius={[8, 8, 0, 0]} />
            <Bar
              dataKey="traditional"
              fill="#9E9E9E"
              name="Traditional Education"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-sm text-muted-foreground font-source text-center mt-4">
        Data based on standardized assessments and skill evaluations conducted in 2025-2026
      </p>
    </div>
  );
}
