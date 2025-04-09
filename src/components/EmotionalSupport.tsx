
import React from 'react';
import { Heart, Phone } from 'lucide-react';
import { useElder } from '@/contexts/ElderContext';
import AgentCard from './AgentCard';
import { Button } from '@/components/ui/button';

const EmotionalSupport = () => {
  const { contacts } = useElder();
  
  return (
    <AgentCard 
      title="Emotional Support" 
      icon={<Heart />}
      status="normal"
      className="h-full"
    >
      <div className="space-y-4">
        <div>
          <h4 className="text-base font-medium mb-2">Connect with Loved Ones</h4>
          <div className="space-y-3">
            {contacts.map((contact) => (
              <div key={contact.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-eldermate-light rounded-full flex items-center justify-center text-eldermate-blue">
                    {contact.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{contact.name}</p>
                    <p className="text-xs text-gray-500">{contact.relationship}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-gray-500">{contact.lastContact}</p>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-eldermate-blue">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="pt-2">
          <div className="p-4 bg-eldermate-light rounded-lg">
            <h4 className="text-base font-medium mb-1">Daily Wellness Check</h4>
            <p className="text-sm text-gray-600 mb-3">How are you feeling today?</p>
            <div className="flex justify-between">
              <Button variant="ghost" className="flex-1">
                😊 Good
              </Button>
              <Button variant="ghost" className="flex-1">
                😐 Okay
              </Button>
              <Button variant="ghost" className="flex-1">
                😔 Not Well
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AgentCard>
  );
};

export default EmotionalSupport;
