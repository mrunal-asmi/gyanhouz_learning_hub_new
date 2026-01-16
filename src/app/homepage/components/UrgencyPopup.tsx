'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const UrgencyPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-bounce-in">
      <div className="bg-warning text-warning-foreground p-6 rounded-2xl shadow-elevated max-w-sm border-2 border-white/20 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-2">
          <button 
            onClick={() => setIsVisible(false)}
            className="text-warning-foreground/60 hover:text-warning-foreground transition-colors"
          >
            <Icon name="XMarkIcon" size={20} />
          </button>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Icon name="FireIcon" size={28} className="text-white animate-pulse" />
          </div>
          <div>
            <h4 className="text-lg font-bold font-poppins mb-1">Franchises are filling fast!</h4>
            <p className="text-sm font-source leading-tight opacity-90">
              Closing for your region soon. Take action now to secure your territory!
            </p>
            <a 
              href="/franchise-opportunity"
              className="inline-block mt-3 text-sm font-bold underline hover:no-underline transition-all"
            >
              Check Availability &rarr;
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full">
          <div className="h-full bg-white animate-shrink-width" style={{ animationDuration: '10s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyPopup;
