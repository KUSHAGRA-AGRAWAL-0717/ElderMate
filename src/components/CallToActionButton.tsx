
import React, { ReactNode } from 'react';
import { Button, ButtonProps } from '@/components/ui/button';

interface CallToActionButtonProps extends ButtonProps {
  icon?: ReactNode;
  text: string;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
}

const CallToActionButton = ({ 
  icon, 
  text, 
  color = 'primary', 
  className = '',
  ...props 
}: CallToActionButtonProps) => {
  const getColorClasses = () => {
    switch (color) {
      case 'primary':
        return 'bg-eldermate-highlight hover:bg-eldermate-highlight/90 text-white';
      case 'secondary':
        return 'bg-eldermate-teal hover:bg-eldermate-teal/90 text-white';
      case 'success':
        return 'bg-eldermate-green hover:bg-eldermate-green/90 text-white';
      case 'danger':
        return 'bg-eldermate-alert hover:bg-eldermate-alert/90 text-white';
      case 'warning':
        return 'bg-yellow-500 hover:bg-yellow-500/90 text-white';
      default:
        return 'bg-eldermate-highlight hover:bg-eldermate-highlight/90 text-white';
    }
  };

  return (
    <Button 
      className={`${getColorClasses()} ${className} flex items-center gap-2 font-medium`}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{text}</span>
    </Button>
  );
};

export default CallToActionButton;
