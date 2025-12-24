import React, { ReactNode } from 'react';

// Animation types preserved for type compatibility
export type AnimationType =
  | 'fade-in'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'zoom-in'
  | 'flip'
  | 'bounce';

interface AnimatedElementProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  className = '',
}) => {
  // All scroll reveal animations have been removed to make site static as requested.
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default AnimatedElement;
