
import React, { useState } from 'react';
import { AlertTriangle, Clock, MapPin, Filter, ArrowUpDown, Eye, User, BadgeAlert, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const EmergencyLogs = () => {
  const [dateFilter, setDateFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  
  const emergencyEvents = [
    {
      id: 1,
      type: 'fall',
      severity: 'high',
      date: '2025-04-06T15:30:00',
      location: 'Living Room',
      description: 'Fall detected with high impact. Emergency contacts notified automatically.',
      response: 'Caregiver arrived within 15 minutes. Medical attention provided. No hospitalization required.',
      resolved: true
    },
    {
      id: 2,
      type: 'inactivity',
      severity: 'medium',
      date: '2025-04-05T09:45:00',
      location: 'Bedroom',
      description: 'Unusual inactivity detected in the morning. No movement for 2 hours during normal active period.',
      response: 'Voice check performed via system. Patient responded and confirmed they were feeling tired but fine.',
      resolved: true
    },
    {
      id: 3,
      type: 'vital',
      severity: 'medium',
      date: '2025-04-03T14:15:00',
      location: 'Kitchen',
      description: 'Elevated heart rate (110 BPM) detected during rest period, persisted for over 30 minutes.',
      response: 'Telehealth consultation scheduled. Doctor suggested medication adjustment.',
      resolved: true
    },
    {
      id: 4,
      type: 'medication',
      severity: 'low',
      date: '2025-04-01T18:00:00',
      location: 'Dining Room',
      description: 'Evening medication dose missed. Multiple reminders sent with no response.',
      response: 'Phone call made to patient. Medication taken with 2-hour delay.',
      resolved: true
    },
    {
      id: 5,
      type: 'fall',
      severity: 'medium',
      date: '2025-03-28T11:20:00',
      location: 'Bathroom',
      description: 'Minor fall detected. Patient able to get up unassisted.',
      response: 'Voice check performed. Patient confirmed being fine. Follow-up scheduled with physical therapist.',
      resolved: true
    }
  ];
  
  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-eldermate-alert text-white';
      case 'medium':
        return 'bg-yellow-500 text-white';
      case 'low':
        return 'bg-eldermate-green text-white';
      default:
        return 'bg-eldermate-gray text-white';
    }
  };
  
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'fall':
        return <AlertTriangle className="h-5 w-5 text-eldermate-alert" />;
      case 'inactivity':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'vital':
        return <Activity className="h-5 w-5 text-eldermate-teal" />;
      case 'medication':
        return <BadgeAlert className="h-5 w-5 text-eldermate-highlight" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-eldermate-alert" />;
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const filteredEvents = emergencyEvents
    .filter(event => {
      if (dateFilter === 'all') return true;
      const eventDate = new Date(event.date);
      const today = new Date();
      
      if (dateFilter === 'today') {
        return eventDate.toDateString() === today.toDateString();
      } else if (dateFilter === 'week') {
        const weekAgo = new Date();
        weekAgo.setDate(today.getDate() - 7);
        return eventDate >= weekAgo;
      } else if (dateFilter === 'month') {
        const monthAgo = new Date();
        monthAgo.setMonth(today.getMonth() - 1);
        return eventDate >= monthAgo;
      }
      return true;
    })
    .filter(event => {
      if (typeFilter === 'all') return true;
      return event.type === typeFilter;
    });

  return (
    <div className="bg-eldermate-navy min-h-screen">
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-white mb-2">Emergency Logs</h1>
            <p className="text-gray-400">Review historical emergency events and responses</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex gap-3">
            <Button variant="outline" className="border-eldermate-darkBlue text-white hover:bg-eldermate-darkBlue/50">
              Export Report
            </Button>
            <Button className="bg-eldermate-highlight hover:bg-eldermate-highlight/90">
              Configure Alerts
            </Button>
          </div>
        </div>
        
        <div className="glass-card p-5 mb-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-grow relative">
              <Input 
                placeholder="Search emergency logs..." 
                className="auth-input pl-10"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Eye className="h-5 w-5" />
              </div>
            </div>
            
            <div className="flex gap-3">
              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger className="w-36 bg-eldermate-dark text-white border-eldermate-darkBlue">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Time Period" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-eldermate-dark border-eldermate-darkBlue">
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">Past Week</SelectItem>
                  <SelectItem value="month">Past Month</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-36 bg-eldermate-dark text-white border-eldermate-darkBlue">
                  <div className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Event Type" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-eldermate-dark border-eldermate-darkBlue">
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="fall">Fall</SelectItem>
                  <SelectItem value="inactivity">Inactivity</SelectItem>
                  <SelectItem value="vital">Vital Signs</SelectItem>
                  <SelectItem value="medication">Medication</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-gray-400 border-b border-eldermate-darkBlue/50">
                <tr>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Severity</th>
                  <th className="px-4 py-3">
                    <div className="flex items-center cursor-pointer hover:text-white">
                      Date & Time
                      <ArrowUpDown className="ml-1 h-3 w-3" />
                    </div>
                  </th>
                  <th className="px-4 py-3">Location</th>
                  <th className="px-4 py-3">Description</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEvents.length > 0 ? (
                  filteredEvents.map(event => (
                    <tr key={event.id} className="border-b border-eldermate-darkBlue/30 text-white">
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          {getTypeIcon(event.type)}
                          <span className="ml-2 capitalize">{event.type}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${getSeverityClass(event.severity)}`}>
                          {event.severity.charAt(0).toUpperCase() + event.severity.slice(1)}
                        </span>
                      </td>
                      <td className="px-4 py-3">{formatDate(event.date)}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                          {event.location}
                        </div>
                      </td>
                      <td className="px-4 py-3 max-w-xs truncate">{event.description}</td>
                      <td className="px-4 py-3">
                        <Button size="sm" variant="outline" className="border-eldermate-darkBlue text-white hover:bg-eldermate-darkBlue/50">
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-4 py-6 text-center text-gray-400">
                      No emergency events found for the selected filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Emergency Response Analysis */}
        <div className="glass-card p-5">
          <h2 className="text-lg font-medium text-white mb-4">Emergency Response Analysis</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-eldermate-dark p-4 rounded-lg">
              <h3 className="text-white font-medium mb-3">Response Time Analytics</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Average Response Time</span>
                    <span className="text-white">12 minutes</span>
                  </div>
                  <div className="h-2 bg-eldermate-darkBlue/50 rounded-full overflow-hidden">
                    <div className="h-full bg-eldermate-highlight w-1/4 rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Fastest Response</span>
                    <span className="text-white">3 minutes</span>
                  </div>
                  <div className="h-2 bg-eldermate-darkBlue/50 rounded-full overflow-hidden">
                    <div className="h-full bg-eldermate-green w-3/4 rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Slowest Response</span>
                    <span className="text-white">25 minutes</span>
                  </div>
                  <div className="h-2 bg-eldermate-darkBlue/50 rounded-full overflow-hidden">
                    <div className="h-full bg-eldermate-alert w-1/2 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-eldermate-dark p-4 rounded-lg">
              <h3 className="text-white font-medium mb-3">Emergency Type Distribution</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Falls</span>
                    <span className="text-white">40%</span>
                  </div>
                  <div className="h-2 bg-eldermate-darkBlue/50 rounded-full overflow-hidden">
                    <div className="h-full bg-eldermate-alert w-2/5 rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Vital Sign Alerts</span>
                    <span className="text-white">25%</span>
                  </div>
                  <div className="h-2 bg-eldermate-darkBlue/50 rounded-full overflow-hidden">
                    <div className="h-full bg-eldermate-teal w-1/4 rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Inactivity</span>
                    <span className="text-white">20%</span>
                  </div>
                  <div className="h-2 bg-eldermate-darkBlue/50 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 w-1/5 rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Medication Related</span>
                    <span className="text-white">15%</span>
                  </div>
                  <div className="h-2 bg-eldermate-darkBlue/50 rounded-full overflow-hidden">
                    <div className="h-full bg-eldermate-highlight w-[15%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyLogs;
