
import React, { useState } from 'react';
import { Bell, CheckCircle, Clock, Calendar, User, Heart, X, MoreHorizontal, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

// Sample notifications data
const sampleNotifications = [
  {
    id: 1,
    type: 'medication',
    title: 'Medication Reminder',
    message: 'Time to take your Metoprolol (25mg)',
    time: '10 minutes ago',
    read: false,
    urgent: true,
  },
  {
    id: 2,
    type: 'appointment',
    title: 'Upcoming Appointment',
    message: 'Doctor Williams appointment tomorrow at 10:30 AM',
    time: '1 hour ago',
    read: false,
    urgent: false,
  },
  {
    id: 3,
    type: 'health',
    title: 'Health Alert',
    message: 'Your blood pressure reading was higher than normal',
    time: '3 hours ago',
    read: true,
    urgent: true,
  },
  {
    id: 4,
    type: 'social',
    title: 'Social Connection',
    message: 'Sarah (daughter) sent you a message',
    time: '5 hours ago',
    read: true,
    urgent: false,
  },
  {
    id: 5,
    type: 'medication',
    title: 'Medication Reminder',
    message: 'Time to take your Lisinopril (10mg)',
    time: 'Yesterday',
    read: true,
    urgent: false,
  },
  {
    id: 6,
    type: 'system',
    title: 'System Update',
    message: 'ElderMate has been updated with new features',
    time: 'Yesterday',
    read: true,
    urgent: false,
  },
  {
    id: 7,
    type: 'health',
    title: 'Weekly Health Summary',
    message: 'Your health summary for the past week is ready to view',
    time: '2 days ago',
    read: true,
    urgent: false,
  },
  {
    id: 8,
    type: 'appointment',
    title: 'Appointment Reminder',
    message: 'Physical therapy session scheduled for Friday',
    time: '3 days ago',
    read: true,
    urgent: false,
  },
];

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState(sampleNotifications);
  const [activeTab, setActiveTab] = useState('all');
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  const getFilteredNotifications = () => {
    if (activeTab === 'all') return notifications;
    if (activeTab === 'unread') return notifications.filter(n => !n.read);
    return notifications.filter(n => n.type === activeTab);
  };
  
  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
    toast.success("Notification marked as read");
  };
  
  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
    toast.success("All notifications marked as read");
  };
  
  const deleteNotification = (id) => {
    setNotifications(prev => 
      prev.filter(notification => notification.id !== id)
    );
    toast.success("Notification deleted");
  };
  
  const clearAllNotifications = () => {
    setNotifications([]);
    toast.success("All notifications cleared");
  };
  
  const getNotificationIcon = (type) => {
    switch (type) {
      case 'medication':
        return <Clock className="h-5 w-5 text-eldermate-softYellow" />;
      case 'appointment':
        return <Calendar className="h-5 w-5 text-eldermate-blue" />;
      case 'health':
        return <Heart className="h-5 w-5 text-eldermate-alert" />;
      case 'social':
        return <User className="h-5 w-5 text-eldermate-purple" />;
      case 'system':
        return <Bell className="h-5 w-5 text-eldermate-green" />;
      default:
        return <Bell className="h-5 w-5 text-eldermate-softYellow" />;
    }
  };
  
  return (
    <div className="min-h-screen bg-eldermate-darkGrey">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-eldermate-softYellow mb-2">Notifications</h1>
            <p className="text-gray-400">
              You have {unreadCount} unread {unreadCount === 1 ? 'notification' : 'notifications'}
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="border-eldermate-softYellow/30 text-eldermate-softYellow hover:bg-eldermate-softYellow/10"
              onClick={markAllAsRead}
              disabled={unreadCount === 0}
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              Mark All Read
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-eldermate-softYellow/30 text-eldermate-softYellow hover:bg-eldermate-softYellow/10">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-eldermate-dark border border-eldermate-softYellow/30">
                <DropdownMenuItem 
                  className="text-white hover:bg-eldermate-slate cursor-pointer"
                  onClick={() => setActiveTab('all')}
                >
                  All Notifications
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-white hover:bg-eldermate-slate cursor-pointer"
                  onClick={() => setActiveTab('unread')}
                >
                  Unread Only
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-white hover:bg-eldermate-slate cursor-pointer"
                  onClick={() => setActiveTab('medication')}
                >
                  Medication Reminders
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-white hover:bg-eldermate-slate cursor-pointer"
                  onClick={() => setActiveTab('health')}
                >
                  Health Alerts
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-white hover:bg-eldermate-slate cursor-pointer"
                  onClick={() => setActiveTab('appointment')}
                >
                  Appointments
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-white hover:bg-eldermate-slate cursor-pointer"
                  onClick={() => setActiveTab('social')}
                >
                  Social Connections
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button 
              variant="outline"
              className="border-eldermate-alert/30 text-eldermate-alert hover:bg-eldermate-alert/10"
              onClick={clearAllNotifications}
              disabled={notifications.length === 0}
            >
              <X className="mr-2 h-4 w-4" />
              Clear All
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="bg-eldermate-slate mb-4">
            <TabsTrigger 
              value="all"
              className="data-[state=active]:bg-eldermate-softYellow data-[state=active]:text-eldermate-dark"
            >
              All
            </TabsTrigger>
            <TabsTrigger 
              value="unread"
              className="data-[state=active]:bg-eldermate-softYellow data-[state=active]:text-eldermate-dark"
            >
              Unread
            </TabsTrigger>
            <TabsTrigger 
              value="medication"
              className="data-[state=active]:bg-eldermate-softYellow data-[state=active]:text-eldermate-dark"
            >
              Medication
            </TabsTrigger>
            <TabsTrigger 
              value="health"
              className="data-[state=active]:bg-eldermate-softYellow data-[state=active]:text-eldermate-dark"
            >
              Health
            </TabsTrigger>
            <TabsTrigger 
              value="appointment"
              className="data-[state=active]:bg-eldermate-softYellow data-[state=active]:text-eldermate-dark"
            >
              Appointments
            </TabsTrigger>
            <TabsTrigger 
              value="social"
              className="data-[state=active]:bg-eldermate-softYellow data-[state=active]:text-eldermate-dark"
            >
              Social
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="highlight-card p-5">
          {getFilteredNotifications().length > 0 ? (
            <div className="space-y-4">
              {getFilteredNotifications().map((notification) => (
                <div 
                  key={notification.id} 
                  className={`dashboard-stat p-4 relative border-l-4 ${
                    notification.urgent 
                      ? 'border-l-eldermate-alert' 
                      : notification.read 
                        ? 'border-l-transparent' 
                        : 'border-l-eldermate-softYellow'
                  } ${!notification.read ? 'bg-eldermate-dark/70' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-white font-medium flex items-center">
                            {notification.title}
                            {notification.urgent && (
                              <Badge className="ml-2 bg-eldermate-alert hover:bg-eldermate-alert/80 text-white">Urgent</Badge>
                            )}
                            {!notification.read && (
                              <span className="ml-2 h-2 w-2 rounded-full bg-eldermate-softYellow"></span>
                            )}
                          </h3>
                          <p className="text-gray-400 mt-1">{notification.message}</p>
                        </div>
                        
                        <div className="flex items-center">
                          <span className="text-xs text-gray-500 mr-3">{notification.time}</span>
                          
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:bg-eldermate-slate hover:text-white">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-eldermate-dark border border-eldermate-softYellow/30">
                              {!notification.read && (
                                <DropdownMenuItem 
                                  className="text-white hover:bg-eldermate-slate cursor-pointer"
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  <CheckCircle className="mr-2 h-4 w-4" />
                                  Mark as read
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuItem 
                                className="text-eldermate-alert hover:bg-eldermate-slate cursor-pointer"
                                onClick={() => deleteNotification(notification.id)}
                              >
                                <X className="mr-2 h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Bell className="h-12 w-12 text-eldermate-softYellow/50 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-1">No notifications</h3>
              <p className="text-gray-400">
                {activeTab === 'all' 
                  ? "You're all caught up! You have no notifications at the moment."
                  : `No ${activeTab} notifications available.`
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
