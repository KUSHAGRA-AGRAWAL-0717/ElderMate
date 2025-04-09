
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Bell, Check } from 'lucide-react';

interface ReminderCardProps {
  title: string;
  time: string;
  type: 'medication' | 'appointment' | 'activity' | 'social';
  completed?: boolean;
  onComplete?: () => void;
  onSnooze?: () => void;
}

const ReminderCard = ({ 
  title, 
  time, 
  type, 
  completed = false, 
  onComplete, 
  onSnooze 
}: ReminderCardProps) => {
  const getTypeColor = () => {
    switch (type) {
      case 'medication':
        return 'bg-eldermate-highlight text-white';
      case 'appointment':
        return 'bg-eldermate-teal text-white';
      case 'activity':
        return 'bg-eldermate-green text-white';
      case 'social':
        return 'bg-eldermate-purple text-white';
      default:
        return 'bg-eldermate-gray text-white';
    }
  };

  return (
    <div className={`glass-card p-4 ${completed ? 'opacity-60' : ''}`}>
      <div className="flex justify-between items-start mb-3">
        <Badge className={getTypeColor()}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Badge>
        <div className="flex items-center text-gray-400 text-sm">
          <Clock className="h-3 w-3 mr-1" />
          {time}
        </div>
      </div>
      
      <h3 className="text-white font-medium mb-3">{title}</h3>
      
      {!completed ? (
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            size="sm" 
            className="border-eldermate-darkBlue text-white hover:bg-eldermate-darkBlue/50"
            onClick={onSnooze}
          >
            <Bell className="h-4 w-4 mr-1" /> Snooze
          </Button>
          
          <Button 
            size="sm" 
            className="bg-eldermate-green hover:bg-eldermate-green/90"
            onClick={onComplete}
          >
            <Check className="h-4 w-4 mr-1" /> Complete
          </Button>
        </div>
      ) : (
        <div className="flex justify-end">
          <span className="text-eldermate-green text-sm flex items-center">
            <Check className="h-4 w-4 mr-1" /> Completed
          </span>
        </div>
      )}
    </div>
  );
};

export default ReminderCard;
