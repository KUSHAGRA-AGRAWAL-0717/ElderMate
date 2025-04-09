
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { healthDataHistory } from '@/utils/demoData';

interface VitalChartProps {
  vitalName: string;
}

const VitalChart = ({ vitalName }: VitalChartProps) => {
  const data = healthDataHistory[vitalName as keyof typeof healthDataHistory] || [];
  
  const getStrokeColor = () => {
    switch (vitalName) {
      case 'Heart Rate':
        return '#FF6B6B';
      case 'Blood Pressure':
        return '#5C96D4';
      case 'Blood Oxygen':
        return '#82C3A9';
      case 'Temperature':
        return '#9B87F5';
      default:
        return '#5C96D4';
    }
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
        <XAxis dataKey="time" tick={{fontSize: 10}} />
        <YAxis hide domain={['dataMin - 5', 'dataMax + 5']} />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            padding: '8px',
            fontSize: '12px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            border: 'none' 
          }}
        />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke={getStrokeColor()} 
          strokeWidth={2}
          dot={{ r: 2 }}
          activeDot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default VitalChart;
