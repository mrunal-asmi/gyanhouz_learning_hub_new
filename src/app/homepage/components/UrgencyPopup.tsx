'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const UrgencyPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15); // 15 seconds display duration

  useEffect(() => {
    const SHOW_INTERVAL = 5 * 60 * 1000; // 5 minutes
    const DISPLAY_DURATION = 15 * 1000; // 15 seconds

    const triggerPopup = () => {
      setIsVisible(true);
      setTimeLeft(15);

      // Auto-hide after duration
      setTimeout(() => {
        setIsVisible(false);
      }, DISPLAY_DURATION);
    };

    // Initial show after 3 seconds
    const initialTimer = setTimeout(triggerPopup, 3000);

    // Repeat every 5 minutes
    const interval = setInterval(triggerPopup, SHOW_INTERVAL);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isVisible && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [isVisible, timeLeft]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-bounce-in">
      <div className="bg-warning text-warning-foreground p-6 rounded-2xl shadow-elevated max-w-sm border-2 border-white/20 relative overflow-hidden group">
        <div className="absolute top-2 right-4">
          <div className="flex items-center space-x-1 bg-black/20 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
            <span>Closing in {timeLeft}s</span>
          </div>
        </div>

        <div className="flex items-start space-x-4 mt-2">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Icon name="FireIcon" size={28} className="text-white animate-pulse" />
          </div>
          <div>
            <h4 className="text-lg font-bold font-poppins mb-1">Franchises are filling fast!</h4>
            <p className="text-base font-bold font-source leading-tight text-white">
              Closing for your region soon.
            </p>
            <p className="text-sm font-source opacity-90 mt-1">
              Take action now to secure your territory!
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
          <div
            className="h-full bg-white transition-all duration-1000 ease-linear"
            style={{ width: `${(timeLeft / 15) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyPopup;
