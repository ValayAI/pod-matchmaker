
import React, { useState } from 'react';
import { useInView } from '@/utils/animations';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
  className,
}) => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        'relative overflow-hidden rounded-2xl p-6 transition-all duration-500 card-shine shadow-highlight',
        'bg-gradient-to-br from-white to-pod-light border border-white/20',
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
        isHovered ? 'transform scale-[1.02]' : '',
        className
      )}
      style={{ 
        transitionDelay: `${delay * 100}ms`,
        transform: isInView ? 'translateY(0)' : 'translateY(40px)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-card-shine opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div 
        className={cn(
          "flex items-center justify-center w-12 h-12 mb-4 rounded-full text-white",
          "bg-gradient-to-r from-pod-primary to-pod-secondary"
        )}
      >
        {icon}
      </div>
      
      <h3 className="text-xl font-medium mb-2 text-pod-dark">{title}</h3>
      
      <p className="text-pod-gray">{description}</p>
    </div>
  );
};

export default AnimatedCard;
