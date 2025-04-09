
import React, { ReactNode } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Home, Users } from 'lucide-react';

interface AppLayoutProps {
  children: ReactNode;
  activeTab: string;
  onTabChange: (value: string) => void;
}

const AppLayout = ({ children, activeTab, onTabChange }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-eldermate-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">E</span>
            </div>
            <h1 className="text-xl font-bold">ElderMate</h1>
          </div>
          <Tabs value={activeTab} onValueChange={onTabChange} className="w-auto">
            <TabsList className="grid grid-cols-2 w-[240px]">
              <TabsTrigger value="elder" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span>Elder View</span>
              </TabsTrigger>
              <TabsTrigger value="caregiver" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Caregiver</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </header>
      
      <main className="container py-6">
        {children}
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-4 mt-auto">
        <div className="container text-center text-sm text-gray-500">
          <p>&copy; 2025 ElderMate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
