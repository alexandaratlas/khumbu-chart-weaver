
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartData {
  type: 'pie' | 'bar' | 'line';
  data: Array<{
    category?: string;
    time?: string;
    value: number;
  }>;
  title?: string;
  axisXTitle?: string;
  axisYTitle?: string;
  width?: number;
  height?: number;
}

interface BarChartComponentProps {
  data: ChartData;
}

export const BarChartComponent = ({ data }: BarChartComponentProps) => {
  const chartData = data.data.map(item => ({
    name: item.category || item.time || 'Unknown',
    value: item.value
  }));

  return (
    <div className="w-full h-[500px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 80,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12, fill: '#64748b' }}
            angle={-45}
            textAnchor="end"
            height={100}
            interval={0}
          />
          <YAxis 
            tick={{ fontSize: 12, fill: '#64748b' }}
            label={{ 
              value: data.axisYTitle || 'Value', 
              angle: -90, 
              position: 'insideLeft',
              style: { textAnchor: 'middle', fill: '#64748b' }
            }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Legend />
          <Bar 
            dataKey="value" 
            fill="#3b82f6"
            radius={[4, 4, 0, 0]}
            className="hover:opacity-80 transition-opacity duration-200"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
