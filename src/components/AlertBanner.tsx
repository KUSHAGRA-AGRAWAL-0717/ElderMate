
import React from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { useElder } from '@/contexts/ElderContext';

const AlertBanner = () => {
  const { alerts, acknowledgeAlert, emergencyMode } = useElder();
  
  if (alerts.length === 0 && !emergencyMode) return null;

  return (
    <div className={`${emergencyMode ? 'bg-eldermate-alert' : 'bg-yellow-50 border-yellow-200 border'} rounded-lg p-4 mb-4 animate-pulse-gentle`}>
      <div className="flex items-start gap-3">
        <div className={`${emergencyMode ? 'text-white' : 'text-yellow-600'} pt-0.5`}>
          <AlertTriangle className="h-5 w-5" />
        </div>
        <div className="flex-1">
          {emergencyMode ? (
            <div className="text-white">
              <h3 className="font-bold text-lg">EMERGENCY ALERT</h3>
              <p>Emergency services have been notified. Please stand by.</p>
            </div>
          ) : (
            <>
              <h3 className="font-medium text-base text-yellow-800">Recent Alerts</h3>
              <ul className="mt-1 space-y-1">
                {alerts.map((alert, index) => (
                  <li key={index} className="flex items-center justify-between text-sm text-yellow-700">
                    <span>{alert}</span>
                    <button 
                      onClick={() => acknowledgeAlert(index)}
                      className="text-yellow-600 hover:text-yellow-800"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlertBanner;
