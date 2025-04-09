
import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import HealthMonitor from './HealthMonitor';
import EmergencyAlert from './EmergencyAlert';
import RoutineManager from './RoutineManager';
import EmotionalSupport from './EmotionalSupport';
import AlertBanner from './AlertBanner';
import { useElder } from '@/contexts/ElderContext';

const Dashboard = () => {
  const { patient } = useElder();
  
  return (
    <TabsContent value="elder" className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">Hello, {patient.name}</h2>
        <p className="text-gray-500">Here's your health and wellness overview</p>
      </div>
      
      <AlertBanner />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <HealthMonitor />
        <EmergencyAlert />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RoutineManager />
        <EmotionalSupport />
      </div>
    </TabsContent>
  );
};

export default Dashboard;
