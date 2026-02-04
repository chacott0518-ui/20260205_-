import React from 'react';
import { motion } from 'framer-motion';

export const Logo: React.FC<{ className?: string, animated?: boolean }> = ({ className = "w-10 h-10", animated = false }) => {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* T Curve - Vertebral Flexion */}
      <motion.path 
        d="M20 20 H80 C80 20 80 50 50 50" 
        stroke="currentColor" 
        strokeWidth="6" 
        strokeLinecap="square"
        initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      {/* K Vertical - Spinal Alignment */}
      <motion.path 
        d="M50 50 V90" 
        stroke="currentColor" 
        strokeWidth="6" 
        strokeLinecap="square"
        initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
      />
      {/* Accent Detail */}
      <motion.circle 
        cx="50" cy="50" r="4" 
        fill="currentColor"
        initial={animated ? { scale: 0 } : { scale: 1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
      />
    </svg>
  );
};