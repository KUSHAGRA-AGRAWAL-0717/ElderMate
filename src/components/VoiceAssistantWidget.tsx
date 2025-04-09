
import React, { useState } from 'react';
import { Mic, MicOff, X, Settings, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VoiceAssistantWidgetProps {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  onToggle?: (isOpen: boolean) => void;
}

const VoiceAssistantWidget = ({ 
  position = 'bottom-right',
  onToggle
}: VoiceAssistantWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [conversation, setConversation] = useState<{role: 'user' | 'assistant', message: string}[]>([
    {role: 'assistant', message: 'Hello! How can I help you today?'}
  ]);

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
  };

  const toggleAssistant = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (onToggle) onToggle(newState);
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    
    if (!isListening) {
      // Simulate user saying something after 2 seconds
      setTimeout(() => {
        addMessage('user', 'When is my next doctor appointment?');
        
        // Simulate assistant response after another second
        setTimeout(() => {
          addMessage('assistant', 'Your next doctor appointment is scheduled for tomorrow at 11:00 AM with Dr. Williams.');
          setIsListening(false);
        }, 1000);
      }, 2000);
    }
  };

  const addMessage = (role: 'user' | 'assistant', message: string) => {
    setConversation([...conversation, {role, message}]);
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      {!isOpen ? (
        <Button
          onClick={toggleAssistant}
          className="w-12 h-12 rounded-full bg-eldermate-highlight hover:bg-eldermate-highlight/90 shadow-lg"
        >
          <Volume2 className="h-6 w-6" />
        </Button>
      ) : (
        <div className="w-80 bg-eldermate-dark border border-eldermate-darkBlue rounded-lg shadow-xl animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="p-3 border-b border-eldermate-darkBlue flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-eldermate-highlight flex items-center justify-center">
                <Volume2 className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-white font-medium">ElderMate Assistant</h3>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400 hover:text-white hover:bg-eldermate-darkBlue/50">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400 hover:text-white hover:bg-eldermate-darkBlue/50" onClick={toggleAssistant}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="p-3 h-60 overflow-y-auto flex flex-col space-y-3">
            {conversation.map((item, index) => (
              <div 
                key={index} 
                className={`p-2 rounded-lg max-w-[85%] ${
                  item.role === 'assistant' 
                    ? 'bg-eldermate-darkBlue/50 self-start' 
                    : 'bg-eldermate-highlight/20 self-end'
                }`}
              >
                <p className="text-sm text-white">{item.message}</p>
              </div>
            ))}
            
            {isListening && (
              <div className="self-center py-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-eldermate-highlight rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-eldermate-highlight rounded-full animate-pulse delay-75"></div>
                  <div className="w-2 h-2 bg-eldermate-highlight rounded-full animate-pulse delay-150"></div>
                </div>
                <p className="text-xs text-gray-400 mt-1">Listening...</p>
              </div>
            )}
          </div>
          
          <div className="p-3 border-t border-eldermate-darkBlue flex justify-center">
            <Button
              onClick={toggleListening}
              className={`w-12 h-12 rounded-full ${
                isListening 
                  ? 'bg-eldermate-alert hover:bg-eldermate-alert/90' 
                  : 'bg-eldermate-highlight hover:bg-eldermate-highlight/90'
              }`}
            >
              {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceAssistantWidget;
