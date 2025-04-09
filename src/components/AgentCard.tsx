
import React, { ReactNode } from 'react';
import { HealthStatus } from '@/contexts/ElderContext';

interface AgentCardProps {
  title: string;
  icon: ReactNode;
  status: HealthStatus;
  children: ReactNode;
  className?: string;
}

const AgentCard = ({ title, icon, status, children, className = "" }: AgentCardProps) => {
  return (
    <div className={`agent-card ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="text-eldermate-blue text-xl">
            {icon}
          </div>
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <div className={`status-indicator status-${status}`}></div>
          <span className="text-sm text-gray-500 capitalize">{status}</span>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AgentCard;
