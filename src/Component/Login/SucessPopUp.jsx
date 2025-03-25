import React, { useState, useEffect } from 'react';
import { CheckCircleIcon } from 'lucide-react';

const LoginSuccessPopup = ({ message, redirectPath, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 3000; // 3 seconds total

    const animate = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const newProgress = Math.min((elapsedTime / duration) * 100, 100);

      setProgress(newProgress);

      if (newProgress < 100) {
        requestAnimationFrame(animate);
      } else {
        // Trigger navigation or callback when animation completes
        onComplete && onComplete();
      }
    };

    requestAnimationFrame(animate);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white w-96 rounded-xl shadow-2xl overflow-hidden animate-popup">
        {/* Success Header */}
        <div className="p-6 bg-green-50 flex items-center space-x-4">
          <CheckCircleIcon className="h-8 w-8 text-green-600" />
          <div>
            <h2 className="text-lg font-bold text-green-800">{message}</h2>
            <p className="text-sm text-green-700">Redirecting to dashboard...</p>
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-full bg-green-100 h-1.5 relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-1.5 bg-green-500 transition-all duration-300 ease-linear" 
            style={{ 
              width: `${progress}%`, 
              animation: 'pulse 1.5s infinite',
            }}
          >
            {/* Glowing effect */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-green-400 opacity-50 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSuccessPopup;