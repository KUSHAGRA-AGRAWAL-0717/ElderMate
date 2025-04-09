
import React from 'react';
import { Activity } from 'lucide-react';
import { useElder } from '@/contexts/ElderContext';
import AgentCard from './AgentCard';
import VitalChart from './VitalChart';

const HealthMonitor = () => {
  const { healthData } = useElder();
  
  // Determine overall status based on vital signs
  const getOverallStatus = () => {
    if (healthData.some(vital => vital.status === 'alert')) return 'alert';
    if (healthData.some(vital => vital.status === 'warning')) return 'warning';
    return 'normal';
  };

  return (
    <AgentCard 
      title="Health Monitor" 
      icon={<Activity />}
      status={getOverallStatus()}
      className="h-full"
    >
      <div className="space-y-4">
        {healthData.map((vital, index) => (
          <div key={index} className="border-b border-gray-100 pb-2 last:border-0">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium">{vital.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold">{vital.value}{vital.unit}</span>
                <div className={`status-indicator status-${vital.status}`}></div>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              <span>Normal range: {vital.min} - {vital.max}{vital.unit}</span>
              <span className="ml-4">Updated: {vital.time}</span>
            </div>
            <div className="mt-2 h-16">
              <VitalChart vitalName={vital.name} />
            </div>
          </div>
        ))}
      </div>
    </AgentCard>
  );
};

export default HealthMonitor;
