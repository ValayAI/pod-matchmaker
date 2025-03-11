
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Mic, User } from 'lucide-react';

interface UserTypeSelectorProps {
  onSelect: (type: 'host' | 'guest') => void;
  className?: string;
}

const UserTypeSelector: React.FC<UserTypeSelectorProps> = ({ onSelect, className }) => {
  const [selectedType, setSelectedType] = useState<'host' | 'guest' | null>(null);

  const handleSelect = (type: 'host' | 'guest') => {
    setSelectedType(type);
    onSelect(type);
  };

  return (
    <div className={cn('flex flex-col space-y-8 w-full max-w-2xl mx-auto', className)}>
      <h2 className="text-2xl md:text-3xl font-medium text-center">I am a...</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <button
          onClick={() => handleSelect('host')}
          className={cn(
            'flex flex-col items-center py-8 px-6 rounded-2xl transition-all duration-300 card-shine overflow-hidden',
            'border-2 hover:shadow-highlight',
            selectedType === 'host'
              ? 'border-pod-primary bg-gradient-to-b from-pod-primary/5 to-pod-primary/10'
              : 'border-gray-200 bg-white hover:border-pod-primary/50'
          )}
        >
          <div 
            className={cn(
              'w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300',
              selectedType === 'host' 
                ? 'bg-pod-primary text-white' 
                : 'bg-gray-100 text-pod-gray'
            )}
          >
            <Mic size={32} />
          </div>
          <h3 className="text-xl font-medium mb-2">Podcast Host</h3>
          <p className="text-center text-pod-gray">
            I'm looking for the perfect guests for my podcast
          </p>
        </button>

        <button
          onClick={() => handleSelect('guest')}
          className={cn(
            'flex flex-col items-center py-8 px-6 rounded-2xl transition-all duration-300 card-shine overflow-hidden',
            'border-2 hover:shadow-highlight',
            selectedType === 'guest'
              ? 'border-pod-accent bg-gradient-to-b from-pod-accent/5 to-pod-accent/10'
              : 'border-gray-200 bg-white hover:border-pod-accent/50'
          )}
        >
          <div 
            className={cn(
              'w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300',
              selectedType === 'guest' 
                ? 'bg-pod-accent text-white' 
                : 'bg-gray-100 text-pod-gray'
            )}
          >
            <User size={32} />
          </div>
          <h3 className="text-xl font-medium mb-2">Podcast Guest</h3>
          <p className="text-center text-pod-gray">
            I want to be featured on podcasts in my industry
          </p>
        </button>
      </div>

      {selectedType && (
        <div className="flex justify-center animate-fade-in">
          <button 
            className={cn(
              'px-8 py-3 rounded-full text-white font-medium transition-all duration-300 button-shine',
              'bg-gradient-to-r shadow-lg',
              selectedType === 'host' 
                ? 'from-pod-primary to-pod-secondary shadow-pod-primary/20' 
                : 'from-pod-accent to-pod-secondary shadow-pod-accent/20'
            )}
          >
            Continue as {selectedType === 'host' ? 'Host' : 'Guest'}
          </button>
        </div>
      )}
    </div>
  );
};

export default UserTypeSelector;
