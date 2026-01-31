import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface LiveTrackerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * LiveTracker - wraps content with an animated clock icon and subtle pulse glow
 * to indicate the content is dynamically updated/live
 */
export function LiveTracker({ children, className = '' }: LiveTrackerProps) {
  return (
    <motion.span 
      className={`inline-flex items-center gap-2 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated clock icon */}
      <span className="relative inline-flex items-center justify-center">
        {/* Pulse glow ring - more visible */}
        <motion.span
          className="absolute inset-[-4px] rounded-full"
          style={{
            boxShadow: '0 0 12px 4px rgba(255,255,255,0.7), 0 0 20px 8px rgba(255,255,255,0.4)',
          }}
          animate={{
            opacity: [0.8, 0.2, 0.8],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Clock icon with glow */}
        <Clock 
          size={18} 
          className="relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        />
      </span>
      
      {/* Content with subtle glow */}
      <motion.span
        className="relative"
        animate={{
          textShadow: [
            '0 0 8px rgba(255,255,255,0.4)',
            '0 0 16px rgba(255,255,255,0.6)',
            '0 0 8px rgba(255,255,255,0.4)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
