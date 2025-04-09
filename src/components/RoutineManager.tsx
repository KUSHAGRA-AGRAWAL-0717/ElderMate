
import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { useElder } from '@/contexts/ElderContext';
import AgentCard from './AgentCard';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const RoutineManager = () => {
  const { medications, appointments, markMedicationTaken } = useElder();
  
  // Determine overall status based on missed medications
  const getOverallStatus = () => {
    const missedMeds = medications.filter(med => !med.taken && med.nextDose.includes('Today'));
    return missedMeds.length > 0 ? 'warning' : 'normal';
  };

  // Get today's and upcoming medications
  const todaysMeds = medications.filter(med => med.nextDose.includes('Today'));
  const upcomingMeds = medications.filter(med => !med.nextDose.includes('Today'));
  
  // Get upcoming appointments (showing only 2)
  const upcomingAppointments = appointments.slice(0, 2);

  return (
    <AgentCard 
      title="Routine Manager" 
      icon={<Clock />}
      status={getOverallStatus()}
      className="h-full"
    >
      <div className="space-y-4">
        <div>
          <h4 className="text-base font-medium mb-2">Today's Medications</h4>
          {todaysMeds.length > 0 ? (
            <div className="space-y-2">
              {todaysMeds.map((med) => (
                <div key={med.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Checkbox 
                      checked={med.taken} 
                      id={`med-${med.id}`}
                      onCheckedChange={() => markMedicationTaken(med.id)}
                    />
                    <div>
                      <label 
                        htmlFor={`med-${med.id}`}
                        className="text-sm font-medium cursor-pointer"
                      >
                        {med.name} {med.dosage}
                      </label>
                      <p className="text-xs text-gray-500">{med.nextDose}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${med.taken ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {med.taken ? 'Taken' : 'Due'}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">No medications scheduled for today</p>
          )}
        </div>
        
        <div>
          <h4 className="text-base font-medium mb-2">Upcoming Appointments</h4>
          {upcomingAppointments.length > 0 ? (
            <div className="space-y-2">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="p-3 border border-gray-100 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-eldermate-purple" />
                    <h5 className="text-sm font-medium">{appointment.title}</h5>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">
                    {appointment.date} at {appointment.time}
                  </p>
                  <p className="text-xs text-gray-500">{appointment.location}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">No upcoming appointments</p>
          )}
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            Add Medication
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Add Appointment
          </Button>
        </div>
      </div>
    </AgentCard>
  );
};

export default RoutineManager;
