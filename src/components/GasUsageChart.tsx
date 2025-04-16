
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Sample data
const demoData = [
  { name: 'Mon', usage: 24 },
  { name: 'Tue', usage: 13 },
  { name: 'Wed', usage: 28 },
  { name: 'Thu', usage: 39 },
  { name: 'Fri', usage: 22 },
  { name: 'Sat', usage: 18 },
  { name: 'Sun', usage: 16 },
];

interface GasUsageChartProps {
  title?: string;
  data?: Array<{ name: string; usage: number }>;
  period?: 'daily' | 'weekly' | 'monthly';
}

const GasUsageChart: React.FC<GasUsageChartProps> = ({ 
  title = "Gas Consumption", 
  data = demoData,
  period = 'daily'
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="text-sm text-muted-foreground">{period.charAt(0).toUpperCase() + period.slice(1)} consumption</div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  border: 'none',
                }}
              />
              <Area
                type="monotone"
                dataKey="usage"
                stroke="#1E88E5"
                fill="#1E88E5"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default GasUsageChart;
