
import React, { useState } from 'react';
import { Tabs } from '@/components/ui/tabs';
import AppLayout from '@/layouts/AppLayout';
import Dashboard from '@/components/Dashboard';
import CaregiverView from '@/components/CaregiverView';

const Index = () => {
  const [activeTab, setActiveTab] = useState('elder');

  return (
    <AppLayout activeTab={activeTab} onTabChange={setActiveTab}>
      <Tabs value={activeTab} className="w-full">
        <Dashboard />
        <CaregiverView />
      </Tabs>
    </AppLayout>
  );
};

export default Index;
