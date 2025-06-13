
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

interface LineChartComponentProps {
  data: ChartData;
}

export const LineChartComponent = ({ data }: LineChartComponentProps) => {
  const chartData = data.data.map(item => ({
    name: item.category || item.time || 'Unknown',
    value: item.value
  }));

  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 60,
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
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #1e40af',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#1e40af"
            strokeWidth={3}
            dot={{ fill: '#dc2626', strokeWidth: 2, r: 6 }}
            activeDot={{ r: 8, fill: '#a78bfa', stroke: '#1e40af' }}
            className="drop-shadow-sm"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
