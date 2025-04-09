
import React from 'react';
import { useElder } from '@/contexts/ElderContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Phone, Bell, FileText, MessageSquare } from 'lucide-react';
import AlertBanner from './AlertBanner';

const CaregiverView = () => {
  const { patient, healthData, medications, alerts } = useElder();
  
  const criticalVitals = healthData.filter(vital => vital.status === 'warning' || vital.status === 'alert');
  const unTakenMeds = medications.filter(med => !med.taken && med.nextDose.includes('Today'));
  
  return (
    <TabsContent value="caregiver" className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Caregiver Dashboard</h2>
        <div>
          <Button className="gap-2">
            <Phone className="h-4 w-4" />
            <span>Call Eleanor</span>
          </Button>
        </div>
      </div>
      
      <AlertBanner />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Status Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-1 border-b">
                <span className="text-sm text-gray-600">Room Activity</span>
                <span className={`text-sm font-medium ${patient.roomActivity === 'normal' ? 'text-green-600' : 'text-yellow-600'}`}>
                  {patient.roomActivity === 'normal' ? 'Active' : 'Low Activity'}
                </span>
              </div>
              <div className="flex justify-between items-center py-1 border-b">
                <span className="text-sm text-gray-600">Vital Signs</span>
                <span className={`text-sm font-medium ${criticalVitals.length > 0 ? 'text-yellow-600' : 'text-green-600'}`}>
                  {criticalVitals.length > 0 ? `${criticalVitals.length} Needs Attention` : 'Normal'}
                </span>
              </div>
              <div className="flex justify-between items-center py-1 border-b">
                <span className="text-sm text-gray-600">Medication</span>
                <span className={`text-sm font-medium ${unTakenMeds.length > 0 ? 'text-yellow-600' : 'text-green-600'}`}>
                  {unTakenMeds.length > 0 ? `${unTakenMeds.length} Missed` : 'All Taken'}
                </span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm text-gray-600">Last Check-In</span>
                <span className="text-sm font-medium">2 hours ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Recent Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            {alerts.length > 0 ? (
              <div className="space-y-2">
                {alerts.map((alert, index) => (
                  <div key={index} className="flex items-start gap-2 py-1 border-b last:border-0">
                    <Bell className="h-4 w-4 text-yellow-500 mt-0.5" />
                    <div>
                      <p className="text-sm">{alert}</p>
                      <p className="text-xs text-gray-500">Today, 2:45 PM</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No recent alerts</p>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="h-auto py-2 justify-start gap-2">
                <Bell className="h-4 w-4" />
                <div className="text-left">
                  <p className="text-xs font-normal">Send</p>
                  <p className="text-sm">Reminder</p>
                </div>
              </Button>
              <Button variant="outline" className="h-auto py-2 justify-start gap-2">
                <MessageSquare className="h-4 w-4" />
                <div className="text-left">
                  <p className="text-xs font-normal">Send</p>
                  <p className="text-sm">Message</p>
                </div>
              </Button>
              <Button variant="outline" className="h-auto py-2 justify-start gap-2">
                <FileText className="h-4 w-4" />
                <div className="text-left">
                  <p className="text-xs font-normal">View</p>
                  <p className="text-sm">Reports</p>
                </div>
              </Button>
              <Button variant="outline" className="h-auto py-2 justify-start gap-2">
                <Phone className="h-4 w-4" />
                <div className="text-left">
                  <p className="text-xs font-normal">Emergency</p>
                  <p className="text-sm">Contacts</p>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Vital Signs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {healthData.map((vital, index) => (
                <div key={index} className="flex justify-between items-center py-1 border-b last:border-0">
                  <span className="text-sm text-gray-600">{vital.name}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${
                      vital.status === 'normal' ? 'text-green-600' : 
                      vital.status === 'warning' ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {vital.value}{vital.unit}
                    </span>
                    <div className={`status-indicator status-${vital.status}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Medications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {medications.map((med) => (
                <div key={med.id} className="flex justify-between items-center py-1 border-b last:border-0">
                  <div>
                    <p className="text-sm">{med.name} {med.dosage}</p>
                    <p className="text-xs text-gray-500">{med.nextDose}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${med.taken ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {med.taken ? 'Taken' : 'Due'}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  );
};

export default CaregiverView;
