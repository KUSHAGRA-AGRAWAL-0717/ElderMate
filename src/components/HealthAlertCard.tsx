
import React from 'react';
import { AlertTriangle, Info, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HealthAlertCardProps {
  title: string;
  description: string;
  severity: 'critical' | 'warning' | 'info';
  time: string;
  onAction?: () => void;
  actionText?: string;
}

const HealthAlertCard = ({ 
  title, 
  description, 
  severity, 
  time,
  onAction,
  actionText = 'View Details'
}: HealthAlertCardProps) => {
  const getSeverityIcon = () => {
    switch (severity) {
      case 'critical':
        return <AlertTriangle className="h-5 w-5 text-eldermate-alert" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'info':
        return <Info className="h-5 w-5 text-eldermate-highlight" />;
      default:
        return <Info className="h-5 w-5 text-eldermate-gray" />;
    }
  };
  
  const getSeverityClass = () => {
    switch (severity) {
      case 'critical':
        return 'border-eldermate-alert';
      case 'warning':
        return 'border-yellow-500';
      case 'info':
        return 'border-eldermate-highlight';
      default:
        return 'border-eldermate-gray';
    }
  };

  return (
    <div className={`glass-card p-4 border-l-4 ${getSeverityClass()}`}>
      <div className="flex justify-between mb-3">
        <div className="flex items-center">
          {getSeverityIcon()}
          <h3 className="text-white font-medium ml-2">{title}</h3>
        </div>
        <span className="text-gray-400 text-sm">{time}</span>
      </div>
      
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      
      <div className="flex justify-end">
        <Button 
          variant="outline" 
          size="sm" 
          className="border-eldermate-darkBlue text-white hover:bg-eldermate-darkBlue/50"
          onClick={onAction}
        >
          {actionText} <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default HealthAlertCard;
