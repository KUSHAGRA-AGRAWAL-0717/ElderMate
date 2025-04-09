
import React from 'react';
import { Shield, MapPin } from 'lucide-react';
import { useElder } from '@/contexts/ElderContext';
import AgentCard from './AgentCard';
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { activityData } from '@/utils/demoData';

const EmergencyAlert = () => {
  const { patient, emergencyMode, toggleEmergencyMode } = useElder();

  const handleEmergencyToggle = () => {
    toggleEmergencyMode();
  };

  return (
    <AgentCard 
      title="Emergency Monitor" 
      icon={<Shield />}
      status={patient.roomActivity}
      className="h-full"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-base font-medium">Room Activity</h4>
            <p className="text-sm text-gray-500">Last active: {patient.lastActive}</p>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm ${patient.roomActivity === 'normal' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
            {patient.roomActivity === 'normal' ? 'Active' : 'Low Activity'}
          </div>
        </div>
        
        <div className="h-32 mb-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={activityData}>
              <XAxis dataKey="time" tick={{fontSize: 10}} />
              <YAxis hide domain={[0, 'dataMax + 2']} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  borderRadius: '8px', 
                  fontSize: '12px' 
                }}
                formatter={(value) => [`${value} movements`, 'Activity']}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#5C96D4" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="p-3 bg-eldermate-light rounded-lg flex items-center gap-3">
          <div className="text-eldermate-blue">
            <MapPin size={20} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Current Location</p>
            <p className="text-xs text-gray-500">Living Room</p>
          </div>
        </div>
        
        <Button 
          variant={emergencyMode ? "destructive" : "outline"}
          className="w-full"
          onClick={handleEmergencyToggle}
        >
          {emergencyMode ? "Cancel Emergency Alert" : "Trigger Emergency Alert"}
        </Button>
      </div>
    </AgentCard>
  );
};

export default EmergencyAlert;
