import React from 'react';
import { Heart, Activity, Thermometer, Droplet, BarChart2, Moon, Brain, Battery } from 'lucide-react';
import VitalChart from '@/components/VitalChart';

const HealthVitals = () => {
  const vitals = [
    {
      name: 'Heart Rate',
      value: '72',
      unit: 'BPM',
      status: 'normal',
      icon: <Heart className="w-5 h-5" />,
      color: '#5C96D4'
    },
    {
      name: 'Blood Pressure',
      value: '120/80',
      unit: 'mmHg',
      status: 'normal',
      icon: <Activity className="w-5 h-5" />,
      color: '#62B6B7'
    },
    {
      name: 'Body Temperature',
      value: '98.6',
      unit: '°F',
      status: 'normal',
      icon: <Thermometer className="w-5 h-5" />,
      color: '#FF6B6B'
    },
    {
      name: 'Oxygen Saturation',
      value: '97',
      unit: '%',
      status: 'normal',
      icon: <BarChart2 className="w-5 h-5" />,
      color: '#9B87F5'
    },
    {
      name: 'Hydration',
      value: '64',
      unit: '%',
      status: 'warning',
      icon: <Droplet className="w-5 h-5" />,
      color: '#82C3A9'
    },
    {
      name: 'Sleep Quality',
      value: '85',
      unit: '%',
      status: 'normal',
      icon: <Moon className="w-5 h-5" />,
      color: '#8E9196'
    },
    {
      name: 'Cognitive Activity',
      value: '92',
      unit: '%',
      status: 'normal',
      icon: <Brain className="w-5 h-5" />,
      color: '#9B87F5'
    },
    {
      name: 'Battery Level',
      value: '76',
      unit: '%',
      status: 'normal',
      icon: <Battery className="w-5 h-5" />,
      color: '#5C96D4'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
        return 'bg-eldermate-green';
      case 'warning':
        return 'bg-yellow-400';
      case 'alert':
        return 'bg-eldermate-alert';
      default:
        return 'bg-eldermate-gray';
    }
  };

  return (
    <div className="bg-eldermate-navy min-h-screen">
      <div className="container mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-white mb-2">Health Vitals</h1>
          <p className="text-gray-400">Comprehensive health monitoring and tracking</p>
        </div>
        
        {/* Vitals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {vitals.map((vital, index) => (
            <div key={index} className="glass-card p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`text-[${vital.color}]`}>
                    {vital.icon}
                  </div>
                  <h3 className="text-white font-medium">{vital.name}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`h-3 w-3 rounded-full ${getStatusColor(vital.status)}`}></div>
                </div>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-white">{vital.value}</span>
                <span className="text-gray-400 mb-1">{vital.unit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="glass-card p-5">
            <h2 className="text-lg font-medium text-white mb-4">Heart Rate - Last 24 Hours</h2>
            <div className="h-72">
              <VitalChart vitalName="Heart Rate" />
            </div>
          </div>
          
          <div className="glass-card p-5">
            <h2 className="text-lg font-medium text-white mb-4">Blood Pressure - Last 24 Hours</h2>
            <div className="h-72">
              <VitalChart vitalName="Blood Pressure" />
            </div>
          </div>
        </div>
        
        {/* Historical Data */}
        <div className="glass-card p-5">
          <h2 className="text-lg font-medium text-white mb-4">Historical Data</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-gray-400 border-b border-eldermate-darkBlue/50">
                <tr>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Heart Rate</th>
                  <th className="px-4 py-3">Blood Pressure</th>
                  <th className="px-4 py-3">Temperature</th>
                  <th className="px-4 py-3">Oxygen</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, i) => {
                  const date = new Date();
                  date.setDate(date.getDate() - i);
                  return (
                    <tr key={i} className="border-b border-eldermate-darkBlue/30 text-white">
                      <td className="px-4 py-3">{date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</td>
                      <td className="px-4 py-3">{Math.floor(68 + Math.random() * 10)} BPM</td>
                      <td className="px-4 py-3">{Math.floor(115 + Math.random() * 10)}/{Math.floor(75 + Math.random() * 10)} mmHg</td>
                      <td className="px-4 py-3">{(97 + Math.random()).toFixed(1)} °F</td>
                      <td className="px-4 py-3">{Math.floor(95 + Math.random() * 5)}%</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 rounded-full text-xs bg-eldermate-dark text-eldermate-green">Normal</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthVitals;
