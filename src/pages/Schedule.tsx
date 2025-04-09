
import React from 'react';
import { Calendar as CalendarIcon, Clock, Pill, Plus, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';

const Schedule = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  const todaysEvents = [
    { id: 1, time: '08:00 AM', title: 'Blood Pressure Medication', completed: true, type: 'medication' },
    { id: 2, time: '09:30 AM', title: 'Breakfast', completed: true, type: 'meal' },
    { id: 3, time: '11:00 AM', title: 'Doctor Appointment', completed: false, type: 'appointment' },
    { id: 4, time: '01:00 PM', title: 'Lunch', completed: false, type: 'meal' },
    { id: 5, time: '02:30 PM', title: 'Heart Medication', completed: false, type: 'medication' },
    { id: 6, time: '04:00 PM', title: 'Walk in the Garden', completed: false, type: 'activity' },
    { id: 7, time: '06:00 PM', title: 'Dinner', completed: false, type: 'meal' },
    { id: 8, time: '09:00 PM', title: 'Evening Medication', completed: false, type: 'medication' },
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'medication':
        return <Pill className="h-4 w-4 text-eldermate-highlight" />;
      case 'appointment':
        return <Clock className="h-4 w-4 text-eldermate-teal" />;
      case 'meal':
        return <div className="h-4 w-4 rounded-full bg-eldermate-green" />;
      case 'activity':
        return <div className="h-4 w-4 rounded-full bg-eldermate-purple" />;
      default:
        return <div className="h-4 w-4 rounded-full bg-gray-400" />;
    }
  };

  return (
    <div className="bg-eldermate-navy min-h-screen">
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-white mb-2">Schedule</h1>
            <p className="text-gray-400">Manage daily activities, medications and appointments</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button className="bg-eldermate-highlight hover:bg-eldermate-highlight/90">
              <Plus className="mr-2 h-4 w-4" /> Add New Item
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <div className="glass-card p-5">
            <h2 className="text-lg font-medium text-white mb-4">Calendar</h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="bg-eldermate-dark rounded-md p-3"
            />
            
            <div className="mt-4">
              <h3 className="text-white font-medium mb-2">Legend</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-eldermate-highlight mr-2" />
                  <span className="text-gray-400 text-sm">Medication</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-eldermate-teal mr-2" />
                  <span className="text-gray-400 text-sm">Appointment</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-eldermate-green mr-2" />
                  <span className="text-gray-400 text-sm">Meal</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-eldermate-purple mr-2" />
                  <span className="text-gray-400 text-sm">Activity</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Today's Schedule */}
          <div className="lg:col-span-2 glass-card p-5">
            <h2 className="text-lg font-medium text-white mb-4">
              Today's Schedule - {date?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </h2>
            
            <div className="space-y-4">
              {todaysEvents.map(event => (
                <div 
                  key={event.id} 
                  className={`flex items-center p-3 rounded-lg ${
                    event.completed 
                      ? 'bg-eldermate-darkBlue/30 opacity-60' 
                      : 'bg-eldermate-dark'
                  }`}
                >
                  <div className="flex-shrink-0 mr-3">
                    <Checkbox id={`event-${event.id}`} checked={event.completed} />
                  </div>
                  
                  <div className="flex-grow mr-4">
                    <div className="flex items-center">
                      {getEventIcon(event.type)}
                      <span className="text-white font-medium ml-2">{event.title}</span>
                    </div>
                  </div>
                  
                  <div className="text-gray-400 text-sm">{event.time}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-end">
              <Button variant="outline" className="border-eldermate-darkBlue text-white hover:bg-eldermate-darkBlue/50 mr-3">
                Reschedule
              </Button>
              <Button className="bg-eldermate-highlight hover:bg-eldermate-highlight/90">
                Mark All Complete
              </Button>
            </div>
          </div>
        </div>
        
        {/* Upcoming Events */}
        <div className="glass-card p-5 mt-6">
          <h2 className="text-lg font-medium text-white mb-4">Upcoming Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-eldermate-dark p-4 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <div className="bg-eldermate-teal/20 p-2 rounded">
                  <CalendarIcon className="h-4 w-4 text-eldermate-teal" />
                </div>
                <span className="text-eldermate-teal text-sm">Tomorrow</span>
              </div>
              <h3 className="text-white font-medium mb-1">Cardiology Checkup</h3>
              <p className="text-gray-400 text-sm">Dr. Johnson, 10:30 AM</p>
            </div>
            
            <div className="bg-eldermate-dark p-4 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <div className="bg-eldermate-purple/20 p-2 rounded">
                  <Users className="h-4 w-4 text-eldermate-purple" />
                </div>
                <span className="text-eldermate-purple text-sm">In 2 days</span>
              </div>
              <h3 className="text-white font-medium mb-1">Family Visit</h3>
              <p className="text-gray-400 text-sm">Sarah and kids, 3:00 PM</p>
            </div>
            
            <div className="bg-eldermate-dark p-4 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <div className="bg-eldermate-highlight/20 p-2 rounded">
                  <Pill className="h-4 w-4 text-eldermate-highlight" />
                </div>
                <span className="text-eldermate-highlight text-sm">In 3 days</span>
              </div>
              <h3 className="text-white font-medium mb-1">Prescription Refill</h3>
              <p className="text-gray-400 text-sm">Heart medication, Pharmacy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
