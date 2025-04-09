
import React, { useState } from 'react';
import { 
  MessageSquare, 
  Phone, 
  Video, 
  Users, 
  Calendar, 
  Clock, 
  User, 
  Heart, 
  Plus 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';

const SocialConnect = () => {
  const [activeTab, setActiveTab] = useState('contacts');
  
  const contacts = [
    { id: 1, name: 'Sarah Johnson', relation: 'Daughter', lastContact: '2 days ago', image: '/assets/avatar-1.jpg' },
    { id: 2, name: 'Michael Johnson', relation: 'Son', lastContact: '1 week ago', image: '/assets/avatar-2.jpg' },
    { id: 3, name: 'Dr. Williams', relation: 'Physician', lastContact: '2 weeks ago', image: '/assets/avatar-3.jpg' },
    { id: 4, name: 'Mary Thompson', relation: 'Friend', lastContact: '3 days ago', image: '/assets/avatar-4.jpg' },
    { id: 5, name: 'Robert Lewis', relation: 'Neighbor', lastContact: 'Yesterday', image: '/assets/avatar-5.jpg' },
  ];
  
  const upcomingCalls = [
    { 
      id: 1, 
      name: 'Sarah Johnson', 
      date: 'Today', 
      time: '4:30 PM', 
      type: 'video',
      image: '/assets/avatar-1.jpg' 
    },
    { 
      id: 2, 
      name: 'Dr. Williams', 
      date: 'Tomorrow', 
      time: '10:00 AM', 
      type: 'phone',
      image: '/assets/avatar-3.jpg' 
    },
    { 
      id: 3, 
      name: 'Michael Johnson', 
      date: 'Sat, Jun 12', 
      time: '3:00 PM', 
      type: 'video',
      image: '/assets/avatar-2.jpg' 
    },
  ];
  
  const recentActivities = [
    { 
      id: 1, 
      type: 'call', 
      contact: 'Sarah Johnson', 
      time: 'Yesterday, 5:30 PM', 
      duration: '15 mins',
      image: '/assets/avatar-1.jpg' 
    },
    { 
      id: 2, 
      type: 'message', 
      contact: 'Robert Lewis', 
      time: 'Yesterday, 10:15 AM', 
      preview: 'Hello! Just checking in to see...',
      image: '/assets/avatar-5.jpg' 
    },
    { 
      id: 3, 
      type: 'video', 
      contact: 'Michael Johnson', 
      time: '2 days ago, 1:00 PM', 
      duration: '30 mins',
      image: '/assets/avatar-2.jpg' 
    },
    { 
      id: 4, 
      type: 'message', 
      contact: 'Mary Thompson', 
      time: '3 days ago, 11:45 AM', 
      preview: 'Looking forward to our lunch next...',
      image: '/assets/avatar-4.jpg' 
    },
  ];

  return (
    <div className="bg-eldermate-navy min-h-screen">
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-white mb-2">Social Connect</h1>
            <p className="text-gray-400">Stay connected with family, friends and care providers</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button className="bg-eldermate-highlight hover:bg-eldermate-highlight/90">
              <Plus className="mr-2 h-4 w-4" /> New Contact
            </Button>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 glass-card mb-6 w-full md:w-auto">
            <TabsTrigger value="contacts" className="data-[state=active]:bg-eldermate-highlight data-[state=active]:text-white">
              <User className="w-4 h-4 mr-2" /> Contacts
            </TabsTrigger>
            <TabsTrigger value="scheduled" className="data-[state=active]:bg-eldermate-highlight data-[state=active]:text-white">
              <Calendar className="w-4 h-4 mr-2" /> Scheduled
            </TabsTrigger>
            <TabsTrigger value="activity" className="data-[state=active]:bg-eldermate-highlight data-[state=active]:text-white">
              <Clock className="w-4 h-4 mr-2" /> Activity
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="contacts" className="mt-0">
            <div className="glass-card p-5 mb-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <Input 
                  placeholder="Search contacts..." 
                  className="auth-input flex-grow"
                />
                <div className="flex gap-2">
                  <Button variant="outline" className="border-eldermate-darkBlue text-white hover:bg-eldermate-darkBlue/50">
                    <Users className="mr-2 h-4 w-4" /> Groups
                  </Button>
                  <Button variant="outline" className="border-eldermate-darkBlue text-white hover:bg-eldermate-darkBlue/50">
                    <Heart className="mr-2 h-4 w-4" /> Favorites
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {contacts.map(contact => (
                  <div key={contact.id} className="bg-eldermate-dark rounded-lg p-4 flex items-center">
                    <div className="w-12 h-12 rounded-full bg-eldermate-darkBlue flex-shrink-0 overflow-hidden">
                      {/* Avatar placeholder */}
                      <div className="w-full h-full bg-eldermate-highlight/50 flex items-center justify-center">
                        <span className="text-white font-semibold">{contact.name.charAt(0)}</span>
                      </div>
                    </div>
                    
                    <div className="ml-4 flex-grow">
                      <h3 className="text-white font-medium">{contact.name}</h3>
                      <p className="text-gray-400 text-sm">{contact.relation}</p>
                      <p className="text-gray-500 text-xs">Last contact: {contact.lastContact}</p>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-eldermate-darkBlue text-eldermate-highlight hover:bg-eldermate-darkBlue/50">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-eldermate-darkBlue text-eldermate-teal hover:bg-eldermate-darkBlue/50">
                        <Video className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-5">
              <h2 className="text-lg font-medium text-white mb-4">Suggested Connections</h2>
              
              <div className="bg-eldermate-dark rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-eldermate-teal/20 flex items-center justify-center">
                      <Users className="h-5 w-5 text-eldermate-teal" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-white font-medium">Weekly Family Group Call</h3>
                      <p className="text-gray-400 text-sm">It's been 10 days since the last family call</p>
                    </div>
                  </div>
                  
                  <Button className="bg-eldermate-teal hover:bg-eldermate-teal/90">
                    Schedule
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="scheduled" className="mt-0">
            <div className="glass-card p-5">
              <h2 className="text-lg font-medium text-white mb-4">Upcoming Calls</h2>
              
              <div className="space-y-4">
                {upcomingCalls.map(call => (
                  <div key={call.id} className="bg-eldermate-dark rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-eldermate-darkBlue flex-shrink-0 overflow-hidden">
                          {/* Avatar placeholder */}
                          <div className="w-full h-full bg-eldermate-highlight/50 flex items-center justify-center">
                            <span className="text-white font-semibold">{call.name.charAt(0)}</span>
                          </div>
                        </div>
                        
                        <div className="ml-4">
                          <h3 className="text-white font-medium">{call.name}</h3>
                          <div className="flex items-center text-gray-400 text-sm mt-1">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{call.date}</span>
                            <span className="mx-2">•</span>
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{call.time}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" className="border-eldermate-darkBlue text-white hover:bg-eldermate-darkBlue/50">
                          Reschedule
                        </Button>
                        <Button className={call.type === 'video' ? 'bg-eldermate-teal hover:bg-eldermate-teal/90' : 'bg-eldermate-highlight hover:bg-eldermate-highlight/90'}>
                          {call.type === 'video' ? (
                            <>
                              <Video className="mr-2 h-4 w-4" /> Join Video
                            </>
                          ) : (
                            <>
                              <Phone className="mr-2 h-4 w-4" /> Call
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Button variant="outline" className="w-full border-eldermate-darkBlue text-white hover:bg-eldermate-darkBlue/50">
                  <Plus className="mr-2 h-4 w-4" /> Schedule New Call
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="activity" className="mt-0">
            <div className="glass-card p-5">
              <h2 className="text-lg font-medium text-white mb-4">Recent Activities</h2>
              
              <div className="space-y-4">
                {recentActivities.map(activity => (
                  <div key={activity.id} className="bg-eldermate-dark rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-eldermate-darkBlue flex-shrink-0 overflow-hidden mt-1">
                        {/* Avatar placeholder */}
                        <div className="w-full h-full bg-eldermate-highlight/50 flex items-center justify-center">
                          <span className="text-white font-semibold">{activity.contact.charAt(0)}</span>
                        </div>
                      </div>
                      
                      <div className="ml-4 flex-grow">
                        <div className="flex items-center">
                          <h3 className="text-white font-medium">{activity.contact}</h3>
                          <span className="mx-2 text-gray-500">•</span>
                          <span className="text-gray-400 text-sm">{activity.time}</span>
                        </div>
                        
                        <div className="mt-2 flex items-center text-gray-300">
                          {activity.type === 'call' && (
                            <>
                              <Phone className="h-4 w-4 mr-2 text-eldermate-highlight" />
                              <span>Phone call • {activity.duration}</span>
                            </>
                          )}
                          
                          {activity.type === 'video' && (
                            <>
                              <Video className="h-4 w-4 mr-2 text-eldermate-teal" />
                              <span>Video call • {activity.duration}</span>
                            </>
                          )}
                          
                          {activity.type === 'message' && (
                            <>
                              <MessageSquare className="h-4 w-4 mr-2 text-eldermate-green" />
                              <span>{activity.preview}</span>
                            </>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <Button variant="outline" size="sm" className="border-eldermate-darkBlue text-white hover:bg-eldermate-darkBlue/50">
                          {activity.type === 'message' ? 'Reply' : 'Call Back'}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Button variant="link" className="text-eldermate-highlight hover:text-eldermate-highlight/90">
                  View More Activities
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SocialConnect;
